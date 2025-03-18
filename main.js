const navList = document.querySelector('.navigation-list');
const navItems = document.querySelectorAll('.navigation-list li a');
const timeElements = document.querySelectorAll('.time');

navList.addEventListener('click', (e) => {
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
  e.target.classList.add('active');

  timeElements.forEach((time) => {
    time.classList.remove('active');

    if (time.classList.contains(`time-${e.target.textContent.toLowerCase()}`)) {
      time.classList.add('active');
    }
  });
});

const cardContent = document.querySelectorAll('.card-content');
const buttons = document.querySelectorAll('.card-header button');

buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    cardContent.forEach((card) => {
      card.style.backgroundColor = 'hsl(235, 46%, 20%)';
    });
  });

  button.addEventListener('mouseout', () => {
    cardContent.forEach((card) => {
      card.style.backgroundColor = '';
    });
  });
});
