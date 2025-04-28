
import { useState } from 'react';
import './head.atom.css'
function Head(){

    const arrQtns = [
        {
            question:"What Club is KDB In?",
            option:["Man City", "Real Madrid", "Wolfsburg", "Chelsea"],
            answer:"Man City"
        },
        {
            question:"What Club is Ola Aina In?",
            option:["Man City", "Nottingham Forest", "Arsenal", "Chelsea"],
            answer:"Nottingham Forest"
        },
        {
            question:"What Club is Ronaldo In?",
            option:["Barcelona", "Real Madrid", "Al Nassr", "Man United"],
            answer:"Al Nassr",
        },
        {
            question:"What Club is Messi In?",
            option:["Inter Miami", "Barcelona", "River Plate", "Man City"],
            answer:"Inter Miami"
        }
    ]


    const initialAnswers = [null, null, null]
    const [userAnswers, setSelect] = useState(initialAnswers);
    const[currentQtn, setCurrent] = useState(0);
    
    const selectedAns = userAnswers[currentQtn];
    function select(opt){
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQtn] = opt;

        setSelect(newUserAnswers);
    }

    function toNext(){
       setCurrent(currentQtn + 1);
    }

    function toPrev(){
        if(currentQtn > 0){
            setCurrent(currentQtn - 1);
        }
        
    }

    return(
        <>
        <div className='head-container'>
            <h3>Quiz App</h3>
        <h4>Question 1</h4>
        <p>{arrQtns[currentQtn].question}</p>

        {arrQtns[currentQtn].option.map((opt) => (
           <li onClick={() => select(opt)} className={'list' + (selectedAns === opt ? " choice" : "")}>{opt}</li> 
        ))}
        </div>
         
        <div className="btn-holder">
        <div><button className="left-btn" onClick={toPrev} disabled={currentQtn===0}>Previous</button></div>
        <div><button className="right-btn" onClick={toNext} disabled={!selectedAns}>Next</button></div>
      </div>
        </>
       
    )
}

export default Head;
