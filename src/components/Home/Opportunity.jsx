import assets from "../assets"
import Title from "../ReusableComp/Title"

function Opportunity() {
    return (
        <div className="opportunity">
            <div className="opp-image">
                <img src={assets.opportunity} alt="image" />
            </div>
            <div className="opp-content">
                <h3 className="sub-title">We create opportunity to reach potential</h3>
                <p className="sub-text mb2">At As Cargo LLC, we connect opportunities with efficiency. Offering safe, timely, and transparent logistics solutions, we ensure your cargo reaches its destination with global tracking, 24/7 support, and reliable delivery. Your success is our priority!</p>
                <div className="opp-list">
                    <ul>
                        <div>
                            <li><img src={assets.box} alt="icon" /><p>Safe package</p></li>
                            <li><img src={assets.globe} alt="icon" /><p>Global Tracking</p></li>
                            <li><img src={assets.clockRegular} alt="icon" /><p>In Time Delivery</p></li>
                        </div>
                        <div>
                            <li><img src={assets.truckFast} alt="icon" /><p>Ship Everywhere</p></li>
                            <li><img src={assets.squarePhone} alt="icon" /><p>24/7 Support</p></li>
                            <li><img src={assets.dollar} alt="icon" /><p>Transparent Prizing</p></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Opportunity
