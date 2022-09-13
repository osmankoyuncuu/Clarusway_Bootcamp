const convertToRoman = (num) => {
  let roman = "";
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNum = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  for (let i = 0; i < decimal.length; i++) {
    while (decimal[i] <= num) {
      roman += romanNum[i];
      num -= decimal[i];
    }
  }
  return roman;
};
let number = prompt("enter a number: ");
console.log(convertToRoman(number));
