export const getFolowers = (user_name) => {
  const URL = `https://api.github.com/users/${user_name}/followers`
  return fetch(URL).then((res) => {
    return res.json()
  })
}