
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
    function hideShow() {
        setInterval(function () {
            for (let index = 0; index < 100; index++) {
                x = Math.random() * 390
                y = Math.random() * 290
                ctx3.fillRect(x, y, w, h)
            }
        }, 1000);
        setInterval(function () {
            ctx3.clearRect(0, 0, 400, 300)
        }, 1100)
    }


    /********************* #myCanvas4 ********************** */

    var myCanvas4 = document.getElementById("myCanvas4")
    var ctx4 = myCanvas4.getContext('2d')

    ctx4.beginPath()
    ctx4.strokeStyle = "blue"
    ctx4.lineWidth = 7
    ctx4.lineJoin = "bevel" //round //miter
    ctx4.moveTo(0, 0)
    ctx4.lineTo(400, 300)
    ctx4.lineTo(400, 0)
    ctx4.lineTo(200, 0)
    ctx4.lineTo(200, 200)
    ctx4.lineTo(390, 200)
    ctx4.lineTo(390, 10)
    ctx4.lineTo(210, 10)
    ctx4.lineTo(210, 190)
    ctx4.lineTo(380, 190)
    ctx4.lineTo(380, 20)
    ctx4.lineTo(220, 20)
    ctx4.lineTo(220, 180)
    ctx4.lineTo(370, 180)
    ctx4.lineTo(370, 30)
    ctx4.lineTo(230, 30)
    ctx4.lineTo(230, 170)
    ctx4.lineTo(360, 170)
    ctx4.lineTo(360, 40)
    ctx4.lineTo(290, 40)
    ctx4.lineTo(290, (Math.random() * 300))

    ctx4.closePath()
    ctx4.stroke()

    /********************* #myCanvas5 ********************** */

    var myCanvas5 = document.getElementById("myCanvas5")
    var ctx5 = myCanvas5.getContext('2d')
    ctx5.beginPath()
    //  ctx.arc(x,y,yarıcap,başlangıçAçı,bitişAçı)
    // 0    ,    360
    ctx5.arc(200, 150, 100, 0 * Math.PI, 2 * Math.PI)

    ctx5.stroke()

    var myCanvas5a = document.getElementById("myCanvas5a")
    var ctx5a = myCanvas5a.getContext('2d')
    ctx5a.beginPath()
    // 180    ,    360
    ctx5a.arc(200, 150, 100, 1 * Math.PI, 2 * Math.PI)
    ctx5a.stroke()

    var myCanvas5b = document.getElementById("myCanvas5b")
    var ctx5b = myCanvas5b.getContext('2d')
    ctx5b.beginPath()
    ctx5b.strokeStyle = "orange"
    ctx5b.lineWidth = 3
    //270      ,    360
    ctx5b.arc(200, 150, 100, 1.5 * Math.PI, 2 * Math.PI)
    ctx5b.stroke()

    var myCanvas5c = document.getElementById("myCanvas5c")
    var ctx5c = myCanvas5c.getContext('2d')
    ctx5c.beginPath()
    ctx5c.fillStyle = "orange"
    ctx5c.arc(200, 150, 100, 0 * Math.PI, 0.5 * Math.PI)
    ctx5c.fill()


    a = 100
    b = 100
    va = 1
    vb = 1

    function move() {
        var myCanvas5d = document.getElementById("myCanvas5d")
        var ctx5d = myCanvas5d.getContext('2d')
        ctx5d.beginPath()
        ctx5d.clearRect(0, 0, 400, 300)


        ctx5d.fillStyle = "purple"
        ctx5d.arc(a, b, 25, 0 * Math.PI, 2 * Math.PI)
        ctx5d.fill()
        a += va
        b += vb

        if (a > 380) {
            va = -1
        }
        if (a < 20) {
            va = 1
        }
        if (b > 280) {
            vb = -1
        }
        if (b == 20) {
            vb = 1
        }
    }

    setInterval(move, 1)

    /********************* #myCanvas6 ********************** */

    var myCanvas6 = document.getElementById("myCanvas6")
    var ctx6 = myCanvas6.getContext('2d')
    var color = ctx6.createLinearGradient(0, 0, 200, 100)
    color.addColorStop(0.10, '#8deeee')
    color.addColorStop(0.3, 'red')
    color.addColorStop(0.5, '#8b658b')
    color.addColorStop(0.70, 'purple')
    color.addColorStop(1, '#eee8aa')
    ctx6.fillStyle = color
    ctx6.fillRect(0, 0, 200, 100)


    var ctx6a = myCanvas6.getContext("2d");
    var my_gradient = ctx6a.createLinearGradient(0, 110, 0, 190);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "white");
    ctx6a.fillStyle = my_gradient;
    ctx6a.fillRect(0, 120, 200, 100);


    var ctx6b = myCanvas6.getContext("2d");

    var my_gradient2 = ctx6b.createLinearGradient(0, 0, 170, 0);
    my_gradient2.addColorStop(0, "black");
    my_gradient2.addColorStop(0.5, "red");
    my_gradient2.addColorStop(1, "white");
    ctx6b.fillStyle = my_gradient2;
    ctx6b.fillRect(0, 250, 200, 100);

    /********************* #myCanvas7 ********************** */

    var myCanvas7 = document.getElementById("myCanvas7")
    var ctx7 = myCanvas7.getContext('2d')
    var renk = ctx7.createRadialGradient(70, 50, 10, 90, 60, 95);

    renk.addColorStop(0, "white")
    renk.addColorStop(0.5, "blue")
    renk.addColorStop(1, "darkblue")
    ctx7.fillStyle = renk
    ctx7.fillRect(0, 0, 400, 400)

    ctx7.fillStyle = '#fff';
    for (let index = 0; index < 800; index++) {
        let starA = (Math.random() * 400)
        let starB = (Math.random() * 400)
        let star_Size1 = (Math.random() * 2)
        let star_Size2 = (Math.random() * 2)
        ctx7.fillRect(starA, starB, star_Size1, star_Size2)
    }

    /********************* #myCanvas8 ********************** */

    var myCanvas8 = document.getElementById("myCanvas8")
    var ctx8 = myCanvas8.getContext('2d')
    ctx8.font = 'bold 40px arial';
    var gra = ctx8.createLinearGradient(100, 150, 400, 0);
    gra.addColorStop(0, "aqua")
    gra.addColorStop(0.5, "orange")
    gra.addColorStop(1, "blue")
    ctx8.shadowColor = 'black';
    ctx8.shadowOffsetX = 0;
    ctx8.shadowOffsetY = 2;
    ctx8.shadowBlur = 10;
    ctx8.fillStyle = gra
    ctx8.fillText("Hello World", 90, 50);

    ctx8.font = 'italic 40pt arial';
    var gra = ctx8.createLinearGradient(100, 150, 400, 0);
    gra.addColorStop(0, "red")
    gra.addColorStop(0.5, "white")
    gra.addColorStop(1, "black")
    ctx8.shadowColor = 'black';
    ctx8.shadowOffsetX = 20;
    ctx8.shadowOffsetY = 2;
    ctx8.shadowBlur = 20;
    ctx8.fillStyle = gra
    ctx8.fillText("Hello World", 50, 125);

    var ctx8a = myCanvas8.getContext('2d')
    var valueGrad = 0.1
    var k = 0.1

    function colorMove() {
        ctx8a.font = 'bold 40pt ariel';
        var gra1 = ctx8a.createLinearGradient(10, 150, 400, 0);
        gra1.addColorStop(0, "purple")
        gra1.addColorStop(valueGrad, "yellow")
        gra1.addColorStop(1, "green")
        ctx8a.shadowColor = 'black';
        ctx8a.shadowOffsetX = 2;
        ctx8a.shadowOffsetY = 2;
        ctx8a.shadowBlur = 1;
        ctx8a.fillStyle = gra1
        ctx8a.fillText("Hello World", 50, 200);

        if (valueGrad > 0.99) {
            k = -0.1
        }
        if (valueGrad < 0.1) {
            k = 0.1
        }
        valueGrad += k

    }

    setInterval(colorMove, 50)

    /********************* #myCanvas9 ********************** */

    var myCanvas9 = document.getElementById("myCanvas9")
    var ctx9 = myCanvas9.getContext('2d')

    var image = document.getElementById("image")

    var pat = ctx9.createPattern(image, "repeat");


    ctx9.fillStyle = pat

    ctx9.fillRect(0, 0, 400,300 )


    var myCanvas9a = document.getElementById("myCanvas9a")
    var ctx9 = myCanvas9a.getContext('2d')

    var image = document.getElementById("image")

    var pat = ctx9.createPattern(image, "repeat-x");

    ctx9.fillStyle = pat

    ctx9.fillRect(0, 0, 400,300 )
    

    var myCanvas9b = document.getElementById("myCanvas9b")
    var ctx9 = myCanvas9b.getContext('2d')

    var image = document.getElementById("image")

    var pat = ctx9.createPattern(image, "repeat-y");

    ctx9.fillStyle = pat

    ctx9.fillRect(0, 0, 400,300 )

    
    var myCanvas9c = document.getElementById("myCanvas9c")
    var ctx9 = myCanvas9c.getContext('2d')

    var image = document.getElementById("image")

    var pat = ctx9.createPattern(image, "no-repeat");

    ctx9.fillStyle = pat

    ctx9.fillRect(0, 0, 400,300 )

    /********************* #myCanvas10 ********************** */

    var myCanvas10 = document.getElementById("myCanvas10")
    ctx10 = myCanvas10.getContext("2d")
    var imageAri = document.getElementById("ari")
    // console.log(imageAri)
    ctx10.drawImage(imageAri, 50,0,301,338);
    // ctx10.drawImage(imageAri, imageAri.width/10,imageAri.height/10,myCanvas10.width,myCanvas10.height);
    
    var myCanvas10a = document.getElementById("myCanvas10a")
    ctx10a = myCanvas10a.getContext("2d")
    var imageAri = document.getElementById("ari")
    // console.log(imageAri)
    ctx10a.drawImage(imageAri, 0,0,60,66);

       
    $("#myCanvas10a").mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        var myCanvas10a = document.getElementById("myCanvas10a")
        ctx10a = myCanvas10a.getContext("2d")
        ctx10a.clearRect(0, 0, 400, 300)
        var imageAri2 = document.getElementById("ari")
        // console.log(imageAri)
        ctx10a.drawImage(imageAri2, e.clientX-50, e.clientY-200, 60, 66);
        
    });
}