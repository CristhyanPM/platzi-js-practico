const entryItem = document.querySelector('.input-container__entry-field input')
const btnNewItem = document.querySelector('.input-container__entry-field button')
const userListContainer = document.querySelector('.list-container')
const promedio = document.querySelector('.promedio .result-area__calculation--value input')
const mediana = document.querySelector('.mediana .result-area__calculation--value input')
const moda = document.querySelector('.moda .result-area__calculation--value input')
const btnCopy = [...document.querySelectorAll('.copy-button')]
const extraCalc = document.getElementById('extra-calculation')

btnCopy.forEach((item) => {
  item.addEventListener('click', function(){
    let hisInput = item.previousElementSibling
    hisInput.select()
    document.execCommand('Copy')
  })
  
})

const promedioFn = (list) => {
  let suma =  list.reduce((a,b) => {
    return a + b
  }, 0)
  return suma/2
}

const medianaFn = (list) => {
  let orderedList = list.sort((a,b)=>{
    return a-b
  })
  if(orderedList.length % 2 === 0) {
    let _1raPosicion = Math.floor(orderedList.length/2-1)
    let _2daPosicion = Math.floor(orderedList.length/2)
    let sumaPosiciones = orderedList[_1raPosicion]+orderedList[_2daPosicion]
    return sumaPosiciones/2
  } else if (orderedList.length === 1) {
    return orderedList[0]
  } else {
    let centerPosicion = Math.floor(orderedList.length/2)
    return orderedList[centerPosicion]
  }
}

const modaFn = (lista) => {
  let conteo = []
  lista.forEach((ele) => {
    let yaExiste = conteo.find(bloque => bloque.numero === ele)
    yaExiste ? 
    (yaExiste.seRepite += 1) : conteo.push({numero: ele, seRepite: 1})
  })
  
  const bloqueMaximasRepeticiones =  conteo.reduce((valorPrevio, valorActualEvaluado) => 
      (valorPrevio.seRepite < valorActualEvaluado.seRepite) ? 
      (valorActualEvaluado) : (valorPrevio)
  ,{seRepite: 0})

  const maximasRepeticiones = bloqueMaximasRepeticiones.seRepite
  const resultado = conteo.filter(bloque => bloque.seRepite === maximasRepeticiones)
  return resultado[0].numero
}

btnNewItem.addEventListener('click', function(){
  if(entryItem.value){
    let currentEntryValue = entryItem.value
    userListContainer.appendChild(document.createElement("li")).textContent = currentEntryValue

    const userList = Array.from(userListContainer.children)
    const userListData = userList.map(item => item.textContent)
    const listNumbers = userListData.map(ele => Number(ele))
  
    promedio.value = `${promedioFn(listNumbers)}`
    mediana.value = `${medianaFn(listNumbers)}`
    moda.value = `${modaFn(listNumbers)}`
  }
})

extraCalc.onchange = () => {
  const userList = Array.from(userListContainer.children)
  const userListData = userList.map(item => item.textContent)
  const listNumbers = userListData.map(ele => Number(ele))

  let orderedList = listNumbers.sort((a,b)=>{
    return a-b
  })
  console.log(orderedList)
}

