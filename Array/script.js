let listaNome = ['Rian', 'Ramon', 'Andreia', 'Felicia'];
console.log(listaNome);
// length = tamanho da lista
console.log(listaNome.length);

let lista = [];

//push adiciona um elemento no final da lista.

lista.push('Rian');
lista.push('Ramon');
lista[2] = 'Andreia';
console.log(lista);
console.log(lista.length);

let elementoRemovido = lista.pop(); // remove o último elemento da lista e retorna o elemento removido.
console.log(elementoRemovido);
console.log(lista);
console.log(lista.length); 

lista.fill('Felicia', 0, 2); // preenche a lista com o valor 'Felicia' do índice 0 até o índice 2 (não inclusivo).
console.log(lista);
console.log(lista.length);

listaNome.map(nome => console.log(nome)); // percorre a lista e executa a função para cada elemento da lista.