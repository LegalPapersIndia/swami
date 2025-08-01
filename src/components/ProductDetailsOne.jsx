import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import Slider from 'react-slick';
import { getCountdown } from '../helper/Countdown';
import { products } from "../data/productData";

const ProductDetailsOne = () => {

    // const [timeLeft, setTimeLeft] = useState(getCountdown());

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimeLeft(getCountdown());
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);
    // const productImages = [
    //     "assets/images/thumbs/product-details-thumb1.jpg",
    //     "assets/images/thumbs/product-details-thumb2.png",
    //     "assets/images/thumbs/product-details-thumb3.png",
    //     "assets/images/thumbs/product-details-thumb2.png",
    // ];

    // // increment & decrement
    // const [quantity, setQuantity] = useState(1);
    // const incrementQuantity = () => setQuantity(quantity + 1);
    // const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);


    // const [mainImage, setMainImage] = useState(productImages[0]);

    // const settingsThumbs = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     focusOnSelect: true,
    // };

    const { slug } = useParams();
    const product = products.find((p) => p.slug === slug);

    const [timeLeft, setTimeLeft] = useState(getCountdown());
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(product ? product.images[0] : "");

    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(getCountdown()), 1000);
        return () => clearInterval(interval);
    }, []);

    if (!product) {
        return (
            <div className="container text-center py-80">
                <h2>Product Not Found</h2>
                <Link to="/shop" className="btn btn-main mt-16">
                    Back to Shop
                </Link>
            </div>
        );
    }

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () =>
        setQuantity(quantity > 1 ? quantity - 1 : quantity);

    const settingsThumbs = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true
    };

    return (
        <section className="product-details py-80">
            <div className="container container-lg">
                <div className="row gy-4">
                    <div className="col-lg-9">
                        <div className="row gy-4">
                            <div className="col-xl-6">
                                <div className="product-details__left">
                                    <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                                        <div className="">
                                            <div className="product-details__thumb flex-center h-100">
                                                <img src={mainImage} alt="Main Product" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-24">
                                        <div className="product-details__images-slider">
                                            <Slider {...settingsThumbs}>
                                                {product.images.map((image, index) => (
                                                    <div className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8" key={index} onClick={() => setMainImage(image)}>
                                                        <img className='thum' src={image} alt={`Thumbnail ₹{index}`} />
                                                    </div>
                                                ))}
                                            </Slider>



                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="product-details__content">
                                    <h5 className="mb-12">{product.name}</h5>
                                    <div className="flex-align flex-wrap gap-12">
                                        <div className="flex-align gap-12 flex-wrap">
                                            <div className="flex-align gap-8">
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                            </div>
                                            <span className="text-sm fw-medium text-neutral-600">
                                                {product.rating} Star Rating
                                            </span>
                                            <span className="text-sm fw-medium text-gray-500">
                                                ({product.reviewsCount})
                                            </span>
                                        </div>
                                        {/* <span className="text-sm fw-medium text-gray-500">|</span>
                                        <span className="text-gray-900">
                                            {" "}
                                            <span className="text-gray-400">SKU:</span>EB4DRP{" "}
                                        </span> */}
                                    </div>
                                    <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                    <p className="text-gray-700">
                                        {product.description1}
                                    </p>
                                    <div className="mt-32 flex-align flex-wrap gap-32">
                                        <div className="flex-align gap-8">
                                            <h4 className="mb-0">₹{product.price}</h4>
                                            <span className="text-md text-gray-500">₹{product.oldPrice}.00</span>
                                        </div>
                                        <Link to="#" className="btn btn-main rounded-pill">
                                            Order on What'sApp
                                        </Link>
                                    </div>
                                    <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                    <div className="flex-align flex-wrap gap-16 bg-color-one rounded-8 py-16 px-24">
                                        <div className="flex-align gap-16">
                                            <span className="text-main-600 text-sm">Special Offer:</span>
                                        </div>
                                        <div className="countdown" id="countdown11">
                                            <ul className="countdown-list flex-align flex-wrap">
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                                                    {timeLeft.days} <span className="days" />
                                                </li>
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                                                    {timeLeft.hours}<span className="hours" />
                                                </li>
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                                                    {timeLeft.minutes}<span className="minutes" />
                                                </li>
                                                <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                                                    {timeLeft.seconds}<span className="seconds" />
                                                </li>
                                            </ul>
                                        </div>
                                        <span className="text-gray-900 text-xs">
                                            Remains untill the end of the offer
                                        </span>
                                    </div>
                                    <div className="mb-24">
                                        <div className="mt-32 flex-align gap-12 mb-16">
                                            <span className="w-32 h-32 bg-white flex-center rounded-circle text-main-600 box-shadow-xl">
                                                <i className="ph-fill ph-lightning" />
                                            </span>
                                            <h6 className="text-md mb-0 fw-bold text-gray-900">
                                                Products are almost sold out
                                            </h6>
                                        </div>
                                        <div
                                            className="progress w-100 bg-gray-100 rounded-pill h-8"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={32}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "32%" }}
                                            />
                                        </div>
                                        <span className="text-sm text-gray-700 mt-8">
                                            Available only: {product.available}
                                        </span>
                                    </div>
                                    <span className="text-gray-900 d-block mb-8">Quantity:</span>
                                    <div className="flex-between gap-16 flex-wrap">
                                        <div className="flex-align flex-wrap gap-16">
                                            <div className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
                                                <button onClick={decrementQuantity}
                                                    type="button"
                                                    className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                >
                                                    <i className="ph ph-minus" />
                                                </button>
                                                <input
                                                    type="number"
                                                    className="quantity__input border-0 text-center w-32"
                                                    value={quantity} readOnly
                                                />
                                                <button onClick={incrementQuantity}
                                                    type="button"
                                                    className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                >
                                                    <i className="ph ph-plus" />
                                                </button>
                                            </div>
                                            <Link
                                                to="#"
                                                className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48"
                                            >
                                                {" "}
                                                <i className="ph ph-shopping-cart" /> Add To Cart
                                            </Link>
                                        </div>
                                        <div className="flex-align gap-12">
                                            <Link
                                                to="#"
                                                className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle"
                                            >
                                                <i className="ph ph-heart" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle"
                                            >
                                                <i className="ph ph-shuffle" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle"
                                            >
                                                <i className="ph ph-share-network" />
                                            </Link>
                                        </div>
                                    </div>
                                    <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                    <div className="flex-between gap-16 p-12 border border-main-two-600 border-dashed rounded-8 mb-16">
                                        <div className="flex-align gap-12">
                                            <button
                                                type="button"
                                                className="w-18 h-18 flex-center border border-gray-900 text-xs rounded-circle hover-bg-gray-100"
                                            >
                                                <i className="ph ph-plus" />
                                            </button>
                                            <span className="text-gray-900 fw-medium text-xs">
                                                Mfr. coupon. ₹3.00 off 5
                                            </span>
                                        </div>
                                        <Link
                                            to="/cart"
                                            className="text-xs fw-semibold text-main-two-600 text-decoration-underline hover-text-main-two-700"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                    {/* <ul className="list-inside ms-12">
                                        <li className="text-gray-900 text-sm mb-8">
                                            Buy 1, Get 1 FREE
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product-details__sidebar border border-gray-100 rounded-16 overflow-hidden">
                            <div className="p-24">
                                <div className="flex-between bg-main-600 rounded-pill p-8">
                                    <div className="flex-align gap-8">
                                        <span className="w-44 h-44 bg-white rounded-circle flex-center text-2xl">
                                            <i className="ph ph-storefront" />
                                        </span>
                                        <span className="text-white">by Swami</span>
                                    </div>
                                    <Link
                                        to="/shop"
                                        className="btn btn-white rounded-pill text-uppercase"
                                    >
                                        View Store
                                    </Link>
                                </div>
                            </div>
                            <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                    <i className="ph-fill ph-truck" />
                                </span>
                                <div className="">
                                    <h6 className="text-sm mb-8">Fast Delivery</h6>
                                    <p className="text-gray-700">
                                        Lightning-fast shipping, guaranteed.
                                    </p>
                                </div>
                            </div>
                            <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                    <i className="ph-fill ph-arrow-u-up-left" />
                                </span>
                                <div className="">
                                    <h6 className="text-sm mb-8">Free 90-day returns</h6>
                                    <p className="text-gray-700">Shop risk-free with easy returns.</p>
                                </div>
                            </div>
                            <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                    <i className="ph-fill ph-check-circle" />
                                </span>
                                <div className="">
                                    <h6 className="text-sm mb-8">
                                        Pickup available at Shop location
                                    </h6>
                                    <p className="text-gray-700">Usually ready in 24 hours</p>
                                </div>
                            </div>
                            <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                    <i className="ph-fill ph-credit-card" />
                                </span>
                                <div className="">
                                    <h6 className="text-sm mb-8">Payment</h6>
                                    <p className="text-gray-700">
                                        Payment upon receipt of goods, Payment by card in the
                                        department, Google Pay, Online card.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                    <i className="ph-fill ph-check-circle" />
                                </span>
                                <div className="">
                                    <h6 className="text-sm mb-8">Warranty</h6>
                                    <p className="text-gray-700">
                                        The Consumer Protection Act does not provide for the return of
                                        this product of proper quality.
                                    </p>
                                </div>
                            </div> */}
                            <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                    <i className="ph-fill ph-package" />
                                </span>
                                <div className="">
                                    <h6 className="text-sm mb-8">Packaging</h6>
                                    <p className="text-gray-700">
                                        Research &amp; development value proposition graphical user
                                        interface investor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-80">
                    <div className="product-dContent border rounded-24">
                        <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
                            <ul
                                className="nav common-tab nav-pills mb-3"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="pills-description-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-description"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-description"
                                        aria-selected="true"
                                    >
                                        Description
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-reviews-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-reviews"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-reviews"
                                        aria-selected="false"
                                    >
                                        Reviews
                                    </button>
                                </li>
                            </ul>
                            <Link
                                to="#"
                                className="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
                            >
                                <img src="assets/images/icon/satisfaction-icon.png" alt="" />
                                100% Satisfaction Guaranteed
                            </Link>
                        </div>
                        <div className="product-dContent__box">
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-description"
                                    role="tabpanel"
                                    aria-labelledby="pills-description-tab"
                                    tabIndex={0}
                                >
                                    <div className="mb-40">
                                        <h6 className="mb-24">Product Description</h6>
                                        <p>
                                            {product.description2}{" "}
                                        </p>
                                        <ul className="list-inside mt-32 ms-16">
                                            {product.bulletPoints.map((point, i) => (
                                                <li className="text-gray-400 mb-4" key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-40">
                                        <h6 className="mb-24">Product Specifications</h6>
                                        <ul className="mt-32">
                                            {product.specifications.map((spec, i) => (
                                                <li className="text-gray-400 mb-14 flex-align gap-14"
                                                    key={i}>
                                                    <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                        <i className="ph ph-check" />
                                                    </span>
                                                    <span className="text-heading fw-medium">
                                                        {spec.label}: {" "}
                                                        <span className="text-gray-500"> {spec.value}</span>
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-0">
                                        <h6 className="mb-24">More Details</h6>
                                        <ul className="mt-32">
                                            {product.moreDetails.map((detail, i) => (
                                                <li className="text-gray-400 mb-14 flex-align gap-14"
                                                    key={i}>
                                                    <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                        <i className="ph ph-check" />
                                                    </span>
                                                    <span className="text-gray-500">
                                                        {" "}
                                                        {detail}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-reviews"
                                    role="tabpanel"
                                    aria-labelledby="pills-reviews-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <h6 className="mb-24">Product Reviews</h6>
                                            {product.reviews.map((rev, i) => (
                                                <div className="d-flex align-items-start gap-24 pb-44 border-bottom border-gray-100 mb-44" key={i}>
                                                    <img
                                                        src={rev.avatar}
                                                        alt={rev.user}
                                                        className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0" />
                                                    <div className="flex-grow-1">
                                                        <div className="flex-between align-items-start gap-8 ">
                                                            <div className="">
                                                                <h6 className="mb-12 text-md">{rev.user}</h6>
                                                                <div className="flex-align gap-8">
                                                                    {Array.from({ length: 5 }, (_, index) => (
                                                                        <span
                                                                            key={index}
                                                                            className="text-15 fw-medium d-flex"
                                                                            style={{ color: index < rev.rating ? "#f59e0b" : "#d1d5db" }} // yellow for filled, gray for empty
                                                                        >
                                                                            <i className="ph-fill ph-star" />
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <span className="text-gray-800 text-xs">
                                                                {rev.date}
                                                            </span>
                                                        </div>
                                                        <h6 className="mb-14 text-md mt-24">{rev.title}</h6>
                                                        <p className="text-gray-700">
                                                            {rev.content}
                                                        </p>
                                                        <div className="flex-align gap-20 mt-44">
                                                            <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
                                                                <i className="ph-bold ph-thumbs-up" />
                                                                Like
                                                            </button>
                                                            <Link
                                                                to="#comment-form"
                                                                className="flex-align gap-12 text-gray-700 hover-text-main-600"
                                                            >
                                                                <i className="ph-bold ph-arrow-bend-up-left" />
                                                                Reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="mt-56">
                                                <div className="">
                                                    <h6 className="mb-24">Write a Review</h6>
                                                    <span className="text-heading mb-8">
                                                        What is it like to Product?
                                                    </span>
                                                    <div className="flex-align gap-8">
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mt-32">
                                                    <form action="#">
                                                        <div className="mb-32">
                                                            <label
                                                                htmlFor="title"
                                                                className="text-neutral-600 mb-8"
                                                            >
                                                                Review Title
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="common-input rounded-8"
                                                                id="title"
                                                                placeholder="Great Products"
                                                            />
                                                        </div>
                                                        <div className="mb-32">
                                                            <label
                                                                htmlFor="desc"
                                                                className="text-neutral-600 mb-8"
                                                            >
                                                                Review Content
                                                            </label>
                                                            <textarea
                                                                className="common-input rounded-8"
                                                                id="desc"
                                                                defaultValue={
                                                                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                                                }
                                                            />
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-main rounded-pill mt-48"
                                                        >
                                                            Submit Review
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ms-xxl-5">
                                                <h6 className="mb-24">Customers Feedbacks</h6>
                                                <div className="d-flex flex-wrap gap-44">
                                                    <div className="border border-gray-100 rounded-8 px-40 py-52 flex-center flex-column flex-shrink-0 text-center">
                                                        <h2 className="mb-6 text-main-600">{product.ratingSummary.average}</h2>
                                                        <div className="flex-center gap-8">
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star-half" />
                                                            </span>
                                                        </div>
                                                        <span className="mt-16 text-gray-500">
                                                            Average Product Rating
                                                        </span>
                                                    </div>
                                                    {/* <div className="border border-gray-100 rounded-8 px-24 py-40 flex-grow-1">
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">5</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={70}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "70%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">
                                                                124
                                                            </span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">4</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "50%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">
                                                                52
                                                            </span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">3</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={35}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "35%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">
                                                                12
                                                            </span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">2</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={20}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "20%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">5</span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-0">
                                                            <span className="text-gray-900 flex-shrink-0">1</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={5}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "5%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">2</span>
                                                        </div>
                                                    </div> */}
                                                    <div className="border border-gray-100 rounded-8 px-24 py-40 flex-grow-1">
                                                        {product.ratingSummary.breakdown.map((item, index) => (
                                                            <div key={index} className="flex-align gap-8 mb-20">
                                                                {/* Star Label (e.g., 5) */}
                                                                <span className="text-gray-900 flex-shrink-0">{item.stars}</span>

                                                                {/* Progress Bar */}
                                                                <div
                                                                    className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                    role="progressbar"
                                                                    aria-valuenow={item.percent}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-main-600 rounded-pill"
                                                                        style={{ width: `${item.percent}%` }}
                                                                    />
                                                                </div>

                                                                {/* Stars Icons */}
                                                                <div className="flex-align gap-4">
                                                                    {Array.from({ length: 5 }, (_, i) => (
                                                                        <span
                                                                            key={i}
                                                                            className={`text-xs fw-medium ${i < item.stars ? "text-warning-600" : "text-gray-300"
                                                                                } d-flex`}
                                                                        >
                                                                            <i className="ph-fill ph-star" />
                                                                        </span>
                                                                    ))}
                                                                </div>

                                                                {/* Count */}
                                                                <span className="text-gray-900 flex-shrink-0">{item.count}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
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

export default ProductDetailsOne