basic.forever(function () {
    basic.showString("" + (input.temperature()))
    if (input.temperature() < 20) {
        basic.showString("too cold")
    } else {
        basic.showString("anyways, not too cold")
    }
})
