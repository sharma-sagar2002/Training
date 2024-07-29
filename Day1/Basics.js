"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firstName = "sagar";
firstName = "honey";
//as operator
var num = 21;
// firstName = num as string; // can't do type coonversion like this
firstName = num;
//typecasting 
var data = 2;
var stringData = data;
// -------------- datatypes in typescript---------------
//   - number
//   - string
//   - boolean
//   - null
//   - undefined
//   - void
//   - object 
//   - Array
//   - tuple 
//   - never 
//   - unknown
// --------array-------
var fruits = [];
fruits.push("abc");
fruits.push(2);
console.log(fruits);
// ---------tuple---------
// values should be in same order and of same type defined in the tuple 
// also we have to initilaize or assign the values on declaration
var vegs = ["tomato", 2];
//---------null and undefined --------------
//When there is no value or empty or non-existent we can set as null and when variable is installed but didn’t represent any value then its undefined
//never
var a;
// --------------functions---------------
// function createUser ({name :string , age :number}) : {} {
//     console.log(this.name ,this.age);
//     return {};
// }
// createUser({name : "sagar",age : 20});
function createUser(_a) {
    var string = _a.name, number = _a.phoneNo;
    console.log(this.name, this.phoneNo);
    return {};
}
createUser({ name: "Aditya", phoneNo: 123456 });
// ---------------------Doubts------------------
// let num1:number =3;
// let num2 : string="4";
// let num =num1+num2;
// console.log(num);
