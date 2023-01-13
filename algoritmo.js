var vectorPrincipal=[[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1]]
var vectorVariable =[]
var vectorDeComparación=[]
var numeroAleatorioGenerado = 0
var intentos = 0
const CANTIDAD_DE_COMBINACIONES_POSIBLES = 257;
var sonIguales = true;
var numerosDistintos = 0




function generarNumeroAleatorio(){
        numeroAleatorioGenerado = Math.random()
            if(numeroAleatorioGenerado < 0.5 ){
                numeroAleatorioGenerado = 0
            }
            else{
                numeroAleatorioGenerado = 1
            }
        return numeroAleatorioGenerado
}

function generarVectorVariable(vector,tamañoArray){
    vector=[]   
    for(i=0; i < tamañoArray; i++){
        vector.push(generarNumeroAleatorio()) 
    }
    return vector
}

function comprobarSiArraysSonIguales(array1,array2){
    for(i=0; i < array1.lenght; i ++){
        if(array1[i] == array2[i]){
            numerosDistintos = numerosDistintos
        }
        else{
            numerosDistintos ++
        };        
    }
    if(numerosDistintos>0){
        sonIguales = false
    }
    else{sonIguales = true}
}

function aleatorizar(tamañoArray){
    while(intentos < CANTIDAD_DE_COMBINACIONES_POSIBLES){
        vectorDeComparación = generarVectorVariable(vectorVariable,tamañoArray)
        vectorPrincipal.forEach(element => {
            comprobarSiArraysSonIguales(element,vectorDeComparación)    
                if (sonIguales == true){
                    vectorPrincipal.push(vectorDeComparación)
                    intentos = 0
                }
                else{
                    intentos ++;
                }
            
            
        });
        
        
    }

    return vectorPrincipal
}
