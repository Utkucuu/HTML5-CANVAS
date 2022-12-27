
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
    /********************* #myCanvas5a ********************** */
    var myCanvas5a = document.getElementById("myCanvas5a")
    var ctx5a = myCanvas5a.getContext('2d')
    ctx5a.beginPath()
    // 180    ,    360
    ctx5a.arc(200, 150, 100, 1 * Math.PI, 2 * Math.PI)
    ctx5a.stroke()

    /********************* #myCanvas5b ********************** */
    var myCanvas5b = document.getElementById("myCanvas5b")
    var ctx5b = myCanvas5b.getContext('2d')
    ctx5b.beginPath()
    ctx5b.strokeStyle = "orange"
    ctx5b.lineWidth = 3
    //270      ,    360
    ctx5b.arc(200, 150, 100, 1.5 * Math.PI, 2 * Math.PI)
    ctx5b.stroke()

    /********************* #myCanvas5b ********************** */
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
    /********************* #myCanvas5d ********************** */
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
        valueGrad += k

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


    }


    setInterval(colorMove, 50)



    /********************* #myCanvas9 ********************** */

    var myCanvas9 = document.getElementById("myCanvas9")
    var ctx9 = myCanvas9.getContext('2d')

    var image = document.getElementById("image")

    var pat = ctx9.createPattern(image, "repeat");


    ctx9.fillStyle = pat

    ctx9.fillRect(0, 0, 400, 300)

    /********************* #myCanvas9a ********************** */
    var myCanvas9a = document.getElementById("myCanvas9a")
    var ctx9 = myCanvas9a.getContext('2d')

    var image = document.getElementById("image")

    var pat = ctx9.createPattern(image, "repeat-x");

    ctx9.fillStyle = pat

    ctx9.fillRect(0, 0, 400, 300)

    /********************* #myCanvas9b ********************** */
    var myCanvas9b = document.getElementById("myCanvas9b")
    var ctx9 = myCanvas9b.getContext('2d')

    var image = document.getElementById("image")

    var pat = ctx9.createPattern(image, "repeat-y");

    ctx9.fillStyle = pat

    ctx9.fillRect(0, 0, 400, 300)

    /********************* #myCanvas9c ********************** */
    var myCanvas9c = document.getElementById("myCanvas9c")
    var ctx9 = myCanvas9c.getContext('2d')

    var image = document.getElementById("image")

    var pat = ctx9.createPattern(image, "no-repeat");

    ctx9.fillStyle = pat

    ctx9.fillRect(0, 0, 400, 300)

    /********************* #myCanvas10 ********************** */

    var myCanvas10 = document.getElementById("myCanvas10")
    ctx10 = myCanvas10.getContext("2d")
    var imageAri = document.getElementById("ari")
    // console.log(imageAri)
    ctx10.drawImage(imageAri, 50, 0, 301, 338);
    // ctx10.drawImage(imageAri, imageAri.width/10,imageAri.height/10,myCanvas10.width,myCanvas10.height);



    var myCanvas10a = document.getElementById("myCanvas10a")
    ctx10a = myCanvas10a.getContext("2d")
    var imageAri2 = document.getElementById("ari")
    ctx10a.drawImage(imageAri, 0, 0, 60, 66);

    $("#myCanvas10a").mousemove(function (event) {

        // values: e.clientX, e.clientY, e.pageX, e.pageY

        ctx10a.clearRect(0, 0, 400, 300)
        imageAri2 = document.getElementById("ari2")

        var canvasLocation = myCanvas10a.getBoundingClientRect()
        console.log(canvasLocation)
        var ariX = event.clientX - canvasLocation.left
        var ariY = event.clientY - canvasLocation.top



        ctx10a.drawImage(imageAri2, ariX, ariY, 60, 66);

        console.log(event.clientY)
    });


    /********************* #myCanvas11 ********************** */

    var myCanvas11 = document.getElementById("myCanvas11")

    var ctx11 = myCanvas11.getContext("2d")

    ctx11.fillRect(0, 0, 150, 150)

    ctx11.translate(100, 100);
    ctx11.fillRect(0, 0, 150, 150)
    ctx11.strokeStyle = 'red';
    ctx11.strokeRect(0, 0, 150, 150);
    ctx11.stroke()
    ctx11.translate(100, 100);
    ctx11.fillRect(0, 0, 150, 150)

    /********************* #myCanvas12 ********************** */

    myCanvas12 = document.getElementById("myCanvas12")

    var ctx12 = myCanvas12.getContext("2d")

    ctx12.translate(200, 100)
    ctx12.rotate(Math.PI / 4);
    ctx12.fillRect(0, 0, 150, 150)



    /********************* #myCanvas13 ********************** */

    var myCanvas13 = document.getElementById("myCanvas13")

    var ctx13 = myCanvas13.getContext("2d")

    ctx13.fillRect(0, 0, 150, 150)
    // ctx13.save();
    // context.scale(x, y);

    ctx13.scale(2, 1); //2 = %200 , 1 = % 100

    ctx13.fillRect(20, 200, 150, 150)

    /**
    {
   
    }
     */
    // ctx13.restore();
    /**
    {
   
    }
     */


    /********************* #myCanvas14 ********************** */

    var myCanvas14 = document.getElementById("myCanvas14")

    var ctx14 = myCanvas14.getContext("2d")

    var num1X = 300
    var num1Y = 10
    var num2X = 300
    var num2Y = 70
    var num3X = 150
    var num3Y = 100

    var plus = 2.5
    var sub = 3
    var vyy = -0.1 / 2
    function ropeMove() {
        sub += vyy
        num3X += plus
        num3Y += sub
        // num2Y += sub

        ctx14.clearRect(0, 0, 600, 600)
        ctx14.beginPath()
        ctx14.moveTo(300, 0);
        ctx14.bezierCurveTo(num1X, num1Y, num2X, num2Y, num3X, num3Y);
        ctx14.stroke()
        ctx14.beginPath()
        ctx14.arc(num3X, num3Y, 15, 0 * Math.PI, 2 * Math.PI);
        ctx14.fill()

        console.log(num3Y)
        if (num3Y < 100) {
            plus = -2.5
            sub = 3
        }
        if (num3X == 150) {
            plus = +2.5
            sub = 3
        }
    }

    setInterval(ropeMove, 10)


    /********************* #myCanvas15 ********************** */

    var myCanvas15 = document.getElementById("myCanvas15")

    var ctx15 = myCanvas15.getContext("2d")

    var imageBayb = document.getElementById("bayb")
    ctx15.drawImage(imageBayb, 0, 0, 400, 300)
    var imgData = ctx15.getImageData(0, 0, 400, 300);

    for (let a = 0; a < imgData.data.length; a += 4) {


        imgData.data[a] = imgData.data[a] - 40   //r
        imgData.data[a + 1] = imgData.data[a + 1] - 50//g
        imgData.data[a + 2] = imgData.data[a + 2] - 100//b
        imgData.data[a + 3] = 200 //a
    }


    ctx15.putImageData(imgData, 0, 0);



    /********************* #myCanvas16 ********************** */
    var myCanvas16 = document.getElementById("myCanvas16")
    var ctx16 = myCanvas16.getContext("2d")
    ctx16.fillStyle = "red"
    ctx16.fillRect(0, 0, 150, 150)
    ctx16.globalAlpha = 0.5;
    ctx16.fillStyle = "blue"
    ctx16.fillRect(100, 100, 150, 150)

    /********************* #myCanvas16a ********************** */

    var myCanvas16a = document.getElementById("myCanvas16a")
    var ctx16a = myCanvas16a.getContext("2d")

    val1x = 150
    val1y = 160
    k1 = -1

    

    function squareMove() {
        ctx16a.clearRect(0, 0, 400, 300)

        ctx16a.fillStyle = "red"
        ctx16a.fillRect(0, 0, 150, 150)
        ctx16a.globalAlpha = 0.5;
        ctx16a.fillStyle = "blue"
        ctx16a.fillRect(val1x, val1y, 150, 150)

        val1x += k1
        val1y += k1
    }

 $('#btn16a').click(function (e) {
     
    setInterval(squareMove, 50)
  
    
 });

