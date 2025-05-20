basic.forever(function () {
    let kompas = 0
    if (kompas < 45) {
        basic.showArrow(ArrowNames.North)
    }
    if (kompas > 315) {
        basic.showArrow(ArrowNames.North)
    }
})
