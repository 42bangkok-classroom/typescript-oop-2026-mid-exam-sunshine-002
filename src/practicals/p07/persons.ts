interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

export function sortPersons(persons: Person[]): Person[] {
  const filterr = persons.filter(p => {
    return (
      p.firstName !== undefined && p.firstName !== "" &&
      p.lastName !== undefined && p.lastName !== "" &&
      p.age !== undefined && p.age >=0 && p.age <= 100
    )
  })
  const sortt = filterr.sort((a,b) => {
    if(a.age !== b.age) {
      return a.age! - b.age!
    }
    if(a.firstName !== b.firstName) {
      return a.firstName!.localeCompare(b.firstName!)
    } else {
      return a.lastName!.localeCompare(b.lastName!)
    }
  })
  return sortt
}

const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

//console.log(sortPersons(persons))
