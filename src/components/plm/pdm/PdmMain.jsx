import React, {useState} from 'react';
import ProductList from "./ProductList";
import BomTree from "./BomTree";
import FileManager from "./FileManager";

const PdmMain = () => {


    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { id: 1, name: '상품 A', status: '재고 있음', lastModified: '2025-01-20' },
        { id: 2, name: '상품 B', status: '재고 없음', lastModified: '2025-01-22' },
        { id: 3, name: '상품 C', status: '판매 중지', lastModified: '2025-01-21' },
        { id: 4, name: '상품 D', status: '판매 중지', lastModified: '2025-01-21' },
        { id: 5, name: '상품 E', status: '판매 중지', lastModified: '2025-01-20' },
        { id: 6, name: '상품 F', status: '판매 중지', lastModified: '2025-01-15' },
        { id: 7, name: '상품 G', status: '재고 없음', lastModified: '2025-01-29' },
    ];

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
        alert(`${product.name}이(가) 선택되었습니다.`);
    };

    return (
        <main className="App-main">
            <div>
                <div className="p-4 bg-primary text-white rounded shadow text-start mb-3 opacity-75">
                    <h2>제품 데이터 관리(PDM)</h2>
                </div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="product-tab" data-bs-toggle="tab"
                                data-bs-target="#product"
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
                        <button className="nav-link" id="file-tab" data-bs-toggle="tab" data-bs-target="#file"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">
                            파일 관리
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="product" role="tabpanel"
                         aria-labelledby="product-tab">
                        <ProductList products={products} onSelect={handleSelectProduct}/>
                    </div>
                    <div className="tab-pane fade" id="bom" role="tabpanel" aria-labelledby="bom-tab">
                        <BomTree/>
                    </div>
                    <div className="tab-pane fade" id="file" role="tabpanel" aria-labelledby="file-tab">
                        <FileManager/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PdmMain;