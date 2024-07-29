
//problem statement
// Create a utils type DefinedProperties that takes object and make every property to be also defined (remove null or undefined from the value type)

type User= {
    name :string | undefined,
    age : number ,
    address : {
        hno : number | null,
        state : string | undefined
    }
};

// type DefinedProperties < User> = {
//     [p in keyof User] : NonNullable <User[p]>
// }

type DefinedProperties < User> = {
    [p in keyof User ] :  User[p] extends object ? DefinedProperties<User[p]> :  NonNullable<User[p]>
}

const user1 : DefinedProperties<User> = {
    name : "abc",
    age : 22,
    address: {
        hno : 12,
        state : "Delhi"
    }
}


