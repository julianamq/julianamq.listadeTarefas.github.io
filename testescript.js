const listaTarefas = document.getElementById('lista-tarefas'); // ol
function addIten() {
    const inputAdd = document.getElementById('texto-tarefa'); // input
    const botaoCriar = document.getElementById('criar-tarefa'); // botao

    botaoCriar.addEventListener('click', () => { // vigiando o botão
        const criarLinha = document.createElement('li'); // linha
        criarLinha.innerText = inputAdd.value;
        listaTarefas.appendChild(criarLinha);// add criar linha ao pai 
        inputAdd.value = '';
    });
}
addIten();
const lista = document.querySelector('ol');
lista.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'gray'; // cor de fundo
});

listaTarefas.addEventListener('dblclick', (event) => {
    if (event.target.classList == 'completed') {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
});

const clearAll = document.getElementById('apaga-tudo');
clearAll.addEventListener('click', function() {
        lista.innerHTML = ''; // adicione um botão que tenha id "apaga-tudo"
    })
    // id="remover-finalizados
const removerFinalizados = document.getElementById("remover-finalizados");
removerFinalizados.addEventListener('click', function(event) {
    let concluido = document.querySelector('.completed');
    concluido.parentNode.removeChild(concluido);
})
//Primeiro fiz várias tentativas sem necessitar de funções, mas ficou essa bagunça como está abaixo, no 5 dia fazendo o projeto, decidi fazer funções assim como fiz no PIxel Art, ficou mais organizado e visivel. 
//Foi muito difícil, pois me prôpus a pedir "muita ajuda", então eu verifiquei que muitas vezes o melhor é ter um racíocinio lógico mais claro. Para que conseguisse 
// let salvartarefas = document.querySelector("#salvar-tarefas"); // Capturando o elemento do botão //
// const criarLinha = document.createElement('li'); // linha
// salvartarefas.addEventListener("click", function() { // Criando uma função click para o botão //
//     let lista = document.querySelector("#lista-tarefas"); // capturando o elemento <ol> no html e seus valores //
//    // localStorage.setItem('#Lista-tarefas', lista); // Adicionado o elemento <ol> dentro de um localStorage //
//    localStorage.getItem('#Lista-tarefas', lista); // Adicionado o elemento <ol> dentro de um localStorage //

// });
// if (salvartarefas == ".selected") {
//     localStorage.setItem(salvartarefas, criarLinha.value);
// } else {
//     lista.innerHTML = '';
// }


// 		function savetask(){
// 			var salvartarefa = document.getElementById('salvar-tarefas').value;
// 			localStorage.setItem('salvar-tarefas', salvartarefa) 
// 			savetask();
// 		}   



// //tentativas remover tarefa finalizada
// // event.target.classList.add ('completed'); risca o botão 
// //listaTarefas.target.remove('completed') não fez nada
// //event.target.remove('completed') removeu o botão
// //removerFinalizados.target.classList.remove('completed') //nothing 
// const listaTarefas = document.getElementById('lista-tarefas'); // ol
// function addIten() {
//     const inputAdd = document.getElementById('texto-tarefa'); // input
//     const botaoCriar = document.getElementById('criar-tarefa'); // botao

//     botaoCriar.addEventListener('click', () => { // vigiando o botão
//         const criarLinha = document.createElement('li'); // linha
//         criarLinha.innerText = inputAdd.value;
//         listaTarefas.appendChild(criarLinha);
//         inputAdd.value = '';
//     });
// }
// addIten();
// const lista = document.querySelector('ol');
// lista.addEventListener('click', function(event) {
//     event.target.style.backgroundColor = 'gray'; // adicionar cor de fundo cinza ao clique:
// });

// listaTarefas.addEventListener('dblclick', (event) => {
//     if (event.target.classList == 'completed') {
//         event.target.classList.remove('completed');
//     } else {
//         event.target.classList.add('completed');
//     }
// });

// const clearAll = document.getElementById('apaga-tudo');
// clearAll.addEventListener('click', function() {
//         lista.innerHTML = ''; // adicione um botão que tenha id "apaga-tudo"
//     })
//     // id="remover-finalizados
// const removerFinalizados = document.getElementById("remover-finalizados");
// removerFinalizados.addEventListener('click', function(event) {
//     let concluido = document.querySelector('.completed');
//     concluido.parentNode.removeChild(concluido);
// })

// // let salvartarefas = document.querySelector("#salvar-tarefas"); // Capturando o elemento do botão //
// // const criarLinha = document.createElement('li'); // linha
// // salvartarefas.addEventListener("click", function() { // Criando uma função click para o botão //
// //     let lista = document.querySelector("#lista-tarefas"); // capturando o elemento <ol> no html e seus valores //
// //    // localStorage.setItem('#Lista-tarefas', lista); // Adicionado o elemento <ol> dentro de um localStorage //
// //    localStorage.getItem('#Lista-tarefas', lista); // Adicionado o elemento <ol> dentro de um localStorage //

// // });
// // if (salvartarefas == ".selected") {
// //     localStorage.setItem(salvartarefas, criarLinha.value);
// // } else {
// //     lista.innerHTML = '';
// // }


// 		function savetask(){
// 			var salvartarefa = document.getElementById('salvar-tarefas').value;
// 			localStorage.setItem('salvar-tarefas', salvartarefa) 
// 			savetask();
// 		}   



// //tentativas remover tarefa finalizada
// // event.target.classList.add ('completed'); risca o botão 
// //listaTarefas.target.remove('completed') não fez nada
// //event.target.remove('completed') removeu o botão
// removerFinalizados.target.classList.remove('completed') //nothing 