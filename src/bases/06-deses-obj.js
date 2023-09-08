const persona = {
nombre : "Maria",
edad : 32,
clave : "maria2511"
}

// const {nombre, edad, clave} = persona

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usuario = ({clave, nombre, edad, rango = "Capitana"}) =>{

    // console.log(nombre, edad, rango);

    return {
        nombreClave : clave,
        anios : edad,
        latlng : {
        lat : 14.2561,
        lng : 22.25645
        }
    }

}


 const {nombreClave, anios, latlng: {lat , lng}}= usuario( persona );


 console.log(nombreClave, anios);
 console.log(lat, lng);
 
 