
import React from 'react';
import Header from './components/Header/Header';
import UserDetails from './components/UserDetails/UserDetails';
import { ThemeProvider } from './context/theme.context';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <UserDetails />
      </div>
    </ThemeProvider>
  );
};

export default App;