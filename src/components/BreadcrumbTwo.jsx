// import React from 'react'
// import { Link } from 'react-router-dom'

// const BreadcrumbTwo = () => {
//     return (
//         <div className="breadcrumb py-26 bg-color-one">
//             <div className="container container-lg">
//                 <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
//                     <h6 className="mb-0">Product Details</h6>
//                     <ul className="flex-align gap-8 flex-wrap">
//                         <li className="text-sm">
//                             <Link to="/" className="text-main-600 flex-align gap-8">
//                                 <i className="ph ph-house" />
//                                 Home
//                             </Link>
//                         </li>
//                         <li className="flex-align text-gray-500">
//                             <i className="ph ph-caret-right" />
//                         </li>
//                         <li className="text-sm">
//                             <Link to="/shop" className="text-main-600 flex-align gap-8">

//                                 Shop
//                             </Link>
//                         </li>
//                         <li className="flex-align text-gray-500">
//                             <i className="ph ph-caret-right" />
//                         </li>
//                         <li className="text-sm">
//                             <Link to="/" className="text-main-600 flex-align gap-8">
//                                 Products
//                             </Link>
//                         </li>
//                         <li className="flex-align text-gray-500">
//                             <i className="ph ph-caret-right" />
//                         </li>
//                         <li className="text-sm text-neutral-600">Lay's Potato Chips</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default BreadcrumbTwo

import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/productData";

const BreadcrumbTwo = () => {
  const { slug } = useParams();

  // Find product by slug
  const product = products.find((p) => p.slug === slug);

  // Fallback in case product is not found
  if (!product) {
    return null;
  }

  return (
    <div className="breadcrumb py-26 bg-color-one">
      <div className="container container-lg">
        <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
          <h6 className="mb-0">{product.name}</h6>
          <ul className="flex-align gap-8 flex-wrap">
            {/* Home */}
            <li className="text-sm">
              <Link to="/" className="text-main-600 flex-align gap-8">
                <i className="ph ph-house" />
                Home
              </Link>
            </li>

            {/* Arrow */}
            <li className="flex-align text-gray-500">
              <i className="ph ph-caret-right" />
            </li>

            {/* Shop */}
            <li className="text-sm">
              <Link to="/shop" className="text-main-600 flex-align gap-8">
                Shop
              </Link>
            </li>

            {/* Arrow */}
            <li className="flex-align text-gray-500">
              <i className="ph ph-caret-right" />
            </li>

            {/* Category (dynamic) */}
            <li className="text-sm">
              <Link
                to={`/category/${product.categorySlug}`}
                className="text-main-600 flex-align gap-8"
              >
                {product.category}
              </Link>
            </li>

            {/* Arrow */}
            <li className="flex-align text-gray-500">
              <i className="ph ph-caret-right" />
            </li>

            {/* Product Name (current page) */}
            <li className="text-sm text-neutral-600">{product.name}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbTwo;