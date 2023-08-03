import {useContext, Fragment} from "react";
import {CategoriesContext} from "../../contexts/categories.contexts";
import './shop.styles.scss';
import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.components";
import Category from "../../components/category/category.components";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=':category' element={<Category/>}/>
        </Routes>
    );
}

export default Shop;

