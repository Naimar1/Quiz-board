// FRONT-END LOGIC

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        var chooseAnswers = [];

        $('.correct').each(function () {
            chooseAnswers .push($(this).prop('checked'));
        })

        console.log(chooseAnswers );


        $('#result').text("Your score is "+ getScore(chooseAnswers )+ "/40pts");
        
    })
});

// BUSINESS LOGIC

function getScore(chooseAnswers ) {
    var score = 0;

    chooseAnswers .forEach(function(answer) {
        if (answer === true) {
            score +=5;
        }
    });

    return score;
}