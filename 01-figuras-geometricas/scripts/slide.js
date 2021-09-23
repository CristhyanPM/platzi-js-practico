// Selectores
const navContainer = document.querySelector('.nav-container')
const nav = document.querySelector('.nav')
const navButtons = Array.from(document.querySelectorAll('.nav__button'))

let carouselContainer = document.querySelector('.carousel-container')
const carousel = document.querySelector('.calc-carousel')
const slides = Array.from(document.querySelectorAll('.calc-slide'))

const firstSlide = slides[0]
const lastSlide = slides[slides.length-1]


// Agregamos los margenes a los extremos para centrar primer y ultimo slide.

firstSlide.style.margin = `0 30px 0 ${Number((carouselContainer.clientWidth-firstSlide.clientWidth)/2)}px`
lastSlide.style.margin = `0 ${Number((carouselContainer.clientWidth-firstSlide.clientWidth)/2)}px 0 30px`


window.onresize = function(){
  const margin = Number((carouselContainer.clientWidth-firstSlide.clientWidth)/2)
  firstSlide.style.margin = `0 25px 0 ${margin}px`
  lastSlide.style.margin = `0 ${margin}px 0 25px`
}

let separation = (carouselContainer.scrollWidth - carouselContainer.clientWidth)/Number(slides.length-1);

let prepositions = [];
for(let j=0; j<slides.length; j++){
  prepositions.push(j*separation)
}

slides.forEach(item => item.style.transition = "ease-in 0.15s")

let positions = []
prepositions.forEach(item => positions.push(item*0.90))


function setScroll(block, position) {
  block.scrollLeft = position
}

function toggleActive(items, num){
  if(num === 0){
    items[0].classList.add('active')
    items[1].classList.remove('active')
  } else if (num === items.length-1){
    items[num].classList.add('active')
    items[num-1].classList.remove('active')
  } else {
    items[num-1].classList.remove('active')
    items[num].classList.add('active')
    items[num+1].classList.remove('active')
  }
}

function findActiveToToggle (current, positions, items, dots){
  if(current === 0 || current < positions[1]){
    toggleActive(items, 0)
    toggleActive(dots, 0)
  } else if(current >= positions[positions.length-1]) {
    toggleActive(items, positions.length-1)
    toggleActive(dots, positions.length-1)
  } else {
      for(let i = 1; i<positions.length-1; i++){
        if(!(current>=positions[i] && current < positions[i+1])){
          continue
        }
        toggleActive(items, i)
        toggleActive(dots, i)
    }
  }
}


function findActiveToScroll (current, positions, block, prepos){
  if(current === 0 || current < positions[1]){
    setScroll(block,prepos[0])
  } else if(current >= positions[positions.length-1]) {
    setScroll(block,prepos[positions.length-1])
  } else {
      for(let i = 1; i<positions.length-1; i++){
        if(!(current>=positions[i] && current < positions[i+1])){
          continue
        }
        setScroll(block,prepos[i])
    }
  }
}

carouselContainer.addEventListener('scroll', function(){
  let currentScroll = carouselContainer.scrollLeft
  let pos = positions
  findActiveToToggle(currentScroll, pos, slides, navButtons)
})

let isStoppep = function (current){
  setTimeout(() => {
    let currentScrollB = carouselContainer.scrollLeft
    if(current === currentScrollB){
      findActiveToScroll (currentScrollB, positions, carouselContainer, prepositions)
    }
  },300)
}


carouselContainer.addEventListener('scroll', function(){setTimeout(()=>{
  let currentScrollA = carouselContainer.scrollLeft
  if(prepositions.indexOf(currentScrollA) === -1) {
    isStoppep(currentScrollA)
  }
}, 300)})

for(let j=0; j<navButtons.length; j++){
  navButtons[j].addEventListener('click',function(){
    carouselContainer.scrollLeft = prepositions[j]
  })
}