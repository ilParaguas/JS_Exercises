const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";
/*
When you modify the object 2, the object 1 changes too because
when we declared object 2, it was declared as a reference to the
first one,so it's not an independent object itself.
*/

console.log(person1);
console.log(person2);
