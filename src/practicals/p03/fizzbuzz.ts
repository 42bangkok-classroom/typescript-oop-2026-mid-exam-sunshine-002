// Write your code below
let p3 = Number(process.argv[2])
if(isNaN(p3) && p3 <= 0 ) {
    process.exit()
}

for(let i = 1; i <= p3; i ++) {
    if(i%15 === 0) {
        console.log("FizzBuzz")
    } else if( i % 3 === 0) {
        console.log("Fizz")
    } else if ( i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}