import React from "react"
import {Route,Routes} from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview-component"
import "./shop.style.scss"
import Category from "../category/category.component"
import { fetchCategoriesStart, setCategories} from "../../store/categories/category.action"
import { useDispatch } from 'react-redux';
import { useEffect } from "react"
const Shop = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch (fetchCategoriesStart())
      },[])

        return(
           <Routes>
                <Route index element={<CategoriesPreview/>}/>
                <Route path=":category" element={<Category/>}/>
           </Routes>
        )
    
    }
export default Shop