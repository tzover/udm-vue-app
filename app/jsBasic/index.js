import ninjas, { greet } from './ninjas.js'
import { colorOfBlack, onlyNames } from './mapAndFilter.js'
import { spreadSample } from './spread.js'
import { response } from './fetch.js'
import { getTodo } from './asyncAwait.js'

// import export sample
console.log(ninjas)
greet()

// filter and map sample
console.log('filter sample: ', colorOfBlack)
console.log('map sample: ', onlyNames)

// spread sample
console.log('spread sample: ', spreadSample)

// fetch sample
console.log('fetch sample: ', response)

// async await
const getResponse = async (num) => {
  const res = await getTodo(num)
  console.log('async await sample: ', res)
}
getResponse(2)
