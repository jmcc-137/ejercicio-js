let registro = [];
let m = 0; 
let f = 0;
let mas = confirm("¿Desea agregar a más gente?");

while(true) {
    let ID = prompt("Ingrese el ID de la persona: ");
    let nombre = prompt("Nombre de la persona:");
    let edad = prompt("Ingrese la edad de la persona");
    let genero = prompt("Ingrese el género de la persona:").toLowerCase(); // Convertir a minúsculas
    let peso = prompt("Ingrese el peso de la persona:");
    let altura = prompt("Altura de la persona:");
    let imc = peso / (altura * altura);
    
    documentacion(ID, nombre, edad, genero, imc);
    contador(genero);
    
    mas = confirm("¿Desea agregar a más gente?");
    if(!mas) {
        break;
    }
}

function documentacion(ID, nombre, edad, genero, imc) {
    let persona = [];
    persona.push(`ID: ${ID}`);
    persona.push(`Nombre: ${nombre}`);
    persona.push(`Edad: ${edad}`);
    
    if(genero == "masculino") {
        persona.push(`Género: ${genero}`);
    } else if(genero == "femenino") {
        persona.push(`Género: ${genero}`);
    } else {
        persona.push(`Género: ${genero} (no especificado)`);
    }
    
    switch(true) {
        case (imc <= 18.5):
            persona.push("Peso inferior al normal");
            break;
        case (imc <= 24.9):
            persona.push("Peso Normal");
            break;
        case (imc <= 29.9):
            persona.push("Peso superior al Normal");
            break;
        default:
            persona.push("Obesidad");
    }
    
    alert(`Datos de la persona: ${persona.join(", ")}`);
    registro.push(persona);
}

function contador(genero) {
    if(genero == "masculino") {
        m++;
    } else if(genero == "femenino") {
        f++;
    }
    alert(`Cantidad de hombres: ${m}, cantidad de mujeres: ${f}`);
}