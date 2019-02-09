export const getUsers = (since, per_page) => {
  const URL = `https://api.github.com/users?since=${since}&per_page=${per_page}`
  console.log(URL)
  return fetch(URL).then((res) => {
    return res.json()
  })
}