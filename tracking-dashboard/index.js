const buttonEl = document.querySelectorAll('.date-card-button');

// Fetch data from the JSON file
fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    // Render cards with the default timeframe (e.g., "weekly")
    renderCards(data, 'weekly');

    // Set "Weekly" as the default active button on page load
    const weeklyButton = Array.from(buttonEl).find(
      (button) => button.textContent.trim().toLowerCase() === 'weekly'
    );
    if (weeklyButton) {
      weeklyButton.classList.add('active');
    }

    // Add event listeners to buttons for dynamic updates
    buttonEl.forEach((button) => {
      button.addEventListener('click', () => {
        const timeframe = button.textContent.trim().toLowerCase(); // Get the timeframe (daily, weekly, monthly)

        // Remove the active class from all buttons
        buttonEl.forEach((btn) => btn.classList.remove('active'));

        // Add the active class to the clicked button
        button.classList.add('active');

        // Re-render cards with the selected timeframe
        renderCards(data, timeframe);
      });
    });
  })
  .catch((error) => console.error('Error fetching data:', error));

// Function to render cards
function renderCards(data, timeframe) {
  const container = document.querySelector('.cards-container');
  container.innerHTML = ''; // Clear the container before rendering new cards

  data.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <div class="card">
          <div class="img-card" style="background-color: ${item.backgroundColor}">
            <img src=${item.image} alt="${item.title}" class="img-bg" />
          </div>
          <div class="time-card">
            <div class="time-card-header">
              <p class="time-card-section">${item.title}</p>
              <img
                src="./images/icon-ellipsis.svg"
                alt="dots"
                class="time-card-dots"
              />
            </div>
            <div class="time-card-data">
              <p class="time-card-hours">${item.timeframes[timeframe].current}hrs</p>
              <p class="time-card-week">Last Week - ${item.timeframes[timeframe].previous}hrs</p>
            </div>
          </div>
        </div>
    `;

    container.appendChild(card);
  });
}
