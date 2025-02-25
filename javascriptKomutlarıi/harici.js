//tek satır açıklama
alert("harici dosya..." );
//değişken oluşturma
var a = 1 , b = 2; 
//değişkenin hiçbir zaman değişmeyecek olan değerler için const komutu kullanılır.
const pi = 3.14;
//değişkeni sadece tanımladığı fonksiyon içinde kullanacaksanız let komutu kullanılır.
let y=2, x=1;
/*değişken tanımlama kuaralları:
 1-for , if gibi komutlarını değişken olarak tanımlayamayız.
 2- değişkenlerin ilk karakteri harf olmak zorundadır.
 3- iki kelime arasında boşluk asla kullanılmaz.
 4-string değerler her zaman "" ile kullanılır.
 5-büyük-küçük haf duyarlığı vardır.
 6-türkçe harfler kullanılabilir. ama sorun yaşayabilme şansınız vardır.
 7- */
 
 
// yapılan işlem sonuçlarını ekranda görmek için 1-document.write() 2-alert() 3-console.log() 4-innerHTML komutlarıdır.
//1-
/* alert("birinci yöntem");
var ad = "hasan";
alert(ad); */ 


 
//2-
var ad = "hasan";
var soyad = "acikel";
document.write("ad: ",ad); 

//3-
console.log(ad);

//4- bu komut html dosyasında bulunan id yi değiştirmemizi sağlar.
document.getElementById("test").innerHTML = soyad; 

//ziyaretçiden veri almak için html formları veya prompt() komutu kullanılır.
 var no = prompt("numaranız: ");
 document.write("no" ,no);
 alert(no); 
 console.log(no);


 








 