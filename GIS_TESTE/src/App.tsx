import Routes from './Routes';

import './Global.css';
import { LayoutDefault } from './layouts/default';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <AuthProvider>
      <LayoutDefault>
        <Routes />
      </LayoutDefault>
    </AuthProvider>
  );
}

export default App;
