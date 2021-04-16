
function createRow (num1){
  for(let i = 0; i < num1; i++){
    let box = document.createElement('div')
    box.classList.add('box')
    container.appendChild(box) 
  }
}

function createGrid(num1,num2){
  for(let j = 0; j < num2; j++){
    createRow(num1)
    let br = document.createElement('br')
    container.appendChild(br)
  }
}

function createRandomColors(){
  let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
  return randomColor
}

function reCreateGrid(num1,num2){
  container.innerHTML = ''
  createGrid(num1,num2)

  for(let i = 0; i < squares.length; i++){
    let square = squares[i]
    square.addEventListener('mouseover',(e)=>{
  
      e.target.style.backgroundColor = createRandomColors()
    })
  }
}


let container = document.querySelector('.container')
let squares = document.getElementsByClassName('box')
let clearGrid = document.querySelector('.btn')

reCreateGrid(16,16)

clearGrid.addEventListener('click',()=>{
  for(let i = 0; i < squares.length; i++){
    let square = squares[i]
    square.style.backgroundColor = ''
  }
  setTimeout(()=>{
      let userSquares = true
      let typedSquare = ''
      while(userSquares){
        typedSquare = parseInt(prompt('How many squares Do you want?'))
        if(typedSquare > 19){
          alert('Numbers above 18 is too much as it will overflow our view height')
          userSquares = true
      }else if(isNaN(typedSquare)){
          alert('You cannot leave the box empty')
          userSquares = true
          console.log(typedSquare)
      } else { 
        userSquares = false
      }
    }
    reCreateGrid(typedSquare,typedSquare)
  },150)
})


// let userSquares = true
// let typedSquare = ''
// while(userSquares){
//   typedSquare = parseInt(prompt('How many squares Do you want?'))
//   if(typedSquare >= 100){
//     console.log('more than 100')
//     console.log('number typed', typedSquare)
//     userSquares = true
//   }else {
//     console.log('less than 100')
//     console.log('number typed', typedSquare)
//     userSquares = false
//   }
// }
// // createGrid(typedSquare,typedSquare)
  









    

