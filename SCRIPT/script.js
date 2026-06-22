console.log("Olá, Mundo!");

let nome = "Rian";
console.log("Olá",nome,"tudo bem?");

let idade = 18;
console.log("O",nome,"tem",idade,"anos.");

let maiordeidade = idade >= 18;
console.log("O",nome,"é maior de idade? :",maiordeidade);

//null e undefined, são tratados como false em contextos booleanos.
let endereço = null;//null = vazio, undefined = não definido, não interagir com uma variavel undefined, pois a variavel é considerada não definida
console.log("Endereço de",nome,":",endereço);
console.log("Multiplicação:",endereço*2)

if (idade) {
    console.log("Multiplição",idade*2);
}else{
    console.log("Idade não existe.");
}
// COERÇÃO IMPLICITA: O JavaScript pode realizar coerção de tipo, convertendo um tipo para outro em contextos específicos.
//strings e numeros => são tratados como true em contextos booleanos, exceto o 0 e string vazia("")
// em  contexto de interpretação de booleanos, o 0 é considerado false, e qualquer outro número é considerado true. 
// Da mesma forma, uma string vazia ("") é considerada false, enquanto qualquer string não vazia é considerada true.
// Em contextosde  interação entre diferentes tipos, o javascript pode realizar coerção de tipo, convertendo um tipo para outro. 
// Por exemplo, ao usar o operador de adição (+) entre uma string e um número, o número será convertido em string e os dois serão concatenados.
console.log("5" +  1); // Resultado: "51" (string)
console.log("5" - 1); // Resultado: 4 (número)
console.log("5" * 2); // Resultado: 10 (número)
console.log("5" / 2); // Resultado: 2.5 (número)

//CONVERSÃO EXPLICITA: O JavaScript também permite a conversão explícita de tipos usando funções como Number(), String(), Boolean(), etc.

let numero  = 1;

let numeroString = String(numero); // Convertendo número para string  

let stringNumero = "123";
let stringParaNumero = Number(stringNumero); // Convertendo string para número

let segundonumero = (10).toString(); // Convertendo número para string usando o método toString()

console.log(typeof numero,numero); // Resultado: "number" 1
console.log(typeof numeroString); // Resultado: "string"
console.log(typeof stringParaNumero); // Resultado: "number"
console.log(typeof segundonumero); // Resultado: "string"   

let stringinvalida = "RIAN";
let stringinavalidaParaNumero = Number(stringinvalida); // Resultado: NaN (Not a Number)
console.log(typeof stringinavalidaParaNumero, stringinavalidaParaNumero); // Resultado: "number" NaN

//VARIÁVEIS: São usadas para armazenar valores e podem ser declaradas usando as palavras-chave var, let ou const.
//VAR: Tem escopo de função e pode ser redeclarada e reatribuída. No entanto, seu uso é desencorajado devido a problemas de escopo e hoisting.
var nomevar ="Rian";
console.log("Meu nome é",nomevar);

for( var i = 0; i < 3; i++){
    console.log("i dentro do loop:",i);
}
console.log("i fora do loop:",i); // i ainda está acessível aqui, o que pode causar problemas de escopo
//LET: usado para declarar variáveis com escopo de bloco, o que significa que a variável só estará disponível dentro do bloco onde foi declarada 
// e que podem ser reatribuídas, mas não redeclaradas dentro do mesmo escopo.
var variavelVar = "Sou uma variável var";
variavelVar = "Posso ser reatribuída";
console.log(variavelVar);

//CONST: usado para declarar constantes, ou seja, variáveis que não podem ser reatribuídas após a inicialização. No entanto, objetos e arrays declarados com const 
// podem ter seus conteúdos modificados. O  Const não pode ser declarado sem um valor inicial, e uma vez atribuído, o valor não pode ser alterado.
const variavelConst = "Sou uma constante";
console.log(variavelConst);
const pi = 3.14; // Exemplo de constante para o valor de pi
console.log("O valor de pi é:", pi);
//pi = 3.14159; // Isso causará um erro, pois pi é uma constante
//console.log("O valor de pi é:", pi); // O valor de pi permanece 3.14
const nomeDoPlaneta = "Terra"; // Exemplo de constante para o nome do planeta
const horasdodia = 24; // Exemplo de constante para o número de horas em um dia
//variavelConst = "Não posso ser reatribuída"; // Isso causará um erro

