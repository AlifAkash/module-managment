import React from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoryDetails = (props) => {
    const category = useContext(categoryContext);
    const {name}= props.products;
    return (
        <div style={{border:"1px solid purple"}}>
            <h3>This is CategoryDetails {category}</h3>
            <p>Select Items : {name}</p>
        </div>
    );
};

export default CategoryDetails;