import "./category-preview.style.scss"
import ProductCard from "../productCard/productCard.component"
import { Outlet,Link } from "react-router-dom"
const CategoryPreview = ({title,products})=>{
    return(
    <div  className="category-preview-container"  >
        <h2>
             <Link to={`/shop/${title}`}>
             <span className="title">{title.toUpperCase()}</span>
             </Link>   
             <Outlet/>
     
        </h2>
        <div className="preview">

        {
                products
                .filter((_,idx) => idx < 4)
                .map((product) => <ProductCard key={product.id} products={product} />)

        }

        </div>



    </div>

    )
}
export default CategoryPreview