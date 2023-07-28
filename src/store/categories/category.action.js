import { creatAction} from "../../utils/firebase/reducer.utils";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart= ()=> creatAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START)

export const fetchCategoriesSucces = (categoriesArray)=>creatAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS,categoriesArray)

export const fetchCategoriesFailed = (error) =>creatAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED,error)

