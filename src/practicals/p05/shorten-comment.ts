const comment:string  = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  let keep = comment.split(" ")
  let temp = ""

  for(let i = 0;i < keep.length; i ++) {
    if(keep[i].length>= 5 && keep[i].length <= 10) {
      temp += (keep[i] + " ")
    } else {
      temp += ""
    }
  }
  return temp
  
}

