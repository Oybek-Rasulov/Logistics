import assets from "../assets"

function Safe() {
    return (
        <div className="safe-section container mb3">
            <div className="safe-content mb2">
                <div>
                    <h4><img className="icon" src={assets.route} alt="icon" /> Route Planning & Optimization</h4>
                    <p className="right-border">Minimizing transit times and reducing fuel costs is essential. We analyze traffic patterns, weather conditions, and road restrictions to optimize delivery routes.</p>
                </div>
                <div>
                    <h4><img className="icon" src={assets.users} alt="icon" /> Customer Relationship Management</h4>
                    <p>Strong communication with clients is key. We provide real-time updates and maintain long-term business relationships to enhance service reliability.</p>
                </div>
            </div>
            <div className="safe-content">
                <div>
                    <h4><img className="icon" src={assets.truck} alt="icon" /> Cargo Security</h4>
                    <p className="right-border">Ensuring the safety of goods is a priority. We  implement tamper-proof seals, GPS tracking, and compliance with safety regulations to prevent cargo theft and damage.</p>
                </div>
                <div>
                    <h4><img className="icon" src={assets.gears} alt="icon" /> Compliance & Regulatory Requirements</h4>
                    <p>Ensuring adherence to industry standards, proper documentation, and legal regulations is critical for smooth and lawful logistics operations.</p>
                </div>
            </div>
        </div>
    )
}

export default Safe
