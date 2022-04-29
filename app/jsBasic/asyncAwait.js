import fetch from 'node-fetch'

export const getTodo = async (num) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
  const data = await res.json()
  return data
}
