const card = document.querySelector('.card')
const cardHeight = card.getBoundingClientRect().height

card.style.setProperty('--container-height', `${cardHeight}px`)
