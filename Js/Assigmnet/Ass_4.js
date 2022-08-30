//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------

const arr = [3, 5, 2, "2", "uc", 2, "3", "bes", "5"];

let enter = prompt("Entered a number: ");
if (arr.includes(Number(enter))) {
  if (arr.includes(enter)) {
    console.log(
      `Girilen sayının number olarak indisi ${arr.indexOf(
        Number(enter)
      )} ve string olarak indisi ${arr.indexOf(enter)}'dir `
    );
  } else {
    console.log(
      `Girilen sayının number olarak indisi ${arr.indexOf(Number(enter))}'dir `
    );
  }
} else if (arr.includes(enter)) {
  console.log(
    `Girilen sayının string olarak indisi ${arr.indexOf(enter)}'dir `
  );
} else {
  console.log(`Aranılan sayı bulunamamıştır.`);
}
