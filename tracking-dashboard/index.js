const buttonEl = document.querySelector('.date-card-button');

// Fetch data from the JSON file
fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    renderCards(data);
  })
  .catch((error) => console.error('Error fetching data:', error));

// Function to render cards
function renderCards(data) {
  const container = document.querySelector('.cards-container');

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
              <p class="time-card-hours">${item.timeframes.weekly.current}hrs</p>
              <p class="time-card-week">Last Week - ${item.timeframes.weekly.previous}hrs</p>
            </div>
          </div>
        </div>
    `;

    container.appendChild(card);
  });
}

function dateChange() {}
