import assets from "../assets"

function Transportation() {
    return (
        <div className="transportation">
            <div className="trans-content">
                <img src={assets.cardOne} alt="image" />
                <img src={assets.cardTwo} alt="image" />
                <img src={assets.cardThree} alt="image" />
            </div>
        </div>
    )
}

export default Transportation
