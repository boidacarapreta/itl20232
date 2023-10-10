def on_button_pressed_a():
    Roberto_Pneus_Jr.change(LedSpriteProperty.Y, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Roberto_Pneus_Jr.change(LedSpriteProperty.Y, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Shigeki_Baba = 0
Roberto_Pneus_Jr: game.LedSprite = None
ticks = 0
Chico_Moedas: List[game.LedSprite] = []
Roberto_Pneus_Jr = game.create_sprite(2, 2)  # Posição inicial do jogador
Roberto_Pneus_Jr.set(LedSpriteProperty.BLINK, 300)

def on_forever():
    global Shigeki_Baba, ticks
    while len(Chico_Moedas) > 0 and Chico_Moedas[0].get(LedSpriteProperty.X) == 0:
        Chico_Moedas.remove_at(0).delete()
    for metanfetamina in Chico_Moedas:
        metanfetamina.change(LedSpriteProperty.X, -1)
    if ticks % 3 == 0:
        Shigeki_Baba = randint(0, 4)
        for index in range(5):
            if index != Shigeki_Baba:
                Chico_Moedas.append(game.create_sprite(4, index))
    for iraque in Chico_Moedas:
        if iraque.get(LedSpriteProperty.X) == Roberto_Pneus_Jr.get(LedSpriteProperty.X) and iraque.get(LedSpriteProperty.Y) == Roberto_Pneus_Jr.get(LedSpriteProperty.Y):
            game.game_over()
    ticks += 1
    basic.pause(500)
basic.forever(on_forever)





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
