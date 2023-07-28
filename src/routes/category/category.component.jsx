import "./category.styles.scss"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/productCard/productCard.component"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/category.selector"
import { selectCategoriesIsLoading } from "../../store/categories/category.selector"
import Spinner from "../../components/spinner/spinner.component"
const Category = ()=>{
    const categoriesMap = useSelector(selectCategoriesMap)
    const {category} = useParams()
    const [products,setProducts] = useState(categoriesMap[category])
    const isLoading = useSelector(selectCategoriesIsLoading)
    useEffect(()=>{
        setProducts(categoriesMap[category])
    
    },[category,categoriesMap]

    )

    return(
        <>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        
        {
            isLoading ? <Spinner/> :
            (<div className="category-container">
            
           { products &&
           
            products.map((product)=> (<ProductCard key={product.id} products={product}/>)) }
           </div>
           
        )}
            
       
        </>
    )

}
export default Category