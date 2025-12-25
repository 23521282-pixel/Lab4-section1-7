import useLocalStorage from './useLocalStorage'; // Import hook của mình

const LocalStorageDemo = () => {
  // Dùng hook vừa tạo thay vì useState thường
  // 'my-counter' là key sẽ lưu trong LocalStorage
  const [count, setCount] = useLocalStorage('my-counter', 0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Demo Custom Hook: useLocalStorage</h3>
      <p style={{ color: '#718096', marginBottom: 20 }}>
        Increase the number, then <strong>Reload (F5)</strong> the page.<br/>
        The number will not reset to 0 like useState!
      </p>

      <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#3182ce', margin: '20px 0' }}>
        {count}
      </div>

      <div>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', borderRadius: '8px', border: 'none', background: '#48bb78', color: 'white', marginRight: 10 }}
        >
          (+1)
        </button>
        
        <button 
          onClick={() => setCount(0)}
          style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', borderRadius: '8px', border: 'none', background: '#e53e3e', color: 'white' }}
        >
          Reset to 0
        </button>
      </div>
    </div>
  );
};

export default LocalStorageDemo;