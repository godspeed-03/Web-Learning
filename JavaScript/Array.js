// methods 

const strarr = ['foo', 'namr', 'local']
console.log(Array.from('Satyam'))
console.log(Array.from([1, 2, 3], (x) => x+2))
console.log([1, 2, 3].map((x) => (x+2)))
console.log(Array.isArray([1, 2]))
console.log(Array.of('foo', 'foooorr', '6', 9))

// at  concat includes push  pop slice

console.log([1, 2, 3, 6, 8].every((x) => x<10)) // checks for each value which is less than 10
console.log([1, 2, 3, 6, 8].filter((x) => x<=3)) 
console.log([1, 2, 3, 6, 8].find((x) => x))  // findIndex  findLast  FindLastIndex
strarr.forEach((ele) => { console.log(ele+2) })
console.log(strarr.join('-'))
strarr.splice(2, 0, 'newdate')
console.log(strarr.splice(3, 1, 'removeddata'))
console.log(strarr)
// toreverse, tosorted tostring


//Shallow copy : 
let arr = [1, 2, 3]
let narr = arr  // create a shsllow copy and point to same refernce
narr[1]= "new"    // chanes the original arrary         [ 1, 'new', 3 ]
console.log(arr) //[ 1, 'new', 3 ]
console.log(narr)  //[ 1, 'new', 3 ]

let sharr = [1, 2,3,4]
let newSharr = sharr.with(1, "new") // create a deep copy and assign it to another array
console.log(sharr)         // [ 1, 2, 3, 4 ]  original arr
console.log(newSharr)   // [ 1, 'new', 3, 4 ] modified array