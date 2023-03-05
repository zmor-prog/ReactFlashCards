import { useState } from 'react'
import FlashCard from "./FlashCard"

const CardLists=(props) => {
    const [card, setClick] = useState(0);
    const [anothercard, setAnotherClick] = useState(false);
    const clickNext=() => setAnotherClick(false);

    const cards=[
        <FlashCard title="One" description="First Response" answer="Answer" flipped={anothercard} />,
        <FlashCard title="Two" description="Second Response" answer="Shown Answer" flipped={anothercard} />,
        <FlashCard title="Three" description="Third Response" answer="Shown Answer" flipped={anothercard} />,
        <FlashCard title="Four" description="Fourth Response" answer="Shown Answer" flipped={anothercard} />,
        <FlashCard title="Five" description="Fifth Response" answer="Shown Answer" flipped={anothercard} />,
    ]

    const cardText=[
        {title:"Food", description:"pollo", answer:"chicken", flipped:{setAnotherClick}},
        {title:"Food", description:"queso", answer:"cheese", flipped:{setAnotherClick}},
        {title:"Food", description:"cola de buey", answer:"oxtail", flipped:{setAnotherClick}},
        {title:"Food", description:"arroz y frijoles", answer:"rice", flipped:{setAnotherClick}},
        {title:"Food", description:"pescado", answer:"fish", flipped:{setAnotherClick}},
        {title:"Fruit", description:"pera", answer:"pear", flipped:{setAnotherClick}},
        {title:"Fruit", description:"manzana", answer:"apple", flipped:{setAnotherClick}},
        {title:"Fruit", description:"uva", answer:"grape", flipped:{setAnotherClick}},
        {title:"Fruit", description:"naranja", answer:"orange", flipped:{setAnotherClick}},
        {title:"Fruit", description:"aguacate", answer:"avacado", flipped:{setAnotherClick}},
    ]
    const[myCard,setCard]=useState(<FlashCard title={cardText[0].title} description={cardText[0].description} answer={cardText[0].answer} flipped={false} />)
    const NextFlashCards=() => {
        const randomCards=Math.floor(Math.random()*cardText.length);
        setAnotherClick(false);
        setClick(randomCards);
        setCard(<FlashCard title={cardText[randomCards].title} description={cardText[randomCards].description} answer={cardText[randomCards].answer} flipped={false} />)
    }
    return (
        <div>
            <h4>Number of Cards: {cardText.length}</h4>
            {myCard}
            <button onClick={NextFlashCards}>⭢</button>
        </div>
    )
}

export default CardLists;