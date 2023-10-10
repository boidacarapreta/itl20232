def on_gesture_shake():
    basic.pause(100000000)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global timer
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)
    basic.clear_screen()
    basic.pause(1000)
    basic.show_leds("""
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        """)
    timer = randint(10, 30)
    while timer > 0:
        timer += -1
        basic.pause(1000)
    basic.show_icon(IconNames.SAD)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

timer = 0
basic.pause(control.millis())
basic.show_string("vai")
