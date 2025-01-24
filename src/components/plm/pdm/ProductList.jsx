import React, { useState } from 'react';

const ProductList = ({ products, onSelect }) => {
    const [search, setSearch] = useState('');

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mt-3">
            <input
                type="text"
                className="form-control mb-3"
                placeholder="제품 검색"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>제품명</th>
                    <th>상태</th>
                    <th>마지막 수정</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map((product) => (
                    <tr key={product.id} onClick={() => onSelect(product)}>
                        <td>{product.name}</td>
                        <td>{product.status}</td>
                        <td>{product.lastModified}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
