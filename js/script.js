
$(function(){
    var scores, roundScore, activePlayer,gamePlaying;

init();

$('.rollDice').click(function() {
    if(gamePlaying) {
        //1.Random number
   var dice = Math.floor(Math.random()*6)+1;

   //2. Display the result

   $('.dice').css('display','block');
   $('.dice').attr('src','img/dice-' + dice + '.png');
//    diceDom.src = 'img/dice-' + dice + '.png';

   //3. Update the round score IF the rolled number was Not a 1
   if (dice !== 1) {
       //Add score
       roundScore += dice;
       $('#current-' + activePlayer).text(roundScore);
   } else {
       //Next player
       nextPlayer();
   }
    }
    
});

$('.holdDice').click(function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;

        $('#score-' + activePlayer).text(scores[activePlayer]);

        // Check if won game
        if (scores[activePlayer] >= 100) {
            $('#player-' + activePlayer).text('You Won!!');
            $('.dice').css('display','none');
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
    $('#current-0').text('0');
    $('#current-1').text('0');

    $('.playerActive-0').toggleClass('active');
    $('.playerActive-1').toggleClass('active');

    $('.dice').css('display','none');
};

$('.btn-new').on('click',init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    $('.dice').css('display','none');

    $('#score-0').text('0');
    $('#score-1').text('0');
    $('#current-0').text('0');
    $('#current-1').text('0');
    $('#player-0').text('player one');
    $('#player-1').text('player two');

};
});


