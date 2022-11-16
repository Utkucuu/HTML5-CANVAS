
window.onload = function () {

    /********************* #myCanvas ********************* */

    var firstCanvas = document.getElementById("myCanvas")
    var ctx = firstCanvas.getContext("2d")
    // ctx.fillRect(x,y,widht,height)
    ctx.fillStyle = "red"
    ctx.fillRect(50, 25, 100, 100)

    /********************* #myCanvas2 ********************** */
    var myCanvas2 = document.getElementById("myCanvas2")

    var ctx2 = myCanvas2.getContext("2d")

    x = 180
    y = 40
    h = 15
    w = 15
    valueX = 20
    valueY = 13

    for (let index = 0; index < 32; index++) {
        ctx2.fillRect(x, y, h, w)
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

    var myCanvas3 = document.getElementById("myCanvas3")
    var ctx3 = myCanvas3.getContext('2d')

    w = 10
    h = 10

hideShow()
    function hideShow (){
          setInterval(function () {
        for (let index = 0; index < 100; index++) {
            x = Math.random() * 390
            y = Math.random() * 290
            ctx3.fillRect(x, y, w, h)
        }
    },1000 );
    setInterval(function(){
        ctx3.clearRect(0,0,400,300 )
    },1100)
    }
}