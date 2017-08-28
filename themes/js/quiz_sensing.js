
/*** ALL QUIZ DATA IS STORED IN MULTI-DIMENSIONAL ARRAYS BELOW***/
            
        var SensingQuiz = [
 ['Which one of the four pattents belong to the Sensing concept?',, ['Awareness','Felling','Implementing','Theorising'], 2],
 ['Which one of the four pattents belong to the Sensing concept?',, ['Questioning','Evaluating','Sensing','Anticipating'], 3],
 ['How many devlopment patten dose the Sensing concept have?',, ['Two','Five','Three','Four'], 1],
 ['What is does this concept mean: Sensing?',, ['Express awareness','Interpret data','Recognise inner emotions','Experiences trigger'], 4],
 ['What is does this devlopment pattern mean: Felling?',, ['Interpret data','Recognise inner emotions','Experiences trigger','Express awareness'], 2],
 ['What is does this devlopment pattern mean: Sensing?',, ['Recognise inner emotions','Experiences trigger','Express awareness','Interpret data'], 3],
 ['Recongnition of inner senses triggered by _________',, ['Causes','Experience','Rational','Explanation'], 2],
 ['This concept recognises that experiences trigger personal senses and feeling which might not always be based on evidence or________',, ['Experience','Causes','Explanation','Rational'], 4],
 ['He/she is usually able to offer an________',, ['Explanation','Rational','Experience','Causes'], 1],
 ['Something without being able to define exactly the________',, ['Rational','Explanation','Causes','Experience'], 3],
];
             
            
        var retryQuizName;
        var quizDataFull = [];
        var quizData = [];
        var quizType;
        var quizFullCount;
    
        var score;
        var round;
            
        var fact;
        var truthful;
        var highScoreTF = 0;
            
        var answerA;
        var answerB;
        var answerC;
        var answerD;
        var correctChoice;
        var highScoreMC = 0;


/*** LAUNCHES THE GAME WITH NEW QUIZ DATA ***/
        function launch(quizName) {
            retryQuizName = quizName;
            quizDataFull = eval(quizName);
            quizData = [];
            score = 0;
            round = 0;

            quizFullCount = quizDataFull.length;
            console.log(quizDataFull);
            console.log(quizFullCount);

            // Shuffle the Quiz Deck
            while (quizData.length<10) {
                var quizDataAdd = quizDataFull[Math.floor(Math.random() * quizFullCount)];
                console.log(quizDataAdd);

                if ((quizData.indexOf(quizDataAdd))=='-1') {
                    quizData.push(quizDataAdd);
                }
            }
            console.log(quizData);

            totalPts = quizData.length*10;
            
            if (quizDataFull[0].length==2) {
                quizType = 'TF';
            }
            else if (quizDataFull[0].length==4) {
                quizType = 'MC';
            }
            
            /*** LOAD TF DATA ***/
            if (quizType == 'TF') {

                fact = quizData[round][0];
                truthful = quizData[round][1];

                console.log(round);
                console.log(score);
                console.log(totalPts);
                console.log(fact);
                console.log(truthful);

                $('#tfCARD div.ui-content a').removeClass('greenBtn');
                $('#tfCARD div.ui-content a').removeClass('redBtn');
                $('#tfCARD div.ui-content p').html(fact);
                $('#tfCARD').popup("open");
            }
            

                
                // Load the First Question Data
                hint = quizData[round][0];
                answerA = quizData[round][2][0];
                answerB = quizData[round][2][1];
                answerC = quizData[round][2][2];
                answerD = quizData[round][2][3];
                correctChoice = quizData[round][3];
                
                
                console.log(round);
                console.log(score);
                console.log(totalPts);
                console.log(quizData[round][2]);
                console.log(hint);
                console.log(correctChoice);

                // Shuffle the Answers
                var $MCA = $('#mcCARD #mcAnswers');
                $('div', $MCA).sort(function(){
                   return ( Math.round( Math.random() ) - 0.5 )
                }).appendTo($MCA);
                
                // Grid the Answer Buttons
                $('#mcCARD #mcAnswers div').removeClass();
                $('#mcCARD #mcAnswers div:even').addClass('ui-block-a');
                $('#mcCARD #mcAnswers div:odd').addClass('ui-block-b');
                
                // Update the Popup
                $('#mcCARD div.ui-content a').removeClass('greenBtn');
                $('#mcCARD div.ui-content a').removeClass('redBtn');
                $('#mcCARD h1').html(quizName);
                $('#mcCARD div.ui-content p').html(hint);
                $('#mcCARD div.ui-content a#1').html(answerA);
                $('#mcCARD div.ui-content a#2').html(answerB);
                $('#mcCARD div.ui-content a#3').html(answerC);
                $('#mcCARD div.ui-content a#4').html(answerD);
                
                setTimeout(function () {
                    $('#mcCARD').popup("open");
                }, 350);
            }


		
		
