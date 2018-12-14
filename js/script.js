var scores, roundScores, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
dice = math.floor(math.random()*6)+1;

document.querySelector('#current-1').textContent = dice;