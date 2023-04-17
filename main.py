def on_forever():
    if 315 < input.compass_heading() or input.compass_heading() < 45:
        basic.show_string("N")
    elif input.compass_heading() > 45 and input.compass_heading() < 135:
        basic.show_string("E")
    elif input.compass_heading() < 225 and input.compass_heading() > 135:
        basic.show_string("S")
    elif input.compass_heading() > 225 and input.compass_heading() < 315:
        basic.show_string("W")
    else:
        basic.clear_screen()
basic.forever(on_forever)
