import assets from "../assets";

function DispatchTeam() {
  return (
    <div className="dispatch-container">
        <div className="dispatch container">
            <div className="header-box">Meet Our Dispatch Team</div>
        </div>  
        <div className="team-members container">
        <div className="team-member">
          <img src={assets.DispatchOne} alt="Name 1" className="team-image" />
          <p className="team-name">Name 1</p>
        </div>
        <div className="team-member">
          <img src={assets.DispatchTwo} alt="Name 2" className="team-image" />
          <p className="team-name">Name 2</p>
        </div>
        <div className="team-member">
          <img src={assets.DispatchThree} alt="Name 3" className="team-image" />
          <p className="team-name">Name 3</p>
        </div>
        <div className="team-member">
          <img src={assets.DispatchFour} alt="Name 4" className="team-image" />
          <p className="team-name">Name 4</p>
        </div>
        </div>
    </div>
  );
}

export default DispatchTeam;
