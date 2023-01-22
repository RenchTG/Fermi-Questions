// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

var myQuestions = [
    {
        question: "Test1",
        answer: 1
    },
    {
        question: "Test2",
        answer: 2
    },
    {
        question: "Test3",
        answer: 3
    }
]

var questionNum = 0
var maxScore = 0
var score = 0

function getQuestion() {
    document.getElementById("question").innerHTML = "<p>" + myQuestions[questionNum].question + "</p>"
}

function getResults() {
    var correctAns = myQuestions[questionNum].answer
    var ans = document.getElementById("answer").value
    if (correctAns == ans) {
        score += 5
        document.getElementById("results").innerHTML = "<p>Dead on! +5 points</p>"
    }
    else if (Math.abs(correctAns - ans) == 1) {
        score += 3
        document.getElementById("results").innerHTML = "<p>So close! You were 1 away, +3 points. The correct answer was " + correctAns + "</p>"
    }
    else if (Math.abs(correctAns - ans) == 2) {
        score += 1
        document.getElementById("results").innerHTML = "<p>Almost! You were 2 away, +1 point. The correct answer was " + correctAns + "</p>"
    }
    else {
        document.getElementById("results").innerHTML = "<p>Not quite! You were " + Math.abs(correctAns-ans) + " away, +0 points. The correct answer was " + correctAns + "</p>"
    }
    maxScore += 5
    questionNum += 1
}

function generateQuiz() {
    shuffle(myQuestions)
    getQuestion()
    document.getElementById("submit").onclick = function(){
        getResults()
        getQuestion()
    }
}

generateQuiz()