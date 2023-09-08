

const saludar = (nombre) =>{
return `Hola, ${nombre}`
}

const saludar2 = (nombre) => `Hola, ${nombre}`

const saludar3 = () => `Hola Mundo`
    

console.log(saludar("Sara Camila"));
console.log(saludar2("Mariangely"));
console.log(saludar3());


const getUser = () =>({
uid: "ABC123",
username : "mari_nai1412"
})

console.log(getUser());


// /* TAREA
// 1. Transforma a una funcion de flecha
// 2.tiene que retornar un objeto implicito
// 3. pruebalo*/

const getUsuarioActivo = (nombre) =>({
uid : "ABC567",
username : nombre
})

const usuarioActivo = getUsuarioActivo("Mariangely");

console.log( usuarioActivo);

