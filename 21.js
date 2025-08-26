function add(...numbers) {
  return numbers.reduce((acc, currentVal) => acc + currentVal, 0);
}

console.log(add(1, 2, 3, 4));

const arr = [1, 2, 3, 4,5,6,7,8];
console.log(add(...arr));