// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let listOfEmployees = []
export default function handler(req, res) {

  const employees = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "y", "w", "q", "z"].sort(() => .5 - Math.random());

  const newEmp = []

  while (employees.length) newEmp.push(employees.splice(0, 2))

  listOfEmployees.push(newEmp)

  res.status(200).json(listOfEmployees)
}
