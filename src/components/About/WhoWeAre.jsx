import assets from "../assets";

export default function WhoWeAre() {
  return (
    <section className="who-we-are">
      <div className="who-we-are-container">
        {/* Left Section - Images */}
        <div className="images">
          <img src={assets.whoweare} alt="Truck" className="main-image" />
        </div>

        {/* Right Section - Content */}
        <div className="content">
          <button className="who-we-are-btn">Who We Are?</button>
          <p className="description">
            As Cargo LLC is a trusted logistics company committed to providing safe, reliable, 
            and efficient transportation solutions. With a team of experienced professionals 
            and a dedication to excellence, we ensure seamless freight movement across local 
            and regional routes. Our customer-first approach, combined with innovative technology, 
            allows us to optimize logistics operations and meet the evolving needs of businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

