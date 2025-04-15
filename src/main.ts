interface Length {
  length: number;
}

function getLength<T extends Length>(a: T) {
  return a.length;
}


const stringLength = getLength("Hello");
const arrayLength = getLength([345, "sffd", 5, []]);

console.log(stringLength);
console.log(arrayLength);