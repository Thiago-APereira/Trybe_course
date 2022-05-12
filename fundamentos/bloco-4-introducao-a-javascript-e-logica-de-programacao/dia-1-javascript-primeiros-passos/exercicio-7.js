const nota= 100;
let resultado;
if(nota >=90 && nota < 100){
    resultado= "A"
}
else if(nota >=80 && nota < 90){
    resultado= "B"
}
else if(nota >=70 && nota < 80){
    resultado= "C"
}
else if(nota >=60 && nota < 70){
    resultado= "D"
}
else if(nota >=50 && nota < 60){
    resultado= "E"
}
else if(nota >=0 && nota < 50){
    resultado= "F"
}
else{
    resultado="nota invalida"
}
console.log(resultado)