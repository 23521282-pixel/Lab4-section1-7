import { useState } from 'react';

const ControlledSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert(`Sign Up Successful!\nEmail: ${formData.email}`);
  };

  // --- STYLES ---
  const styles = {
    formContainer: {
      maxWidth: '400px',
      margin: '0 auto',
      textAlign: 'left'
    },
    group: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #cbd5e0',
      fontSize: '16px',
      transition: 'border-color 0.2s',
      color: '#000'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#48bb78',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '10px'
    }
  };

  return (
    <div style={styles.formContainer}>
      {/* Xóa color cứng ở thẻ h2 */}
      <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Sign Up</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={styles.group}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your email"
            required
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" style={styles.button}>Create Account</button>
      </form>

      {/* Box hiển thị state */}
      <div style={{marginTop: '30px', padding: '15px', background: '#edf2f7', borderRadius: '8px', fontSize: '14px', color: '#333'}}>
        <strong>Live State Monitor:</strong>
        <pre style={{marginTop: '10px'}}>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ControlledSignup;