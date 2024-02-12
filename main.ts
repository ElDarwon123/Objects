import Persona from "./Persona";
import Operaciones from "./Operaciones";
import Cuenta from "./Cuenta";


//  ======== PERSONA ========
console.log("==============================")
console.log("PERSONA")
console.log("==============================")

let persona1 = new Persona("Santiago", 20, "1231321983", "direccion1", "Popayan")
let persona2 = new Persona("Steven", 17, "213216321", "direccion2", "Popayan")
let persona3 = new Persona("Pilar", 26, "123213414", "direccion3", "So")
let persona4 = new Persona("Alejandro", 22, "123134543", "direccion4", "Cali")
let persona5 = new Persona("Daniela", 15, "1231356765", "direccion5", "Alabama")


let info1 = persona1.getInfo()
console.log(info1)

console.log("============ ES MAYOR??? =================")

let edad1 = persona1.esMayor(persona1.edad)
console.log(edad1)


//  ====== OPERACIONES ====

console.log("==============================")
console.log("OPERACIONES")
console.log("==============================")

//  DECLARACION DE OBJETOS

let operacion1 = new Operaciones(23, 21)
let operacion2 = new Operaciones(45, 11)
let operacion3 = new Operaciones(25, 0)
let operacion4 = new Operaciones(56, 31)
let operacion5 = new Operaciones(34, 56)

//  LISTA QUE CONTIENE LAS OPERACIONES CON LOS OBEJTOS 
let list = ["Suma: ", operacion1.getNumero1(), operacion1.getNumero2(), operacion1.suma(),
    "Resta: ", operacion2.getNumero1(), operacion2.getNumero2(), operacion2.resta(),
    "Multiplicacion: ", operacion3.getNumero1(), operacion3.getNumero2(), operacion3.multipicacion(),
    "Division: ", operacion4.getNumero1(), operacion4.getNumero2(), operacion4.division()]

console.log(list)

//   ====== CUENTAS =======
console.log("==============================")
console.log("CUENTA")
console.log("==============================")
const switchVal = true

let cuenta1 = new Cuenta(persona1.getNombre(), 5000);
let cuenta2 = new Cuenta(persona2.getNombre(), 789);
console.log(cuenta1)

const readLine = require('readline').createInterface({ input: process.stdin, output: process.stdout })

readLine.question('Deseas hacer un ingreso o un retiro?  ( ingreso / retiro ): ', (answer: string) => {
    switch(switchVal){
        case answer === 'ingreso' :{
            readLine.question('Que monto desea ingresar?: ', (InresarValor:string) => {
                let NewVal = parseInt(InresarValor)
                cuenta1.ingresar(NewVal)
                cuenta1.mostrar()
                readLine.close();
            })
            
        }
        case answer === 'retiro': {
            readLine.question('Que monto desea retirar?: ', (Retirado: string) => {
                let NewVal = parseInt(Retirado)
                cuenta1.retirar(NewVal)
                
            })
        }
    }
    
})







/*
readLine.question('¿Deseas realizar un ingreso? (si / no ): ', (opt: string) => {
    if (opt === "si" || opt === "Si") {
        

    }else if(opt==="no"||opt==="No"){
        
    }
    readLine.close()
})

*/
