
const mario=document.querySelector('.mario')     
const pipe=document.querySelector('.pipe')
const cloud=document.querySelector('.clouds')
const gameover=document.querySelector('.gameover')
const pointsScore=document.querySelector('.points')
var points=0



function jump() {
    mario.classList.add('jump')
    setTimeout(() => {
    mario.classList.remove('jump')
    },500)
}

const loop = setInterval(() => {
    const pipePosition=pipe.offsetLeft
    const marioPosition=+window.getComputedStyle(mario).bottom.replace('px','') 

    const cloudPosition=window.getComputedStyle(cloud).right 

    points++    
    pointsScore.textContent=`Points: ${points}`
    console.log(points)

    if (pipePosition<=120 && pipePosition > 0 && marioPosition<80) {
    pipe.style.animation='none'
    pipe.style.left=`${pipePosition}px`

    mario.style.animation='none'
    mario.style.bottom=`${marioPosition}`

    mario.src='./images/game-over.png'
    mario.style.width='75px'
    mario.style.marginLeft='50px'

    cloud.style.animation='none'
    cloud.style.right=`${cloudPosition}`

    gameover.style.animation='gameover-animation .2s linear forwards'

    clearInterval(loop)

    }
}, 10)

document.addEventListener('keydown',jump)
