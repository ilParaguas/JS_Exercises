class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let developer = new Person("Mario", "Rossi");
console.log(`first name ${developer.firstName}, second name ${developer.lastName}`);
