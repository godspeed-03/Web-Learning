const promise1 = new Promise( (res, rej) => {
console.log('hello');
setTimeout(() => {
    console.log('1000')
    res()
}, 1000)
})


promise1.then(() => (
    console.log('then given')
))

const promise2 = new Promise((res, rej) => {
    console.log('PRomise started');
    setTimeout(() => (
        res({user : "satyam", mail: 'satyam2001anand@gmail.com'})
    ), 3000)
}).then((reponse)=>{
    console.log(reponse)
    console.log('promise resulted')
})