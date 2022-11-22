### Canvas Çalışma Notları

##### HTML
* Canvas boyutu css kullanmadan verilebilir.
```<canvas id="myCanvas" height="200" width="300"></canvas>```

##### #myCanvas / fillrect  
* Canvas ı seçtik

```var firstCanvas = document.getElementById("myCanvas")``` 

* Kaç boyutlu çizim yapacağımızı belirttik.  
```var ctx = firstCanvas.getContext("2d")```  

* Önce fillstyle ile bir renk komutu verdik. 

```ctx.fillStyle="red"```

* Canvas içinde bir şekil oluşturacağımızı söyledik.

```ctx.fillRect(50, 25, 100, 100)```

* fillRect fonksiyonu şeklimizi 4 köşeli hale getirip özelliklerini vermemizi sağlar.  
```ctx.fillRect(x,y,widht,height)```

<img src="/images/images1.png" alt="" width="300" height="300">

***

##### #myCanvas2 / örnek
* Aşağıdaki gibi valueX veya valueY gibi değişkenler oluşturularak koşul durumları yönetilebilir ve döngülerle örüntüler oluşturulabilir.  

```ctx.fillRect(x,y,widht,height)```  
```ctx2.fillRect(x, y, h, w)```  
```x += valueX```   
```y += valueY```    

        
***

##### #myCanvas3 / clearRect
*clearRect(0, 0, canvasGenişliği, canvasYüksekliği), kordinat sistemindeki 0'a 0 noktasından başlayarak verdiğimiz canvas genişlik ve yükseklik değerleri kadar alanın içindeki nesneleri temizle anlamına gelir.  
```ctx3.clearRect(0,0,400,300 )```

***

##### #myCanvas4 / lineTo - moveTo

* Canvas içinde çizgi (doğru) oluşturmak için beginPath() fonksiyonu kullanılır.

```ctx4.beginPath()```

* Çizeceğimiz çizginin başlangıç konumunu vermek için

```ctx4.moveTo(0,0)``` 

* Çizeceğimiz çizginin bitiş konumunu vermek için

 ```ctx4.lineTo(400,300)```

* Son olarak doğrunun çizilmesi için stroke() fonksiyonu çalıştırılır.

```ctx4.stroke()```

* Çizgi rengi vermek için şekillerden farkl bir fonskiyon kullanılır.

```ctx4.strokeStyle = "blue"```
 
* Çizgi kalınlığı

```ctx4.lineWidth = 7```

* Çizdiğimiz doğruyu devam ettirerek kuruk şeklinde yeni doğrular ekleyebiliriz.

```ctx4.lineTo(400,300)```  
```ctx4.lineTo(400,0)```  
```ctx4.lineTo(200,0) ```  

* köşe geçişlerini ayarlamak için;  
```  ctx4.lineJoin= "bevel"  ``` düz   
```  ctx4.lineJoin= "round"  ``` oval  
```  ctx4.lineJoin= "miter"  ``` keskin  

* Doğruyu kapatmak istersek  
```ctx4.closePath()```

* random kullanmakta mümkündür.  
```ctx4.lineTo(290,(Math.random()*300))```

***

##### #myCanvas5 / Çember - Daire

- ctx.arc(x,y,yarıcap,başlangıçAçı,bitişAçı) şeklinde oval ya da çember gibi şekiller oluşturulur.

- fill fonskiyonu şeklin içini doldurmamızı sağlar (5c). Eğer bitirme işlemimizi fill ile yapıyorsak dolgu rengini `ctx5c.fillStyle= "orange"` şeklinde fill ile vermeliyiz. ```ctx5c.fill()```

* Şekli stroke() ile bitiriyorsak renkler .strokeStyle ile verilir.

* Bu şekilde bir kullanım sayesinde #myCanvas5d id'li canvasta hareket yarattık. Aslında bu kullanım ile şekil bir görünüp bir siliniyor ve hareket ediyormuş gibi görünüyor.

```ctx5d.beginPath()```  
```ctx5d.clearRect(0,0,400,200)```

!!!
Animasyonu daha da hızlandırmak için setInterval(move, 1) fonksiyonu bir döngü içine alınabilir.

***

##### #myCanvas6 / createLinearGradient
- Linear gradient renk geçişlerini sağlamaktadır.
- Gradient oluşturmak için createLinearGradient fonskiyonu kullanılır x ve y değerleri başlangıç konumudur. x1 ve y1 parametreleri ise x ile y değerlerinin bitiş konumlarıdır.

```ctx6.context.createLinearGradient(x, y, x1, y1 )```

- addColorStop ile 0 ve 1 arasında istediğimiz kadar renk verebilirz.  
```addColorStop(number, 'color');```

* kullanım:  
```color.addColorStop(0, '#8deeee')```  
```color.addColorStop(0.20, 'red')```  
```color.addColorStop(0.5, '#8b658b')```  
```color.addColorStop(0.7, 'black')```  
```color.addColorStop(1, '#eee8aa')```  

***

##### #myCanvas7 / createRadialGradient
- Dairesel bir gradient oluşturmak için createRadialGradient fonksiyonu kullanılır. r1 birinci gradient yarıçapı, r2 ikinci gradient yarıçapı ifade eder. Yine x ve y değerleri başlangıç ve bitiş noktalarıdır.  

```ctx7.context.createRadialGradient(x1, y1, r1, x2, y2, r2);```

***

##### #myCanvas8 /shadow

- Canvas içinde text oluşturmak için `fiilText` fonskiyonu kullanılır. 

