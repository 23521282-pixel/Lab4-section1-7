import { useState, useEffect } from 'react';

const PostFetcher = () => {
  // 1. Khởi tạo 3 state theo yêu cầu đề bài
  const [data, setData] = useState(null);       // Lưu dữ liệu bài viết
  const [loading, setLoading] = useState(true); // Trạng thái đang tải
  const [error, setError] = useState(null);     // Lưu lỗi nếu có

  useEffect(() => {
    const fetchData = async () => {
      // Reset trạng thái trước khi gọi
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // [cite: 53]
        // Kiểm tra lỗi HTTP (vì fetch không tự bắt lỗi 404) [cite: 46]
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const result = await response.json();
        
        // 3. Thành công: Lưu data, xóa lỗi
        setData(result); // [cite: 57]
        setError(null);
      } catch (err) {
        // 4. Thất bại: Lưu lỗi, xóa data
        setError(err);   // [cite: 60]
        setData(null);
      } finally {
        // 5. Kết thúc: Tắt loading dù thành công hay thất bại
        setLoading(false); // [cite: 62]
      }
    };

    fetchData();
  }, []); // Chạy 1 lần khi mount

  // Style cho giao diện
  const styles = {
    card: {
      background: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      margin: '20px auto',
      textAlign: 'left'
    },
    loading: { color: '#3182ce', fontWeight: 'bold' },
    error: { color: '#e53e3e', background: '#fff5f5', padding: '10px', borderRadius: '5px' },
    title: { color: '#2d3748', textTransform: 'capitalize' },
    body: { color: '#718096', lineHeight: '1.6' }
  };

  // 6. Conditional Rendering (Hiển thị theo điều kiện) [cite: 63]
  if (loading) return (
    <div style={styles.card}>
      <p style={styles.loading}>⏳ Loading...</p>
    </div>
  );

  if (error) return (
    <div style={styles.card}>
      <p style={styles.error}>❌ Error: {error.message}</p>
    </div>
  );

  // Khi có dữ liệu
  return (
    <div style={styles.card}>
      <span style={{fontSize: '0.8rem', color: '#a0aec0', fontWeight: 'bold'}}>POST #{data.id}</span>
      <h2 style={styles.title}>{data.title}</h2> {/* [cite: 69] */}
      <p style={styles.body}>{data.body}</p>
    </div>
  );
};

export default PostFetcher;