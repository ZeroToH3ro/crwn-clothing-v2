import PRODUCTS from "../../src/shop-data.json";
import { createContext, useState } from "react";

export const ProductContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};

    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}