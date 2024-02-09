import * as readline from "readline"
import Persona from './Persona';

class Cuenta {
    titular: string
    valorActual: number

    constructor(titular: string, valorActual: number) {
        this.titular = titular
        this.valorActual = valorActual
    }

    setTitular(titular: string) { this.titular = titular }
    getTitular() { return this.titular }

    setValorActual(valorActual: number) { this.valorActual = valorActual }
    getValorActual() { return this.valorActual }

    // OTROS METODOS

    mostrar() {
        return ["titular", this.titular,
            "Valor disponible", this.valorActual]
    }

}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ola dame lo que quieres meter", (valor) => {
    console.log("valor ingresado", valor)
    rl.close()
}) 
