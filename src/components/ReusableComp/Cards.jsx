import assets from "../assets"

function Cards() {
    return (
        <div className="cards">
            <div className="cards-content">
                <img src={assets.card1} alt="image" />
                <img src={assets.card2} alt="image" />
                <img src={assets.card3} alt="image" />
                <img src={assets.card4} alt="image" />
            </div>
        </div>
    )
}

export default Cards
