# Pig Dice Game
#### By **Isaiah Mekenye**
## Description
A web aplication that allows player to play a game of pig dice.The game rules are as follows:
* 2 players play in rounds
* Each player plays by rolling a dice as many times as he/she wants and results get added to his round score.
* When a player rolls one all his round score is lost and this gives a chance for the next player to play.
* The player can choose to HOLD and the round score is added to the global score which also gives a chance to the next player to play.
* When a player reaches 100 he/she wins the game.
#### Installation
* Clone this repository.
* On the terminal, navigate to your workspace directory.
* Run
``` https://github.com/imekenye/Pig-Dice.git ```
## Behaviour Driven Development
| Behaviour                                | Input                                | Output                           |
|---------------------------------------   |:------------------------------------:|---------------------------------:|
| Player 1 clicks ROLL button              | Clicks ROLL Button                   |Dice rolls and number is generated|
| If Player 1 rolls any number other than 1, that roll is added to round total       | Roll = 2                             |Round total = 2                   |
| If Player 1 rolls a 1, no score is added and round for player 1 ends  | Roll = 1      |Round total = 2 / Total score = 2 / Player 2 begins |
| Repeat for Player 2 | Roll = 1 | Round total = 0 / Total score = 0 / Player 1 begins |
| When a player's total score reaches 100 or more, game ends and winner page shows | Player 1 total score = 100	| Winner page |
                    


## Known Bugs
There no bugs but if any you contact me <a href="https://github.com/imekenye/Pig-Dice/issues/new">HERE</a>
## Technologies Used
* HTML
* CSS
* JAVASCRIPT/JQUERY
* BOOTSTRAP
## Support and contact details
If you got questions or need support contact me via email [at]ismekenye[at]gmail[dot]com
### License
<a href="https://github.com/imekenye/Portfolio-Landing-Page/blob/master/LICENSE">MIT</a> Copyright (c) 2018 **isaiah mekenye**
