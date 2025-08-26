const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// while (v.length) {
//     console.log(v)
//     break
// }

do {
  console.log(v.pop());
} while (v.length > 0);

// var a = parseInt(prompt("Enter a number:"));
// var b = parseInt(prompt("Enter another number:"));
// alert(a + b);
// var c=Math.sqrt(a);
// document.write("The sqrt is: " +c);

let count = 0;

function visitCounter() {
    count++;
    document.getElementById("counter").innerHTML = `<h1>You have visited this page ${count} times.</h1>`;
}

findnum = () => {
    var num = parseInt(prompt("Enter a number:"));
    if (num % 2 == 0) {
        alert("The number is even");
    } else {
        alert("The number is odd");
    }
}
findnum();