/********************* #myCanvas16b ********************** */

    var myCanvas16b = document.getElementById("myCanvas16b")
    var ctx16b = myCanvas16b.getContext("2d")

    val2x = 150
    val2y = 150
    k2 = -1

    function squareMove2() {
        ctx16b.clearRect(0, 0, 400, 300)

        ctx16b.fillStyle = "red"
        ctx16b.fillRect(0, 0, 150, 150)
        ctx16b.save()
        ctx16b.globalAlpha = 0.5;
        ctx16b.fillStyle = "blue"
        ctx16b.fillRect(val2x, val2y, 150, 150)

        val2x += k2
        val2y += k2

        ctx16b.restore()
    }

    $('#btn16b').click(function (e) { 
    
         setInterval(squareMove2, 50)

     });


    /********************* #myCanvas17 ********************** */


    var myCanvas17 = document.getElementById("myCanvas17")
    var ctx17 = myCanvas17.getContext("2d")
    ctx17.beginPath()
    ctx17.moveTo(0, 0)
    ctx17.lineTo(100, 100)
    ctx17.lineTo(300, 100)
    ctx17.lineTo(400, 00)
    ctx17.stroke()

    ctx17.beginPath()
    // ctx17.moveTo(0,0)
    ctx17.lineTo(0, 100)
    ctx17.lineTo(100, 200)
    ctx17.lineTo(300, 200)
    ctx17.lineTo(400, 100)
    ctx17.stroke()

    /********************* #myCanvas18 ********************** */


    var myCanvas18 = document.getElementById('myCanvas18');
    var ctx18 = myCanvas18.getContext('2d');
    ctx18.fillStyle = 'blue';
    ctx18.fillRect(10, 10, 50, 50);
    ctx18.globalCompositeOperation = 'xor';
    ctx18.beginPath();
    ctx18.fillStyle = 'red';
    ctx18.arc(50, 50, 30, 0, 2 * Math.PI);
    ctx18.fill();

    /**
    source-over
    source-atop
    source-in
    source-out
    destination-over
    destination-atop
    destination-in
    destination-out
    lighter
    copy
    xor */

    /********************* #myCanvas19 ********************** */



    var myCanvas19 = document.getElementById('myCanvas19');
    var ctx19 = myCanvas19.getContext('2d');
    var ball = document.getElementById("ball")

    var posx = 20
    var posy = 100
    var degX = 10
    var degY = -10
    var gravty = 1

    function ballMove() {

        if (posy > 200) {
            degX *= 0.75
            degY *= -0.65
        }



        ctx19.clearRect(0, 0, 600, 400)
        ctx19.drawImage(ball, 0, 0, ball.width, ball.height, posx, posy, 50, 50);

        degY += gravty
        posx += degX
        posy += degY

    }


    
    $('#btn19').click(function (e) { 
    
        setInterval(ballMove, 100)

    });


    /********************* #myCanvas20 ********************** */

    var myCanvas20 = document.getElementById('myCanvas20');
    var ctx20 = myCanvas20.getContext('2d');
    var winter = document.getElementById("winter")

    var snow = []

    console.log(snow)

    for (let index = 0; index < 1000; index++) {

        snow.push({
            "x": 600 * Math.random(),
            "y": 400 * Math.random(),
            "vy": 1,
            "r": Math.random()
        }
        )

    }

    function snowMove() {

        ctx20.clearRect(0, 0, 600, 400)
        ctx20.drawImage(winter, 0, 0, winter.width, winter.height, 0, 0, 600, 400)
        ctx20.fillStyle = "#eee"
        // ctx20.globalAlpha=0.8
        for (let i = 0; i < snow.length; i++) {

            ctx20.beginPath()
            ctx20.arc(snow[i].x, snow[i].y, snow[i].r, Math.PI * 0, Math.PI * 2);
            ctx20.fillStyle="white"
            ctx20.fill()

            snow[i].y += snow[i].vy
            // snow[i].x += 0.3 - Math.random()


            if (snow[i].y > 400) {
                snow[i].x = 600 * Math.random()
                snow[i].y = -400 * Math.random()
                snow[i].r = Math.random()
                snow[i].vy = 10 * Math.random()

            }

        }
    }

    setInterval(snowMove, 10)

    /********************* #myCanvas21 ********************** */


    var myCanvas21 = document.getElementById('myCanvas21');
    var ctx21 = myCanvas21.getContext('2d');

    ctx21.font = "30px arial"
    ctx21.textAlign = 'end'
    ctx21.fillText("End", 200, 50);

    ctx21.beginPath()
    ctx21.arc(200, 50, 5, 0 * Math.PI, 2 * Math.PI)
    ctx21.fill()


    ctx21.font = "30px arial"
    ctx21.textAlign = 'start'
    ctx21.fillText("Start", 200, 150);

    ctx21.beginPath()
    ctx21.arc(200, 150, 5, 0 * Math.PI, 2 * Math.PI)
    ctx21.fill()

    ctx21.font = "30spx arial"
    ctx21.textAlign = 'center'
    ctx21.fillText("Center", 200, 250);

    ctx21.beginPath()
    ctx21.arc(200, 240, 50, 0 * Math.PI, 2 * Math.PI)
    ctx21.stroke()
    
    /********************* #myCanvas22 ********************** */


    var myCanvas22 = document.getElementById('myCanvas22');
    var ctx22 = myCanvas22.getContext('2d');

    ctx22.globalAlpha = 0.5
    ctx22.setTransform(1, 0, -0.5, 1, 0, 350);
    ctx22.fillStyle = "yellow";
    ctx22.fillRect(125, 0, 350, 150)

    ctx22.globalAlpha = 1
    ctx22.setTransform(1, 0, -0.5, 1, 0, 0);
    ctx22.fillStyle = "red";
    ctx22.fillRect(150, 50, 350, 150);

    ctx22.globalAlpha = 0.8
    ctx22.setTransform(0, 15, -0.5, 1, 475, 50);
    ctx22.fillStyle = "blue";
    ctx22.fillRect(0, 0, 20, 150);

    ctx22.globalAlpha = 0.8
    ctx22.setTransform(1, 0, 0, 1.5, 0, 0);
    ctx22.fillStyle = 'lightblue';
    ctx22.fillRect(50, 133, 350, 200);
    ctx22.fillStyle = 'black';
    ctx22.font = '30px Arial';
    ctx22.fillText('Transform', 220, 280);

    ctx22.globalAlpha = 0.3
    ctx22.setTransform(0, 1.8, 1, -2, 50, 200);
    ctx22.fillStyle = 'orange'
    ctx22.fillRect(0, 0, 168, 75)

