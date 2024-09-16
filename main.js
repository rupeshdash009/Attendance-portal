function toggleMenu() {
    var menu = document.getElementById('dropdownMenu');
    if (window.innerWidth <= 768) { // Check if the screen is small (e.g., mobile)
        menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    }
}
