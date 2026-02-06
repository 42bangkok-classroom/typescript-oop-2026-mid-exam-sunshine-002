// Write your code below
let p4 = Number(process.argv[2])
if(isNaN(p4) || p4 <= 0) {
    console.log("Invalid input")
}

for(let i = 1; i <= p4; i ++) {
    let row = ""
    for(let j = i; j >= 1; j --) {
        row += j
    }
    console.log(" ".repeat(p4 -i) + row)
}