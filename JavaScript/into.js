//  lets see how to use let, var and cost and their scope

console.log('21 june 2024')


function func(){
    var account = 'local state';
    let scope = 'scope let'
    console.log(account, scope)
}

func()

console.log( typeof Symbol())

console.log( [1, 2, 3].map((num, index) => (num)))
console.log("3" + 1 +0)

let a = 10;
function f() {
if(true){
    var b = 9
    console.log(b);
}
console.log(b);
    console.log(a);
}
f();
// console.log(b);
console.log(a);

/// datatypes 

// let var const 


const valuestring = 'stringvalue'

const objstring = new String(valuestring)

console.log(valuestring.length)