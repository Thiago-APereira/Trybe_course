let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado= []; 
var resultados=0;
;
    for(var ind= 0;ind < numbers.length;ind++){
       switch (numbers[ind]>numbers[ind-1]&&numbers[ind+1]){
       case: 
           resultado.push(numbers[ind]);

        }
        default{
console.log("deu ruim")
           }
}
    
console.log(resultado)