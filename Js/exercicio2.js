// Usando os operadores necessários e as condicionais “if, eles e eles if” Responda as questões de 1 até 10: 


// 1)Verifique se um número é positivo ou negativo 

let numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é zero");
}
// 2)Verifique se um número é par ou ímpar: 

let numeroInicial = parseInt(prompt("Digite um número:"));

if (numeroInicial % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

// 3)Classifique uma nota de 0 a 10, da seguinte forma: se for igual ou maior que 9 a nota é “A”, se for igual a 8 nota “B”, se for igual a 7  nota “C”, se for igual a 6 nota “D”, se for igual a 5 ou menor, nota “F”.

let nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));

if (nota >= 9) {
    console.log("Nota A");
} else if (nota === 8) {
    console.log("Nota B");
} else if (nota === 7) {
    console.log("Nota C");
} else if (nota === 6) {
    console.log("Nota D");
} else if (nota <= 5) {
    console.log("Nota F");
} else {
    console.log("Nota inválida");
}

// 4) Verifique se um ano é bissexto:

let ano = parseInt(prompt("Digite um ano:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log("O ano é bissexto");
} else {
    console.log("O ano não é bissexto");
}

// 5)Verifique se um número está entre 10 e 20: 

let numero1 = parseFloat(prompt("Digite um número:"));

if (numero1 >= 10 && numero1 <= 20) {
    console.log("O número está entre 10 e 20");
} else {
    console.log("O número não está entre 10 e 20");
}

// 6)Determine o maior de dois números: 

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

if (num1 > num2) {
    console.log("O maior número é: " + num1);
} else if (num2 > num1) {
    console.log("O maior número é: " + num2);
} else {
    console.log("Os números são iguais");
}

// 7)Verifique se um caractere é uma vogal ou consoante: 

let caractere = prompt("Digite um caractere:").toLowerCase();

if ("aeiou".includes(caractere)) {
    console.log("É uma vogal");
} else {
    console.log("É uma consoante");
}


// 8)Verifique se um número é múltiplo de 3 ou 5: 

let numero9 = parseInt(prompt("Digite um número:"));

if (numero9 % 3 === 0 && numero9 % 5 === 0) {
    console.log("O número é múltiplo de 3 e 5");
} else if (numero9 % 3 === 0) {
    console.log("O número é múltiplo de 3");
} else if (numero9 % 5 === 0) {
    console.log("O número é múltiplo de 5");
} else {
    console.log("O número não é múltiplo de 3 nem de 5");
}


// 9)Determine a fase do dia com base na hora (0-23): 

let hora = parseInt(prompt("Digite a hora (0-23):"));

if (hora >= 0 && hora < 6) {
    console.log("Madrugada");
} else if (hora >= 6 && hora < 12) {
    console.log("Manhã");
} else if (hora >= 12 && hora < 18) {
    console.log("Tarde");
} else if (hora >= 18 && hora < 24) {
    console.log("Noite");
} else {
    console.log("Hora inválida");
}

// 10)Verifique se uma pessoa é maior de idade: 

let idade = parseInt(prompt("Digite a sua idade:"));

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// 11) Use Switch case para verificar o dia da semana (0 - Domingo, 1 - Segunda, etc.):

let diaSemana = parseInt(prompt("Digite um número de 0 a 6 para o dia da semana:"));

switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido! Digite um valor entre 0 e 6.");
}

// 12) Use Switch case para classificar uma fruta:

let fruta = prompt("Digite o nome de uma fruta:").toLowerCase();

switch (fruta) {
    case "maçã":
        console.log("A fruta é uma maçã.");
        break;
    case "banana":
        console.log("A fruta é uma banana.");
        break;
    case "laranja":
        console.log("A fruta é uma laranja.");
        break;
    case "uva":
        console.log("A fruta é uma uva.");
        break;
    default:
        console.log("Fruta não classificada.");
}

// 13) Use Operador lógico AND (&&) para verificar se um número está entre 10 e 20:

let numerovariavel = parseInt(prompt("Digite um número:"));

if (numerovariavel >= 10 && numerovariavel <= 20) {
    console.log("O número está entre 10 e 20.");
} else {
    console.log("O número não está entre 10 e 20.");
}

// 14) Use o operador ternário para verificar se uma pessoa pode votar (maior de 18 anos):

let idadeVotar = parseInt(prompt("Digite sua idade para votar:"));
let podeVotar = idadeVotar >= 16 ? "Pode votar." : "Não pode votar.";
console.log(podeVotar);

// 15) Use Operador lógico OR (||) para verificar se uma pessoa é criança ou idosa:

let idadePessoal = parseInt(prompt("Digite a idade:"));

if (idadePessoal <= 12 || idadePessoal >= 65) {
    console.log("A pessoa é criança ou idosa.");
} else {
    console.log("A pessoa não é criança nem idosa.");
}

// 16) Use Switch case para verificar a estação do ano com base no mês:

let mes = parseInt(prompt("Digite o número do mês (1-12):"));

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Verão");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Outono");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Inverno");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido!");
}

// 17) Use Operador ternário encadeado para classificar uma nota entre 0 e 10, da seguinte forma: se for igual ou maior que 9 a nota é “A”, se for igual a 8 nota “B”, se for igual a 7  nota “C”,
// se for igual a 6 nota “D”, se for igual a 5 ou menor, nota “F”
let notaFinal = parseFloat(prompt("Digite uma notaFinal entre 0 e 10:"));

let classificacaoFinal = (notaFinal <= 10 && notaFinal >= 9) ? "A" :
    notaFinal === 8 ? "B" :
        notaFinal === 7 ? "C" :
            notaFinal === 6 ? "D" :
                notaFinal <= 5 ? "F" : "Nota inválida";

console.log("Classificação da nota: " + classificacaoFinal)