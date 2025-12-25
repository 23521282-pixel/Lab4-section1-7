import { useEffect, useState } from 'react';

const MouseTracker = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Cập nhật state để hiển thị lên giao diện (thay vì chỉ log console)
      setCoords({ x: e.clientX, y: e.clientY });
      console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Style object (CSS ngay trong JS)
  const styles = {
    card: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      textAlign: 'center',
      marginTop: '20px',
      fontFamily: 'monospace',
      minWidth: '300px',
    },
    title: {
      margin: '0 0 20px 0',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      opacity: 0.8,
      fontSize: '14px',
    },
    coords: {
      display: 'flex',
      justifyContent: 'space-around',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    axis: {
      display: 'flex',
      flexDirection: 'column',
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Mouse Position Tracker</h3>
      <div style={styles.coords}>
        <div style={styles.axis}>
          <span>X</span>
          <span>{coords.x}</span>
        </div>
        <div style={{ width: '2px', background: 'rgba(255,255,255,0.3)' }}></div>
        <div style={styles.axis}>
          <span>Y</span>
          <span>{coords.y}</span>
        </div>
      </div>
    </div>
  );
};

export default MouseTracker;