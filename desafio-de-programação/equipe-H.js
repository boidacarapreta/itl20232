/ JUMP
input.onButtonPressed(Button.A, function () {
  if (!(is_game_over)) {
    if (!(is_game_over)) {
      player[1].change(LedSpriteProperty.Y, -1)
      player[0].change(LedSpriteProperty.Y, -1)
    }
    basic.pause(215)
    if (!(is_game_over)) {
      player[1].change(LedSpriteProperty.Y, -1)
      player[0].change(LedSpriteProperty.Y, -1)
    }
    basic.pause(215)
    if (!(is_game_over)) {
      player[1].change(LedSpriteProperty.Y, -1)
      player[0].change(LedSpriteProperty.Y, -1)
    }
    basic.pause(215)
    if (!(is_game_over)) {
      player[1].change(LedSpriteProperty.Y, 1)
      player[0].change(LedSpriteProperty.Y, 1)
    }
    basic.pause(215)
    if (!(is_game_over)) {
      player[1].change(LedSpriteProperty.Y, 1)
      player[0].change(LedSpriteProperty.Y, 1)
    }
    basic.pause(215)
    if (!(is_game_over)) {
      player[1].change(LedSpriteProperty.Y, 1)
      player[0].change(LedSpriteProperty.Y, 1)
    }
  }
})
function gameOver () {
  is_game_over = true
  for (let obstacle_group_3 of obstacles) {
    for (let an_obstacle_sprite_3 of obstacle_group_3) {
      obstacle_group_3.removeAt(obstacle_group_3.indexOf(an_obstacle_sprite_3)).delete()
    }
    dummy_variable = obstacles.removeAt(obstacles.indexOf(obstacle_group_3))
  }
  for (let player_sprite_2 of player) {
    player.removeAt(player.indexOf(player_sprite_2)).delete()
  }
  basic.showString("SCORE:" + score, 85)
  basic.clearScreen()
}
// DUCK
input.onButtonPressed(Button.B, function () {
  if (!(is_game_over)) {
    player[0].change(LedSpriteProperty.Y, 1)
    basic.pause(750)
    player[0].change(LedSpriteProperty.Y, -1)
  }
})
let Seconds = 0
let generate_obstacles = 0
let dummy_variable: game.LedSprite[] = []
let is_game_over = false
let obstacles: game.LedSprite[][] = []
let player: game.LedSprite[] = []
let score = 0
player = [game.createSprite(0, 3), game.createSprite(0, 4)]
obstacles = []
is_game_over = false
basic.forever(function () {
  if (!(is_game_over)) {
    basic.pause(1750)
    generate_obstacles = randint(0, 4)
    if (generate_obstacles == 0) {
      obstacles.push([game.createSprite(4, 3), game.createSprite(4, 4)])
    } else if (generate_obstacles == 1) {
      obstacles.push([game.createSprite(4, 4)])
    } else if (generate_obstacles == 2) {

    } else if (generate_obstacles == 3) {
      obstacles.push([game.createSprite(4, 3)])
      obstacles.push([game.createSprite(4, 2)])
    } else {
      obstacles.push([game.createSprite(4, 1)])
    }
  }
  if (Seconds < 10) {
    Seconds += 1
  }
  if (Seconds == 10 && Seconds < 20) {
    if (!(is_game_over)) {
      basic.pause(1000)
      generate_obstacles = randint(0, 4)
      if (generate_obstacles == 0) {
        obstacles.push([game.createSprite(4, 3), game.createSprite(4, 4)])
      } else if (generate_obstacles == 1) {
        obstacles.push([game.createSprite(4, 4)])
      } else if (generate_obstacles == 2) {

      } else if (generate_obstacles == 3) {
        obstacles.push([game.createSprite(4, 3)])
        obstacles.push([game.createSprite(4, 2)])
      } else {
        obstacles.push([game.createSprite(4, 1)])
      }
    }
  }
  if (Seconds > 10 && Seconds < 20) {
    Seconds += 1
  }
  if (Seconds == 20 && Seconds < 30) {
    if (!(is_game_over)) {
      basic.pause(500)
      generate_obstacles = randint(0, 4)
      if (generate_obstacles == 0) {
        obstacles.push([game.createSprite(4, 3), game.createSprite(4, 4)])
      } else if (generate_obstacles == 1) {
        obstacles.push([game.createSprite(4, 4)])
      } else if (generate_obstacles == 2) {

      } else if (generate_obstacles == 3) {
        obstacles.push([game.createSprite(4, 3)])
        obstacles.push([game.createSprite(4, 2)])
      } else {
        obstacles.push([game.createSprite(4, 1)])
      }
    }
  }
  if (Seconds > 20 && Seconds < 30) {
    Seconds += 1
  }
  if (Seconds == 30 && Seconds < 40) {
    if (!(is_game_over)) {
      basic.pause(500)
      generate_obstacles = randint(0, 4)
      if (generate_obstacles == 0) {
        obstacles.push([game.createSprite(4, 3), game.createSprite(4, 4)])
      } else if (generate_obstacles == 1) {
        obstacles.push([game.createSprite(4, 4)])
      } else if (generate_obstacles == 2) {

      } else if (generate_obstacles == 3) {
        obstacles.push([game.createSprite(4, 3)])
        obstacles.push([game.createSprite(4, 2)])
      } else {
        obstacles.push([game.createSprite(4, 1)])
      }
    }
  }
})
// CHECK COLLISIONS
basic.forever(function () {
  if (!(is_game_over)) {
    for (let obstacle_group_2 of obstacles) {
      for (let an_obstacle_sprite_2 of obstacle_group_2) {
        for (let player_sprite_1 of player) {
          if (an_obstacle_sprite_2.isTouching(player_sprite_1)) {
            gameOver()
          }
        }
      }
    }
  }
})
basic.forever(function () {
  music.play(music.stringPlayable("F E C5 A B C5 B C5 ", 170), music.PlaybackMode.UntilDone)
})
// Updates obstacles
basic.forever(function () {
  if (!(is_game_over)) {
    basic.pause(225)
    for (let obstacle_group_1 of obstacles) {
      for (let an_obstacle_sprite_1 of obstacle_group_1) {
        if (an_obstacle_sprite_1.get(LedSpriteProperty.X) == 0) {
          obstacle_group_1.removeAt(obstacle_group_1.indexOf(an_obstacle_sprite_1)).delete()
          score += 1
        } else {
          an_obstacle_sprite_1.change(LedSpriteProperty.X, -1)
        }
      }
      if (obstacle_group_1.length == 0) {
        dummy_variable = obstacles.removeAt(obstacles.indexOf(obstacle_group_1))
      }
    }
  }
})
