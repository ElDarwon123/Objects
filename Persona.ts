export default class Persona {
    nombre: string
    edad: number
    telefono: string
    direccion: string
    ciudad: string

    constructor(nombre: string, edad: number, telefono: string, direccion: string, ciudad: string) {
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
        this.direccion = direccion
        this.ciudad = ciudad
    }

    setNombre(nombre: string) { this.nombre = nombre }
    getNombre() { return this.nombre }

    setEdad(edad: number) { this.edad = edad }
    getEdad() { return this.edad }

    setTelefono(telefono: string) { this.telefono = telefono }
    getTelefono() { return this.telefono }

    setDireccion(direccion: string) { this.direccion = direccion }
    getDireccion() { return this.direccion }

    setCiudad(ciudad: string) { this.ciudad = ciudad }
    getCiudad() { return this.ciudad }

    // OTROS METODOS
    
    getInfo() {
        return ["nombre: ", this.nombre,
            "edad: ", this.edad,
            "telefono: ", this.telefono,
            "direccion: ", this.direccion,
            "ciudad: ", this.ciudad
        ]
    }

    esMayor(_edad: number) {
        if (_edad > 18) {
            return [this.nombre, "es Mayor de edad"]
        } else {
            return [this.nombre, "No es Mayor de edad"]
        }
    }
}






 
