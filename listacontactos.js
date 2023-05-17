/*se digitan los contactos*/
let contactos =[{
    nombre: "juan",
    edad: 19,
    estatura: 180,
    telefono:3123235358,
    estudios:["tecnologo","ingles","español"],
},
{
    nombre: "carlos",
    edad: 13,
    estatura: 140,
    telefono:4232342345,
    estudios:["tecnico","frances"],
},
{
    nombre: "may",
    edad: 14,
    estatura: 160,
    telefono:2545346789,
    estudios:["tecnologo","ingles","español"],
},
];
/*añade los contactos*/
const nuevocontacto=function(nuevo){
    let agregar= contactos.push({nuevo});
    console.log(contactos);
};
nuevocontacto({
    nombre: "camilo",
    edad: 34,
    estatura: 35,
    telefono: 2324639683,
    estudios:"ninguno",
    ubicacion:"cali"
}
);
/*elimina los contactos*/
const eliminarcontacto = function(eliminar) {
    let elimino = contactos.pop({eliminar});
    console.log(contactos);
}
eliminarcontacto({
    nombre: "camilo",
    edad: 34,
    estatura: 35,
    telefono: 2324639683,
    estudios:"ninguno",
    ubicacion:["cali","calle38-81-70"],
});
/*presenta los contactos*/
const contactospresentes = function(){
    for(let contacto of contactos){
        console.log(contactos);
    }
};
contactospresentes();