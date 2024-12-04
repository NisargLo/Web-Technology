// WAP to do CRUD operation on products stored as array using ReactJS.

import React, { useState } from 'react';

const ProductApp = () => {

    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
    ]);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [editProduct, setEditProduct] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (editProduct) {
            setProducts(
                products.map((product) =>
                    product.id === editProduct.id
                        ? { ...product, name, price: parseFloat(price) }
                        : product
                )
            );
            setEditProduct(null);
        } else {
            const newProduct = {
                id: Date.now(),
                name,
                price: parseFloat(price),
            };
            setProducts([...products, newProduct]);
        }

        setName('');
        setPrice('');
    };

    const handleDelete = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const handleEdit = (product) => {
        setEditProduct(product);
        setName(product.name);
        setPrice(product.price);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Product CRUD Operations</h1>
            <form onSubmit={handleFormSubmit} className="mb-4">
                <div className="form-group mb-3">
                    <label htmlFor="name" className="mb-2">Product Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control border border-2 border-secondary"
                        placeholder="Enter product name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="price" className="mb-2">Product Price</label>
                    <input
                        type="number"
                        id="price"
                        className="form-control border border-2 border-secondary"
                        placeholder="Enter product price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    {editProduct ? 'Update Product' : 'Add Product'}
                </button>
            </form>

            <h2 className="mb-4">Product List</h2>
            <ul className="list-group">
                {products.map((product) => (
                    <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center mb-3 border border-2 border-secondary">
                        {product.name} - ${product.price.toFixed(2)}
                        <div>
                            <button
                                className="btn btn-warning btn-sm mx-2"
                                onClick={() => handleEdit(product)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(product.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductApp;
