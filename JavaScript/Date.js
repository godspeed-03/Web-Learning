let newdate = new Date()


console.log(newdate.toString())
console.log(newdate.toDateString())
console.log(newdate.toISOString())
console.log(newdate.toJSON())

// objects

const sym = Symbol('mukey') //symbol data type

let myobj = {
    name : 'satyam',
    age: '22',
    [sym] : 'key',  //declare a symbol in the object
    "full name": "Satyam anand"
}

console.log(myobj.name)
console.log(myobj["name"])
console.log(myobj[sym])
console.log(myobj["full name"])



// How to declare a symbol as a key in the Object

let mySymbl = Symbol('key');

let myObj ={
    name : 'satyam',
    [mySymbl] : 'key'  // notation to declare the symbol as object key value pair
}

console.log(myObj[mySymbl]) 


