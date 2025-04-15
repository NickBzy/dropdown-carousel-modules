import "../styles/styles.css"

const dropdownBtn = document.querySelector(".dropdown-button")
const dropdownMenu = document.querySelector(".dropdown-menu")
dropdownBtn.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("open")) {
    dropdownMenu.classList.remove("open")
  } else {
    dropdownMenu.classList.add("open")
  }
})

// CAROUSEL
let slideIndex = 0
displaySlides(slideIndex)
nextSlide()
previousSlide()

function nextSlide() {
  const nextBtn = document.querySelector(".next-slide")
  nextBtn.addEventListener("click", function () {
    slideIndex += 1
    displaySlides(slideIndex)
  })
}

function previousSlide() {
  const prevBtn = document.querySelector(".previous-slide")
  prevBtn.addEventListener("click", function () {
    slideIndex -= 1
    displaySlides(slideIndex)
  })
}

function displaySlides(slide) {
  const slides = document.querySelectorAll(".slides")
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden")
  }
  slideIndex = slide
  if (slide > slides.length - 1) {
    slideIndex = 0
  }
  if (slide < 0) {
    slideIndex = slides.length - 1
  }
  slides[slideIndex].classList.remove("hidden")
}

// const wrapper = document.querySelector(".slides-wrapper")
// const totalSlides = document.querySelectorAll(".slides").length
// const nextBtn = document.querySelector(".next-slide")
// const prevBtn = document.querySelector(".previous-slide")

// let currentSlide = 0

// function showSlide(index) {
//   wrapper.style.transform = `translateX(-${index * 100}%)`
// }

// nextBtn.addEventListener("click", () => {
//   currentSlide = (currentSlide + 1) % totalSlides
//   showSlide(currentSlide)
// })

// prevBtn.addEventListener("click", () => {
//   currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
//   showSlide(currentSlide)
// })

// // Initial position
// showSlide(currentSlide)
