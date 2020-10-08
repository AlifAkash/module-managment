import React from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(categoryContext);
    return (
        <div>
            <h2>Thi is Header {category}</h2>
            <button onClick={() => setCategory("laptop")}>Laptop</button>
            <button onClick={() => setCategory("mobile")}>Mobile</button>
            <button onClick={() => setCategory("camera")}>Camera</button>
        </div>
    );
};

export default Header;