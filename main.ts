basic.forever(function () {
    if (315 < input.compassHeading() || input.compassHeading() < 45) {
        basic.showString("N")
    } else if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showString("E")
    } else if (input.compassHeading() < 225 && input.compassHeading() > 135) {
        basic.showString("S")
    } else if (input.compassHeading() > 225 && input.compassHeading() < 315) {
        basic.showString("W")
    } else {
        basic.clearScreen()
    }
})
