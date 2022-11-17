var myCanvas = document.getElementById("myCanvas")
var ctx = myCanvas.getContext('2d')

var casper = document.getElementById("casper")

var pat = ctx.createPattern(casper, "repeat");

ctx.fillStyle = pat

ctx.fillRect(0, 0, 200,200 )