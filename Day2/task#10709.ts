// ---------------Util-type Nullable Properties-------------
// problem statement 


interface user {
    age: number,
    name: string,
    address : {
        hno: number,

    }
};

type NullabelProperties<user> = {
     [p in keyof user] : user[p] extends object ?  NullabelProperties<user[p]>  : user[p] | null
}

type NullableExample = NullabelProperties<user>;

const u1 : NullableExample = {
    age : null,
    name : null,
    address : {
         hno: null
    }
}