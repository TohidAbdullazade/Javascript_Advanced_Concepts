// CALL, APLY,BIND WITH REGULAR FUNCTION
function welcome(job, city) {
  console.log(
    `my Name is ${this.name} my age is ${ this.age} my job is ${job} my city is ${city}`
  );
}

let person = { name: "tohid", age: 21 };

welcome.call(person,"Backend-developer","Sumqagit"); // you can give it as string

welcome.apply(person,["Front-end Developer","Saray"]); // if you gives arguments in apply you must given array

let greeting = welcome.bind(person,"MERN Stack Developer","Baku");
greeting();



// CALL, APLY, BIND WITH ARROW FUNCTION;
const getInfo = () =>{
 console.log(`my name is: ${this.name} my job is: ${this.job}`);
}

let qadir = {
    name:"Tohid",
    job:"Front-end Developer"
}
let info = getInfo.bind(qadir);
info();