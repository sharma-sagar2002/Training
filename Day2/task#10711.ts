//------------Transform Keys of the Object-------------
// Problem statement 
//Function that will take first parameter a object and second one a object with new properties name to be updated. When it typing the second argument it should give suggestion.


type User = {
    firstName : string,
    lastName : string,
    age : number
}

type modifiedObjType = {
    firstName : string,
    lastName : string,
}


const user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54,
};


function transformKeys (user : User, obj : modifiedObjType) : User {
    for(let key in user){
       key=obj[key]
       console.log(key);
       console.log(typeof key);
    }
    return user;
}



const transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' })
console.log(transformUser);
export {};