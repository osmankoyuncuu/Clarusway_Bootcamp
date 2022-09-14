//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.
//! const tarkan = "Gel gunduzle gece olalim";

const tarkan = "Gel gunduzle gece olalim";
newTarkan = tarkan.split(" ");
console.log(
  `tarkan string'inin içerisinde ${newTarkan.length} adet kelime bulunmatadır.`
);

for (let i = 0; i < newTarkan.length; ++i) {
  wordTarkan = newTarkan[i].length;
  console.log(`${i + 1}. kelimenin uzunluğu ${wordTarkan}'dür/dır.`);
}
//! ODEV2:
//! ----------------------------------------------------------
//! https://www.youtube.com/watch?v=b7vfp5G4brE
//! https://youtu.be/b7vfp5G4brE

const linkYoutube = "https://www.youtube.com/watch?v=b7vfp5G4brE";

const equal = /[=]/;
const www = /[www]/;

const shortLink =
  linkYoutube.slice(0, linkYoutube.search(www)) +
  `youtu.be/` +
  linkYoutube.slice(linkYoutube.search(equal) + 1);
console.log(shortLink);
