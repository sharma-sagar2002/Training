//topics left
// record 
// partial 
// required 
// omit 
// pick
// exclude 
//extract


var firstName ="sagar";
firstName="honey";


//as operator
var num :number =21;
// firstName = num as string; // can't do type coonversion like this
firstName = num as unknown as string;

//typecasting 
let data=2;
let stringData = data as unknown as string;

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


let fruits : (string | number)[]=[];
fruits.push("abc");
fruits.push(2);
console.log(fruits);


// let array : string[] | number[] =[];   array will be either of string or number type array 
// let array : (string | number ) [] = [];   can contain any type string or number
// let array : string | number[] ;      array can be string value or it can be of number arrays 


// ---------tuple---------
// values should be in same order and of same type defined in the tuple 
// also we have to initilaize or assign the values on declaration
let vegs : [string , number]=["tomato",2];

//---------null and undefined --------------
//When there is no value or empty or non-existent we can set as null and when variable is installed but didn’t represent any value then its undefined

//never
var a:never;


// --------------functions---------------
// function createUser ({name :string , age :number}) : {} {
//     console.log(this.name ,this.age);
//     return {};
// }
// createUser({name : "sagar",age : 20});

// ----------type---------------  
type User = {
    readonly id:string,  //readonly means it can not be modified 
   name : string,
   age : number,
   dob?: number //optional 
}

let u1 :User = {
    id :"123",
    name :"sagar",
    age :22,
    
}


function createUser (user :User)  {
//   user.id="122";  readonly property
return "created";

}
createUser({id :"12", name :"sagar", age :22});


// combining types using &

type cardNumber ={
    cardnumber : number,
   
}

type cardName = {
    name : string 
}

type cardDetails = cardNumber & cardName & {
    cvv :number
    name :number
}

// const card1 :cardDetails =  {
// //   name:"sagar",    now it has become of 'never' type as two types of same name but different type (string ,name)
//    cvv:122,
//    cardnumber :1222
// }



function getData (id : string|number){
    if(typeof (id) == "string") {
        id.toUpperCase();
    }
    else {
        id.toString();
    }
}




// ----------------enum--------------
enum choices {
aisle ,  // 0 -default   
middle,  // prev+1  (only runs when prev is of number)
window,
international
}

console.log(choices.middle);



//-------keyof------
type Person ={
    name :string,
    age :number
}

type personKeys = keyof Person;
const val :personKeys = "name";



//-------record------  
type UserRecord  = Record<'a'|'b',string>  // now we have to take a and b both entries 
const userRecord : UserRecord ={
    a:"sagar",
    b:"sharma",
};


//------partial-----------
// takes a type and make all fields optional and return the new type 
type optionalUser= Partial<Person>;


//------required------
//opposite funtionality as partial and name gives hint


//---------omit----------
//  same as above just omits any specific field entered and returns the new type 
//  type omittedUser= omit<User, 'address'>
// to omit multiple fields just use | symbol to add fields 

//---------exclude----------
// type Mul =string |number;
// type newMul= Exclude<Mul, string>;

// const val1 :newMul= 1;


export {};


















// ---------------------Doubts------------------

// let num1:number =3;
// let num2 : string="4";
// let num =num1+num2;
// console.log(num);



// --------------d2--------------- (runs on vs but gives error on online )
// function createUser ({name :string , age :number}) : {} {
//     console.log(this.name ,this.age);
//     return {};
// }
// createUser({name : "sagar",age : 20});

//--------------------d3--------------  (tuple fails using push,pop,unshift etc methods of array)
// var nums : [number,string] = [1,"sagar"];
// console.log(nums);
// nums.push("abs");
// console.log(nums);


//-----------d4----------
// return type void vs never






