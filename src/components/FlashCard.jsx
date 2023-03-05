import {useState} from "react";

const FlashCard=(props) => {
    const [flip,setFlip]=useState(props.flipped);
    const flipCard=() => setFlip(!flip);
    let designCard;

    let cardText;
    if(flip==false) {
        designCard='foodCardQuestion'
        cardText=<p>{props.description}</p>
    } else {
        designCard='foodCardAnswer'
        cardText= <p>{props.answer}</p>
    }
    return (
        <div className={designCard} onClick={flipCard}>
            <h3>{props.title}</h3>
            {cardText}
        </div>
    )
}

export default FlashCard;