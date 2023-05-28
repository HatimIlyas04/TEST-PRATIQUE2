let btn = document.querySelector('.btn')

btn.addEventListener('click' , changeColor)

function changeColor() {
    let A = document.body.style.backgroundColor = '#' + Math.random().toString(16).slice(3, 9)
    let B = btn.style.backgroundColor = '#' + Math.random().toString(16).slice(3, 9)
    if (A == B) {
        alert("you win broooo")
    }
        

}

// function changeColor() {
//     document.body.style.backgroundColor ="#" + Math.random().toString(16).slice(3, 9)
    
//     setTimeout(function () {
//         changeColor()
//     }, 1000)
//     if (condition) {
        
//     }
// }
// changeColor()
