// Register new user
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        document.getElementById('registerMessage').textContent = 'Registration successful!';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        document.getElementById('registerMessage').textContent = 'Please fill in all fields.';
    }
});

// Login user
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = 'secure.html';
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password.';
    }
});

// Check if user is logged in on the secure page
if (window.location.pathname.includes('secure.html')) {
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
    }
}

// Logout user
function logout() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}
