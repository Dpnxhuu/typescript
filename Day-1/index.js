"use strict";
// let name: string = "Deepanshu";
// console.log(name);
// let age: number = 21;
// console.log(age);
Object.defineProperty(exports, "__esModule", { value: true });
// let user:null | string = null;
// console.log(user);
// let username:undefined | string = undefined;
// console.log(username);
// //array
// let arr:Number[] = [1,2,3,4,5,6,7];
// arr.push(8)
// console.log(arr);
// let str:string[] = ["Hello", "my", "name", "is", "Deepanshu"];
// console.log(str);
// //any
// let anytype:any[] = [12,1212,"asdf",true,false,'2344']
// console.log(anytype);
// let demo:[Number, string] = [10, "Deepanshu"]
// console.log(demo)
// let O:[number, string?] = [10];
// console.log(O);
// let color:readonly String[] = ["Red", "Orange"];
// // color.push("blue")
// console.log(color);
// //object
// let userobj:{name:string, age:Number, isVerified:boolean}={
//     name: 'Deep',
//     age: 21,
//     isVerified: false
// }
// console.log(userobj);
// type User ={
//     name:string,
//     age:Number,
//     verified:boolean
// }
// let user1:User = {
//     name: "Deepanshu",
//     age: 21,
//     verified: false
// }
// let user2:User = {
//     name: "Amit",
//     age: 31,
//     verified: true
// }
// console.log(user1);
// console.log(user2);
// //array of object
// let arryList:User[]=[
//     {
//         name: "Rishi",
//         age: 23,
//         verified: false
//     },
//     {
//         name: "Harsh",
//         age: 20,
//         verified: false
//     },
//     {
//         name: "Rishab",
//         age: 19,
//         verified: true
//     },
// ]
// console.log(arryList);
// //Functions in typescript
// function add(num1:number, num2:number):number{
//     return num1+num2
// }
// let adddata:number = add(4,5);
// console.log((adddata));
// function sumOfArray(arr:number[]):number{
//     let sum:number = 0;
//     for(let n of arr){
//         sum = sum + n;
//     }
//     return sum;
// }
// let sum:number = sumOfArray([1,2,3,4,5]);
// console.log(sum);
// let arrowFunction = (arr:number[]):number[] => {
//     return arr.map((n:number):number => n*2);
// }
// let Igot:number[] = arrowFunction([1,3,5,7,9,11]);
// console.log(Igot);
// function print():void {
//     console.log("hello")
// }
// print()
// type myUser = {
//   name: string      // required
//   age?: number      // optional — dena bhi theek, na dena bhi
// }
// const u1: myUser = { name: "Deepanshu" }           // valid
// const u2: myUser = { name: "Deepanshu", age: 21 }  // valid
//interface user kro jab:
// interface User {
//   name: string;
//   age: number;
// }
// // Extend karna easy hai
// interface Admin extends User {
//   role: string;
// }
// // Same name se declare karo, automatically merge ho jayega
// interface User {
//   email: string; // ye bhi add ho gaya User me
// }
//type use kro jab: 
// type ID = string | number;        // union types
// type Status = "active" | "inactive"; // literal types
// type Point = [number, number];    // tuples
// type Callback = (data: string) => void; // function types
// type User = {
//   name: string;
// } & { age: number }; // intersection
// const str:string = "Deepanshu";
// const l:number = Math.trunc(str.length - 1 /2);
// console.log(l);
function buildLPS(str) {
    const n = str.length;
    const lps = new Array(n).fill(0);
    let len = 0; // abhi tak ka matched length
    let i = 1; // index 0 ka LPS hamesha 0 hota hai, isliye 1 se start
    while (i < n) {
        if (str[i] === str[len]) {
            len++;
            lps[i] = len;
            i++;
        }
        else if (len > 0) {
            len = lps[len - 1];
        }
        else {
            lps[i] = 0;
            i++;
        }
    }
    return lps;
}
const l = buildLPS("aabaa");
console.log(l);
//# sourceMappingURL=index.js.map