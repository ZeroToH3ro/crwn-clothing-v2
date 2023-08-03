import {useParams} from "react-router-dom";
import {CategoriesContext} from "../../contexts/categories.contexts";
import {Fragment, useContext, useEffect, useState} from "react";
import ProductCard from "../product-card/product-card.components";
import './category.styles.scss';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        setProducts(categoriesMap[category])
    }, [categoriesMap, category]);

    return (
        <Fragment>
            <h2 className='category-title'> {category.toUpperCase()} </h2>
            <div className='category-container'>
                { products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Category;
