function iva (valorProducto)
{
    return valorProducto*21/100
    

} 
console.log( iva(120))

function descuentoIva (valorProductoo)
{
    return valorProductoo-iva(1500)
}
console.log(descuentoIva(1500))

function dolaresAPesos (dolares)
{
    let calcularPesos = dolares * 740 
    return calcularPesos
} 
let dolaresaPesos = Number(prompt('Ingresa la cantidad de dolares que queres pasar a pesos'))
alert ('Los pesos que tenes son: '+ dolaresAPesos(dolaresaPesos))

function pesosADolares (pesos)
{
    let calcularDolares = pesos / 740 
    return calcularPesos
} 
let pesosaDolares = Number(prompt('Ingresa la cantidad de pesos que queres pasar a dolares'))
alert ('Los dolares que tenes son: '+ pesosADolares(pesosaDolares))