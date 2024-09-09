document.addEventListener('DOMContentLoaded', () => {
    const seatsContainer = document.getElementById('seatsContainer');
    const phoneModal = document.getElementById('phoneModal');
    const closeModal = document.getElementById('closeModal');
    const bookSeatButton = document.getElementById('bookSeat');
    const phoneNumberInput = document.getElementById('phoneNumber');
    let selectedSeat = null;

    // Generate 30 seats
    for (let i = 1; i <= 30; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.innerText = i;
        seat.addEventListener('click', () => selectSeat(seat));
        seatsContainer.appendChild(seat);
    }

    // Open modal to enter phone number
    function selectSeat(seat) {
        if (!seat.classList.contains('selected')) {
            selectedSeat = seat;
            phoneModal.style.display = 'block';
        }
    }

    // Close modal
    closeModal.addEventListener('click', () => {
        phoneModal.style.display = 'none';
        phoneNumberInput.value = '';
    });

    // Book seat with phone number
    bookSeatButton.addEventListener('click', () => {
        const phoneNumber = phoneNumberInput.value.trim();
        if (phoneNumber && selectedSeat) {
            selectedSeat.classList.add('selected');
            selectedSeat.innerText = phoneNumber;
            phoneModal.style.display = 'none';
            phoneNumberInput.value = '';
        }
    });

    // Close modal when clicking outside the modal
    window.onclick = function(event) {
        if (event.target === phoneModal) {
            phoneModal.style.display = 'none';
            phoneNumberInput.value = '';
        }
    };
});
