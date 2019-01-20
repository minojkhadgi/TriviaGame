//List of questions..
var questions = [{
    question: "1 . Who win world cup in 1998?",
    answers: ["Brazil", "Germany", "Italy", "France"],
    correctAnswer: "France"
}, {
    question: "2 . Who is the best player of 2006 world cup?",
    answers: ["kaka", "maldini", "carlos", "canavaro"],
    correctAnswer: "canavaro"
}, {
    question: "3 . which nation host 2010 world cup?",
    answers: ["south africa", "argentina", "usa", "japan"],
    correctAnswer: "south africa"
}, {
    question: "4 . cristiano ronaldo belongs to which continent?",
    answers: ["Asia", "Africa", "Australia", "Europe"],
    correctAnswer: "Europe"
}, {
    question: "5 . Which country wins most world cup title?",
    answers: ["usa", "canada", "brazil", "korea"],
    correctAnswer: "brazil"
}];

// onlick events
$(document).on('click', '#letsGO', function (e) {
    quiz.start();
});

$(document).on('click', '#done', function (e) {
    quiz.done();
});
//lets now create the variables..
var list = $("#quizLoc");
var quiz = {
    right: 0,
    wrong: 0,
    counter: 30,
    countdown: function () {
        quiz.counter--;
        $('#counter-number').html(quiz.counter);

        if (quiz.counter === 0) {
            console.log('TIME UP');
            quiz.done();
        }
    },
    start: function () {
        timer = setInterval(quiz.countdown, 1000);

        $('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
        $('#letsGO').remove();


        for (var i = 0; i < questions.length; i++) {
            list.append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                list.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
            }
        }
        
        list.append('<br><br><button id="done">Done</button>');
    },
    done: function () {


        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                quiz.right++;
            } else {
                quiz.wrong++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                quiz.right++;
            } else {
                quiz.wrong++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                quiz.right++;
            } else {
                quiz.wrong++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                quiz.right++;
            } else {
                quiz.wrong++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                quiz.right++;
            } else {
                quiz.wrong++;
            }
        });


        this.result();
    },
    result: function () {

        clearInterval(timer);

        $('#subcontainer h2').remove();
        list.html('<h2>All Done!</h2>');
        list.append('<h3>Correct Answers: ' + this.right + '</h3>');
        list.append('<h3>Incorrect Answers: ' + this.wrong + '</h3>');
        list.append('<h3>Unanswered: ' + (questions.length - (this.wrong + this.right)) + '</h3>');
    }

};

