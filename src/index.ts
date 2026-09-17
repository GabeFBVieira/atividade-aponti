let tipo1: string = "Hello World"
let tipo2: number = 1987
let tipo3: boolean = true

//erro: tipo2 já havia sido declarado, mas basicamente o erro é por conta da mudança de uma variavel numerica para string.
// let tipo2 = "hello"

console.log(tipo1)

const idadeMinima: number = 18
let idadePessoa: number = 15


function maiorDeIdade(){
    if(idadePessoa >= idadeMinima) {
        return "Maior de idade";
        
    }else
        return "Menor de idade";
}

console.log(maiorDeIdade())


const nota:number = 7
let notaAluno:number = 5

function notaMinima(){
    if(notaAluno >= nota){
        return "Aprovado";
    }else if(notaAluno >= 5 && notaAluno < nota){
        return "Em Recuperação";
    }else 
        return "Reprovado";
    

}
console.log(notaMinima())

let dia:number = 4

    switch(dia) {
        case 0:
            console.log("Domingo");
            break;
        case 1:  
            console.log("Segunda");
            break;
        case 2:  
            console.log("Terça");
            break;
        case 3:  
            console.log("Quarta");
            break;
        case 4:  
            console.log("Quinta");
            break;
        case 5:  
            console.log("Sexta");
            break;
        case 6:  
            console.log("Sabado");
            break;  
    }

for (let i = 1; i < 11; i++){
        console.log(`${i}`)
}

let contador= 0;

while (contador < 21){
    if (contador % 2 == 0)
    console.log(contador)
    contador++
} 

let total:number = 0

const numerosAleatorios: number[] = [10,20,30,90,177]

for (const numero of numerosAleatorios){
    total+=numero;
}
console.log(total)



for (let contador = 0; contador <16;contador++){
    if(contador %2 != 0)
    console.log(contador)
}

const numerosImparPar: number[] = [1,2,5,7,10,20,50,55,15,16]

for(const numeros of numerosImparPar){
    if (numeros %2 == 0){
        console.log(`Par: ${numeros}`)

    }else
        console.log(`Impar: ${numeros}`)
    
}



