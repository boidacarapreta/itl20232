// Função para desenhar o labirinto no Micro:bit
function drawMaze () {
  basic.clearScreen()
  for (let y = 0; y <= mazeSize - 1; y++) {
    for (let x = 0; x <= mazeSize - 1; x++) {
      if (maze[y][x] == 1) {
        led.plot(x, y)
      }
    }
  }
}
// Função para verificar se o jogador chegou à saída
function checkExit () {
  if (playerX == exitX && playerY == exitY) {
    basic.showIcon(IconNames.Yes)
    control.reset()
  }
}
let startY = 0
let playerY = 0
let playerX = 0
let exitY = 0
let exitX = 0
let maze: number[][] = []
let mazeSize = 0
music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(880, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showString("LB")
basic.clearScreen()
basic.showString("1")
basic.pause(1000)
basic.showString("2")
basic.pause(1000)
basic.showString("3")
basic.pause(2000)
// Defina o tamanho do labirinto (5x5 no exemplo)
mazeSize = 5
// Defina o layout do labirinto, onde 0 representa um espaço vazio e 1 representa uma parede
maze = [
  [
    1,
    0,
    1,
    1,
    1
  ],
  [
    1,
    0,
    0,
    0,
    1
  ],
  [
    1,
    1,
    1,
    0,
    1
  ],
  [
    1,
    0,
    0,
    0,
    0
  ],
  [
    1,
    1,
    1,
    1,
    1
  ]
]
// Defina a posição inicial e a posição da saída no labirinto
let startX = 1
exitX = 4
exitY = 3
// Defina a posição atual do jogador
playerX = startX
playerY = startY
// Loop principal do jogo
basic.forever(function () {
  drawMaze()
  led.plot(playerX, playerY)
  checkExit()
  // Verifica os botões ou inclinação para mover o jogador
  if (input.buttonIsPressed(Button.A) && playerX > 0 && maze[playerY][playerX - 1] == 0) {
    playerX += -1
  } else if (input.buttonIsPressed(Button.B) && playerX < mazeSize - 1 && maze[playerY][playerX + 1] == 0) {
    playerX += 1
  } else if (input.isGesture(Gesture.TiltLeft) && playerY > 0 && maze[playerY - 1][playerX] == 0) {
    playerY += -1
  } else if (input.isGesture(Gesture.TiltRight) && playerY < mazeSize - 1 && maze[playerY + 1][playerX] == 0) {
    playerY += 1
  }
})
