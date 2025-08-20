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
    const input = document.getElementById("amigo"); // Pega o input do campo de texto
    const nome = input.value.trim(); // Captura o valor digitado e remove espaços extras

    // console.log("Valor do input:", nome); // Mostra o valor digitado no console


    // Validação
    if (nome === "") {
        alert("Por favor, insira um nome.")
        // console.log("Nenhum nome foi digitado!"); // Log caso campo vazio
        return;
    }

    amigos.push(nome);
    // console.log("Array de amigos atualizado:", amigos); // Mostra o array completo no console


    // Atualiza lista de amigos na tela
    atualizarLista();

    // Limpa campo
    input.value = "";
    input.focus();
}
