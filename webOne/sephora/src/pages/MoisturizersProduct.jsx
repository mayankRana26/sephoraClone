import React from 'react';
import MoisturizersProduct from './MoisturizersProduct.json'
import Header from '../components/Header';

function FaceFoundationProducts() {
    const products = MoisturizersProduct.products || [];

   

    return (
        <>
            <Header />
            <div>
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <img src={product.imageUrl} alt={product.name} />
                            <p>Price: {product.price}</p>
                            <p>Rating: {product.rating}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default FaceFoundationProducts;
