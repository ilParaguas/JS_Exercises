
const isLogged = true;

function promise() {
  return new Promise((resolve, reject) => {
    let rand = Math.random();
    if (isLogged == true) {
      resolve(rand);
    } else {
      reject(new Error("Error"));
    }
  });
}

function promise2(num) {
  return new Promise((resolve, reject) => {
    if (num > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Error 2"));
    }
  });
}

promise()
  .then((val) => promise2(val))
  .then((name) => console.log(name))
  .catch((err) => console.error(err))
  .finally(() => console.log("Finally!"));
