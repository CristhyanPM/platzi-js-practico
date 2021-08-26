Bien, creo que es neceserio conocer desde ya algunas cosas más de esta caja de herramientas Math, como **aprender a redondear**
|
### Math es un objeto que posee constantes (como el valor de Pi) y metodos aplicables con fines matemáticos.
Algunos métodos útiles para cálculos geométricos serían:
### Extraer raíz cuadrada:
```javascript
  Math.sqrt(4)
  //retorna 2
```
### Potencias:
```javascript
  //Math.pow(numeroBase, exponente)

  Math.pow(4,2)
  //retorna 16
```
También lo podemos usar para extraer raíces:
```javascript
  Math.pow(4,1/2);
  Math.pow(4,0.5);
  //ambos retornan 2
```
### ¿Cómo redondeamos?
Aunque JS tenga serios [problemas con los decimales](https://www.youtube.com/watch?v=7vaiaaPjHrM), podemos redondear con alguno de los siguientes 3 métodos:
* Redondear al mínimo entero:
  ```javascript
    Math.floor(6.9)
    //retorna 6
  ```
* Redondear al entero mas cercano:
  ```javascript
    Math.round(6.9)
    //retorna 7

    Math.round(5.5)
    //retorna 6

    Math.round(3.49)
    //retorna 3
  ```
* Redondear con decimales:
  Para esto usaremos un método numérico en realidad:
  ```javascript
    // objeto.toFixed(nDecimales)

    let nmroBase = 6.4891235;
    nmroBase.toFixed();
    //retorna "6" , nos damos cuenta que así se redondea al entero más cercano.
    nmroBase.toFixed(2);
    //retorna "6.49" , hemos indicado que redondee con 2 decimales
  ```
  Como podemos observar, este método nos entrega una cadena de texto "string" como resultado.
  Si necesitamos usar el valor devuelto como número, tendremos que pasar el resultado por la Función constructora Number()
  ```javascript
  Number(nmroBase.toFixed(2))
  //retorna 6.49 , dato tipo número.
  ```

Referencias para [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) y [toFixed](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed), echenles un ojo.