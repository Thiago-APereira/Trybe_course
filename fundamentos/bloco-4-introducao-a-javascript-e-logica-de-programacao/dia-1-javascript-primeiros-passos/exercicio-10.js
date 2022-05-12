let custo= 50;
let imposto= (custo/100)*20;
const custoTotal=custo+imposto;
const valorDeVenda= 65;
let lucroDeVendas;
if(imposto >= 0 && custo >= 0 && custoTotal >= 0 && valorDeVenda > 0){
    lucroDeVendas= (valorDeVenda * 1000)-(custoTotal*1000)
}
else{
    lucroDeVendas="valor invalido"
}
console.log(lucroDeVendas)