import assets from "../assets"
import Title from "./Title"

function Clients() {
    return (
        <div className="clients container">
            <Title title="What our Customers say about us: " className="mb2" />
            <div className="clients-content mb3">
                <div className="card">
                    <div className="card-head">
                        <h4>John Peterson</h4>
                        <img src={assets.clientOne} alt="person" />
                    </div>
                    <p>Just used a month ago for a very important customer, they were pleased and so was I. I'm glad I booked them as they were on time and no issues to report.</p>
                </div>
                <div className="card">
                    <img className="mb1" src={assets.clientTwo} alt="person" />
                    <h4 className="mb1">David Wilson</h4>
                    <p>AS Cargo LLC has been a true partner for my business. Shipments are always delivered on time, and the service quality is exceptional!</p>
                </div>
                <div className="card">
                    <div className="card-head">
                        <img src={assets.clientThree} alt="person" />
                        <h4>Daniel Carter</h4>
                    </div>
                    <p>AS Cargo helped us out on a food-grade dry van shipment. Owen sent in clean equipment and were in communication throughout the trip. Great job by this carrier.</p>
                </div>
            </div>
            <div className="main-clients">
                <div className="main-card">
                    <h4>Olivia Brooks</h4>
                    <div className="main-card-text">
                        <p>I recently worked with As Cargo LLC for a critical shipment, and I couldn’t be more satisfied. Their team was professional, on time, and handled everything seamlessly. My client was highly pleased with the service. </p>
                        <img src={assets.clientFour} alt="client" />
                    </div>
                </div>
                <div className="main-card">
                    <h4>Rebecca Hayes</h4>
                    <div className="main-card-text">
                        <img src={assets.clientFive} alt="client" />
                        <p>This team has run more than a few loads for us and they always do a great job. They have a great pn time average with our company and this load is no different. We will continue to work with this team!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
