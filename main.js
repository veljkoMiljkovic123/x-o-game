let container = document.querySelector('.game-container')
let pob = document.querySelector('.pobednik')
let xxx = 'Y'
createGrid();

let boxes = document.querySelectorAll('.box')
let lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box=>{box.addEventListener('click',insertSymbol)}))

function insertSymbol(){
    (xxx==='X')? xxx='Y' : xxx='X'
    this.innerHTML=xxx
    this.removeEventListener('click',insertSymbol)

   checkLines()
   
   
}

function checkLines(){
 /*    if(boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML === boxes[2].innerHTML && boxes[0].innerHTML!==''){
        for(let i=0;i<3;i++){
            boxes[i].style.background='tomato'
        }
    }; */
    //proveri sve linije
    lines.forEach(line=>{
        let box1 = boxes[line[0]]
        let box2 = boxes[line[1]]
        let box3 = boxes[line[2]]
       
        if(box1.innerHTML===box2.innerHTML && box2.innerHTML===box3.innerHTML && box2.innerHTML!==''){
         box1.style.background='red'
         box2.style.background='red'
         box3.style.background='red'

        stopGame()
        pobednik()

        }
    })
}

function pobednik(){
    pob.innerHTML=`Pobednik je: ${xxx}`
}

function stopGame(){
    boxes.forEach(box=>{
        box.removeEventListener('click',insertSymbol)
    })
}


function createGrid(){
    let html = ''
    for(let i=0;i<9;i++){
        html+=`<div class='box'></div>`
    }
    container.innerHTML=html 
}

