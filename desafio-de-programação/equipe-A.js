input.onButtonPressed(Button.A, function () {
    if (game_on == 1) {
        sprite.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (game_on == 0) {
        basic.clearScreen()
        basic.pause(500)
        music.ringTone(220)
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(500)
        music.ringTone(220)
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.pause(500)
        music.ringTone(220)
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.pause(500)
        music.ringTone(494)
        basic.clearScreen()
        basic.showString("GO!")
        basic.pause(500)
        sprite = game.createSprite(2, 3)
        basic.pause(100)
        game_on = 1
    } else {
        if (game_on == 1) {
            sprite.change(LedSpriteProperty.X, 1)
        }
    }
})
let object2: game.LedSprite = null
let object: game.LedSprite = null
let sprite: game.LedSprite = null
let game_on = 0
basic.showLeds(`
    . . # . .
    . # # # .
    . # . # #
    . # # # .
    # # # . .
    `)
game.setLife(1)
game_on = 0
let object_running = 0
basic.forever(function () {
    if (game_on == 1) {
        object = game.createSprite(sprite.get(LedSpriteProperty.X), 0)
        object2 = game.createSprite(randint(0, 4), 0)
        basic.pause(100)
        while (object.get(LedSpriteProperty.Y) != 4) {
            basic.pause(400)
            object.change(LedSpriteProperty.Y, 1)
            if (sprite.isTouching(object)) {
                basic.pause(100)
                game.removeLife(2)
                game.gameOver()
            }
            if (object.get(LedSpriteProperty.Y) == 4) {
                basic.pause(500)
                object.delete()
            }
        }
        while (object2.get(LedSpriteProperty.Y) != 4) {
            basic.pause(400)
            object2.change(LedSpriteProperty.Y, 1)
            if (sprite.isTouching(object2)) {
                basic.pause(100)
                game.removeLife(2)
                game.gameOver()
                if (object2.get(LedSpriteProperty.Y) == 4) {
                    basic.pause(500)
                    object2.delete()
                }
            }
        }
    }
})
