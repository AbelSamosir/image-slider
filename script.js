let allslides = document.getElementsByClassName("slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()

    slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach(slide => slide.classList.remove('active'))
}

document.getElementById("nav-button--next").addEventListener("click", () => {
  changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
  if (moveTo >= allslides.length) {moveTo = 0;}
  if (moveTo < 0) {moveTo = allslides.length - 1;}
  
  allslides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");
  
 allslides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");
  
  currentSlide = moveTo;
}   

document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
  bullet.addEventListener('click', () => {
      if (currentSlide !== bulletIndex) {
          changeSlide(bulletIndex);
      }
  })
})
