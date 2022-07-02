import Routes from './Routes';

import './Global.css';
import { LayoutDefault } from './layouts/default';
import { AuthProvider } from './contexts/auth';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LayoutDefault>
          <Routes />
        </LayoutDefault>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;