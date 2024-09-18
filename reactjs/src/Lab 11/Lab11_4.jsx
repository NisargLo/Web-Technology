//Display Products stored in array using ReactJS 

const DisplayProducts = () => {
    const products = [
        { id: 1, name: 'Laptop', price: 999.99 },
        { id: 2, name: 'Smartphone', price: 699.99 },
        { id: 3, name: 'Tablet', price: 499.99 },
        { id: 4, name: 'Smartwatch', price: 199.99 },
        { id: 5, name: 'Headphones', price: 149.99 }
    ];

    return (
        <>
            <h1 class="m-3">Product Details :-</h1>
            <table class="table table-bordered border-primary mx-3 w-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default DisplayProducts;