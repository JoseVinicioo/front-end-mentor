let boxSelecionada = document.querySelector('#cicle1')
let todasBox = document.querySelectorAll('.boxstyle')
let pagPrincipal = document.querySelector('#pag1')
let resp = document.querySelector('#resu')
let number = document.querySelector('#numberselect')

function boxSelect(boxmarc){
    boxSelecionada = boxmarc
    boxmarc.classList.toggle('ativo')
    boxmarc.classList.toggle('hover')
    todasBox.forEach(todos => {
        if (todos !== boxmarc){
            todos.classList.remove('ativo');
        }
    });
}
function box1(){
    let b1 = document.querySelector("#cicle1")
    boxSelect(b1)
}
function box2(){
    let b2 = document.querySelector("#cicle2")
    boxSelect(b2)
}
function box3(){
    let b3 = document.querySelector("#cicle3")
    boxSelect(b3)
}
function box4(){
    let b4 = document.querySelector("#cicle4")
    boxSelect(b4)
}
function box5(){
    let b5 = document.querySelector("#cicle5")
    boxSelect(b5)
}
function enviar(){
    resp.style.display = 'flex'
    pagPrincipal.style.display = 'none'
    number.innerHTML = `<p>You selected ${boxSelecionada.textContent} out of 5</p>`
}