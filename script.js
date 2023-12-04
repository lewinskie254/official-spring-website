let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')
let backButton = document.getElementById('back')
let seeMoreButtons = document.querySelectorAll('.seeMore')
let carousel = document.querySelector('.carousel')
let listHTML = document.querySelector('.carousel .list')
let itemImage = document.querySelector(
  '.carousel.showDetail .list .item:nth-child(2) .item-image'
)

nextButton.onclick = () => {
  showSlider('next')
}
prevButton.onclick = () => {
  showSlider('prev')
}

let unAcceptClick
const showSlider = (type) => {
  nextButton.style.pointerEvents = 'none'
  prevButton.style.pointerEvents = 'none'

  carousel.classList.remove('prev', 'next')
  let items = document.querySelectorAll('.carousel .list .item')
  if (type === 'next') {
    listHTML.appendChild(items[0])
    carousel.classList.add('next')
  } else {
    let positionLast = items.length - 1
    listHTML.prepend(items[positionLast])
    carousel.classList.add('prev')
  }

  clearTimeout(unAcceptClick)
  unAcceptClick = setTimeout(() => {
    nextButton.style.pointerEvents = 'auto'
    prevButton.style.pointerEvents = 'auto'
  }, 2000)
}

seeMoreButtons.forEach((button) => {
  button.onclick = () => {
    carousel.classList.add('showDetail')
  }
})

backButton.onclick = () => {
  carousel.classList.remove('showDetail')
}

const primaryNav = document.querySelector('.navBar')
const navToggle = document.querySelectorAll('.hamBtn')

navToggle.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    // Convert the string to a boolean
    const isVisible = visibility === 'true';

    // Toggle the value
    primaryNav.setAttribute('data-visible', isVisible ? 'false' : 'true');

  });
});




var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date").setAttribute("min", today);



