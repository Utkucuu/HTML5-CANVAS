### Canvas Çalışma Notları

- Canvas ı seçtik
```var firstCanvas = document.getElementById("myCanvas")``` 

- Kaç boyutlu çizim yapacağımızı belirttik.
```firstCanvas.getContext("2d")```  

- Canvas içindebir nesne oluşturmak.
``` var ctx = firstCanvas.getContext("2d") ```

-Renk komutu önce verilmeli 
```ctx.fillStyle="red"```

- fillRect fonksiyonu nesnemizi 4 köşali hale getirip özelliklerini vermemizi sağlar.
```ctx.fillRect(x,y,widht,height)```
<img src="/images/images1.png" alt="" width="300" height="300">
