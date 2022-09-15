const numberDom = document.querySelector("#number");
const resultDom = document.querySelector("#result");
let number = Number(numberDom.value);
let n = number;
let string = "";
// Upside pyramid
// upside diamond
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    if (k === 0 || k === 2 * i - 2) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}
// downside diamond
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k >= 1; k--) {
    if (k === 1 || k === (n - i) * 2 - 1) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}
resultDom.innerHTML = string;

numberDom.addEventListener("change", (event) => {
  n = numberDom.value;
  string = "";
  // Upside pyramid
  // upside diamond
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  // downside diamond
  for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (n - i) * 2 - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  resultDom.innerHTML = string;
});
