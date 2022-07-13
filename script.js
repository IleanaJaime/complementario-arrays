// una persona ingresa nombre, apellido, y 4 puntos de cada una de las fechas  corridas, y en consola se podrán ver promedios de puntos o si el piloto esta dentro de los diez primeros o no


// OBJETO PILOTO
class Piloto{
    constructor(nombre, apellido, punto1, punto2, punto3, punto4){
        this.nombre = nombre
        this.apellido = apellido
        this.punto1 = punto1
        this.punto2 = punto2
        this.punto3 = punto3
        this.punto4 = punto4
        this.promedio = (this.punto1 + this.punto2 + this.punto3+ this.punto4) / 4
    }
    mostrarPromedio(){
        console.log(`El promedio de  ${this.nombre} ${this.apellido} es ${this.promedio}`)
    }
    mostrarSiEstaDentroDeLosPrimerosDiez(){
        if (this.promedio >=70){
            console.log(`${this.nombre} ${this.apellido} - EntreLosDiez`)
        } else{
            console.log(`${this.nombre} ${this.apellido} - FueraDeLosDIez`)
        }
    }
}

//FUNCION PARA VER SI EL PUNTO STRING, O SI ES MENOR A 0 O MAYOR A 25

function verificarpuntos(numero){
    do{
        punto = parseFloat(prompt(`Ingrese los puntos obtenidos en la fecha ${numero}`))
    
    if (isNaN(punto) || (punto>=25) || (punto<=0)){
        alert("Ingrese un número del 1 al 24")
    }
}while ((isNaN(punto)) || (punto >=25) || (punto<=0))

return punto
}

//FUNCION PARA VERIFICAR QUE EL USUARIO INGRESÓ SI O NO
function verificarSiNo(){
do{
    consulta = (prompt("Desea agregar a un Pioloto ? Si | No")).toLowerCase()
    if ((consulta != "si") && (consulta != "no")){
        alert ("Error, intente nuevamente")
    }
} while((consulta != "si") && (consulta != "no"))
return consulta

}


const arrayPilotos = []
let punto1, punto2, punto3, punto4

//INGRESAR DATOS

do{
    nombre = (prompt ("Ingrese nombre del Piloto"))
    apellido = (prompt("Ingrese apellido del Piloto"))
    punto1 = verificarpuntos(1)
    punto2 = verificarpuntos(2)
    punto3 = verificarpuntos(3)
    punto4 = verificarpuntos(4)
    consulta = verificarSiNo()
    arrayPilotos.push(new Piloto (nombre, apellido, punto1, punto2, punto3, punto4))
} while(consulta == "si")

//MOSTRAR RESULTADO DE PROMEDIO O DENTRO/FUERADELOS10

do{
    consulta = parseFloat(prompt("Si desea ver si esta dentro de los 10 primeros ingrese 1\n Si desea ver en formato Dentrodelos10/Fueradelos10 ingrese 2 \n El resultado se verá en consola"))
    if(consulta === 1){
        for(Piloto of arrayPilotos ){
        Piloto.mostrarPromedio()
        }
    } else if (consulta === 2){
        for(Piloto of arrayPilotos ){
        Piloto.mostrarSiEstaDentroDeLosPrimerosDiez()
        }
    } else{
        alert("Error, ingrese un número válido")
    }
} while ((consulta !== 1) && ( consulta!== 2))


