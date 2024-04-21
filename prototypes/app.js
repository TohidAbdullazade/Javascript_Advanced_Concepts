let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

/* person extends new Object(); ===> the NEW keyword makes an new empty object for us

in Javascript each object's have prototypes. new Object means ===> function Object(){}; it's an object constructer funksion;

*/
let person_2 = {
  __proto: person,
};
/* person_2 inheritance from person object; __proto: ===> means the parent Object, in this case it's person object and node person_2 object have access to all keys from person object, because it is inheritance from person object  */
