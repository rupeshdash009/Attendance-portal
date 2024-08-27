
const seatsContainer = document.querySelector('.seats');
const count = document.getElementById('count');
const bookButton = document.getElementById('book');

// Configuration
const rows = 5;
const cols = 4;

// Initialize seats
function createSeats() {
  for (let i = 0; i < rows * cols; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');

    // Randomly assign some seats as occupied for demonstration
    if (Math.random() < 0) {
      seat.classList.add('occupied');
    }

    seatsContainer.appendChild(seat);
  }
}

// Update selected seat count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  count.textContent = selectedSeats.length;
}

// Seat click event
seatsContainer.addEventListener('click', (e) => {
  const selectedSeats = document.querySelectorAll('.seat.selected');

  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    if (selectedSeats.length === 0) {
      // No seat is currently selected, so allow selection
      e.target.classList.add('selected');
    } else if (e.target.classList.contains('selected')) {
      // The selected seat is clicked again, so deselect it
      e.target.classList.remove('selected');
    }
    updateSelectedCount();
  }
});

// Book button event
bookButton.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.seat.selected');

  if (selectedSeats.length === 0) {
    alert('Please select one seat for admission.');
    return;
  }

  selectedSeats.forEach((seat) => {
    seat.classList.remove('selected');
    seat.classList.add('occupied');
  });

  updateSelectedCount();
  alert('Admission seat successfully booked!');
});

// Initialize app
createSeats();
updateSelectedCount();