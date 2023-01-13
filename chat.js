const ARRAY_BASE = [0, 0, 0, 0, 0, 0, 0, 0];
const imagenSemiCorchea = "𝅘𝅥𝅰"
const imagenSilencio = "𝅀"

let arrayModificable2 = [];
let arrayModificable3 = [];
let arrayModificable4 = [];
let arrayModificable5 = [];
let arrayModificable6 = [];
let arrayModificable7 = [];
let arrayModificable8 = [];
let cantidadDeUnos = 1;
let arrayContenedor = [];
let arrayParaMostrar= [];
let indice = 0
let selector = document.getElementById("selector");
var valorInicio = 0
var valorFinal = 0

let uno = 1
let dos = 2
let tres = 3
let cuatro = 4



for (t = 1; t < ARRAY_BASE.length; t++) {

    switch (t) {

        case 1:

            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], [t], 1);
                arrayContenedor.push(arrayModificable);
            }

            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], [t], 2);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], [t], 2)
                    arrayContenedor.push(arrayModificable2);
                }

            }

            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], [t], 3);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], [t], 3)
                    for (p = o + 1; p < (ARRAY_BASE.length); p++) {
                        arrayModificable3 = arrayModificable2.slice(0, 9);
                        arrayModificable3.splice([p], [t], 3)
                        arrayContenedor.push(arrayModificable3)
                    }
                }

            }

            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], [t], 4);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], [t], 4)
                    for (p = o + 1; p < (ARRAY_BASE.length); p++) {
                        arrayModificable3 = arrayModificable2.slice(0, 9);
                        arrayModificable3.splice([p], [t], 4)
                        for (a = p + 1; a < (ARRAY_BASE.length); a++) {
                            arrayModificable4 = arrayModificable3.slice(0, 9);
                            arrayModificable4.splice([a], [t], 4)
                            arrayContenedor.push(arrayModificable4)
                        }
                    }
                }

            }


            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], [t], 5);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], [t], 5)
                    for (p = o + 1; p < (ARRAY_BASE.length); p++) {
                        arrayModificable3 = arrayModificable2.slice(0, 9);
                        arrayModificable3.splice([p], [t], 5)
                        for (a = p + 1; a < (ARRAY_BASE.length); a++) {
                            arrayModificable4 = arrayModificable3.slice(0, 9);
                            arrayModificable4.splice([a], [t], 5)
                            for (b = a + 1; b < (ARRAY_BASE.length); b++) {
                                arrayModificable5 = arrayModificable4.slice(0, 9);
                                arrayModificable5.splice([b], [t], 5)
                                arrayContenedor.push(arrayModificable5)
                            }
                        }
                    }
                }

            }

            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], [t], 6);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], [t], 6)
                    for (p = o + 1; p < (ARRAY_BASE.length); p++) {
                        arrayModificable3 = arrayModificable2.slice(0, 9);
                        arrayModificable3.splice([p], [t], 6)
                        for (a = p + 1; a < (ARRAY_BASE.length); a++) {
                            arrayModificable4 = arrayModificable3.slice(0, 9);
                            arrayModificable4.splice([a], [t], 6)
                            for (b = a + 1; b < (ARRAY_BASE.length); b++) {
                                arrayModificable5 = arrayModificable4.slice(0, 9);
                                arrayModificable5.splice([b], [t], 6)
                                for (c = b + 1; c < (ARRAY_BASE.length); c++) {
                                    arrayModificable6 = arrayModificable5.slice(0, 9);
                                    arrayModificable6.splice([c], [t], 6)
                                    arrayContenedor.push(arrayModificable6)

                                }
                            }
                        }
                    }
                }

            }

            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], [t], 7);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], [t], 7)
                    for (p = o + 1; p < (ARRAY_BASE.length); p++) {
                        arrayModificable3 = arrayModificable2.slice(0, 9);
                        arrayModificable3.splice([p], [t], 7)
                        for (a = p + 1; a < (ARRAY_BASE.length); a++) {
                            arrayModificable4 = arrayModificable3.slice(0, 9);
                            arrayModificable4.splice([a], [t], 7)
                            for (b = a + 1; b < (ARRAY_BASE.length); b++) {
                                arrayModificable5 = arrayModificable4.slice(0, 9);
                                arrayModificable5.splice([b], [t], 7)
                                for (c = b + 1; c < (ARRAY_BASE.length); c++) {
                                    arrayModificable6 = arrayModificable5.slice(0, 9);
                                    arrayModificable6.splice([c], [t], 7)
                                    for (v = c + 1; v < (ARRAY_BASE.length); v++) {
                                        arrayModificable7 = arrayModificable6.slice(0, 9);
                                        arrayModificable7.splice([v], [t], 7)
                                        arrayContenedor.push(arrayModificable7)

                                    }

                                }
                            }
                        }
                    }
                }

            }


            break
    }
}



function mostrarImagenesSemiCorcheas(a,b){
    document.querySelector("#contenido").innerHTML = ``;
    let arrayParaMostrar = arrayContenedor.slice(a,b)
    for (i = 0; i < arrayParaMostrar.length; i++) {
        for (o = 0; o < arrayParaMostrar[i].length; o++) {
            if (arrayParaMostrar[i][o] > 0) {
                document.querySelector("#contenido").innerHTML += `${imagenSemiCorchea}`
            }
            else {
                document.querySelector("#contenido").innerHTML += `${imagenSilencio}`
            }
        }
        document.querySelector("#contenido").innerHTML += `<br>`
    }
}

function recibirValoresDeBusqueda(valor) {
    if (valor == 1) {
        valorInicio = 0
        valorFinal = 8
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 2) {
        valorInicio = 8
        valorFinal = 36
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 3) {
        valorInicio = 36
        valorFinal = 92
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 4){
        valorInicio = 92
        valorFinal = 162
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 5){
        valorInicio = 162
        valorFinal = 218
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 6){
        valorInicio = 218
        valorFinal = 246
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 7){
        valorInicio = 246
        valorFinal = 254
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
}


class Selector {
    cambiarSeleccion(element) {
        element.addEventListener('change', () => recibirValoresDeBusqueda(document.querySelector("#selector").value))

    }
}

const selectorDeCantidadDecorcheas = new Selector();

selectorDeCantidadDecorcheas.cambiarSeleccion(selector);