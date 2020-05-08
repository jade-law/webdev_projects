document.getElementById('rollbtn').addEventListener('click', event => {
    let player1dice = Math.floor(Math.random() * 6) + 1
    let player2dice = Math.floor(Math.random() * 6) + 1
    let player1img = 'images/dice' + player1dice + '.png'
    let player2img = 'images/dice' + player2dice + '.png'
    document.getElementById('player1dice').setAttribute('src', player1img)
    document.getElementById('player2dice').setAttribute('src', player2img)

    if (player1dice > player2dice) {
        console.log('p1')
        document.getElementById('winnerText').textContent = 'Player 1 Wins!'
    } else if (player1dice < player2dice) {
        console.log('p2')
        document.getElementById('winnerText').textContent = 'Player 2 Wins!'
    } else {
        console.log('draw')
        document.getElementById('winnerText').textContent = "It's a Draw!"
    }
})