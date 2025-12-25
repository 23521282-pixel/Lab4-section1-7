import { useRef } from 'react';

const UncontrolledLogin = () => {
  // 1. Tạo ref để tham chiếu đến ô input
  const usernameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Chặn reload trang
    // 2. Truy cập trực tiếp giá trị từ DOM thông qua ref
    const value = usernameRef.current.value;
    alert(`Xin chào, ${value}!`);
  };

  const styles = {
    card: {
      background: 'white',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      textAlign: 'center',
      maxWidth: '300px',
      margin: '20px auto',
      color: '#333'
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      width: '80%',
      marginBottom: '15px',
      marginTop: '5px'
    },
    button: {
      background: '#667eea',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={{marginTop: 0}}>Uncontrolled Login</h3>
      <p style={{fontSize: '0.9rem', color: '#666'}}>
        Type username and click login
      </p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{display: 'block', fontSize: '0.8rem', fontWeight: 'bold'}}>Username:</label>
          {}
          <input type="text" ref={usernameRef} style={styles.input} placeholder="Username..." />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default UncontrolledLogin;