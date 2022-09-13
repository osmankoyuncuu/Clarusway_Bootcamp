//? Selector
const krediDom = document.querySelectorAll("option");
const vadeDom = document.getElementById("vade");
const tutarDom = document.querySelector("#tutar");
const hesaplaDom = document.querySelector("#hesapla");

hesaplaDom.addEventListener("click", () => {
  console.log(krediDom);
  console.log(vadeDom);
});
