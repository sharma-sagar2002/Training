type val= string | number;
let value :val =12;


function stringify (value :val) : string{
   if(typeof value=="number"){
         return value.toString();
   }
   else {
       return value;
   }
}

console.log(value);
value='hello';


export{};

