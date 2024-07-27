

function myfunc () {
if(1){
    var limit = 34;
    let body = 35
}

console.log(limit)
// console.log(body)
}

myfunc()

console.log(limit)
console.log(body)
// myfunc  ------   Reference

// myfunc() -------------- excution


// spread opertor.

function addnumbers( ...nums){
    return nums;
}

addnumbers(400, 500, 1200, 1300);


(function addnums(num1, num2){
    console.log(num1+num2);
})(5, 6);


