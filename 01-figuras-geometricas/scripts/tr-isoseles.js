const calcTriangleIsosceles = document.getElementById('triangulos-isoseles')
const ladosAB = calcTriangleIsosceles.querySelector('.ladosAB')
const baseIso = calcTriangleIsosceles.querySelector('.base-iso')
const alturaIso = calcTriangleIsosceles.querySelector('.altura-iso')
const periTrIso = calcTriangleIsosceles.querySelector('.perimetro')
const areaTrIso = calcTriangleIsosceles.querySelector('.area')
const resultTrIso = calcTriangleIsosceles.querySelector('.result')

const btnCalcularAltura = calcTriangleIsosceles.querySelector('.calcular-altura')

btnCalcularAltura.addEventListener('click',function(){
  let preCalc = Math.pow((ladosAB.value**2)-(baseIso.value**2)/4,1/2)
  alturaIso.value = Number(preCalc.toFixed(3))
})

periTrIso.onclick = function(){
  resultTrIso.innerHTML = ''
  resultTrIso.textContent = Number(ladosAB.value*2)+Number(baseIso.value)
  resultTrIso.style.background = '#D2FACC'
}
areaTrIso.onclick = function(){
  resultTrIso.innerHTML = ''
  resultTrIso.textContent = (Number(baseIso.value)*Number(alturaIso.value))/2
  resultTrIso.style.background = '#D2FACC'
}