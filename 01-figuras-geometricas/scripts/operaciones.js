// CUADRADO
const calcSquare = document.getElementById('cuadrilateros')
const side = calcSquare.querySelector('.lados')
const periSq = calcSquare.querySelector('.perimetro')
const areaSq = calcSquare.querySelector('.area')
const resultSq = calcSquare.querySelector('.result')

periSq.onclick = function(){
  resultSq.innerHTML = ''
  resultSq.textContent = side.value*4
  resultSq.style.background = '#D2FACC'
}
areaSq.onclick = function(){
  resultSq.innerHTML = ''
  resultSq.textContent = side.value**2
  resultSq.style.background = '#D2FACC'
}

// TRIANGULO
const calcTriangle = document.getElementById('triangulos')
const sideA = calcTriangle.querySelector('.ladoA')
const sideB = calcTriangle.querySelector('.ladoB')
const base = calcTriangle.querySelector('.base')
const heigth = calcTriangle.querySelector('.altura')
const periTr = calcTriangle.querySelector('.perimetro')
const areaTr = calcTriangle.querySelector('.area')
const resultTr = calcTriangle.querySelector('.result')

periTr.onclick = function(){
  resultTr.innerHTML = ''
  resultTr.textContent = Number(sideA.value)+Number(sideB.value)+Number(base.value)
  resultTr.style.background = '#D2FACC'
}
areaTr.onclick = function(){
  resultTr.innerHTML = ''
  resultTr.textContent = (Number(base.value)*Number(heigth.value))/2
  resultTr.style.background = '#D2FACC'
}

// CIRCULO
const calcCircle = document.getElementById('circulos')
const radio = calcCircle.querySelector('.radio')
const periCr = calcCircle.querySelector('.perimetro')
const areaCr = calcCircle.querySelector('.area')
const resultCr = calcCircle.querySelector('.result')
const numPi = Number(Math.PI.toFixed(3))

periCr.onclick = function(){
  resultCr.innerHTML = ''
  resultCr.textContent = Number((2*numPi*radio.value).toFixed(3))
  resultCr.style.background = '#D2FACC'
}
areaCr.onclick = function(){
  resultCr.innerHTML = ''
  resultCr.textContent = numPi*Math.pow(radio.value,2)
  resultCr.style.background = '#D2FACC'
}