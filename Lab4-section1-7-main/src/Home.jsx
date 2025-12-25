import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ fontSize: '4rem', marginBottom: '10px' }}>🏠</div>
      <h1 style={{ color: '#2b6cb0', marginBottom: '15px' }}>Home</h1>
      <p style={{ color: '#718096', fontSize: '1.1rem', marginBottom: '30px' }}>
        Welcome to the <strong>React Router</strong>.
      </p>
      
      <div style={{ padding: '20px', background: '#ebf8ff', borderRadius: '10px', display: 'inline-block' }}>
        <p style={{ marginBottom: '10px', color: '#2c5282' }}>Test Route:</p>
        <Link 
          to="/users/123" 
          style={{ 
            display: 'inline-block',
            padding: '10px 20px', 
            background: '#3182ce', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '6px',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(50, 130, 200, 0.3)'
          }}
        >
          Profile User 123 ➜
        </Link>
      </div>
    </div>
  );
};
export default Home;