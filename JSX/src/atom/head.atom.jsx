
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

    // let optSelect = "None";
    const [selectOpt, setSelect] = useState("None");
    function select(opt){
        setSelect(opt);
    }
    return(
        <>
        <div className='head-container'>
            <h3>Quiz App</h3>
        <h4>Question 1</h4>
        <p>{arrQtns[0].question}</p>

        {arrQtns[0].option.map((opt) => (
           <li onClick={() => select(opt)} className='list'>{opt}</li> 
        ))}
        <p className='changer' >Option Selected: {selectOpt}</p>
        </div>
         
        </>
       
    )
}

export default Head;