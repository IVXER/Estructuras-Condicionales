//Se necesita un programa que diga si una persona es apta para un equipo de baloncesto o no, para que sea apto debe cumplir que si es hombre sea mayor de edad, que mida más de 1.70 mts., que pese menos de 75 kg., o si es mujer que tenga más de 16 años, que mida como mínimo 1.70 y que pese como máximo 60 kg. Se debe leer el nombre, el sexo (F = femenino, M = masculino), la edad, la estatura y el peso.

function Basketball() {
    const edad=parseFloat(document.getElementById("edad").value);
    const estatura=parseFloat(document.getElementById("estatura").value);
    const sexo=parseFloat(document.getElementById("sexo").value);
    const peso=parseFloat(document.getElementById("peso").value);
    switch (sexo) {
        case 1:
          if(edad>=18 && estatura>=170 && peso<=75) {
            document.getElementById("resultado").innerHTML=`Felicidades, esres apto para el equipo de basketball.`
          }
          else if(edad<18 || estatura<170 || peso>75) {
            document.getElementById("resultado").innerHTML=`Lo sentimos, no eres apto para el equipo de basketball.`
          }
          break;
        case 2:
          if(edad>=16 && estatura>=170 && peso<=60) {
            document.getElementById("resultado").innerHTML=`Feliciades!!!, eres apta para el equipo de basketball.`
          }
          else if(edad<16 || estatura<170 || peso>60) {
            document.getElementById("resultado").innerHTML=`Lo sentimos, no eres apta para el equipo de basketball.`
          }
      }
}