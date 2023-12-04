export const isTokenExpired = token => {
  if (!token) return true

  try {
    const tokenInfo = token.split('.')[1]
    const tokenInfoDecoded = window.atob(tokenInfo)

    // eslint-disable-next-line no-unused-vars
    const {exp, iat} = JSON.parse(tokenInfoDecoded)

    const tokenLifeTime = exp - Math.round(+new Date() / 1000)

    // two weeks
    const minLifeTime = 1209600

    return tokenLifeTime < minLifeTime
  } catch (e) {
    console.error(e)

    return true
  }
}
