
var personas = [
    new Persona('Cristian', 'Grageda' , 23, '1998-02-09'),
    new Persona('Alejandro', 'Encinas' , 23, '1998-02-10')
];
var tabla = document.getElementById('tabla');

function agregarPersona(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let fecha = document.getElementById('fecha').value;
    if(nombre != '' && apellido != '' && edad != '' && fecha != ''){
        let persona = new Persona(nombre, apellido, edad, fecha);
        personas.push(persona);
        mostrarPersonas();
        window.alert("Se ha registrado exitosamente!");
    }else{
        window.alert("No se han completado todos los campos!");
    }
    
}

function mostrarPersonas(){
    let dato = '<tr class="tabla-head"><td>Nombre</td><td>Apellido</td><td>Edad</td><td>Fecha</td></tr>';
    for(let persona of personas){
        dato += `<tr><td>${persona.nombre}</td><td>${persona.apellido}</td><td>${persona.edad}</td><td>${persona.fecha}</td></tr>`;
    }
    tabla.innerHTML = dato;
}