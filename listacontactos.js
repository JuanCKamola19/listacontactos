let contactos =[{
    nombre: "juan",
    edad: 19,
    estatura: 180,
    telefono:3123235358,
    estudios:[tecnologo,ingles,español]
},
{
    nombre: "carlos",
    edad: 13,
    estatura: 140,
    telefono:4232342345,
    estudios:[tecnico,frances]
},
{
    nombre: "may",
    edad: 14,
    estatura: 160,
    telefono:2545346789,
    estudios:[tecnologo,ingles,español]
},
];

const nuevocontacto=function(nuevo){
    let agregar= contactos.push({nuevo});
    console.log(contactos);
};
nuevocontacto({
    nombre: "david",
    edad: 34,
    estatura: 35,
    telefono: 2324639683,
    estudios:[sociales,matematicas]
});

const eliminarcontacto = function(eliminar) {
    let elimino =contactos.pop({eliminar});
    console.log(contactos);
}
eliminarcontacto({
    nombre: "david",
    edad: 34,
    estatura: 35,
    telefono: 2324639683,
    estudios:[sociales,matematicas]
});

const contactospresentes = function(presentes){
    for(let contactos of contactos){
        console.log(contactos);
    }
};
contactospresentes();