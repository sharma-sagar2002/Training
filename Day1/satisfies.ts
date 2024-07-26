type nameType = string | number;

type detailsType = {
    name : string,
    age :number
} | 'I am sagar';


type User = {
    name : nameType,
    details : detailsType
}

const user1 : User = {
    name : "Sagar",
    details: "I am sagar",
}

// satisfies User

//user1.name.toLowerCase(); // gives error 