let b1 = document.querySelector('#box1')
let b2 = document.querySelector('#box2')
let b3 = document.querySelector('#box3')
let b4 = document.querySelector('#box4')
let img1 = document.querySelector('#image1')
let img2 = document.querySelector('#image2')
let img3 = document.querySelector('#image3')
let img4 = document.querySelector('#image4')
let todos = document.querySelectorAll('.box')
let imgs = document.querySelectorAll('.imagens')


function fecharTodosExceto(excecao){
    todos.forEach(box => {
        if(box !== excecao) {
            box.classList.remove('visto');
        }
    })
}
function todasDesativasMenos(ativa){
    ativa.setAttribute("src", "assets/images/icon-minus.svg")
    imgs.forEach(box =>{
        if(box !== ativa){
            box.setAttribute("src", "assets/images/icon-plus.svg")
        }
    })
}
function bt1(){
    fecharTodosExceto(b1)
    b1.classList.toggle('visto')
    if (b1.classList.contains('visto')){
        todasDesativasMenos(img1)
    } else {
        img1.setAttribute("src", "assets/images/icon-plus.svg")
    }
}

function bt2(){
    fecharTodosExceto(b2)
    b2.classList.toggle('visto')
    if (b2.classList.contains('visto')){
        todasDesativasMenos(img2)
    } else {
        img2.setAttribute("src", "assets/images/icon-plus.svg")
    }
}


function bt3(){
    fecharTodosExceto(b3)
    b3.classList.toggle('visto')
    if (b3.classList.contains('visto')){
        todasDesativasMenos(img3)
    } else {
        img3.setAttribute("src", "assets/images/icon-plus.svg")
    }
}


function bt4(){
    fecharTodosExceto(b4)
    b4.classList.toggle('visto')
    if (b4.classList.contains('visto')){
        todasDesativasMenos(img4)
    } else {
        img4.setAttribute("src", "assets/images/icon-plus.svg")
    }
}
