Bien compañeros, aquí una solución.
Considero que realmente no necesitamos ordenar nuestra lista de números.
Por eso evite el uso de "sort()" para usar "reduce()" y obtener solamente lo que necesitamos.
Trate de usar expresiones y variables con nombres muy explícitos y mantener todo dentro de lo que hemos aprendido hasta el momento.

```javascript
const numeros = [1, 1, 1, 1, 2, 6,  5, 9, 4, 2, 1, 3, 5, 2, 2, 2, 6, 4]
const conteoNumeros = new Array() // es igual declarar: conteoNumeros = []
// Este array lo usaremos en caso de que queramos datos como:
// El segundo valor que mas se repite, el que menos.
// O en general para ordenar nuestra lista según las ocurrencias.

function moda(lista, conteo) {
  lista.forEach((ele) => {
    let yaExiste = conteo.find(bloque => bloque.numero === ele)
    // Llamaremos "bloque" al objeto que va a adquirir la siguiente forma:
    // {numero: X, seRepite: n}
    yaExiste ? 
    (yaExiste.seRepite += 1) : conteo.push({numero: ele, seRepite: 1})
  })
  
  const bloqueMaximasRepeticiones =  conteo.reduce((valorPrevio, valorActualEvaluado) => 
      (valorPrevio.seRepite < valorActualEvaluado.seRepite) ? 
      (valorActualEvaluado) : (valorPrevio)
  ,{seRepite: 0})
  // "{seRepite: 0}" es el inicializador
  // Declaramos este valor para que el "valorPrevio" adquiera la propiedad "seRepite"
  // Y así pueda pasar la primera iteración y continue.

  const maximasRepeticiones = bloqueMaximasRepeticiones.seRepite
  
  const resultado = conteo.filter(bloque => bloque.seRepite === maximasRepeticiones)
  // Con estas últimas constantes verificamos si existe más de una moda y a la mostramos.

  return resultado
}

console.log(moda(numeros,conteoNumeros))
//[ { numero: 1, seRepite: 5 }, { numero: 2, seRepite: 5 } ]
```



Use operadores ternarios, creo que es muy útil [aprender a usarlos ya!](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
Pero aquí les dejo la función hecha con if...else.

```javascript
function moda(lista, conteo) {
  lista.forEach((ele)=> {
    let yaExiste = conteo.find(bloque => bloque.numero === ele) 
    if(yaExiste){
      yaExiste.seRepite += 1
    } else {
      conteo.push({numero: ele, seRepite: 1})
    }
  })
  
  const bloqueMaximasRepeticiones = conteo.reduce((valorPrevio, valorActualEvaluado) => {
      if(valorPrevio.seRepite < valorActualEvaluado.seRepite){
        return valorActualEvaluado
      } else {
        return valorPrevio
      }
    }
  ,{seRepite: 0})

  const maximasRepeticiones = bloqueMaximasRepeticiones.seRepite
  const resultado = conteo.filter(bloque => bloque.seRepite === maximasRepeticiones)
  return resultado
}
```