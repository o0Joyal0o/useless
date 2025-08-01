document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('calendar');
    const selectedNumberDisplay = document.getElementById('selected-number');
    let selectedNumber = null;

    // Create a simple calendar for the current month
    function createCalendar() {
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let calendarHTML = '<div class="calendar-grid">';
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            calendarHTML += '<div class="calendar-cell empty"></div>';
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            calendarHTML += `<div class="calendar-cell" data-day="${day}">${day}</div>`;
        }

        calendarHTML += '</div>';
        calendarContainer.innerHTML = calendarHTML;

        // Add click event listeners to each day
        const dayCells = document.querySelectorAll('.calendar-cell:not(.empty)');
        dayCells.forEach(cell => {
            cell.addEventListener('click', () => {
                selectNumber(cell.dataset.day);
            });
        });
    }

    // Function to handle number selection
    function selectNumber(day) {
        if (selectedNumber === day) {
            selectedNumber = null; // Deselect if the same day is clicked
        } else {
            selectedNumber = day; // Select the new day
        }
        updateSelectedNumberDisplay();
    }

    // Update the display of the selected number
    function updateSelectedNumberDisplay() {
        selectedNumberDisplay.textContent = selectedNumber ? `Selected Day: ${selectedNumber}` : 'No Day Selected';
    }

    createCalendar();
});