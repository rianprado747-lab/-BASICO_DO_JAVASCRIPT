// document = objeto nativo do JS que representa a página HTML
// permite manipular os elementos da página (DOM)
let divContainer = document.querySelector('#div1'); // seleciona o elemento com id div1,querySelector consulta entre todos os elementos do DOM.
//utilizamos o # para selecionar pelo id, se fosse uma classe seria o ponto (.)

let h1Element = document.getElementsByTagName('h1'); // seleciona o primeiro elemento h1 da página

console.log(h1Element);

let h4Element = document.createElement('h4'); // cria um elemento h4
h4Element.textContent = "Olá, mundo!"; // define o conteúdo do elemento h4

document.body.appendChild(h4Element); // adiciona o elemento h4 como filho do body

let h3Element = document.createElement('h3'); // cria um elemento h3
h3Element.textContent = "Teste de criação de elemento"; // define o conteúdo do elemento h3

divContainer.style.backgroundColor = 'lightblue'; // altera a cor de fundo do divContainer
divContainer.style.padding = '10px'; // adiciona padding ao divContainer

divContainer.appendChild(h3Element); // adiciona o elemento h3 como filho do divContainer

document.body.style.fontFamily = 'Arial, sans-serif'; // altera a fonte do corpo da página

divContainer.setAttribute('class', 'classe2'); // adiciona a classe classe2 ao divContainer

document.body.removeChild(divContainer); // remove o divContainer do corpo da página

if(divContainer.style.backgroundColor === 'lightblue') {
    document.body.style.backgroundColor = 'lightgray'; // altera a cor de fundo do corpo da página
}

//w3schools.com/jsref/met_document_queryselector.asp, site para estudar mais sobre querySelector e outros métodos de manipulação do DOM.

let button = document.querySelector('#button1'); // seleciona o botão com id button1
button.addEventListener('click', clickButton); // adiciona um evento de clique ao botão, chamando a função clickButton

function clickButton() { // função que será chamada quando o botão for clicado
    alert('Você clicou no botão!'); // exibe um alerta quando o botão é clicado
    console.log('Botão clicado!'); // exibe uma mensagem no console quando o botão é clicado
}

document.addEventListener('DOMContentLoaded', function() { // adiciona um evento que será chamado quando o conteúdo da página for carregado
    console.log('Conteúdo da página carregado!'); // exibe uma mensagem no console quando o conteúdo da página é carregado
});
//usado para garantir que o código só será executado após o carregamento completo do DOM, evitando erros de referência a elementos que ainda não foram carregados.
//usado principalmente quando o script é colocado no head do documento, antes do carregamento dos elementos HTML.

