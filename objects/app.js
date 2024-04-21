// 1. Object Literal;
let obj = {
  name: "A",
  age: 21,
};

// Object yaradan Constructorlar Funksiyalar;
function Person(name, lastname) {
  (this.name = name), (this.lastname = lastname);
  this.fullname = function () {
    return console.log(this.name + this.lastname);
  };
}

let tohid = new Person("Tohid", "Abdullazade");
console.log(tohid);
tohid.fullname();

// Object Contructor;
let qadir = new Object();
qadir.name = "Qadir";
qadir.lastname = "Abdullazade";
qadir.fullname = function () {
  return console.log(this.name + this.lastname);
};

qadir.fullname();

// new Object Methods;
let person = {
  name: "A",
  age: Math.random(),
};
// The person_2 Object extends from person;
let person_2 = Object.create(person);
person_2.city = "Saray";
console.log(person_2);
