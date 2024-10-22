document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn submit form mặc định

    const username = document.getElementById('username').value; // Lấy giá trị username
    const password = document.getElementById('password').value; // Lấy giá trị password

    // Kiểm tra thông tin đăng nhập (có thể tùy chỉnh)
    if (username === "admin@example.com" && password === "password123") {
        alert('Login successful!'); // Thông báo đăng nhập thành công
        // Lưu thông tin vào localStorage (nếu cần)
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        document.getElementById('error-message').textContent = 'Incorrect username or password!'; // Thông báo lỗi
    }
});
