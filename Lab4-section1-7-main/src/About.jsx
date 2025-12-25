import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h2 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', display: 'inline-block' }}>
        ℹ️ About
      </h2>
      <p style={{ marginTop: '20px', color: '#718096', lineHeight: '1.6', maxWidth: '500px', margin: '20px auto' }}>
        This is a demo page for the navigation functionality in React Router v6.
        This page demonstrates how to use the <code>useNavigate</code> hook to navigate programmatically.
      </p>
      
      <button 
        onClick={() => navigate('/')} 
        style={{ 
          padding: '12px 24px', 
          marginTop: '20px',
          background: '#48bb78', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          fontSize: '1rem',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'transform 0.2s'
        }}
        onMouseDown={e => e.target.style.transform = 'scale(0.95)'}
        onMouseUp={e => e.target.style.transform = 'scale(1)'}
      >
        🔙 Home
      </button>
    </div>
  );
};
export default About;