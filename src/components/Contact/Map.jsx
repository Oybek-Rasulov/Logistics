import MapContent from "../ReusableComp/MapContent";

export default function Map() {

    return (
        <div className="map-main">
            <div className="space"></div>
            <div className="map container">
                <div className="map-text">
                    <div className="header-box">Find Us On Map</div>
                    <h2>800 W 5TH AVE #209, NAPERVILLE, IL, 60563</h2>
                </div>
                <div className="map-content">
                    <MapContent />
                </div>
            </div>
            
        </div>
    )
}
