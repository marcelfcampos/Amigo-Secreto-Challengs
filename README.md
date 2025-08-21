## Descrição Amigo Secreto Challengs

Este projeto consiste em uma aplicação simples para organizar um sorteio de **Amigo Secreto**.  
O usuário pode adicionar nomes de amigos em uma lista e, em seguida, realizar o sorteio de forma **aleatória**, exibindo o resultado na tela.

<div style = "display: inline-block"> <br/> </div>

## Jogo do Amigo Secreto

![Jogo do Amigo Secreto](assets/jogo-amigo-secreto.png)

<div style = "display: inline-block"> <br/> </div>

## Funcionalidades

- **Adicionar nomes:** Usuários podem digitar o nome de amigos em um campo de texto e incluí-los na lista.
- **Validação:** Se o campo estiver vazio, será exibido um alerta solicitando um nome válido.
- **Exibição da lista:** Os nomes adicionados aparecem abaixo do campo de entrada.
- **Sorteio aleatório:** O botão "Sortear Amigo" seleciona aleatoriamente um nome da lista e exibe o resultado na tela.

<div style = "display: inline-block"> <br/> </div>

## Como usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/marcelfcampos/Amigo-Secreto-Challengs.git
   ```

## Demonstração

[👉 Acesse o app funcionando aqui](https://amigo-secreto-challengs.vercel.app/)

## Escopo do Projeto

#### 1. Criar um array para armanezar os nomes dos amigos

- Descrição

  - Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos.

  - let amigos = [ ]

---

#### 2. Implementar Funções:

**2.1 - Implementa uma função para adicionar amigos**

- Descrição

  - Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.

  - Tarefas específicas:

           - Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

           - Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.

           - Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

           - Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().

           - Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.

  ***

**2.2 - Implementa uma função para atualizar a lista de amigos**

- Descrição

  - Crie uma função que percorra o array amigos e adicione cada nome como um elemento li dentro de uma lista HTML. Use innerHTML para limpar a lista antes de adicionar novos elementos.

  - Tarefas específicas:

           - Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.

           - Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.

           - Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.

           - Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.

  ***

**2.3 - Implementa uma função para atualizar a lista de amigos**

- Descrição:

  - Crie uma função que percorra o array amigos e adicione cada nome como um elemento li dentro de uma lista HTML. Use innerHTML para limpar a lista antes de adicionar novos elementos.

  - Tarefas específicas:

           - Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.

           - Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.

           - Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.

           - Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.

## Objetivo do Desafio

O objetivo principal deste projeto é fortalecer a lógica de programação, praticando conceitos como:

- manipulação do DOM

- uso de arrays

- funções e validações

- geração de números aleatórios

## Tecnologias Utilizadas

- JavaScript
- CSS
- HTML

## Sobre o Projeto

Projeto desenvolvido como parte de um challenge prático de **lógica de programação** do programa **ONE - Oracle Next Education** em parceria com a **Alura**.

Autor: **Marcel Ferreira Campos**
