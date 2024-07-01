const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

const newQuote = document.querySelector('#js-new-quote');
newQuote.addEventListener('click', getTrivia);

const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

let answerTxt = document.querySelector('#js-answer-text');
let anser = '';

async function getTrivia() {
    //alert('TEST!')
    try{
        const responce = await fetch(endpoint);
        if (!responce.ok) {
            throw Error(responce.statusText)
        }
        const json = await responce.json();
        console.log(json);
        displayTrivia(json['question']);
        answer = json['answer'];
        answerTxt.textContent = '';
    }
    catch(err) {
        console.log(err)
        alert('Failed to fetch new quote');
    }
}

function displayTrivia(quote) {
    const triviaText = document.querySelector('#js-quote-text');
    triviaText.textContent = quote;
}

function displayAnswer(){
    answerTxt.textContent = answer;
}

getTrivia();