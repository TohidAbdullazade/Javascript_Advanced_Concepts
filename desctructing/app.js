// COMPUTED PROPERTIE NAMES ===> YƏNİ DİNAMİK BİR KEY ÖTÜRÜLÜR
let street = "city";
let obj = {
  name: "A",
  age: 21,
  [street]: "Saray",
};
console.log(obj);

// SHORT METHOD SYNTAXT ===> YƏNİ OBJECTLƏRİN DAXİLİNDƏ FUNKİYALARI DECLARE EDƏRKƏN FUNCTİON KEYWORDINDA İSTİFADƏ ETMƏSƏN DƏ OLAR BUNA DA:SHORT METHOD SYNTAXT;

let person = {
  name: "Tohid",
  age: 21,
  fullname: function () {
    return console.log(this.name + "" + this.age);
  },
}; // BU DEFAULT OLARAQDIR;

let person_2 = {
  name: "Tohid",
  age: 21,
  fullname() {
    return console.log(this.name + "" + this.age);
  },
}; // BU DA SHORT METHOD SYNTAXT;

// OBJECT DESTUCTING ===> OBJECTLƏRDƏKİ KEYLƏRİ BİR DƏYİŞƏNƏ ATIB İSTİFADƏ EDƏ BİLƏRSƏN;
let destructedObj = {
  name: "Random",
  age: Math.floor(Math.random() * 100),
};
const { name: firstname, age: old } = destructedObj; // IF YOU WANT GIVE AN UNIQUE KEY FOR DESTRUCTING;
var { name, age } = destructedObj; // IF YOU WANT NOT CHNAGE THE KEYS  THAN USE SO THIS IS MOST USED;
console.log(name, age);

// EXAMPLE
let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
  },
];
// EXAMPLE WITH FOREACH METHOD;
users.forEach(({ name, id, address }) => {
  console.log(name, id, address.street);
});

// EXAMPLE WITH MAP METHOD;
let newUsers = users.map(({ name, id }) => {
  return { name, id };
});
console.log(newUsers[0].name); // Leanne Graham;

// SPREAD SYNTAX ===> YA VAR OLAN OBJECTI KOPYALAMAQ ÜÇÜNDÜR YA DA OBJECTLƏRİ BİRLƏŞDİRMƏK ÜÇÜNDÜR;
let person_3 = {
  name: "Tohid",
  age: 21,
  fullname() {
    return console.log(this.name + "" + this.age);
  },
};

let person_4 = { ...person_3 };
console.log(person_4);

/* REST OPERATOR ===> REST OPERATORU SPREAD SYNTAX-A OXŞAYIR BİR FƏRQLƏ Kİ REST OPERATORU ALDIĞI DƏYƏRLƏRİ  OBJECTİN İÇİNDƏ ALIR
 */

let person_5 = {
  name: "Tohid",
  age: 21,
  fullname() {
    return console.log(this.name + "" + this.age);
  },
};

var { name, ...rest } = person_5;
console.log(name); // Tohid
console.log(rest); // age, fullname method;

// OBJECT ENTRIES ===> OBJECTIN DAXILINDƏKİ KEY VƏ VALUELARI BİR ARRAYİN İÇİNDƏ VERİR;

let person_6 = {
  name: "Tohid",
  age: 21,
  fullname() {
    return this.name + " " + this.age;
  },
};
let arr = Object.entries(person_6);
console.log(arr);
