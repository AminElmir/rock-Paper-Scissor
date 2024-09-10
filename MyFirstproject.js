var userScore = 0
var computerScore = 0
var userScore_pan =$('#userScore')
var computerScore_pan = $('#ComputerScore')
var scoresBoard = $('#scores')
var results = $('#result')
var paper_div = $('#p')
var rock_div = $('#r')
var scissor_div = $('#s')
var imgComp = $('#imgComp')
var counterUser = 0
var counterComputer = 0

var random = function randomChoice(){
    const choices = ['paper', 'rock','scissor']
    return choices[Math.floor(Math.random() * choices.length)]
}
console.log(imgComp);
function AllGames(){
    
 
 paper_div.click(function () {
   console.log( random())
   imgComp
    if (random() == 'rock') {
        imgComp.attr('src','Sujet3.png')
        results.text('You Win!').css({'color': 'green'})
        userScore++
        userScore_pan.text(userScore)
        counterUser++
    } else if (random() == 'scissor') {
        imgComp.attr('src','Sujet2.png')
        results.text('You Lose!').css({'color': 'red'})
        computerScore++
        computerScore_pan.text(computerScore)
        
    } else {
        imgComp.attr('src','Sujet.png')
        results.text("It's a Tie!").css({'color': 'gold'})
    
}})

 rock_div.click(function () {
    console.log( random())

    if (random() == 'scissor') {
        imgComp.attr('src','Sujet2.png')
        results.text('You Win!').css({'color': 'green'})
        userScore++
        userScore_pan.text(userScore)
        counterUser++
    } else if (random() == 'paper') {
        imgComp.attr('src','Sujet.png')
        results.text('You Lose!').css({'color': 'red'})
        computerScore++
        computerScore_pan.text(computerScore)
        
    } else {
        imgComp.attr('src','Sujet3.png')
results.text("It's a Tie!").css({'color': 'gold'})
    }})

scissor_div.click(function () {
    console.log( random())
    if (random() == 'paper') {
        imgComp.attr('src','Sujet.png')
        results.text('You Win!').css({'color': 'green'})
        userScore++
        userScore_pan.text(userScore)
        counterUser++
    } else if (random() == 'rock') {
        imgComp.attr('src','Sujet3.png')
        results.text('You Lose!').css({'color': 'red'})
        computerScore++
        computerScore_pan.text(computerScore)
        
    } else {
        imgComp.attr('src','Sujet2.png')
results.text("It's a Tie!").css({'color': 'gold'})
    }})
console.log(userScore,computerScore);
    

}
AllGames()
function changeColorScores(){
    return function () {
        if (userScore>computerScore) {
            computerScore_pan.css({'color': 'red'})
            userScore_pan.css({'color': 'red'})
        }
        
    }
}







