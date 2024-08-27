document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat:not(.booked)');
    const bookingForm = document.getElementById('booking-form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    let selectedSeat = null;

    // Seat click event
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            // Deselect if already selected
            if (seat === selectedSeat) {
                seat.classList.remove('selected');
                selectedSeat = null;
                bookingForm.classList.add('hidden');
                resetForm();
            } else {
                // Deselect any other selected seat
                if (selectedSeat) {
                    selectedSeat.classList.remove('selected');
                }
                seat.classList.add('selected');
                selectedSeat = seat;
                bookingForm.classList.remove('hidden');
                bookingForm.classList.add('slide-in');
            }
        });
    });

    // Form submission event
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        // Validate phone number uniqueness
        if (isPhoneNumberBooked(phone)) {
            alert('This phone number has already been used to book a seat.');
            return;
        }

        // Mark the seat as booked
        if (selectedSeat) {
            selectedSeat.classList.remove('selected');
            selectedSeat.classList.add('booked', 'bounce');
            selectedSeat = null;
            bookingForm.classList.add('hidden');
            resetForm();
        }
    });

    // Reset form fields
    function resetForm() {
        nameInput.value = '';
        phoneInput.value = '';
        bookingForm.classList.remove('slide-in');
    }

    // Check if phone number is already booked
    function isPhoneNumberBooked(phone) {
        const bookedSeats = document.querySelectorAll('.seat.booked');
        return Array.from(bookedSeats).some(seat => seat.getAttribute('data-phone') === phone);
    }
});
