import assets from "../assets"

export default function FooterHead() {
    return (
        <div className="footer-head">
            <div className="footer-logo">
                <img src={assets.logo} alt="logo" />
            </div>
            <h3>Pages</h3>
            <h3>Newsletter</h3>
        </div>
    )
}