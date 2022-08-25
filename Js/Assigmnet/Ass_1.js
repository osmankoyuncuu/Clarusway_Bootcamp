//! ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)
const number1 = +prompt(`1'inci sayıyı giriniz:`);
const number2 = +prompt(`2'nci sayıyı giriniz:`);
const operator = prompt(`Operatörü giriniz: `);
if(operator == `+`){
    console.log(number1 + number2);
} else if(operator == `-`){
    console.log(number1 - number2);
} else if(operator == `*`){
    console.log(number1 * number2);
} else if(operator == `/`){
    console.log(number1 / number2);
}

//! ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.
//! Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//! Cuma -> Teamwork
//! Cumartesi ->  InClass + Workshop
//! Pazar -> Self-Study
//! Aksi takdirde -> Yanlis gun girildi.
let day = prompt(`Günü giriniz:`);
let lesson;
switch (day){
    case `Pazartesi`:
        lesson = `InClass`;
        break;
    case `Salı`:
        lesson = `InClass`;
        break;
    case `Çarşamba`:
        lesson = `InClass`;
        break;
    case `Perşembe`:
        lesson = `InClass`;
        break;
    case `Cuma`:
        lesson = `Teamwork`;
        break;
    case `Cumartesi`:
        lesson = `InClass + Workshop`;
        break;
    case `Pazar`:
        lesson = `Self-Study`;
        break;
    default :
        lesson = `Yanlis gun girildi.`;
}
console.log(lesson);

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

let maas = +prompt(`Maaşınızı giriniz: `);
let yeniMaas;
if(maas <= 5500){
    yeniMaas = maas * 1.5;
} else {
    yeniMaas = maas * 1.1;
}
console.log(`Yeni maaşınız: ${yeniMaas}`);

//! ODEV4: Kredi Risk Programı
//! Console’dan kişinin gelir ve gider miktarını alan
//! eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//! değilse Kredi Verilemez 🥺
//! şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

let gelir = +prompt(`Gelirinizi giriniz: `);
let gider = +prompt(`Giderinizi giriniz: `);
let result = gelir - gider;
let kredi = result >= 5500 ? `Kredi verilebilir 🤑` : `Kredi verilemez 😥`;
console.log(kredi);