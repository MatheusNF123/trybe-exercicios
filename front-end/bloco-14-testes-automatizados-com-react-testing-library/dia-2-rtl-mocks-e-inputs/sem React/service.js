const numeroAleatorio = () => {
  return Math.round(Math.random() * 100)
}

const recebeStr = (param) => param.toUpperCase()


const soAprimeiraStr = (param) => param[0]

const fetchAqui = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random'
  const response = await fetch(url)
  const objeto = await response.json()
  return objeto
  // console.log(objeto);
}

// console.log(fetchAqui());

const concatenaStr = (param, param2) => param + param2
module.exports = { numeroAleatorio, recebeStr, soAprimeiraStr, concatenaStr, fetchAqui };