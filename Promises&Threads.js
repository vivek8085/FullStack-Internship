// Synchronous Example
function syncExample() {
  console.log("Start");
  console.log("Middle");
  console.log("End");
}
syncExample();

// Asynchronous Example
function asyncExample() {
  console.log("Start");
  setTimeout(() => {
    console.log("Async Task");
  }, 1000);
  console.log("End");
}
asyncExample();

// Promise Example
let promiseExample = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

promiseExample
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Async/Await Example
async function asyncAwaitExample() {
  function getData() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Data Received"), 1000);
    });
  }
  console.log("Fetching...");
  let data = await getData();
  console.log(data);
}
asyncAwaitExample();

new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Done");
  } else {
    reject("Error");
  }
})
.then(result => console.log(result))
.catch(error => console.log(error));
