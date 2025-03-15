import {useEffect, useState} from "react";
export default function Cargo() {
    // const [countOne, setCountOne] = useState(0);

    // useEffect(() => {
    //     function increase() {
    //         setCountOne((current) => current++)
    //         // setTimeout(increase(), 50); 
    //     }

    //     increase()

    // }, []);

    // console.log(countOne)
    // setTimeout(console.log("hello"), 50); 


    return (
        <div className="cargo container">
            <div className="cargo-content mb2">
                <h1 className="mb1">AS CARGO LLC</h1>
                <h3>HONESTY RELIABILITY OPPENNESS</h3>
            </div>
            <div className="cargo-numbers">
                <div className="number">
                    <h3>130+</h3>
                    <p>Delivered Materials</p>
                </div>
                <div className="number">
                    <h3>120+</h3>
                    <p>Project Finished</p>
                </div>
                <div className="number">
                    <h3>390+</h3>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
    )
}