``` ctx8.context.fillText(text, x, y, maxWidth);```    
```ctx8.font='italic 40pt arial';```yazı font, boyut, tip   
```ctx8.shadowColor='black';``` gölge rengi  
```ctx8.shadowOffsetX=20;``` gölge x ekseni konumu  
```ctx8.shadowOffsetY=2;```  gölge y ekseni konumu  
```ctx8.shadowBlur=20;```  gölge keskinliği  

***

##### #myCanvas9 / createPattern

- CreatePatter fonksiyonu ile bir götüntü yatay ya da dikey tekrarlanabilir veya desen oluşturulabilir.  
```context.createPattern(Image, repetition);```  
repetition: repeat  
repetition: no-repeat  
repetition: repeat-x    
repetition:repeat-y  

* fillstyle ile renk verme dışında da işlemler yapılabilir.
```var pat = ctx9.createPattern(image, "no-repeat")```  
```ctx9.fillStyle = pat```



***
##### #myCanvas10 / drawImage
- drawImage fonskiyonu ile video veya resimleri canvas içinde kullanabiliriz.
```context.drawImage(img,imgx,imgy,imgwidth,imgheight,canvasX,canvasY,canvasWidth,canvasHeight);```  
[Denemek için tıkla](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas_drawimage3)

- drawImage ile kendi, klasörümüzden resim çekebiliriz.



!!! 
***myCanvas10a*** 
* Fare canvas içinde hareket ettiğinde "mousemove" fonskiyonu çalışacak ve `var canvasLocation = myCanvas10a.getBoundingClientRect()` scriptindeki "getBoundingClientRect" metodu canvasın konum verilerini  "canvasLocation" değişkenine dönecek.
"canvasLocation.left" ve " canvasLocation.top" değerleri canvasın dikey / yatay konum bilgilerini içerecek. Bu değerleri farenin x ve y değerlerini taşıyan event.clientX ile event.clientY değerlerinden çıkardığımızda, canvasın browser içindeki konumu sebebiyle resim ile fare arasında uzaklık kaybolacak. Özetle arı resiminin konumu fare üzerinde sıfırlanmış olacak ve fare hareket ettiğinde resim de farenin konumunu izleyecek. 

```var canvasLocation = myCanvas10a.getBoundingClientRect()```  
```console.log(canvasLocation)```  
```var ariX = event.clientX - canvasLocation.left```  
```var ariY = event.clientY - canvasLocation.top```  
***


##### #myCanvas11 / translate

- Oluşturulan nesnenin konumları translate ile verilebilir. Fonksiyon içinde kullanılarak şekiller hareket ettirilebilir.
```ctx11.translate(x, y);```  
```ctx11.fillRect(0,0,150,150)```  
- İçi boş bir şekil oluşturmaya yarar.    
 ```ctx11.strokeRect(0, 0, 150, 150);```  
-içi boş şeklin rengi  
``` ctx11.strokeStyle='red';```  

***
##### #myCanvas12 / rotate

- rotate() nesneyi kendi ekseninde döndürmek için kullanılır. (Math.PI = 180)  
```ctx12.rotate(Math.PI/4)```


***
##### #myCanvas13
- scale ile nesnemizi x ve y eksenlerine yüzdesel olarak büyütüp küçültebiliriz.  
 ```ctx13.scale(x, y); //x = %x , 1 = %y```

- Save kullandığımızda save komtu öncesindeki özellikleri yani canvas durumunu kaydedip daha sonra ihtiyacımız olan yerde restore ile çağırabiliriz. Bu şekilde restore kullandığımız yerde bir önceki save durumunda kalmasını istediğimiz ayarlamaları koruyabiliriz.  
```ctx13.save();```  
```ctx13.restore();```  

***
##### #myCanvas14  

-bezierCurveTo fonskiyonu ile eğriler oluşturabiliriz. 
 ```ctx14.bezierCurveTo(num1X, num1Y, num2X, num2Y, num3X, num3Y);```  
num1X, num1Y : birinci eğri başlangıç kordinatları  
num2X, num2Y : ikinci eğri kordinatları (kırılma eğrisi)  
num3X, num3Y : üçüncü eğri bitiş kordinatları  
<img src="/images/img_beziercurve.gif" alt="">


***
##### #myCanvas15    

- getImageData() ile bir resmin piksel verilerini alabiliriz.

```.getImageData(x, y, canvasWidht, canvasHeight);``` 

- Aldığımız piksel verileri console da bir data objesinin içinde tutulur.  
<img src="/images/imgData.png" alt="">  

- a +=4 dememizin sebebi data objesi içindeki rgba değerlerinin her 4 tanesinde 255 in tekrar etmesidir.  
```for (let a = 0; a < imgData.data.length; a += 4)```  
- Değiştirdiğimiz data verilerini canvas içine geri göndeririz.  
```ctx15.putImageData(imgData, 0,0);```


***
##### #myCanvas16  

```globalAlpha = x;``` 0<= x <=1  

!!!  
myCanvas16b de kırmızı karenin saydam görünmemesi `save()` ve `restore()` ile sağlanmıştır.


***
##### #myCanvas17
-her seferinde birbirinden bağımsız çizimler yapmak için beginPath
 ve stroke yapılarını kullanırız  
```ctx17.beginPath()```
```ctx17.stroke()```

***
##### #myCanvas18
```context.globalCompositeOperation =' '```
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
xor     
(denemek için tıkla)[https://www.w3schools.com/tags/playcanvas.asp?filename=playcanvas_globalcompop&preval=source-over]  

***
##### #myCanvas19



***
##### #myCanvas20

***
##### #myCanvas21

***
##### #myCanvas22

***
##### #myCanvas23