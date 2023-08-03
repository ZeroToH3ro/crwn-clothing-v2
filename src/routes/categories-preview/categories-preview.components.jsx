import {useContext, Fragment} from "react";
import {CategoriesContext} from "../../contexts/categories.contexts";
import CategoryPreview from "../../components/category-preview/category-preview.components";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview title={title} product={products} key={title}/>
                    )
                })
            }

        </Fragment>
    );
};

export default CategoriesPreview;
