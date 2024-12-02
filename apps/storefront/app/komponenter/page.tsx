import { ComponentCard } from '@components';

import { data } from './component-list';

const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));

const IS_NEXT_BRANCH = process.env.VERCEL_GIT_COMMIT_REF !== 'main';

/* If we are in the next branch, send us to the next storybook */
if (IS_NEXT_BRANCH) {
  for (const component of sortedData) {
    component.url = component.url.replace(
      'storybook.designsystemet.no',
      'next.storybook.designsystemet.no',
    );
  }
}

export default function page() {
  return (
    <>
      {sortedData.map((component) => (
        <ComponentCard key={component.title} {...component} />
      ))}
      <style suppressHydrationWarning>
        {`
    body {
      background-color: var(--ds-color-neutral-background-subtle);

        [data-color-scheme='dark'] &,
        [data-color-scheme='auto'] & {
          background-color: var(--ds-color-neutral-background-default);
        }
    }
  `}
      </style>
    </>
  );
}
