// const comment:string  = "TypeScript is a strongly typed programming language"

//  function shortenComment(comment: string): string {
//   let keep = comment.split(" ")
//   let temp = ""

//   for(let i = 0;i < keep.length; i ++) {
//     if(keep[i] === "null") {
//       return ""
//     }
//     if(keep[i].length>= 5 && keep[i].length <= 10) {
//       temp += keep[i] 
//       if( i !== keep.length - 1 ) {
//         temp += " "
//       }
//     } 
//   }
//   return temp.trim()
  
// }

// console.log(shortenComment(comment))


const comment:string  = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  let aaa = comment.split(" ")
  let temp = ""
  for(let i = 0; i < aaa.length; i ++) {
    if(aaa[i] === "null") {
      return ""
    }
    if(aaa[i].length >= 5 && aaa[i].length <= 10) {
      temp += aaa[i] += " "
    }
  }
  return temp.trim()
 }
