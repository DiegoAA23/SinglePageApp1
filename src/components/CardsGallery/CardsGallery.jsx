import { Card } from "./Card";
import './CardGallery.css';
export const CardGallery = ( {cards} ) => {
    const onClickHandler = (title) => {
        alert(title);
    }

    const cardsList = cards.map( (card) => {
        return(
        <Card
            key={card.title}
            title={card.title}
            description={card.descripcion}
            image={card.imgUrl}
            onClick={onClickHandler}

        />);
    });

    return (
        <section className="cardGallery">
            {cardsList}
        </section>
    )
}