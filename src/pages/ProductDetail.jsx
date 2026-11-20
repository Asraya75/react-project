import { Link, useNavigate, useParams } from "react-router";
import { products } from "../data/products";

export default function ProductDetail(){
    const {id} = useParams();

    const navigate = useNavigate();
    const product = products.find((p)=> p.id === Number(id));

    if(!product){
        return(
            <div>
                <h2>Product NOt Found</h2>
                <Link to="/products">Back to products</Link>
            </div>
        );
    }
    return(
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p><strong>Price : </strong>${product.price}</p>

            <button onClick={()=> navigate(-1)}>← Go Back</button>
            <button onClick={()=> navigate("/")}>Go Home</button>
        </div>
    );

}