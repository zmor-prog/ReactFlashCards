import { useState } from 'react'
import FlashCard from "./FlashCard"

const CardLists=(props) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setisFlipped] = useState(false);
    const [guessResult, setGuessResult] = useState(null);
    const [inputValue, setInputValue] = useState('');
  
    const cardText=[
        {title:"Food", description:"pollo", answer:"chicken"},
        {title:"Food", description:"queso", answer:"cheese"},
        {title:"Food", description:"cola de buey", answer:"oxtail"},
        {title:"Food", description:"arroz y frijoles", answer:"rice"},
        {title:"Food", description:"pescado", answer:"fish"},
        {title:"Fruit", description:"pera", answer:"pear"},
        {title:"Fruit", description:"manzana", answer:"apple"},
        {title:"Fruit", description:"uva", answer:"grape"},
        {title:"Fruit", description:"naranja", answer:"orange"},
        {title:"Fruit", description:"aguacate", answer:"avocado"},
    ];

    const handleNext = () => {
        const nextCardIndex = (currentCardIndex + 1) % cardText.length;
        setCurrentCardIndex(nextCardIndex);
        setisFlipped(false);
        setGuessResult(null);
        setInputValue('');
    };

    const handlePrev = () => {
        const prevCardIndex = (currentCardIndex - 1 + cardText.length) % cardText.length;
        setCurrentCardIndex(prevCardIndex);
        setisFlipped(false);
        setGuessResult(null);
        setInputValue('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const answer = cardText[currentCardIndex].answer.toLowerCase();
        const guess = inputValue.trim().toLowerCase();
        if (guess === answer) {
            setGuessResult('Correct!');            
        } else {
            setGuessResult('Incorrect. Please try again.');
        }
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h4>Number of Cards: {cardText.length}</h4>
            <FlashCard 
                title={cardText[currentCardIndex].title}
                description={cardText[currentCardIndex].description}
                answer={cardText[currentCardIndex].answer}
                flipped={isFlipped}
            />
            <button onClick={handlePrev} disabled={currentCardIndex === 0}>⭠</button>
            <button onClick={handleNext} disabled={currentCardIndex === cardText.length - 1}>⭢</button>
            <form onSubmit={handleSubmit}>
          <label className="guess-label">
            Guess the answer here:
            <input type="text" value={inputValue} onChange={handleChange} />
          </label>        
          <button type="submit" className="submit-button">Submit Guess</button>
        </form>
        {guessResult && <p>{guessResult}</p>}            
        </div>
    );
};

export default CardLists;