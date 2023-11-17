import React from 'react';
import MoisturizersProduct from './MoisturizersProduct.json'
import Header from '../components/Header';

function FaceFoundationProducts() {
    const products = MoisturizersProduct.products || [];
console.log(MoisturizersProduct)
   

    return (
        <>
            <Header />
            <div className='items'>
                {MoisturizersProduct.products.map((product) => {
                    return (
                        <div  key={product.id}>
                            <img src={product.imageUrl} alt={product.name} />
                            <p>{product.name}</p>
                            <h3>Price: {product.price}</h3>
                            <p>Rating: {product.rating}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default FaceFoundationProducts;
