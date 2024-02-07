const user = {
  id: 1,
  name: "John",
  age: 25,
};

localStorage.setItem("user", JSON.stringify(user));

let item = JSON.parse(localStorage.getItem("user"));

console.log(item);
