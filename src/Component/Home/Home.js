import React from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(categoryContext);
    return (
        <div style={{border:"1px solid red"}}>
            <h2>This is home {category}</h2>
            <Categories></Categories>
        </div>
    );
};

export default Home;