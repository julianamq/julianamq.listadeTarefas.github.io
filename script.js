const inputTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoTarefa = document.getElementById('criar-tarefa');
const botaoApaga = document.getElementById('apaga-tudo');
const botaoCompletas = document.getElementById('remover-finalizados');
const botaoSalvar = document.getElementById('salvar-tarefas');
const botaoCima = document.getElementById('mover-cima');
const botaoBaixo = document.getElementById('mover-baixo');
const botaoDeletar = document.getElementById('remover-selecionado');

listaTarefas.innerHTML = localStorage.getItem('lista');

function selecionarTarefa(e) {
  const selected = document.getElementsByClassName('selected');
  if (selected.length > 0) {
    selected[0].style.backgroundColor = '';
    selected[0].classList.remove('selected');
    e.target.classList.add('selected');
    e.target.style.backgroundColor = 'grey';
  } else {
    e.target.classList.add('selected');
    e.target.style.backgroundColor = 'grey';
  }
}

function tarefaCompleta(e) {
  const completed = e.target.className;
  if (completed.includes('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

function createTask() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = inputTarefa.value;
  listaTarefas.appendChild(novaTarefa);
  inputTarefa.value = '';
  novaTarefa.addEventListener('click', selecionarTarefa);
  novaTarefa.addEventListener('dblclick', tarefaCompleta);
}

function inputEnter(button) {
  if (button.keyCode === 13) {
    createTask();
  }
}

function apagaTudo() {
  listaTarefas.innerHTML = '';
}

function limparCompletas() {
  const completed = document.getElementsByClassName('completed');
  while (completed.length > 0) {
    completed[0].parentNode.removeChild(completed[0]);
  }
}

function salvarTarefas() {
  const lista = listaTarefas.innerHTML;
  localStorage.setItem('lista', lista);
}

function moveCima() {
  const selectedTask = document.getElementsByClassName('selected')[0];
  if (selectedTask.previousElementSibling) {
    selectedTask.parentNode.insertBefore(
      selectedTask, selectedTask.previousElementSibling,
    );
  }
}

function moverCima() {
  const selectedTask = document.getElementsByClassName('selected')[0];
  const selectedString = `${selectedTask}`;
  if (selectedString !== 'undefined') {
    moveCima();
  }
}

function moveBaixo() {
  const selectedTask = document.getElementsByClassName('selected')[0];
  if (selectedTask.nextElementSibling) {
    selectedTask.parentNode.insertBefore(
      selectedTask.nextElementSibling, selectedTask,
    );
  }
}

function moverBaixo() {
  const selectedTask = document.getElementsByClassName('selected')[0];
  const selectedString = `${selectedTask}`;
  if (selectedString !== 'undefined') {
    moveBaixo();
  }
}

function deletar() {
  const selectedTask = document.getElementsByClassName('selected')[0];
  selectedTask.remove();
}

botaoTarefa.addEventListener('click', createTask);
inputTarefa.addEventListener('keyup', inputEnter);
botaoApaga.addEventListener('click', apagaTudo);
botaoCompletas.addEventListener('click', limparCompletas);
botaoSalvar.addEventListener('click', salvarTarefas);
botaoCima.addEventListener('click', moverCima);
botaoBaixo.addEventListener('click', moverBaixo);
botaoDeletar.addEventListener('click', deletar);



//Primeiro fiz v??rias tentativas sem necessitar de fun????es, mas ficou essa bagun??a como est?? abaixo, no 5 dia fazendo o projeto, decidi fazer fun????es assim como fiz no PIxel Art, ficou mais organizado e visivel. 
//Foi muito dif??cil, pois me pr??pus a pedir "muita ajuda", ent??o eu verifiquei que muitas vezes o melhor ?? ter um rac??ocinio l??gico mais claro. Para que conseguisse 
// let salvartarefas = document.querySelector("#salvar-tarefas"); // Capturando o elemento do bot??o //
// const criarLinha = document.createElement('li'); // linha
// salvartarefas.addEventListener("click", function() { // Criando uma fun????o click para o bot??o //
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
// // event.target.classList.add ('completed'); risca o bot??o 
// //listaTarefas.target.remove('completed') n??o fez nada
// //event.target.remove('completed') removeu o bot??o
// //removerFinalizados.target.classList.remove('completed') //nothing 
// const listaTarefas = document.getElementById('lista-tarefas'); // ol
// function addIten() {
//     const inputAdd = document.getElementById('texto-tarefa'); // input
//     const botaoCriar = document.getElementById('criar-tarefa'); // botao

//     botaoCriar.addEventListener('click', () => { // vigiando o bot??o
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
//         lista.innerHTML = ''; // adicione um bot??o que tenha id "apaga-tudo"
//     })
//     // id="remover-finalizados
// const removerFinalizados = document.getElementById("remover-finalizados");
// removerFinalizados.addEventListener('click', function(event) {
//     let concluido = document.querySelector('.completed');
//     concluido.parentNode.removeChild(concluido);
// })

// // let salvartarefas = document.querySelector("#salvar-tarefas"); // Capturando o elemento do bot??o //
// // const criarLinha = document.createElement('li'); // linha
// // salvartarefas.addEventListener("click", function() { // Criando uma fun????o click para o bot??o //
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
// // event.target.classList.add ('completed'); risca o bot??o 
// //listaTarefas.target.remove('completed') n??o fez nada
// //event.target.remove('completed') removeu o bot??o
// removerFinalizados.target.classList.remove('completed') //nothing 