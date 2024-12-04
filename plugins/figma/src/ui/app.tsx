import '@digdir/designsystemet-theme';
import './theme.css';
import '@digdir/designsystemet-css';

import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import Theme from './pages/Theme/Theme';
import Themes from './pages/Themes/Themes';
import { useDsMode } from './utils/useDsMode';
import { useStartup } from './utils/useStartup';

function App() {
  useStartup();
  const dsMode = useDsMode();

  return (
    <div className='page' data-color-scheme={dsMode} data-size='sm'>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Navigate to='/themes' replace />} />
          <Route path='/themes' element={<Themes />} />
          <Route path='/themes/:themeId' element={<Theme />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
