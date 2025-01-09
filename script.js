// step 1:define quiz data 

const quizData=[
    {
        question:"HTML stand for?",
        options:[
            "Hypertext Markup Language",
            "Hypertext Transfer Protocol",
            "Hypertext Markup and Linking Language",
            "Home Tool Markup Language",
        ],
        correct:0,
    },
    {
        question:"CSS stands for?",
        options:[
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
        ],
        correct:0,
    },
    {
        question:"which CSS property is used to control the spacing between the elements?",
        options:["margin", "padding","spacing", "background"],
        correct:1,
    },
    {
        question:"Which CSS property is used to control the font size of the text?",
        options:["font-size", "font-weight","font-style", "font-family"],
        correct:0,
    },
    {
        question:"which HTML TAG is used to create an ordered list?",
        options:["ul", "ol", "dl", "li"],
        correct:1,
    },
];

//step 2: javascript initialization
const scores =document.querySelector('.score');
const answerElm = document.querySelectorAll('.answer');

const [quesElm,option_1, option_2,option_3, option_4]=document.querySelectorAll(
    "#question,  .option_1, .option_2, .option_3, .option_4"
);
const nextBtn= document.getElementById("next-btn");
const submitBtn= document.getElementById("submit-btn");


let currentQuiz=0;
let score=0;



//step 3: load quiz fucntion
const loadQuiz=() => {
    const{question, options}=quizData[currentQuiz];
    console.log(question);

    quesElm.innerHTML=`${currentQuiz+1}:${question}` 
scores.innertext=`Score:${score}/${quizData.length}`;

    options.forEach(
        (curOption,idx)=>(window[`option_${idx+1}`].innerHTML=curOption));
    // option_1.innerHTML=options[0];
    // option_2.innerHTML=options[1];
    // option_3.innerHTML=options[2];
    // option_4.innerHTML=options[3];
};
loadQuiz();

//select option of button click

const  getSelectionOption =() => {
    // let ans_index = 0;
    // answerElement.forEach((curOption,idx)=>{
    //     if(curOption.checked){
    //         ans_index=idx;
    //     }
    // }) ;
    // return ans_index;
    let answerElement=Array.from(answerElm);
    return answerElement.findIndex((curElem, idx)=> curElem.checked);
};

const  deselectedAnswers=()=>{
    answerElm.forEach((curElem, idx)=> curElem.checked=false);
}


submitBtn.addEventListener("click",() =>{
    const selectedOptionIndex= getSelectionOption();
    console.log(selectedOptionIndex);

    if(currentQuiz< quizData.length){
        if(selectedOptionIndex===quizData[currentQuiz].correct){
        score++;
    }
    if (currentQuiz === quizData.length - 1) {
        alert(`Quiz completed! Your final score is ${score}/${quizData.length}`);
        window.location.reload(); // Reload the page after quiz submission
    } 
}
        // quizData.forEach((curQuiz, idx) => {
        //     console.log(`question ${idx+1}: ${curQuiz.question}`);
        //     console.log(`answer: ${curQuiz.options[curQuiz.correct]}`);
        // });
    
    
});
nextBtn.addEventListener("click",() =>{
      currentQuiz++;
    if(currentQuiz< quizData.length){
        deselectedAnswers();
        loadQuiz();
    } 
    
    if (currentQuiz === quizData.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "block"; // Ensure "Submit" button is visible
    }
});

