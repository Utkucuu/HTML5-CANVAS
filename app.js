
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

     /********************* #myCanvas3 ********************** */

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


     /********************* #myCanvas4 ********************** */

     var myCanvas4 = document.getElementById("myCanvas4")
    var ctx4 = myCanvas4.getContext('2d')
    
    ctx4.beginPath()
    ctx4.strokeStyle = "blue"
    ctx4.lineWidth = 7
    ctx4.lineJoin= "bevel" //round //miter
    ctx4.moveTo(0,0)
    ctx4.lineTo(400,300)
    ctx4.lineTo(400,0)
    ctx4.lineTo(200,0)
    ctx4.lineTo(200,200)
    ctx4.lineTo(390,200)
    ctx4.lineTo(390,10)
    ctx4.lineTo(210,10)
    ctx4.lineTo(210,190)
    ctx4.lineTo(380,190)
    ctx4.lineTo(380,20)
    ctx4.lineTo(220,20)
    ctx4.lineTo(220,180)
    ctx4.lineTo(370,180)
    ctx4.lineTo(370,30)
    ctx4.lineTo(230,30)
    ctx4.lineTo(230,170)
    ctx4.lineTo(360,170)
    ctx4.lineTo(360,40)
    ctx4.lineTo(290,40)
    ctx4.lineTo(290,(Math.random()*300))

    ctx4.closePath()
    ctx4.stroke()

     /********************* #myCanvas5 ********************** */

     var myCanvas5 = document.getElementById("myCanvas5")
     var ctx5 = myCanvas5.getContext('2d')
    ctx5.beginPath()
    //  ctx.arc(x,y,yarıcap,başlangıçAçı,bitişAçı)
                        // 0    ,    360
    ctx5.arc(200,150,100,0*Math.PI,2*Math.PI)
   
    ctx5.stroke()
    
    var myCanvas5a = document.getElementById("myCanvas5a")
    var ctx5a = myCanvas5a.getContext('2d')
    ctx5a.beginPath()
                         // 180    ,    360
    ctx5a.arc(200,150,100,1*Math.PI,2*Math.PI)
    ctx5a.stroke()
                       
    var myCanvas5b = document.getElementById("myCanvas5b")
    var ctx5b = myCanvas5b.getContext('2d')
    ctx5b.beginPath()
    ctx5b.strokeStyle= "orange"
    ctx5b.lineWidth = 3
                        //270      ,    360
    ctx5b.arc(200,150,100,1.5*Math.PI,2*Math.PI)
    ctx5b.stroke()

    var myCanvas5c = document.getElementById("myCanvas5c")
    var ctx5c = myCanvas5c.getContext('2d')
    ctx5c.beginPath()
    ctx5c.fillStyle= "orange"
    ctx5c.arc(200,150,100,0*Math.PI, 0.5*Math.PI)
    ctx5c.fill()


    a= 100
    b=100
    va=1
    vb=1

    function move () {
        var myCanvas5d = document.getElementById("myCanvas5d")
        var ctx5d = myCanvas5d.getContext('2d')
        ctx5d.beginPath()
        ctx5d.clearRect(0,0,400,200)


        ctx5d.fillStyle= "purple"
        ctx5d.arc(a,b,25,0*Math.PI,2*Math.PI)
        ctx5d.fill()
        a+=va

        if(a > 400){
            va = -1
        }
        if(a<0){
            va =1
        }
      }

      setInterval(move, 1)


}