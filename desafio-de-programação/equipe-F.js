let number = 0
input.onGesture(Gesture.Shake, function () {
  basic.clearScreen()
  number = randint(1, 3)
  if (number == 3) {
    basic.showString("sim")
  } else if (number == 2) {
    basic.showString("nao")
  } else if (number == 1) {
    basic.showString("quem sabe")
  }
})
