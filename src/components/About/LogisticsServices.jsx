import assets from "../assets";

function LogisticsServices() {
  return (
    <>
      <section className="logistics-services">
        <div className="container">
          <div className="header-box">Our Logistics Services</div>

          <div className="services-list">
            {/* Customs Clearance */}
            <div className="service-item">
              <div className="mb2">
                <h3>Customs Clearance</h3>
                <img src={assets.logisticsSetting} alt="icon" className="icon" />
                
              </div>
              <p>
                We navigate the complexities of international trade with efficient 
                customs clearance services.
              </p>
            </div>

            {/* Expedited Freight */}
            <div className="service-item">
              <div className="mb2">
                <h3>Expedited & Time - Critical Freight</h3>
                <img src={assets.logisticsClock} alt="icon" className="icon" />
              </div>
              <p>
                For urgent shipments, we provide expedited freight services, offering 
                same-day and next-day delivery options.
              </p>
            </div>

            {/* Fleet Solutions */}
            <div className="service-item">
              <div className="mb2">
                <h3>Fleet Solutions & Dedicated Tracking</h3>
                <img src={assets.logisticsTruck} alt="icon" className="icon" />
              </div>
              <p>
                As Cargo LLC offers dedicated trucking services tailored to businesses 
                needing consistent and reliable transport.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="logistics-services second-service mb2">
        <div className="container">
          <div className="services-list">
            {/* Customs Clearance */}
            <div className="service-item">
              <div className="mb3">
                <h3>Technology-Driven Management</h3>
                <img src={assets.logicUser} alt="icon" className="icon" />
                
              </div>
              <p>
                Our real-time tracking, automated load management, and advanced route planning ensure superior efficiency.
              </p>
            </div>

            {/* Expedited Freight */}
            <div className="service-item">
              <div className="mb3">
                <h3>Local & Regional Shipping </h3>
                <img src={assets.logicDolly} alt="icon" className="icon" />
              </div>
              <p>
                Timely deliveries, optimized routing, and real-time tracking for complete visibility and efficiency.
              </p>
            </div>

            {/* Fleet Solutions */}
            <div className="service-item">
              <div className="mb3">
                <h3>Project & Exhibition Logistics</h3>
                <img src={assets.logicDiagram} alt="icon" className="icon" />
              </div>
              <p>
                We handle planning, transportation, and on-site coordination, ensuring a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogisticsServices;

