import SHOP_DATA from "../shop-data.js";
import {createContext, useEffect, useState} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
        const getDocumentsAndCategories = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }

        getDocumentsAndCategories().then(r => console.log('get document and categories success'));
    }, []);
    const value = {categoriesMap};

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
