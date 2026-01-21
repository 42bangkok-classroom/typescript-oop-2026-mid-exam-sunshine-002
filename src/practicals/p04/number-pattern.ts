// Write your code below
let p4 = Number(process.argv[2])
if(isNaN(p4) && p4 <= 0 ) {
    process.exit()
}

for(let i = 0; i < p4; i ++) {

    for(let m = 0; m < 2* (p4 - i) - 2; m++) {
        console.log(" ")
    }
    for(let n = 0; n < p4; n ++) {
        console.log(n+1)
        
    }
    

}