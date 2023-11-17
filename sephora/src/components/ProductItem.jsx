import React from 'react';

function ProductItem({ product, onProductClick }) {
    return (
        <div onClick={() => onProductClick(product)}>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
            <h3>Price: {product.price}</h3>
            <p>Rating: {product.rating}</p>
        </div>
    );
}

export default ProductItem;
