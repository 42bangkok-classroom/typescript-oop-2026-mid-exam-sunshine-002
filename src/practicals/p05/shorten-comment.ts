const comment:string  = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  let keep = ""
  
  for(let i = 0;i < comment.length; i ++) {
    if(comment[i].length>= 5 || comment[i].length <= 10) {
      keep += comment[i]
    }
  }
  return keep
}

shortenComment(comment)