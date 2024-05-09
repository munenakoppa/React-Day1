//Spread Operators
//Spread opertor with Arrays

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

let combinedArr = [...arr1, ...arr2];

//Combined Array = Merge of arr1 & arr2
console.log(combinedArr);


//Spread operator with objects

const object1 = {firstName:"Arun",lastName:"Munenakoppa",address:"Banglore"};
const object2 = {age:38,salary:12345,address:"Bangalore"};

let combinedObject = {...object1,...object2};

//The common property between object1 & object2 address overidden
console.log(combinedObject);

//Adding new property to combined object using spread operator

combinedObject = {...object1,...object2,professional:"softwarre"};
console.log(combinedObject);

//Spread Operator in Function Calls
function sum(p1,p2,p3)
{
    return p1+p2+p3;
}

array1 = [10,20,30];

console.log(sum(...array1));