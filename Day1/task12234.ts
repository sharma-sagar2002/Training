interface Person {
    name :string ,
   age :number,

}


function displayDetails (person : Person ) : string {
    return "Name: "+person.name+", Age:"+person.age;
}

const user : Person= {
  name : "Sagar",
  age : 22,
}

console.log(displayDetails(user));