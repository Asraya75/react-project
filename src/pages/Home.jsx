import {Link} from "react-router";
export default function Home(){
    return(
        <div>
            <h1>Welcome to React Project</h1>
            <p>This App Teaches the Basics React</p>
            <Link to="/products" className="btn">Browse Products</Link>
        </div>
    );
}