/****************THE MULTIPLE CHOICE FUNCTIONS*****************/
        
   
/*** SUBMITS A Multiple Choice RESPONSE ***/
        function submitMC(current) {
            //RIGHT
            if (current.id == correctChoice) {
                $(current).addClass('greenBtn');
                $("#mcCARD").popup("close");
                console.log("User clicked correctly");
                round++;
                score+=10;
                if(score>highScoreMC) {
                    highScoreMC=score;
                }
                nextQuestionMC();
                updateHighScoreMC();
            }
            //WRONG
            else {
                $(current).addClass('redBtn');
                $("#mcCARD").popup("close");
                console.log("User clicked inccorect");
                gameOverMC();
            }
        }


/*** OPENS THE NEXT Multiple Choice QUESION ***/
        function nextQuestionMC() {
            if (score!=totalPts) {
                // Load the next question's Data
                hint = quizData[round][0];
                answerA = quizData[round][2][0];
                answerB = quizData[round][2][1];
                answerC = quizData[round][2][2];
                answerD = quizData[round][2][3];
                correctChoice = quizData[round][3];
                
                
                console.log(round);
                console.log(score);
                console.log(totalPts);
                console.log(quizData[round][2]);
                console.log(hint);
                console.log(correctChoice);

                setTimeout(function () { 
                    // Shuffle the Answers
                    var $MCA = $('#mcCARD #mcAnswers');
                    $('div', $MCA).sort(function(){
                       return ( Math.round( Math.random() ) - 0.5 )
                    }).appendTo($MCA);
                    
                    // Format the answers
                    $('#mcCARD #mcAnswers div').removeClass();
                    $('#mcCARD #mcAnswers div:even').addClass('ui-block-a');
                    $('#mcCARD #mcAnswers div:odd').addClass('ui-block-b');
                    $('#mcCARD div.ui-content a').removeClass('greenBtn');
                    
                    // Update the Popup
                    $('#mcCARD div.ui-content p').html(hint);
                    $('#mcCARD div.ui-content a#1').html(answerA);
                    $('#mcCARD div.ui-content a#2').html(answerB);
                    $('#mcCARD div.ui-content a#3').html(answerC);
                    $('#mcCARD div.ui-content a#4').html(answerD);
                }, 450);
                
                setTimeout(function () {
                    $('#mcCARD').popup("open");
                }, 500);
            }
            else {
                winMC();
            }
        }
        
/*** Multiple Choice Updates the HighScore ***/
        function updateHighScoreMC() {
             $('#mcGames h4 span span').html(highScoreMC);
        }

/*** Multiple Choice GAME OVER - LOSE ***/
        function gameOverMC() {
            console.log('Game Over');
            setTimeout(function () {
                $('#gameoverMC h1').html("Game Over!");
                $('#gameoverMC div.ui-content p').html("The Game Is Over. <br/> You Scored " + score + " Out Of " + totalPts + " Points!");
                $("#gameoverMC").popup("open");
            }, 600);
        }

/*** Multiple Choice GAME OVER - WIN ***/ 
        function winMC() {
            console.log('You Win');
            
            setTimeout(function () {
                $('#gameoverMC h1').html("You Win!");
                $('#gameoverMC div.ui-content p').html("Congratulations You Win! <br/> You Scored " + score + " Out Of " + totalPts + " Points!");
                $("#gameoverMC").popup("open");
            }, 600);
        }
        
/*** Multiple Choice RERUN SAME QUIZ DATA ***/ 
        function retryQuizMC() {
            $("#gameoverMC").popup("close");
            setTimeout(function () {
                launch(retryQuizName);
            }, 600);
        }