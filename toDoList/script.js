const lista = document.querySelector('#lista-tarefas');
const createButton = document.querySelector('#criar-tarefa');
const clearButton = document.querySelector('#apaga-tudo');
const checkedClearButton = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
let tarefa = document.querySelector('#texto-tarefa');
let saved = localStorage.getItem('item');

function toGray(event) {
    const alvo = event.target;
    const previousSelected = document.querySelector('.selected');
    previousSelected.classList.toggle('selected');
    previousSelected.style.backgroundColor = 'white';
    alvo.classList.toggle('selected');
    alvo.style.backgroundColor = 'gray';
}

function completedTask(event) {
    const alvo = event.target;
    if (alvo.classList.contains('completed')) {
        alvo.classList.toggle('completed');
    }
    else {
        alvo.classList.toggle('completed');
    }
}

function criarTarefa() {
    let item = document.createElement('li');
    item.innerText = tarefa.value;
    item.className = 'item';
    item.addEventListener('dblclick', completedTask);
    item.addEventListener('click', toGray);
    lista.appendChild(item);
    tarefa.value = '';
    let itens = document.querySelectorAll('.item');
    if (itens.length == 1) {
        item.className = 'selected item';
    }
}

function salvarTarefas() {
    let toSave = lista.innerHTML.replace(/></g, '>, <').split(', ');
    for (i = 0; i < toSave.length; i += 1) {
        if (localStorage.getItem('item')) {
            let vals = localStorage.getItem('item').split(' ');
            if (!vals.includes(toSave[i])) {
                vals.push(toSave[i]); 
                localStorage.setItem('item', vals.join(' '));
            }
        } else {
            localStorage.setItem('item', toSave[i]);
        }
    }
    console.log(lista.innerText.split('\n'));
    console.log(lista.innerHTML.replace(/></g, '>, <').split(', '));
    console.log(localStorage.getItem('item').split(', '));
    // localStorage.clear();
}

function clear() {
    let list = document.querySelector('#lista-tarefas');
    list.innerHTML = '';
}

function clearChecked() {
    let checked = document.querySelectorAll('.completed');
    for (i = 0; i < checked.length; i += 1) {
        checked.item(i).remove();
    }
}

function fenix() {
    if (localStorage.getItem('item')) {
        let savedItens = localStorage.getItem('item').split(", ");
            for (i = 0; i < savedItens.length; i += 1) {
            let item = document.createElement('li');
            item.innerHTML = savedItens[i];
            item.className = 'item';
            item.addEventListener('dblclick', completedTask);
            item.addEventListener('click', toGray);
            lista.appendChild(item);
            let itens = document.querySelectorAll('.item');
            if (itens.length == 1) {
            item.className = 'selected item';
    }
    }
    }
}

saveButton.addEventListener('click', salvarTarefas);
checkedClearButton.addEventListener('click', clearChecked);
clearButton.addEventListener('click', clear);
createButton.addEventListener('click', criarTarefa);

window.onload = function() {
    fenix();
}