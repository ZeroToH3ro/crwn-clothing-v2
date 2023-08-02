import { useContext } from "react";
import { ProductContext } from "../../contexts/product.contexts";
import ProductCard from "../../components/product-card/product-card.components";
import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    );
}

export default Shop;

