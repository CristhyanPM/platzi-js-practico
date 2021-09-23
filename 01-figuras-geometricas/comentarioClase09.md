Resuelto compañeros!! 
Exitos a todos en sus intentos... tengan paciencia siempre.

``` javascript
function calcularAltura(ladoA,ladoB,ladoC){
  let ladosIsometricos; // Lados que tienen mismas medidas y que hacen al triangulo isosceles
  let ladoBase; // Equivalente al lado diferente
  let altura;

  // Comprobamos que el triangulo segun las medidas proporcionadas, exista.
  // Para ello, la propiedad de la existencia de un traingulo nos dice que...
  // La suma de dos de sus lados no puede resultar menor o igual a la medida del tercer lado.
  if(ladoA+ladoB<=ladoC || ladoA+ladoC<=ladoB || ladoB+ladoC<=ladoA) {
    alert('Este triángulo no existe')
  } else { // Buscamos los lados iguales...
      switch(true) {
        case ladoA === ladoB:
          ladosIsometricos = ladoA
          ladoBase = ladoC
        break;
        case ladoA === ladoC:
          ladosIsometricos = ladoA
          ladoBase = ladoB
        break;
        case ladoC === ladoB:
          ladosIsometricos = ladoB
          ladoBase = ladoA
        break;
      }
      // De no exisitir, la variable ladosIsometricos no se inicializara
      // Usaremos esto para advertir que el triangulo ingresado no es isosceles
      // De lo contrario, la funcion imprimira la altura
      if(!ladosIsometricos){
        alert('Este no es un triángulo isósceles')
      } else {
        altura = Math.pow((ladosIsometricos**2)-(ladoBase**2)/4,1/2)
        console.log(`La altura es ${altura} unidades!!`) 
      }
    }
}

// ===== Jugamos con valores ======
const sideA = 1
const sideB = 2
const sideC = 3

calcularAltura(sideA, sideB, sideC) // resultado: El triangulo no existe

const sideA = 5
const sideB = 8
const sideC = 5

calcularAltura(sideA, sideB, sideC) // resultado: La altura es 3 unidades!!
```

Bien, ahora para la implementación en la página proyecto decidí hacerlo mediante un checkbox para desplegar los inputs necesarios para los cálculos del triángulo isósceles.
Así quedo:
![Triangulo Isosceles: Funcionamiento](https://i.ibb.co/Qj5xhCN/onemath-triangulo-isosceles-small.gif)