const krediDom = document.querySelector("#kredi");
const vadeDom = document.getElementById("vade");
const tutarDom = document.querySelector("#tutar");
const hesaplaDom = document.querySelector("#hesapla");
const tabloDom = document.querySelector("#tablo");

//  Kredi Tutarı * [Faiz * (1+Faiz)Taksit Sayısı / (1+Faiz)Taksit Sayısı-1] formülü ile hesaplanır.

hesaplaDom.addEventListener("click", (event) => {
  event.preventDefault();
  let oran;
  if (krediDom.value === "Seçiniz") {
  } else if (krediDom.value === "Konut Kredisi") {
    oran = 1.29;
  } else if (krediDom.value === "İhtiyaç Kredisi") {
    oran = 1.99;
  } else if (krediDom.value === "Araç Kredisi") {
    oran = 1.79;
  }
  let vade = Number(vadeDom.value);
  let tutar = Number(tutarDom.value);
  let faiz = oran / 100;
  let taksitTutarı =
    (tutar * (faiz * (1 + faiz) ** vade)) / ((1 + faiz) ** vade - 1);
  let toplamTutar = taksitTutarı * vade;

  if (krediDom.value === "Seçiniz") {
    alert("Lütfen kredi türünü seçiniz.");
  } else if (vade === 0) {
    alert("Lütfen vade süresini giriniz");
  } else if (tutar === 0) {
    alert("Lütfen kredi tutarını giriniz");
  } else {
    tabloDom.innerHTML = `
          <h1 class="text-warning">Kredi Bilgileri</h1> <tbody>
            <tr>
              <th scope="row">Kredi Miktarı</th>
              <td>${tutar}</td>
              <th>Kredi Tipi</th>
              <td>${krediDom.value}</td>
            </tr>
            <tr>
              <th scope="row">Vade</th>
              <td>${vade}</td>
              <th>Faiz Oranı</th>
              <td>${oran}</td>
            </tr>
            <tr>
              <th scope="row">Toplam Tutar</th>
              <td>${toplamTutar.toFixed(2)} ₺</td>
              <th>Taksit Tutarı</th>
              <td>${taksitTutarı.toFixed(2)} ₺</td>
            </tr>
          </tbody>`;
  }
});
vadeDom.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    hesaplaDom.click();
  }
});
tutarDom.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    hesaplaDom.click();
  }
});
