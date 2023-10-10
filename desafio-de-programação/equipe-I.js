let palpite = 0
let numeroSecreto = Math.randomRange(1, 5)
let tentativasRestantes = 3
basic.showString("Tentativas:")
basic.showNumber(tentativasRestantes)
let guess = Math.randomRange(1, 5)
basic.showNumber(guess)
basic.pause(5000)
if (palpite == numeroSecreto) {
  basic.showIcon(IconNames.Happy)
  basic.pause(1000)
  basic.clearScreen()
} else {
  if (palpite > numeroSecreto) {
    basic.showArrow(ArrowNames.East)
  } else {
    basic.showArrow(ArrowNames.West)
  }
  tentativasRestantes += 0 - 1
  basic.showNumber(tentativasRestantes)
  if (tentativasRestantes == 0) {
    basic.showString("Fim do Jogo!")
    basic.pause(1000)
    basic.clearScreen()
  }
}
palpite = Math.randomRange(1, 10)
basic.showNumber(palpite)
basic.pause(1000)
if (palpite == numeroSecreto) {
  basic.showIcon(IconNames.Happy)
  basic.pause(1000)
  basic.clearScreen()
} else {
  if (palpite > numeroSecreto) {
    basic.showArrow(ArrowNames.East)
  } else {
    basic.showArrow(ArrowNames.West)
  }
  tentativasRestantes += 0 - 1
  basic.showNumber(tentativasRestantes)
  if (tentativasRestantes == 0) {
    basic.showString("Fim do Jogo!")
    basic.pause(1000)
    basic.clearScreen()
  }
}
