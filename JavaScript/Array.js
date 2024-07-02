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