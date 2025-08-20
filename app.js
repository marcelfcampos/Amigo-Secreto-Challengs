//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

/*
DESAFIO:
Desenvolver uma aplicação que permita aos usuários inserir 
nomes de amigos em uma lista para, em seguida, realizar um 
sorteio aleatório e determinar quem é o "amigo secreto".

O usuário deverá adicionar nomes por meio de um campo de texto 
e de um botão "Adicionar".

Os nomes inseridos serão exibidos em uma lista visível na página,
e ao finalizar, um botão "Sortear Amigo" selecionará um dos nomes 
de forma aleatória, exibindo o resultado na tela.
*/


// Array para armanezar os amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById("amigo"); // Busca o elemento <input> pelo id="amigo"
    const nome = input.value.trim(); // Captura o valor digitado no input e remove espaços extras no início/fim

    // Valida se o usuário digitou algum nome
    if (nome === "") {
        alert("Por favor, insira um nome."); // Mostra alerta caso o campo esteja vazio
        return; // Interrompe a execução da função se o nome estiver vazio
    }

    // Adiciona o nome digitado ao array de amigos
    amigos.push(nome);

    // Atualiza lista de amigos na tela
    atualizarLista();


    // Limpa o campo de input após adicionar o nome
    input.value = "";
    // Coloca o cursor de volta no campo para facilitar a digitação do próximo nome
    input.focus();

}

// Função para atualizar a lista visível na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos"); // Busca o elemento <ul> com id="listaAmigos"
    lista.innerHTML = "";  // Limpa a lista para não duplicar nomes

    // Percorre o array 'amigos' e cria um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li"); // Cria um elemento <li>
        item.textContent = amigos[i];              // Define o texto do <li> com o nome do amigo
        lista.appendChild(item);                   // Adiciona o <li> dentro da <ul>
    }
}



