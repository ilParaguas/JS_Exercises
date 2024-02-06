class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  fromJson(json) {
    let res = JSON.parse(json);
    console.log(typeof res);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);