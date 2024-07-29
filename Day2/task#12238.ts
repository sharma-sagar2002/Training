//---------------Type Guard--------------
// Problem Statement  
// Write a type guard function that checks if a value is an instance of a class Dog. Then, create a function that takes an array of mixed objects and returns only the objects that are instances of Dog.



class Dog {

    name :string;
    constructor(name :string ){
        this.name=name;
    }
    bark(){
        console.log("Barks");
     }
}

class Cat {

    name :string;
    constructor(name :string ){
        this.name=name;
    }
    meows(){
        console.log("Meows");
     }
}



//using filter method 
// function typeGuard <T> (animals : T[]) : T[] {
//    let result : T[]=animals.filter((animal)=> (animal instanceof(Dog)) )
//    return result;
// }



//using reduce method
function typeGuardUsingReduce <T> (animals : T[]) : T[] {
    let result : T[]=animals.reduce((acc : T[],curr:T)=>{
            if(curr instanceof Dog) acc.push(curr);
            return acc;
    }, []);
    return result;
 }

 function typeGuardUsingMap <T> (animals : T[]) : T[] {
    let result =animals.map((animal)=>{
            if(animal instanceof Dog) return animal;
            else return null;
    });
    return result.filter((data)=> data!==null);
 }

let  dog1=new Dog("German Shephard");
let dog2 =new Dog("Husky");
let cat1=new Cat("Persian");
console.log(typeGuardUsingReduce([dog1,dog2,cat1]));





