// -------------------------------------------------->  level 2  <------------------------------
// 1st solution removing even numbers
let arr = [1, 3, 4, 6, 7, 8];
let copyArr = arr;
arr = [];
for (let i = 0; i < copyArr.length; i++) {
  if (copyArr[i] % 2 !== 0) {
    arr.push(copyArr[i]);
  }
}

console.log(arr);

// 2nd solution
let str = "Elie";
let upperConverted = "";
for (let i = 0; i < str.length; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    upperConverted += str[i].toUpperCase();
  } else {
    upperConverted += str[i];
  }
}
console.log(upperConverted);

// 3rd solution
function MaxNo(myArr) {
  let bigOne = myArr[0];
  for (let i = 0; i < myArr.length; i++) {
    if (bigOne < myArr[i]) {
      bigOne = arr[i];
    }
  }
  return bigOne;
}

let arr = [1, 3, 4, 6, 7, 8, 2, 5];
console.log(MaxNo(arr));
