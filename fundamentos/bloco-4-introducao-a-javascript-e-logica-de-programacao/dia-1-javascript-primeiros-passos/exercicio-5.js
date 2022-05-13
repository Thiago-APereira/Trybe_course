const a= 90;
const b= 45;
const c= 45;
let triangulo;
if(a > 0 && b > 0 && c > 0 && a+b+c === 180){
    triangulo= true;
}
else{
    triangulo= false;
}
console.log(triangulo)