def on_button_pressed_a():
    global LGK10, podeLGK10
    if podeLGK10:
        LGK10 = game.create_sprite(Jagunço.get(LedSpriteProperty.X),
            Jagunço.get(LedSpriteProperty.Y))
        LGK10.turn(Direction.LEFT, 90)
        podeLGK10 = False
input.on_button_pressed(Button.A, on_button_pressed_a)

def colidir():
    global Juvena, podeLGK10
    if LGK10.is_touching(Juvena):
        game.add_score(1)
        LGK10.delete()
        Juvena.delete()
        Juvena = game.create_sprite(randint(0, 4), 0)
        podeLGK10 = True
    elif LGK10.get(LedSpriteProperty.Y) == 0:
        LGK10.delete()
        podeLGK10 = True
LGK10: game.LedSprite = None
podeLGK10 = False
Juvena: game.LedSprite = None
Jagunço: game.LedSprite = None
Jagunço = game.create_sprite(2, 4)
Juvena = game.create_sprite(randint(0, 4), 0)
podeLGK10 = True
game.start_countdown(20000)

def on_forever():
    Jagunço.move(1)
    Jagunço.if_on_edge_bounce()
    if LGK10:
        LGK10.move(1)
        colidir()
    basic.pause(200)
basic.forever(on_forever)
