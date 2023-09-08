

const persona = {
nombre : "Sara",
apeliido : "Luces",
edad : 2,
direccion : {
    ciudad : "Canada",
    zip: 15452435,
    lat: 13.4455,
    lng: 34.5465
}
};

const persona2 = {...persona};
persona2.nombre = "Camila"

// console.table(persona);
console.log(persona);
console.log(persona2);


