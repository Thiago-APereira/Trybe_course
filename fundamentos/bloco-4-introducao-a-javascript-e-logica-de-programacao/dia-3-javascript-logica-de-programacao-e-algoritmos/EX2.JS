let word="trybe";
let letras;
let letrasInvertidas=[];
letras=word.split("");
console.log(letras);
for(let ind = letras.length -1;ind > -1;ind -= 1){
    letrasInvertidas.push(letras[ind])
}
console.log(letrasInvertidas)