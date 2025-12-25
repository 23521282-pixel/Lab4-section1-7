import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

// --- IMPORT CÁC BÀI TẬP TỪ 1 ĐẾN 7 ---
import MouseTracker from './MouseTracker';
import UncontrolledLogin from './UncontrolledLogin';
import PostFetcher from './PostFetcher';
import ControlledSignup from './ControlledSignup';
import Home from './Home';
import About from './About';
import UserProfile from './UserProfile';
import ThemedButton from './ThemedButton';
import LocalStorageDemo from './LocalStorageDemo';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('light'); // Bài 6: Context

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // --- STYLE ---
  const isDark = theme === 'dark';
  
  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: isDark ? '#171923' : '#ffffff',
      color: isDark ? '#f7fafc' : '#2d3748',
    },
    sidebar: {
      width: '280px',
      backgroundColor: isDark ? '#000000' : '#1a202c',
      color: 'white',
      padding: '30px 20px',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      borderRight: isDark ? '1px solid #2d3748' : 'none'
    },
    mainContent: {
      flex: 1,
      backgroundColor: isDark ? '#1a202c' : '#f7fafc',
      padding: '40px',
      overflowY: 'auto',
    },
    linkItem: (path) => ({
      display: 'block',
      padding: '12px 15px',
      marginBottom: '8px',
      borderRadius: '8px',
      textDecoration: 'none',
      backgroundColor: location.pathname === path ? '#3182ce' : 'transparent',
      color: location.pathname === path ? 'white' : '#cbd5e0',
      fontWeight: '500',
      transition: 'all 0.2s',
    }),
    exerciseArea: {
      background: isDark ? '#2d3748' : 'white',
      color: isDark ? 'white' : 'black',
      borderRadius: '16px',
      padding: '40px',
      minHeight: '400px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      overflow: 'hidden' 
    },
    toggleBtn: {
      marginTop: 'auto',
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #4a5568',
      background: 'transparent',
      color: 'white',
      cursor: 'pointer'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={styles.container}>
        {/* === SIDEBAR MENU === */}
<div style={styles.sidebar}>
  <div style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#63b3ed'}}>
    LAB 4 REACT
  </div>
  
  <p style={{color: '#718096', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '10px'}}>SECTION LIST</p>
  
  <Link to="/ex1" style={styles.linkItem('/ex1')}>📂 Section1.3</Link>
  <Link to="/ex2" style={styles.linkItem('/ex2')}>📂 Section2.1</Link>
  <Link to="/ex3" style={styles.linkItem('/ex3')}>📂 Section3.2</Link>
  <Link to="/ex4" style={styles.linkItem('/ex4')}>📂 Section4.1</Link>

  {/* Bài 5 gom nhóm lại */}
  <div style={{margin: '10px 0', padding: '10px 0', borderTop: '1px solid #2d3748', borderBottom: '1px solid #2d3748'}}>
    <p style={{color: '#a0aec0', fontSize: '0.8rem', marginLeft: 10, marginBottom: 5}}>📂 Section5</p>
    <Link to="/" style={styles.linkItem('/')}>🏠 Home</Link>
    <Link to="/about" style={styles.linkItem('/about')}>ℹ️ About</Link>
    <Link to="/users/123" style={styles.linkItem('/users/123')}>👤 User Profile</Link>
  </div>

  <Link to="/ex6" style={styles.linkItem('/ex6')}>📂 Section6.2</Link>
  <Link to="/ex7" style={styles.linkItem('/ex7')}>📂 Section7.2</Link>

  <button style={styles.toggleBtn} onClick={toggleTheme}>
    {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
  </button>
</div>

        {/* === MAIN CONTENT === */}
        <div style={styles.mainContent}>
          <h2 style={{ marginBottom: 20, opacity: 0.8 }}>
            Lab 4 (Section 1 - 7)
          </h2>
          
          <div style={styles.exerciseArea}>
            <Routes>
              {/* Routes cho Router Demo (Sec 5) */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/users/:userId" element={<UserProfile />} />

              {/* Routes cho các bài tập lẻ */}
              <Route path="/ex1" element={<MouseTracker />} />
              <Route path="/ex2" element={<UncontrolledLogin />} />
              <Route path="/ex3" element={<PostFetcher />} />
              <Route path="/ex4" element={<ControlledSignup />} />
              
              {/* Route Bài 6 */}
              <Route path="/ex6" element={
                <div style={{textAlign: 'center'}}>
                  <h3>Demo Theme Context</h3>
                  <p>The button is in the bottom left corner</p>
                  <ThemedButton />
                </div>
              } />
              
              {/* Route Bài 7 */}
              <Route path="/ex7" element={<LocalStorageDemo />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;