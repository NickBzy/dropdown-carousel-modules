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
