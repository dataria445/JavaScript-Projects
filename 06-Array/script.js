/*
let l=[3,7,12,5,9]
let sum=0
for (let num of l) {
   sum+=num;
    
}
console.log(sum);

// for (let i = 0; i <= l.length; i++) {
//       sum+=l[i]
    
// }
// console.log(sum);

// max value of array
let max=[14,25,8,19,1,32]
let maxValue=max[0]
for (const value of max) {
    if (value>maxValue){
        maxValue=value
    }
}
console.log(maxValue);

// Min Value of arrary
let min=[14,25,8,19,1,32]
let minValue=min[0]
for (const value of min) {
    if (value<minValue){
        minValue=value
    }
}
console.log("minvlue:",minValue);


// Reverse of Array
let rev=[1,2,3,4,5]
let reverse=rev.reverse()
console.log(reverse);

// merge of Array
let merge1=[1,2,3]
let merge2=[4,5,6]
let merger=merge1.concat(merge2)
console.log(merger);
let merger2=[...merge1,merge2]
console.log(merger);


const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

const union = [...new Set([...arr1, ...arr2])];
console.log(union); 

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

console.log(array1 == array2);   
console.log(array1 === array2);  

*/

/*
function reverse(arr){
 let mufinalAns=[]
 for (const v of number) {
    mufinalAns.unshift(v)
 }
    return mufinalAns
 }
 let number=[1,2,3,4,5,6,40,55,80,34]
let output=reverse(number)
console.log(output);

*/

let l=[1,2,3,4,5,6,40,55,80,34]
const final=l.map((val,ind)=>val+5)
const filters=final.filter((data)=>data>=15)
console.log(filters);



