document.getElementById("button").addEventListener("mouseenter", function () {
  document.getElementById("button").style.backgroundColor = "hsl(217, 19%, 35%)"
  document.querySelector(".share").style.display = "flex"
})

document.getElementById("button").addEventListener("mouseleave", function () {
  document.getElementById("button").style.backgroundColor = "hsl(210, 46%, 95%)"
  document.querySelector(".share").style.display = "none"
})

/* function init() {
  document.querySelector(".share").style.display = "none"
  document.getElementById("button").style.display = "inline-block"
  document.getElementById("buttonClose").style.display = "none"
} */
