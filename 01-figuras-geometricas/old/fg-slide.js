const nav = document.querySelector('.navbar')
const navButtons = Array.from(nav.children)

function toggleActive(current, target) {
  current.classList.remove('active')
  target.classList.add('active')
}

nav.addEventListener('click',function(e){
  const currentBtn = nav.querySelector('.active')
  const targetBtn = e.target
  if(targetBtn === nav ) return;
  toggleActive(currentBtn, targetBtn)
})

const carousel = document.querySelector('.calculators-container')
const slides = [...carousel.querySelector('.calculators').children]

let slidesPosition;
window.addEventListener('resize', function(){
  const offsetX = carousel.offsetLeft
  slidesPosition = offsetX
  // console.log(slidesPosition)
})

if(!slidesPosition){
  slidesPosition = Math.round(slides[0].getBoundingClientRect().x)
  // console.log(slidesPosition)
}

carousel.addEventListener('scroll', function(){
  let xposition0 = Math.round(slides[0].getBoundingClientRect().x)
  if(xposition0 === slidesPosition) {
    // const currentSlide = slides[0]
    // const currentBtn = nav.querySelectorAll('.active')
    // currentBtn.classList.remove('active')
    // const lessBtn = [...nav.querySelectorAll(':not(.active)')]
    const targetBtn = navButtons[0]
    targetBtn.classList.add('active')
    navButtons[1].classList.remove('active')
    navButtons[2].classList.remove('active')

  }
  let xposition1 = Math.round(slides[1].getBoundingClientRect().x)
  if(xposition1 === slidesPosition || xposition1 === slidesPosition+1 || xposition1 === slidesPosition-1) {
    const targetBtn = navButtons[1]
    targetBtn.classList.add('active')
    navButtons[0].classList.remove('active')
    navButtons[2].classList.remove('active')
  }
  let xposition2 = Math.round(slides[2].getBoundingClientRect().x)
  if(xposition2 === slidesPosition) {
    const targetBtn = navButtons[2]
    targetBtn.classList.add('active')
    navButtons[0].classList.remove('active')
    navButtons[1].classList.remove('active')
  }

  // console.group('index0')
  //   console.log(Math.round(slides[0].getBoundingClientRect().x))
  // console.groupEnd();
  // console.group('index1')
  //   console.log(Math.round(slides[1].getBoundingClientRect().x))
  // console.groupEnd();
  // console.group('index2')
  //   console.log(Math.round(slides[2].getBoundingClientRect().x))
  //   console.groupEnd();
  // console.log(slidesPosition)
//   slides.forEach(item => {
//     let xposition = item.getBoundingClientRect().x;
//     let xpositionR = Math.round(xposition)
//     if(xpositionR === slidesPosition){
//       console.log('ok')
//     } else {
//       console.log('fail')
//   //   }
//   // })
  
})