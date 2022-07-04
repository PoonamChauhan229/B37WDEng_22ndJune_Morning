const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
// quiz Container
let quiz=document.getElementById('quiz')

//question 
let questionHeading=document.getElementById('questionHeading')

// All OptionList=>radio buttons
let OptionList=document.querySelectorAll('.optionList')
console.log(OptionList)

// Each Options:label tags
let aOption=document.getElementById('aOption')
let bOption=document.getElementById('bOption')
let cOption=document.getElementById('cOption')
let dOption=document.getElementById('dOption')

// submit button
let submitBtn=document.getElementById('submit')

let currentQuizCount=0;//index no
let score=0;

loadQuiz()
function loadQuiz(){
    deSelectOption()
    let currentQuizData=quizData[currentQuizCount]
    console.log(currentQuizData)
    questionHeading.innerText=currentQuizData.question;
    aOption.innerText=currentQuizData.a;
    console.log(aOption.innerText)
    bOption.innerText=currentQuizData.b
    cOption.innerText=currentQuizData.c
    dOption.innerText=currentQuizData.d
}

function deSelectOption(){
    OptionList.forEach((element)=>element.checked=false)
}

function getSelected(){
    let selectedanswer;
    OptionList.forEach((element)=>{
        if(element.checked){
            selectedanswer=element.id
            console.log(element.id)
            console.log(element.type)
        }
    })
    return selectedanswer
}

submitBtn.addEventListener('click',()=>{
    let answer=getSelected()
    console.log(answer)
    if(answer){
        if(answer===quizData[currentQuizCount].correct){
            score++;
        }
        currentQuizCount++;
        console.log(currentQuizCount)

        if(currentQuizCount<quizData.length){
            loadQuiz()
        }
        else{
            // You Scored 2/5
            quiz.innerHTML=`
            // <h2>You Scored ${score}/${quizData.length}</h2> 
            <button class='submit' onClick=location.reload()>Reload</button>           
            `
            document.body.style.backgroundImage="url('./glitterimg.jpg')"
        }

    }



})















