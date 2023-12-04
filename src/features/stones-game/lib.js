export function randomNumbers(min, max, count = 1) {
  console.log(min, max)
  let numbers = []
  let m = {}
  max++
  for (let i = 0; i < count; i++) {
    let rand = Math.floor(Math.random() * (max - min - count + 1) + min)
    console.log(rand)
    numbers.push(rand in m ? m[rand] : rand)
    let l = max - i - 1
    m[rand] = l in m ? m[l] : l
  }

  return numbers
}
