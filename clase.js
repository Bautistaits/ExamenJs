function salarioAnual (salarioAnual)
{
    let salarioAnual = 21600
    let resultadoAnual = salarioAnual / 12
    return console.log('El salario mensual de Juan es' + resultadoAnual)
}

function salarioMensual (salarioMensual)
{
    let salarioMensual = 1500
    let resultadoMensual = salarioMensual * 12
    return console.log('El salario anual de Marco es' + resultadoMensual)
}

function calcularPromedio (Nota1, Nota2, Nota3)
{    
    let Nota1 = Number(prompt('Pone tu nota'))
    let Nota2 = Number(prompt('Pone tu nota'))
    let Nota3 = Number(prompt('Pone tu nota'))
    let resultadoPromedio = (Nota1 + Nota2 + Nota3) / 3
   return alert('Tu promedio es' + resultadoPromedio)
}


