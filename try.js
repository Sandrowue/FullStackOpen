const t = [1, -1, 3]

t.push(5)             // lisätään taulukkoon luku 5

t.forEach((number, index) =>
  console.log(number, index) // tulostuu 1, -1, 3, 5 omille riveilleen
)   


const y = [1, 2, 3, 4, 5]

const [first, second, third, ...rest] = y

console.log(first, second)  // tulostuu 1 2
console.log(rest)          // tulostuu [4 ,5]