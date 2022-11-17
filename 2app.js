
window.onload = function (){


var myCanvas = document.getElementById("myCanvas")
var ctx = myCanvas.getContext('2d')

var image = document.getElementById("resim")

var pat = ctx.createPattern(image, "repeat");

ctx.fillStyle = pat

ctx.fillRect(0, 0, 400,300 )
}