const text = document.querySelector("#textArea");
const buttonDom = document.querySelector("#button");
const resetDom = document.querySelector("#reset");

const vowel = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];

buttonDom.addEventListener("click", (event) => {
  event.preventDefault();
  counter = 0;
  for (i of text.value) {
    if (vowel.includes(i)) {
      counter++;
    }
  }
  if (text.value == 0) {
  } else {
    const resultDom = document.querySelector("#result");
    const paragraf = document.createElement("p");
    resultDom.appendChild(paragraf);
    paragraf.innerHTML = `The are ${counter} vowel in <span>   ${text.value}</span>`;
    text.value = "";
  }
});

text.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    buttonDom.click();
  }
});
resetDom.addEventListener("click", () => {
  window.location.reload();
});
text.focus();
