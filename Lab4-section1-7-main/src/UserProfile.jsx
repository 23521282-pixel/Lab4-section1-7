import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div style={{ 
        padding: '40px', 
        border: '1px solid #e2e8f0', 
        borderRadius: '16px', 
        background: 'linear-gradient(to right bottom, #ffffff, #f7fafc)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
        <div style={{ width: '80px', height: '80px', background: '#cbd5e0', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
          👤
        </div>
        <h2 style={{ color: '#2d3748', marginBottom: '5px' }}>User Profile</h2>
        <p style={{ color: '#718096', marginBottom: '20px' }}>Detailed Information</p>
        
        <div style={{ background: '#bee3f8', color: '#2c5282', padding: '15px', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.2rem' }}>
          ID: {userId}
        </div>
        
        <p style={{ fontSize: '0.8rem', color: '#a0aec0', marginTop: '20px' }}>
          (Change the <code>userId</code> in the URL to see different profiles.)
        </p>
      </div>
    </div>
  );
};
export default UserProfile;