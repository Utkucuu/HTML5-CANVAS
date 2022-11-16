
window.onload = function () {

    /********************* #myCanvas ********************* */

    var firstCanvas = document.getElementById("myCanvas")
    var ctx = firstCanvas.getContext("2d")
    // ctx.fillRect(x,y,widht,height)
    ctx.fillStyle = "red"
    ctx.fillRect(50, 25, 100, 100)

    /********************* #myCanvas2 ********************** */
    var myCanvas2 = document.getElementById("myCanvas2")

    var utku = myCanvas2.getContext("2d")

    x = 200
    y = 40
    h = 15
    w = 15
    valueX = 20
    valueY = 13

    for (let index = 0; index < 33; index++) {

        utku.fillRect(x, y, h, w)
        x += valueX
        y += valueY

        if (index > 6) {
            valueX = -20
        }

        if (index > 14) {
            valueY = -13
        }

        if (index > 22) {
            valueY = -13
            valueX = 20
        }


    }
}