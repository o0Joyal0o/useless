document.addEventListener('DOMContentLoaded', () => {
    // Create an ordered array of numbers 1 to 31
    const dayValues = Array.from({length: 31}, (_, i) => i + 1);

    const daysContainer = document.getElementById('days');
    daysContainer.innerHTML = '';
    dayValues.forEach((val, idx) => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.setAttribute('data-index', idx);
        dayDiv.textContent = val;
        daysContainer.appendChild(dayDiv);
    });

    const dayCells = Array.from(document.querySelectorAll('.day'));
    dayCells.forEach((cell, idx) => {
        cell.addEventListener('click', () => {
            // Pick a random cell (not the clicked one)
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * dayCells.length);
            } while (randomIndex === idx);

            // Swap values
            const temp = cell.textContent;
            cell.textContent = dayCells[randomIndex].textContent;
            dayCells[randomIndex].textContent = temp;

            // Highlight selected
            dayCells.forEach(d => d.classList.remove('selected'));
            cell.classList.add('selected');
            cell.style.boxShadow = "0 0 20px 5px #ffcc00";
            setTimeout(() => {
                cell.style.boxShadow = "";
            }, 800);
        });
    });
});