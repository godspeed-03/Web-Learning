# This is the workdown of java script

```Javascript
// How to write a js settimeout
settimeout(() => {
    console.log('set)
}, 2000)

// for cleartimeout

const changethis = settimeout(() => {
    console.log('set)
}, 2000)

clearTimeout(changethis) // no much efficient

// Set interval 

setInterval(() => {
    console.log('interval')
}, 1000)
```

## 