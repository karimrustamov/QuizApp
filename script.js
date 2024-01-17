let questions = [
    {
        "question": "Welcher Fluss fließt durch Berlin?",
        "answer_1": "Rhein",
        "answer_2": "Donau",
        "answer_3": "Elbe",
        "answer_4": "Spree",
        "right_answer": 4
    },
    {
        "question": "Wer schrieb 'Faust'?",
        "answer_1": "Friedrich Schiller",
        "answer_2": "Johann Wolfgang von Goethe",
        "answer_3": "Thomas Mann",
        "answer_4": "Bertolt Brecht",
        "right_answer": 2
    },
    {
        "question": "Was ist die Hauptstadt von Japan?",
        "answer_1": "Seoul",
        "answer_2": "Peking",
        "answer_3": "Tokio",
        "answer_4": "Bangkok",
        "right_answer": 3
    },
    {
        "question": "Wie heißt das kleinste Bundesland Deutschlands?",
        "answer_1": "Saarland",
        "answer_2": "Hamburg",
        "answer_3": "Bremen",
        "answer_4": "Berlin",
        "right_answer": 3
    },
    {
        "question": "Welches Element steht im Periodensystem an der Stelle 6?",
        "answer_1": "Sauerstoff",
        "answer_2": "Kohlenstoff",
        "answer_3": "Stickstoff",
        "answer_4": "Helium",
        "right_answer": 2
    },
    {
        "question": "Wer komponierte die 9. Symphonie?",
        "answer_1": "Wolfgang Amadeus Mozart",
        "answer_2": "Ludwig van Beethoven",
        "answer_3": "Johann Sebastian Bach",
        "answer_4": "Franz Schubert",
        "right_answer": 2
    },
    {
        "question": "Welches Tier ist kein Säugetier?",
        "answer_1": "Wal",
        "answer_2": "Krokodil",
        "answer_3": "Giraffe",
        "answer_4": "Elefant",
        "right_answer": 2
    }
];

let rightQuestions = 0;

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style ='';
        document.getElementById('questionBody').style ='display: none';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('card-img-top').src = './img/Hasbulla.jpg'

        let percent = currentQuestion / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style.width = `${percent}%`;
        
    } else {

        let percent = currentQuestion / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style.width = `${percent}%`;

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions ++;
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

