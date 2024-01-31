/*
Pragti sharma
January 30,2024
ICE-3 PART 1 
*/
//all about arrays
//array literal 
let myArray=[1,2,3,4,5];

//creating an array using constructor
let myArrayConstructor= new Array();
console.log(`Empty array: ${myArrayConstructor}`);
myArrayConstructor,push(24);
console.log(`Not Empty array: ${myArrayConstructor}`);


//create array with values using constructor 
let myConstructorArray= new Array(10,20,30,40,50);
console.log(`#value array: ${myConstructorArray}`);
console.log(`#value array obj `, myConstructorArray);
 //create array using constructor
let array2=new Array(10);
console.log(`New array: ${array2}`);
//add push 80 to array
array2.push(80);
console.log(`New array: ${array2}`);
//Tuesday
let TuesdayArray=new Array(10).fill("Tuesday!");
console.log(`Class is on  ${tuesday}`);
function square(x){
    return x*x;
}
//TODO rewrite 
//let nums=new Array(1,33,22,5);
//let squaredNums=nums.map(function(value){
 //   return square
   //using arrow functions
   let squaredNums = nums.map(value => square(value));
   console.log(`Squared values: ${squaredNums}`);