const quizList = [
    {
        question: '今食べたいものは？',
        answer: '東京',
    },
    {
        question: 'アメリカの大統領は誰ですか？',
        answer: 'ジョー・バイデン',
    },
    {
        question: '1+1は何ですか？',
        answer: '2',
    },
    {
        question: '日本語で「ありがとう」とは何ですか？',
        answer: '感謝の気持ちを表す言葉',
    },
    {
        question: '「おはようございます」は何時から使えますか？',
        answer: '朝',
    },
    {
        question: '世界最大の熱帯雨林はどこですか？',
        answer: 'アマゾン',
    },
    {
        question: '日本で最も高い山は何ですか？',
        answer: '富士山',
    },
    {
        question: 'ビートルズのボーカルは誰ですか？',
        answer: 'ジョン・レノン',
    },
    {
        question: '日本の現在の天皇は誰ですか？',
        answer: '徳仁',
    },
    {
        question: '世界で最も人口が多い国はどこですか？',
        answer: '中国',
    },
    {
        question: 'サトシの相棒は誰ですか？',
        answer: 'ピカチュウ',
    },

];
let currentQuizIndex = 0;

const answerResultCorrectElement   = document.querySelector('.answer-result-correct');
const answerResultIncorrectElement = document.querySelector('.answer-result-incorrect');
const quizIndexElement             = document.querySelector('#quiz-index');
const questionElement              = document.querySelector('#question');
const inputAnswerElement           = document.querySelector('#input-answer');
const toAnswerButtonElement        = document.querySelector('#to-answer-button');

const displayQuestion = () => {
    questionElement.textContent  = quizList[currentQuizIndex].question;
    quizIndexElement.textContent = currentQuizIndex + 1 + '問目';
}

const displayAnswerResult = () => {
    if (inputAnswerElement.value === quizList[currentQuizIndex].answer) {
        answerResultCorrectElement.classList.add('display-answer-result');
    } else {
        answerResultIncorrectElement.classList.add('display-answer-result');
    }

    setTimeout(() => {
        currentQuizIndex++;
        resetFormValues();
        resetDisplayAnswerResult();
        displayQuestion();
    }, 3000);
}

const resetFormValues = () => {
    quizIndexElement.textContent    = '';
    questionElement.textContent     = '';
    inputAnswerElement.value        = '';
}

const resetDisplayAnswerResult = () => {
    answerResultCorrectElement.classList.remove('display-answer-result');
    answerResultIncorrectElement.classList.remove('display-answer-result');
}

toAnswerButtonElement.addEventListener('click', displayAnswerResult);

displayQuestion();