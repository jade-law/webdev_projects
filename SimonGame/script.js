const wrong = new Audio('sounds/wrong.mp3')
const btnColors = ['red', 'green', 'blue', 'yellow']
const gameOverText = 'Game Over! Press any key to play again!'

let level = 0;

let inGame = false;

let btnSequence = []
let playerSequence = []


$(document).keypress(function() {
    if (!(inGame)) {
        inGame = true
        levelUp()
    }
})

$('button').click(function() {
    if (inGame) {
        let btnPressed = $(this).attr("id")
        playerSequence.push(btnPressed)
        pressedBtn(btnPressed)
    }
})

function pressedBtn(btn) {
    let audio = new Audio('sounds/' + btn + '.mp3')
    audio.play()
    $('#' + btn).addClass('pressedBtn')
    setTimeout(function() {
        $('#' + btn).removeClass('pressedBtn')
    }, 100)
    checkSequence()
}

function makeSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = btnColors[randomNumber]
    btnSequence.push(randomColor)
    pressedBtn(randomColor)
}

function levelUp() {
    level++;
    $('h1').text('Level ' + level)
    playerSequence = []
    makeSequence()
}

function checkSequence() {
    let lastBtnIndex = playerSequence.length - 1
    if (playerSequence[lastBtnIndex] != btnSequence[lastBtnIndex]) {
        gameOver()
        return
    }
    if (lastBtnIndex == btnSequence.length - 1) {
        setTimeout(function() {
            levelUp()
        }, 500)
    }
}

function gameOver() {
    $('body').addClass('gameOver')
    setTimeout(function() {
        $('body').removeClass('gameOver')
    }, 100)
    $('h1').text(gameOverText)
    inGame = false
    btnSequence = []
    level = 0
    playerSequence = []
}