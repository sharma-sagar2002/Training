
type num= number[];
function doubleArrayElements (nums : num) {
    console.log(nums);
   let doubledNums= nums.map((ele)=>{
      return ele=ele*2;
   })
   return doubledNums;
}

let nums =[1,2,3];
console.log(doubleArrayElements(nums));