let contador = 0;
contador++; // Incrementa o contador em 1
contador += 1; // Incrementa o contador em 1
contador --; // Decrementa o contador em 1
console.log("Contador:", contador); // Resultado: Contador: 1
//== e ===: O operador == realiza comparação de igualdade com coerção de tipo, 
//enquanto o operador === realiza comparação de igualdade estrita, sem coerção de tipo.\
//exemplo de comparação usando == e ===
let valor1 = 5;
let valor2 = "5";
console.log("Comparação com ==:", valor1 == valor2); // Resultado: true
console.log("Comparação com ===:", valor1 === valor2); // Resultado: false

//operador ternário: O operador ternário é uma forma concisa de escrever uma expressão condicional.
//  Ele tem a seguinte sintaxe: condição ? expressão1 : expressão2.
console.log("É igual?", 1 == "1" ? "Sim" : "Não"); // Resultado: "Sim";
console.log("É estritamente igual?", 1 === "1" ? "Sim" : "Não"); // Resultado: "Não";

//switch: O switch é uma estrutura de controle que permite executar diferentes blocos de código com base no valor de uma expressão.
let ano = 30;

switch (ano) {
    case 18:
        console.log("Você é maior de idade.");
        break;
    case 23:
        console.log("Você tem 23 anos.");
        break;
    case 30: 
        console.log("Você é bem velho ein");
        break;
    default:
        console.log("Idade não reconhecida.");

}

//estruturas de repetição: O JavaScript possui várias estruturas de repetição, como for, while e do...while, 
// que permitem executar um bloco de código várias vezes com base em uma condição.

// 1 - for: O loop for é usado para repetir um bloco de código um número específico de vezes. Ele tem a seguinte sintaxe:
// for (inicialização; condição; incremento/decremento) {
//     // código a ser executado
// }
for (let j = 0; j < 5; j++) {
    console.log("Contagem:", j);
}

// 2 - while: O loop while é usado para repetir um bloco de código enquanto uma condição for verdadeira. Ele tem a seguinte sintaxe:
// while (condição) {
//     // código a ser executado    
// }
let contadorWhile = 0;
while(contadorWhile < 5){
    console.log(`Contagem do while: ${contadorWhile}`); 
    contadorWhile++;
}

// 3 - do...while: O loop do...while é semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa. 
// Ele tem a seguinte sintaxe:
// do {
//     // código a ser executado          
// } while (condição);

let p = 0;
do {
    console.log(`Contagem do do...while: ${p}`);
    p++;
} while (p < 5);
  
// INTERPOLAÇÃO DE STRING: A interpolação de string é uma forma de incluir expressões dentro de strings usando template literals, 
// que são delimitados por crases (``).
let nomeInterpolacao = "Rian";
console.log(`Olá, ${nomeInterpolacao}! Bem-vindo à programação JavaScript.`); // Resultado: "Olá, Rian! Bem-vindo à programação JavaScript."

//funções: As funções são blocos de código reutilizáveis que realizam uma tarefa específica. Elas podem ser declaradas usando a palavra-chave function
//  ou como funções de seta (arrow functions).
// parametros: São os valores que uma função recebe quando é chamada. Eles são definidos na declaração da função e podem ser usados dentro do corpo da função 
// para realizar operações ou cálculos.
// return: A palavra-chave return é usada para especificar o valor que uma função deve retornar. 
// Quando uma função atinge uma declaração return, ela interrompe sua execução e retorna o valor especificado.
//void: Em JavaScript, uma função que não retorna um valor explicitamente é considerada uma função void.
// Ela pode executar ações, mas não fornecerá um valor de retorno. Se uma função não tiver uma declaração return ou tiver uma declaração return sem um valor, 
// ela retornará undefined por padrão.\
let idades = [18, 23, 30, 45, 60];
// lenght: A propriedade length é usada para obter o número de elementos em um array ou o número de caracteres em uma string.

let somaIdades = 0;


for (let k = 0; k < idades.length; k++){
    let idadeAtual  =  idades[k];
    if (verificarMaioridade(idadeAtual)) {
        console.log(`A  idade ${idadeAtual} é maior de idade.`);
    }else{
        console.log(`A idade ${idadeAtual} é menor de idade.`);
    }

}


for (let k = 0; k < idades.length; k++){
    let idadeAtual  =  idades[k];
    somaIdades = somaridade(somaIdades, idadeAtual);
    exibirMensagem();
}
console.log("A soma das idades é:", somaIdades);



function verificarMaioridade(idade) {
    return idade >= 18;
}

function somaridade(idade1, idade2){
    return idade1 + idade2;
}

function exibirMensagem(){
    console.log("Esta função não retorna nada, é uma função void.");
}
exibirMensagem();