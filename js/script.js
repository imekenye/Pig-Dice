var scores, roundScores, activePlayer,gamePlaying;

init();

// document.querySelector('#current-' + activePlayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;


document.querySelector('.rollDice').addEventListener('click', function() {
    if(gamePlaying) {
        //1.Random number
   var dice = Math.floor(Math.random()*6)+1;

   //2. Display the result

   var diceDom = document.querySelector('.dice');
   diceDom.style.display = 'block';
   diceDom.src = 'img/dice-' + dice + '.png';

   //3. Update the round score IF the rolled number was Not a 1
   if (dice !== 1) {
       //Add score
       roundScore += dice;
       document.querySelector('#current-' + activePlayer).textContent = roundScore;
   } else {
       //Next player
       nextPlayer();
   }
    }
    
});

document.querySelector('.holdDice').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if won game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#player-' + activePlayer).textContent = 'You Won!!';
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        }else{
            nextPlayer();
        }
    }    
});

function nextPlayer(){
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    };
    roundScore = 0;
    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';

    document.querySelector('.playerActive-0').classList.toggle('active');
    document.querySelector('.playerActive-1').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click',init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('player-0').textContent = 'player one';
    document.getElementById('player-1').textContent = 'player two';

};