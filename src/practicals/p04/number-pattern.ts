// Write your code below
let p4 = Number(process.argv[2])
if(isNaN(p4) && p4 <= 0 ) {
    process.exit()
}

for(let i = 0; i < p4; i ++) {
    for(let j = 0; j < 2 * (p4 - i) - 2; j ++) {
        console.log(" ")
    }
    for(let m = 0; m < p4; m++) {
        console.log(m + 1)
    }
    
}