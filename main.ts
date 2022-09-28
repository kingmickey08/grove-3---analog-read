basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 1000 && pins.analogReadPin(AnalogPin.P0) <= 1023) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (pins.analogReadPin(AnalogPin.P0) > 500 && pins.analogReadPin(AnalogPin.P0) <= 1000) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P0) > 200 && pins.analogReadPin(AnalogPin.P0) <= 500) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
