document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    // Toggle the type attribute
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        // Optional: Change the eye icon when showing the password
        eyeIcon.setAttribute('fill', 'currentColor'); // Example change
    } else {
        passwordField.type = 'password';
        // Optional: Reset the eye icon when hiding the password
        eyeIcon.setAttribute('fill', 'none'); // Reset change
    }
});