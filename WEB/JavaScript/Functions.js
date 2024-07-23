function myfunc () {
    console.log('runnnnn')
}

// myfunc  ------   Reference

// myfunc() -------------- excution


// spread opertor.

function addnumbers( ...nums){
    return nums;
}

addnumbers(400, 500, 1200, 1300)


(function addnums(num1, num2){
    console.log(num1+num2);
})(5, 6)