# claudeicindeneme

Yayın ve video işleri için kendi araçlarımız.

## Klasörler

- `araclar/` : Kodlar. Örnek: `kes.js` bir kaydın parçasını keser.
- `ciktilar/` : Üretilen yeni dosyalar burada oluşur. Orijinal kayıtlara dokunulmaz.

## Kullanım

Bir kaydın 10. saniyesinden başlayıp 30 saniye süren parçasını almak için:

```bash
node araclar/kes.js "C:\Users\PC\Videos\kayit.mp4" 10 30
```

Gereken araçlar: Node.js ve ffmpeg.
