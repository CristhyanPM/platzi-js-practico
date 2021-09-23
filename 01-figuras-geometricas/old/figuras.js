//Calculos para Cuadrado
console.group('Cuadrados');
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`)

const perimetroCuadrado = ladoCuadrado * 4;
console.log(
  `El perímetro del cuadrado es:\
 ${perimetroCuadrado}cm`)

const areaCuadrado = ladoCuadrado**2
console.log(`El área del cuadrado es: ${areaCuadrado}cm\`2`)
console.groupEnd();

//Calculos para Triangulo
console.group('Triangulos');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 4;
const baseTriangulo = 2;
console.log(
  'Los lados del triangulo son: '
  +ladoTriangulo1
  +'cm, '
  +ladoTriangulo2
  +'cm y '
  +baseTriangulo
  +'cm.'
  )

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log(`El perímetro del triangulo es: ${perimetroTriangulo}cm`)

const alturatriangulo = 5;
console.log(`La altura del triángulo es: ${alturatriangulo}cm`)
const areaTriangulo = (baseTriangulo*alturatriangulo)/2;
console.log(`El área del triángulo es: ${areaTriangulo}cm\`2`)
console.groupEnd();

//Calculos para Triangulo
console.group('Círculo');
const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}cm`)
const diametroCirculo = radioCirculo*2;
const nmbrPI = Math.PI;
console.log(`el numero Pi equivale a: ${nmbrPI}`)

const perimetroCirculo = (diametroCirculo*nmbrPI).toFixed(3);
console.log(`El perimetro del circulo es: ${perimetroCirculo}cm`)

const areaCirculo =(Math.pow(radioCirculo,2) * nmbrPI).toFixed(3);
console.log(`El area del circulo es: ${areaCirculo}cm\`2`)
console.groupEnd();

const outputBox = document.querySelector('.triangulo p');
const calcularPerimetroTriangulo = () => {
  const sideA = document.querySelector('.triangulo .calc-card-container .sideA input').value
  const sideB = document.querySelector('.triangulo .calc-card-container .sideB input').value
  const baise = document.querySelector('.triangulo .calc-card-container .base input').value;
  const ladoA = Number(sideA);
  const ladoB = Number(sideB);
  const base = Number(baise);

  const iperimetroTriangulo = ladoA+ladoB+base;
  outputBox.innerHTML = '';
  outputBox.textContent = iperimetroTriangulo;
}

const calcularAreaTriangulo = () => {
  const sideA = document.querySelector('.triangulo .calc-card-container .sideA input').value
  const sideB = document.querySelector('.triangulo .calc-card-container .sideB input').value
  const baise = document.querySelector('.triangulo .calc-card-container .base input').value;
  const ladoA = Number(sideA);
  const ladoB = Number(sideB);
  const base = Number(baise);

  const iareaTriangulo = (base*alturatriangulo)/2
  outputBox.innerHTML = '';
  outputBox.textContent = iareaTriangulo;
}