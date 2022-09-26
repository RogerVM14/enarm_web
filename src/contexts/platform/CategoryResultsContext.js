import React, { createContext, useEffect, useState } from 'react';
import { categories_results } from '../../utils/CategoriesResults';

export const CategoryResultsContext = createContext(null);

const CategoryResultsProvider = (props) => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        setResults(categories_results);
    }, [])

    return (
        <CategoryResultsContext.Provider value={{ results, setResults }}>
            {props.children}
        </CategoryResultsContext.Provider>
    )
}

export default CategoryResultsProvider;