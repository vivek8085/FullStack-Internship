//lexscoping
function outer() {
  let a = 10;
  function inner() {
    console.log(a); // inner can access outer's variable
  }
  inner();
}
outer();


//closure
function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}

const counter = outer(); 

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
