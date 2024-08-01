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

## Call backs

``` js
() => {
    console.log('1000')
    res()
}   
 // This is a callback which is a block scoped dure to curly parenthesis and supports multiple argumnets

 () => (
    console.log('1000'),
    res()
 )
 // This is concise body scope where only a single statement is expected in the scope of function but whit comma we can add multiple
 ```