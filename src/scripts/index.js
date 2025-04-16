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
selectSlide()

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
  displayDot(slideIndex)
}

function displayDot(slide) {
  const dots = document.querySelectorAll(".dot")
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("selected")
  }
  dots[slide].classList.add("selected")
}

function selectSlide() {
  const dotsSelection = document.querySelector(".dots-selection")
  dotsSelection.addEventListener("click", function (event) {
    const selected = event.target
    if (selected.classList.contains("dot")) {
      if (selected.classList.contains("1")) {
        displaySlides(0)
      } else if (selected.classList.contains("2")) {
        displaySlides(1)
      } else if (selected.classList.contains("3")) {
        displaySlides(2)
      }
    }
  })
}
