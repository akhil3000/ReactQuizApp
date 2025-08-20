import { useState } from "react";
function Quiz(){
  const questionBank=[
  {
    question:"Who is father of Our Nation",
    options:["Gandhi","Bose","Patel","Nehru"],
    answer:"Gandhi",

  },
  {
    question:"Who is God of Criket",
    options:["Dravid","Ganuguly","Sehwag","Sachin"],
    answer:"Sachin"
  },
  {
    question:"Who is CEO of Google",
    options:["Sundar","Bezos","Musk","Jobs"],
    answer:"Sundar"

  }


  ];

    

   const intialAnswers=["null","null","null"];
   const[userAnswers,setUserAnswers]=useState(intialAnswers);
   const[currentQuestion,setCurrentQuestion]=useState(0); 
   const selectedAnswer=userAnswers[currentQuestion];

   function handleSelectOption(option){
       const newUserAnswers=[...userAnswers];
       newUserAnswers[currentQuestion]=option;
       setUserAnswers(newUserAnswers);
   }

    function goToNext(){
       if(currentQuestion<2){ 
       setCurrentQuestion(currentQuestion+1);
       }  
    }

    function goToPrevious()
    {
        if(currentQuestion>0)
        {    
        setCurrentQuestion(currentQuestion-1);
        }
    }




    return( 
    
    <div>
        <h2>Question{currentQuestion}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>
        {questionBank[currentQuestion].options.map((option)=>(
        <button className={"option" +(selectedAnswer===option?"selected":"") }
        onClick={()=>handleSelectOption(option)}>
        
            {option}</button>
        ))}
     
        <div className="nav-buttons">
          <button onClick={goToPrevious} disabled={currentQuestion===0} >
          {" "}
          Previous</button>
          <button onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion===questionBank.length-1?"Finish Quiz":"Next"}
          </button>

        </div>       

    </div>
    );
}
export default Quiz;

