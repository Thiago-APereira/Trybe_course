let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var resultado= 0; 
var resultados=0;
    for(var ind= 0;ind < numbers.length;ind++){
       resultado = resultado+numbers[ind];
       resultados = resultado/(numbers.length)
}
   console.log(resultados)