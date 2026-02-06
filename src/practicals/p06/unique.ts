// function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
//   let oi = arr1.filter(temp => !arr2.includes(temp))
//   let io = arr2.filter(temp => !arr1.includes(temp))
//   let result = oi.concat(io)
//   return result
// }

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log(getUniqueNumbers(arr1,arr2))

function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  let result = []
  for(let item of arr1) {
    if(!arr2.includes(item)) {
      result.push(item)
    }
  }

  for(let item of arr2) {
    if(!arr1.includes(item)) {
      result.push(item)
    }
  }

  return result
}