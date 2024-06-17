
import  { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? 'LIGHT' : 'DARK'}
      </button>
    </header>
  );
};

export default Header;