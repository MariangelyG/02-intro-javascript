

const nombre = "Mariangely"
const apellido = "Gonzalez"

// const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto);


const getSaludo = (nombre) =>{
return "Hola " + nombre
}

console.log(`Este es un texto : ${getSaludo(nombre)}`);
