import React from 'react'
import { Link } from 'react-router-dom'

const RecommendedOne = () => {
    return (
        <section className="recommended pt-40">
            <div className="container container-lg">
                <div className="section-heading flex-between flex-wrap gap-16">
                    <h5 className="mb-0">Best Products</h5>
                    <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="pills-all-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-all"
                                type="button"
                                role="tab"
                                aria-controls="pills-all"
                                aria-selected="true"
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-grocery-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-grocery"
                                type="button"
                                role="tab"
                                aria-controls="pills-grocery"
                                aria-selected="false"
                            >
                                Cupdhoop
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-fruits-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-fruits"
                                type="button"
                                role="tab"
                                aria-controls="pills-fruits"
                                aria-selected="false"
                            >
                                Dhoopstick
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-juices-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-juices"
                                type="button"
                                role="tab"
                                aria-controls="pills-juices"
                                aria-selected="false"
                            >
                                Incense Stick
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-vegetables-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-vegetables"
                                type="button"
                                role="tab"
                                aria-controls="pills-vegetables"
                                aria-selected="false"
                            >
                                Dhoop
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-snacks-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-snacks"
                                type="button"
                                role="tab"
                                aria-controls="pills-snacks"
                                aria-selected="false"
                            >
                                Camphor
                            </button>
                        </li>
                        {/* <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-organic-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-organic"
                                type="button"
                                role="tab"
                                aria-controls="pills-organic"
                                aria-selected="false"
                            >
                                Organic Foods
                            </button>
                        </li> */}
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-all"
                        role="tabpanel"
                        aria-labelledby="pills-all-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img1.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI GAUVEDAM SAMBRANI CUPDHOOP (Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent : Cinnamon
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹450{" "}
                                                    <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹600
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material :</span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Cowdung</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    {/* <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span> */}
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img3.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI PREMIUM SAMBRANI CUPDHOOP (Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent :  Sambrani 
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹390{" "}
                                                    <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹520
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material : </span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Coal</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    {/* <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span> */}
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img4.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI PAVITRA HAVAN SAMAGRI CUPDHOOP (Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent :  Havan Samagri
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹330{" "}
                                                    <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹440
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material :</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">Charcoal Free</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    {/* <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span> */}
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img5.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI ANUBHUTI LOBAN CUPDHOOP (Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent :  Loban
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹330{" "}
                                                    <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹440
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material : </span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">Charcoal Free</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    {/* <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span> */}
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img6.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI AARAMBH GUGGUL CUPDHOOP (Pack of4) 
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent : Guggul
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹330{" "}
                                                    <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹440
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material :</span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Charcoal Free</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI BAMBOOLESS INCENSE STICK PACK OF 6 FRAGRANCE(Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent : PARIJAT, PASSION ROSE, HIRWA CHAFA, SUKHAD CHANDAN, MANGAL DHOOP,LAVENDER
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹630{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹840
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material :</span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Charcoal Free </span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    {/* <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span> */}
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img8.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Swami 5 in 1 Crafted Masala Incense Stick (Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent : OUD, BAKHOOR, WHITE LILY, KESAR CHANDAN, KUBER MANTRA
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹897{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹11966
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material :</span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Organic</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Tropicana 100% Juice, Orange, No Pulp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-grocery"
                        role="tabpanel"
                        aria-labelledby="pills-grocery-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img1.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI GAUVEDAM SAMBRANI CUPDHOOP (Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent : Cinnamon
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹450{" "}
                                                    <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹600
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material :</span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Cowdung</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    {/* <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span> */}
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img3.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI PREMIUM SAMBRANI CUPDHOOP (Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent :  Sambrani 
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹390{" "}
                                                    <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹520
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material : </span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Coal</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    {/* <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span> */}
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img4.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI PAVITRA HAVAN SAMAGRI CUPDHOOP (Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent :  Havan Samagri
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹330{" "}
                                                    <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹440
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material :</span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Charcoal Free</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    {/* <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span> */}
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img5.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI ANUBHUTI LOBAN CUPDHOOP (Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent :  Loban
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹330{" "}
                                                    <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹440
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material : </span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Charcoal Free</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    {/* <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span> */}
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img6.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI AARAMBH GUGGUL CUPDHOOP (Pack of4) 
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent : Guggul
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹330{" "}
                                                    <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹440
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material :</span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Charcoal Free</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-fruits"
                        role="tabpanel"
                        aria-labelledby="pills-fruits-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                SWAMI BAMBOOLESS INCENSE STICK PACK OF 6 FRAGRANCE(Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent : PARIJAT, PASSION ROSE, HIRWA CHAFA, SUKHAD CHANDAN, MANGAL DHOOP,LAVENDER
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹630{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹840
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material :</span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Charcoal Free </span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img8.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Marcel's Modern Pantry Almond Unsweetened
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img9.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                O Organics Milk, Whole, Vitamin D
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img10.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Whole Grains and Seeds Organic Bread
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img11.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Lucerne Yogurt, Lowfat, Strawberry
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-juices"
                        role="tabpanel"
                        aria-labelledby="pills-juices-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    {/* <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span> */}
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/products/product-img8.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Swami 5 in 1 Crafted Masala Incense Stick (Pack of 4)
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                Scent : OUD, BAKHOOR, WHITE LILY, KESAR CHANDAN, KUBER MANTRA
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹897{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹11966
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">Material :</span>
                                                {/* <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span> */}
                                                <span className="text-xs fw-bold text-gray-600">Organic</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-vegetables"
                        role="tabpanel"
                        aria-labelledby="pills-vegetables-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Tropicana 100% Juice, Orange, No Pulp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-snacks"
                        role="tabpanel"
                        aria-labelledby="pills-snacks-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img8.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Marcel's Modern Pantry Almond Unsweetened
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img9.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                O Organics Milk, Whole, Vitamin D
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img10.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Whole Grains and Seeds Organic Bread
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img11.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Lucerne Yogurt, Lowfat, Strawberry
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Nature Valley Whole Grain Oats and Honey Protein
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Tropicana 100% Juice, Orange, No Pulp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-organic"
                        role="tabpanel"
                        aria-labelledby="pills-organic-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img8.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Marcel's Modern Pantry Almond Unsweetened
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img9.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                O Organics Milk, Whole, Vitamin D
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img10.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Whole Grains and Seeds Organic Bread
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img11.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Lucerne Yogurt, Lowfat, Strawberry
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Nature Valley Whole Grain Oats and Honey Protein
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                C-500 Antioxidant Protect Dietary Supplement
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Good &amp; Gather Farmed Atlantic Salmon
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        New
                                    </span>
                                    <Link
                                        to="/product-details"
                                        className="product-card__thumb flex-center"
                                    >
                                        <img src="assets/images/thumbs/product-img7.png" alt="" />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to="/product-details" className="link text-line-2">
                                                Tropicana 100% Juice, Orange, No Pulp
                                            </Link>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-main-600 text-md d-flex">
                                                <i className="ph-fill ph-storefront" />
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md fw-semibold ">
                                                    ₹14.99{" "}
                                                    <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                    ₹28.99
                                                </span>
                                            </div>
                                            <div className="flex-align gap-6">
                                                <span className="text-xs fw-bold text-gray-600">4.8</span>
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                            </div>
                                            <Link
                                                to="/cart"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                            >
                                                Add To Cart <i className="ph ph-shopping-cart" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default RecommendedOne