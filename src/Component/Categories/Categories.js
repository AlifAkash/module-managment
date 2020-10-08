import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const allProducts = [{ name: "Lenovo", category: "laptop" }, { name: "Asus", category: "laptop" }, { name: "Dell", category: "laptop" },
{ name: "Samsung", category: "mobile" }, { name: "Nokia", category: "mobile" }, { name: "Apple", category: "mobile" },
{ name: "Canon", category: "camera" }, { name: "Nikon", category: "camera" }, { name: "Sony", category: "camera" }]

const Categories = () => {
    const [category] = useContext(categoryContext);

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])

    return (
        <div>
            <h2>Your Selected Categories {category}</h2>
            {
                products.map(products => <CategoryDetails products={products}></CategoryDetails>)
            }
        </div>
    );
};

export default Categories;