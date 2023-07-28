
import React, { Fragment } from "react";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview-component/categoryPreview.component";
import { useSelector } from "react-redux";
import Spinner  from "../../components/spinner/spinner.component"
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
const CategoriesPreview = ()=>{
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    console.log(isLoading);
    return(
            <Fragment>
            {isLoading ? <Spinner/> : 
            Object.keys(categoriesMap).map((title)=>{
                
                const products = categoriesMap[title]
                return <CategoryPreview key={title} title={title} products={products}/>

            })
            }
            
        
            </Fragment> 
    )


}

export default CategoriesPreview