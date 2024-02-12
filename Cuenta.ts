
let valorNuevo: number = 0

let valorRetirado: number
export default class Cuenta {
    titular: string
    valorActual: number
    valorIngresado: number

    constructor(titular: string, valorActual: number) {
        this.titular = titular
        this.valorActual = valorActual
        this.valorIngresado = 0
    }

    setTitular(titular: string) { this.titular = titular }
    getTitular() { return this.titular }

    setValorActual(valorActual: number) { this.valorActual = valorActual }
    getValorActual() { return this.valorActual }

    // OTROS METODOS

    mostrar() {
        let x = ["titular", this.titular,
        "Valor disponible", this.valorActual]
        return x
    }

    ingresar(valorIngresar: number) {

        if (valorIngresar >= 0) {

            valorNuevo = this.valorActual + valorIngresar
            this.valorIngresado = valorIngresar
            let x = console.log("valor con ingreso: ", valorNuevo)
            return  x

        } else if (valorIngresar < 0) {
            return "No se puede hacer el ingreso de dinero"
        } else {
            return "Erro al hacer el ingreso"
        }
        
    }

     retirar(valorRetirar: number) {
        valorRetirado = valorRetirar - valorNuevo ;
        let answer = console.log(['valor inicial: ', this.valorActual,
        'valor ingresado: ', this.valorIngresado,
        'valor Actual: ', valorRetirado])
        return answer
    } 
    

}




