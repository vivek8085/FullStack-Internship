async function example1() {
  return "Hello";
}
example1().then(console.log);

async function example2() {
  let promise = new Promise(resolve => {
    setTimeout(() => resolve("Done"), 1000);
  });
  let result = await promise;
  console.log(result);
}
example2();

async function example3() {
  try {
    let promise = new Promise((_, reject) => {
      setTimeout(() => reject("Error happened"), 1000);
    });
    let result = await promise;
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
example3();


async function fetchUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchUsers();

//Using Methods

// GET
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "GET"
})
  .then(response => response.json())
  .then(data => console.log("GET:", data));

// POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "foo", body: "bar", userId: 1 })
})
  .then(response => response.json())
  .then(data => console.log("POST:", data));

// PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 1, title: "updated", body: "content", userId: 1 })
})
  .then(response => response.json())
  .then(data => console.log("PUT:", data));

// DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(response => console.log("DELETE:", response.status));
