'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Верное число!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;    
// document.querySelector('.guess').value;    
// document.querySelector('.guess').value = 23; 

let secretNumber = Math.trunc((Math.random()*100)+1);  
let score = 10;
let highScore = 0;

const displayMassage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

// когда ничего не введено в поле
    if(!guess) {
        // document.querySelector('.message').textContent = '⛔ Не число!'
        displayMassage('⛔ Не число!');

        // Когда игрок победит
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Ты угадал!';
        displayMassage('🎉 Ты угадал!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '25rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
       
      // когда догадка неверна
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '🤔 Попробуй поменьше' : '🤔 Попробуй побольше';
            displayMassage(guess > secretNumber ? '🤔 Попробуй поменьше' : '🤔 Попробуй побольше')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '😱 Ты проиграл!';
            displayMassage('😱 Ты проиграл!'); 
            document.querySelector('.score').textContent = 0; 
        }
    }    

});

document.querySelector('.again').addEventListener('click', function() {
    score = 10; 
    secretNumber = Math.trunc((Math.random()*100)+1);

    // document.querySelector('.message').textContent = 'Начни угадывать...';
    displayMassage('Начни угадывать...');
    document.querySelector('.score').textContent = score; 
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.guess').value = ''; 

    document.querySelector('body').style.backgroundColor = '#222';

        document.querySelector('.number').style.width = '20rem'

});    

    
    //     // когда число больше загаданного 
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '🤔 Попробуй поменьше';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😱 Ты проиграл!' 
    //         document.querySelector('.score').textContent = 0; 
    //     }

    //     // когда число меньше загаданного 
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '🤔 Попробуй побольше';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😱 Ты проиграл!' 
    //         document.querySelector('.score').textContent = 0; 
    //     }
     
    // }

