function createCard(cardData) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
  <div class="card">
        <div class="img-card">
          <img src="./images/icon-work.svg" alt="work" class="img-bg" />
        </div>
        <div class="time-card">
          <div class="time-card-header">
            <p class="time-card-section">${cardData.title}</p>
            <img
              src="./images/icon-ellipsis.svg"
              alt="dots"
              class="time-card-dots"
            />
          </div>
          <div class="time-card-data">
            <p class="time-card-hours">${cardData.current}hrs</p>
            <p class="time-card-week">Last Week - ${cardData.previous}hrs</p>
          </div>
        </div>
      </div>
  `;

  return card;
}
