// SelectedProducts.jsx
import React from 'react';

function SelectedProducts({ selectedProducts }) {
    return (
        <div>
            <h2>Selected Products:</h2>
            <ul>
                {selectedProducts.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SelectedProducts;
