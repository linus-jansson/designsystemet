import fs from 'node:fs';
import path from 'node:path';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';

export default {
  plugins: [
    postcssImport(),
    postcssComposes(),
    postcssNesting(),
    autoprefixer(),
    cssnano({
      preset: ['cssnano-preset-default',
        {
          discardComments: { removeAll: true }
        }
      ],
    }),
  ],
}

function postcssComposes() {
  return {
    postcssPlugin: '@composes', // Allows `@composes classname from './file.css'` directive
    AtRule: {
      composes: async (rule, { AtRule }) => {
        const cache = {};
        const sanitizedParams = rule.params.replace(/["']/g, '').trim();
        const [selector, from] = sanitizedParams.split(/\s+from\s+/);

        const resolvedFrom = path.resolve(
          path.dirname(rule.source.input.file),
          from,
        );

        if (!cache[resolvedFrom])
          cache[resolvedFrom] = await postcss([]).process(
            fs.readFileSync(resolvedFrom),
            {
              from: resolvedFrom,
            },
          );

        cache[resolvedFrom].root.walkRules((fromRule) => {
          if (fromRule.selector.startsWith(`.${selector}`))
            rule.replaceWith(
              fromRule.clone({
                selector: fromRule.selector.replace(`.${selector}`, '&'),
              }),
            );
        });
      },
    },
  };
}
