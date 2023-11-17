import React, { useState } from 'react';
import faceProducts from './faceFoundationProducts.json';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import SelectedProducts from '../components/SelectedProducts';

function FaceFoundationProducts() {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleProductClick = (product) => {
        setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
    };

    return (
        <>
            <Header />
            <div className='items'>
                {faceProducts.products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onProductClick={() => handleProductClick(product)}
                    />
                ))}
            </div>

            <SelectedProducts selectedProducts={selectedProducts} />
        </>
    );
}

export default FaceFoundationProducts;