/********************* #myCanvas23 ********************** */


    var myCanvas23 = document.getElementById('myCanvas23');
    var ctx23 = myCanvas23.getContext('2d');
    var he = myCanvas23.height
    var wi = myCanvas23.width



    var fires = []

    for (let i = 0; i < 100; i++) {

        fires.push({
            "x": wi / 2 - 100 * Math.random(),
            "y": he / 2 + 90,
            "r": 25 * Math.random(),
            "vy": 5 * Math.random(),
            "time": 100 * Math.random()
        })

    }


    function fire() {

        ctx23.fillStyle = "black"
        ctx23.globalCompositeOperation = "lighter"
        ctx23.clearRect(0, 0, wi, he)
        ctx23.fillRect(0, 0, wi, he)

        for (let index = 0; index < 100; index++) {

            var firecolor = ctx23.createRadialGradient(fires[index].x + 50, fires[index].y, 2, fires[index].x + 50, fires[index].y, fires[index].r)
            firecolor.addColorStop(0, "white")
            firecolor.addColorStop(0.4, "yellow")
            firecolor.addColorStop(0.6, "orange")
            firecolor.addColorStop(1, "red")
          
            ctx23.fillStyle = firecolor

            ctx23.beginPath()
            ctx23.arc(fires[index].x + 50, fires[index].y, fires[index].r, 0 * Math.PI, 2 * Math.PI)
            
            ctx23.fill()

            fires[index].y -= fires[index].vy
            fires[index].r -= 0.5
            fires[index].time -= 1

            if (fires[index].time < 0 || fires[index].r < 0 || fires[index].time < 0) {

                fires[index].x = wi / 2 - 100 * Math.random()
                fires[index].y = he / 2 + 90
                fires[index].r = 25 * Math.random()
                fires[index].time = 50 * Math.random()
            }
        }
    }

    setInterval(fire, 50)

}