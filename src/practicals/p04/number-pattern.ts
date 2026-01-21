// Write your code below
let p4 = Number(process.argv[2])
if(isNaN(p4) && p4 <= 0 ) {
    process.exit()
}

for(let i = 0; i < p4; i ++) {
    for(let j = 1; j <= p4; j ++) {
        console.log(j)
    }
}