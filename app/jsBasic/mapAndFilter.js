const ninjas = [
  { name: 'shaun1', color: 'black' },
  { name: 'shaun2', color: 'red' },
  { name: 'shaun3', color: 'blue' },
  { name: 'shaun4', color: 'white' },
  { name: 'shaun5', color: 'pink' },
]

// filter samle
const colorOfBlack = ninjas.filter((ninja) => ninja.color == 'black')

// map sample
const onlyNames = ninjas.map((ninja) => ninja.name)

export { colorOfBlack, onlyNames }
