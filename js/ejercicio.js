let registro = [];
let edades = []
let m = 0; 
let f = 0;
let menores = 0;

while(true) {
    let opcion = prompt(`=== MENÚ INTERACTIVO ===
[1] agregar
[2] 👨‍👩‍👧 Total por género
[3] 📊 Promedio de edades
[4] 🧒 Menores registrados
[5] ⚖️ Casos de sobrepeso
[6] ⬇️ IMC más bajo
[7] 🚪 Salir

👉 Ingrese el número de opción:`);

    switch(opcion) {
        case "1":
            while(true) {
                let ID = prompt("Ingrese el ID de la persona: ");
                let nombre = prompt("Nombre de la persona:");
                let edad = parseInt(prompt("Ingrese la edad de la persona"));
                edades.push(edad)
                let genero = prompt("Ingrese el género de la persona:").toLowerCase();
                let peso = parseFloat(prompt("Ingrese el peso de la persona:"));
                let altura = parseFloat(prompt("Altura de la persona:"));
                let imc = peso / (altura * altura);
                
                // Registrar persona
                documentacion(ID, nombre, edad, genero, imc);
                
                // Contar por género
                if(genero == "masculino") {
                    m++;
                } else if(genero == "femenino") {
                    f++;
                }
                
                // Contar menores
                if(edad < 18) {
                    menores++;
                }
                
                let mas = confirm("¿Desea agregar a más gente?");
                if(!mas) {
                    break;
                }
            }
            break;
            
        case "2":
            alert(`Cantidad de hombres: ${m}, cantidad de mujeres: ${f}`);
            break;
            
        case "3":
            if(edades.length ===0){
                alert("NO hay edades registradas");
            }else{
                let sumaEdades = edades.reduce((a, b) => a+b, 0);
                let promedio = sumaEdades / edades .length;
                alert(`promedio de edades: ${promedio.toFixed(2)} años`)

            }
            break;
            
            
        case "4":
            if(menores == 0) {
                alert("No hay menores registrados");
            } else {
                alert(`La cantidad de menores de edad son: ${menores}`);
            }
            break;
            
        case "5":
            if(registro.length === 0){
                alert("NO hay registros")
            }else{
                let casosSobrepeso = registro.filter(persona => persona.imc > 25).length;
                alert(`casos de sobrepeso (IMC >= 25): ${casosSobrepeso}`)
            }
            break;
            
        case "6":
            if (registro.length === 0) {
                alert("No hay personas registradas.");
            } else {
                
                let imcMasBajo = Math.min(...registro.map(persona => persona.imc));
                
               
                let personasConIMCMasBajo = registro.filter(persona => persona.imc === imcMasBajo);
                
                
                if (personasConIMCMasBajo.length === 1) {
                    let persona = personasConIMCMasBajo[0];
                    alert(` IMC más bajo: ${imcMasBajo.toFixed(2)}\n` +
                          ` Nombre: ${persona.nombre}\n` +
                          ` ID: ${persona.ID}\n` +
                          ` Edad: ${persona.edad}\n` +
                          ` Género: ${persona.genero}`);
                } else {
                    let mensaje = ` Hay ${personasConIMCMasBajo.length} personas con el IMC más bajo (${imcMasBajo.toFixed(2)}):\n`;
                    personasConIMCMasBajo.forEach(p => {
                        mensaje += `\n Nombre: ${p.nombre} (ID: ${p.ID})`;
                    });
                    alert(mensaje);
                }
            }
            break;
            
        case "7":
            alert("Gracias vuelva pronto");
           
            window.close();
            break;
            
        default:
            alert("Opción no válida, por favor seleccione una opción del 1 al 7");
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
