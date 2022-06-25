import globalStyles from "../styles/global.css";
import styles from "../styles/main.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1 className="hero-message">Exlusive Kicks For Great Prices</h1>
                <Link to="shop"><button className="shop-btn">Shop Now</button></Link>
            </div>
        </div>
    );

}

export default Home;