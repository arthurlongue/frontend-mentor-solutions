var clicked = [0, 0, 0, 0, 0]

function off(p, h2) {
  var arrowImg = document.getElementsByClassName("imgArrow")
  for (let i = 0; i < 5; i++) {
    p[i].style.display = "none"
    h2[i].style.fontWeight = "400"
    arrowImg[i].style.transform = "initial"
  }
  clicked.splice(0, 5, 0, 0, 0, 0, 0)
}

function toggle(button) {
  var p = document.getElementsByTagName("p")
  var h2 = document.getElementsByTagName("h2")
  var arrowImg = document.getElementsByClassName("imgArrow")

  if (clicked[button] == 0) {
    off(p, h2)
    p[button].style.display = "flex"
    h2[button].style.fontWeight = "700"
    arrowImg[button].style.transform = "rotate(180deg)"
    return clicked.splice([button], 1, 1)
  } else {
    off(p, h2)
  }
}
