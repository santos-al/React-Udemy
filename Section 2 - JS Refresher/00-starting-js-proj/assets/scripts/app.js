// import using export
// import { utilString, anotherString } from "./util";

// // Import everything as an object
// import * as util from "./util.js"

// // import using default export
// import utilitylString from "./util";

// console.log(util.utilString);
// console.log(utilitylString);

const user = {
    name: "Alex",
    age: 24
};

const hobbies = [
    "Sports",
    "Cooking",
    "Reading"
];

const index = hobbies.findIndex((item) => {
    return item === "Cooking"
});

const newHobbies = hobbies.map((item) => {
    return {text: item}
})

console.log(index);
console.log(newHobbies);


const [firstName, lastName] = ["Alex", "Santos"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

console.log(firstName);
console.log(lastName);

const {name: userName, age} = {
    name: "Alexandre",
    age: 24
}

console.log(userName);
console.log(age);

const newHobby = ["Baking", "Teaching"];

// Adds the items as comma seperated values into the list
const mergedHobbies = [...hobbies, ...newHobby];
const combinedHobbies = [hobbies, newHobby];


console.log(hobbies);
console.log(mergedHobbies);
console.log(combinedHobbies);

// The spread operator in the is case takes all the key value pairs
// from "user" and adds it to the new object
const extendedUser = {
    isAdmin: true,
    ...user
}


setTimeout(() => {}, 2000)