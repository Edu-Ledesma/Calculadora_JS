let numero1 = (parseInt( prompt("Ingrese un numero"))); 
let numero2 = (parseInt(prompt("Ingrese otro numero"))); 
let operador = (prompt("Ingrese el operador"));
let total;
if (operador=="+"){
    total = numero1+numero2
    alert("El resultado es igual a "+total)
}else if(operador== "-"){
    total = numero1-numero2
    alert("El resultado es igual a "+total)
}else if(operador == "*"){
    total = numero1*numero2
    alert("El resultado es igual a "+total)  

}    else if(operador == "/"){
        total = numero1/numero2
        alert("El resultado es igual a "+total) 
}else if(operador == "/"){
        total = numero1/(0)
        alert("No se puede realizar esta operación")

    }else {
    alert("Ingrese un operador valido")
}