// Data types in ts

let num:number=56;
let str:string='string';
let bool:boolean= true;
let nullnum: null = null;
let undef: undefined = undefined;

let arr:number[]=[1, 2, 3];

// arr.forEach(x =>{
//     console.log(x)
// })


// specila data types :
let num2: number | null | undefined;


/// never type

let nev : never; //nev cant be intilised at any cost bcz the type of nev is never.

// suppose a function doesn't retutn anything set the type to never

const greet = (name:string):never =>{
    console.log(`go ${name} `);
 throw new Error()
}

let x:number = greet("Satyam");
console.log(x)
 
// type interrferrence


