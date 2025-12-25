import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedButton = () => {
  // "Xin" dữ liệu theme từ Context
  const theme = useContext(ThemeContext);
  const styles = {
    padding: '15px 30px',
    fontSize: '18px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: '2px solid',
    // Nếu theme là 'dark' thì nền đen chữ trắng, ngược lại nền trắng chữ đen
    backgroundColor: theme === 'dark' ? '#2d3748' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#2d3748',
    borderColor: theme === 'dark' ? '#4a5568' : '#cbd5e0'
  };

  return (
    <button style={styles}>
      Button based on the interface: <strong>{theme.toUpperCase()}</strong>
    </button>
  );
};

export default ThemedButton;