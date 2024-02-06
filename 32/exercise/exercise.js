const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

let {firstName, lastName, ...props} = person;
let json = JSON.stringify(props);

console.log(json); // Should return: { id: 1, age: 25 }