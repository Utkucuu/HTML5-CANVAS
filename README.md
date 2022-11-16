### Canvas Çalışma Notları

##### HTML
- Canvas boyutu css kullanmadan verilir
```<canvas id="myCanvas" height="200" width="300"></canvas>```

##### #myCanvas
- Canvas ı seçtik
```var firstCanvas = document.getElementById("myCanvas")``` 

- Kaç boyutlu çizim yapacağımızı belirttik.
```firstCanvas.getContext("2d")```  

- Canvas içinde bir şekil oluşturacağımızı söyledik.
``` var ctx = firstCanvas.getContext("2d") ```

-Renk komutu önce verilmeli 
```ctx.fillStyle="red"```

- fillRect fonksiyonu şeklimizi 4 köşeli hale getirip özelliklerini vermemizi sağlar.
```ctx.fillRect(x,y,widht,height)```
<img src="/images/images1.png" alt="" width="300" height="300">

***

##### #myCanvas2
- Aşağıdaki gibi valueX veya valueY gibi değişkenler kullanılarak koşul durumları yönetilebilir ve döngülerle örüntüler oluşturulabilir.
```  utku.fillRect(x, y, h, w)
        x += valueX
        y += valueY```

        
***

##### #myCanvas3
-clearRect(0, 0, canvasGenişliği, canvasYüksekliği) şeklindeki komut, kordinat sistemindeki 0'a 0 noktasından başlayarak verdiğimiz canvas genişlik ve yükseklik değerleri kadar alanın içindeki nesneleri temizle anlamına gelir.
```ctx3.clearRect(0,0,400,300 )```

***

##### #myCanvas4
