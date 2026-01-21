// Write your code below

let u = Number(process.argv[2])
if(isNaN(u)) {
    console.log("Invalid input")
    process.exit()
}

if(u < 0 || u > 100) {
    console.log("Invalid input");
} else if (u >= 80) {
    console.log("Grade is A")
} else if (u >= 70) {
    console.log("Grade is B")
} else if ( u >= 60) {
    console.log("Grade is C")
} else if (u >= 50) {
    console.log("Grade is D")
} else {
    console.log("Grade is F")
}