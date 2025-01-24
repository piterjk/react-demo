import React, {useState} from 'react';
import ProductList from "./ProductList";
import BomTree from "./BomTree";

const PdmMain = () => {


    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { id: 1, name: '상품 A', status: '재고 있음', lastModified: '2025-01-20' },
        { id: 2, name: '상품 B', status: '재고 없음', lastModified: '2025-01-22' },
        { id: 3, name: '상품 C', status: '판매 중지', lastModified: '2025-01-21' },
    ];

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
        alert(`${product.name}이(가) 선택되었습니다.`);
    };

    return (
        <main className="App-main">
            <div>
                <h2>제품 데이터 관리(PDM)</h2>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="product-tab" data-bs-toggle="tab" data-bs-target="#product"
                                type="button" role="tab" aria-controls="home" aria-selected="true">
                            제품 목록
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="bom-tab" data-bs-toggle="tab" data-bs-target="#bom"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">
                            BOM 관리
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">
                            Contact
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="product" role="tabpanel"
                         aria-labelledby="product-tab" style={{height:'100vh'}}>
                        <ProductList products={products} onSelect={handleSelectProduct}/>
                    </div>
                    <div className="tab-pane fade show active" id="bom" role="tabpanel" aria-labelledby="bom-tab" style={{height:'100vh'}}>
                        <BomTree/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PdmMain;