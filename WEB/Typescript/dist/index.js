// Data types in ts
let num = 56;
let str = 'string';
let bool = true;
let nullnum = null;
let undef = undefined;
let arr = [1, 2, 3];
// arr.forEach(x =>{
//     console.log(x)
// })
// specila data types :
let num2;
/// never type
let nev; //nev cant be intilised at any cost bcz the type of nev is never.
// suppose a function doesn't retutn anything set the type to never
const greet = (name) => {
    console.log(`go ${name} `);
    throw new Error();
};
let x = greet("Satyam");
console.log(x);
const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
