let name = 'Babu Testing let keyword';
let firstName = "Gitansh Gumpu"
console.log(name + firstName);
const interestRate = 5.0;
console.log(interestRate);

let stringLiteral = "String Literal"; //String Literal
let age = 39; //Number Literal
let isApproved = true; //Boolean Literal
let undefinedVar = undefined;
isApproved = null;
name = 100;

let person = {
    name: 'Person Object Name',
    age: 39
};
console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person.name);

let selectedColors = [];
console.log(selectedColors);

selectedColors[0] = 'red';
selectedColors[1] = 'blue';
selectedColors[2] = 'white';
console.log(selectedColors.length);

function greet(){
    console.log('testing function');
}
greet();

function greet(name){
    console.log('Hello' + name);
}
greet('GITANSH GUMPU');

function square(num){
    return num * num;
}

console.log(square(10));
console.log(square(200));