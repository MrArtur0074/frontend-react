export function randomInt(min, max, count, notEqual, doBinary) {
  let result = []
  while (result.length < count) {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    if ((result.indexOf(randomNum) === -1) !== notEqual && randomNum !== notEqual) {
      result.push(Number(randomNum).toString(doBinary))
    }
  }
  return result
}
