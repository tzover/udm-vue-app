const ninjas = ['yuya', 'yu', 'u', 'at']

const formatNinjas = () => {
  let val = ''
  ninjas.forEach((ninja) => (val += ninja + ', '))
}

const greet = () => {
  console.log(ninjas[0] + ' says hello')
}

export { formatNinjas, greet }
export default ninjas
