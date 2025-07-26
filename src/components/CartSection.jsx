// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import QuantityControl from '../helper/QuantityControl'

// const CartSection = () => {
//     const [cartItems, setCartItems] = useState([
//         {
//             id: 1,
//             name: "Swami Gauvedam Sambrani Cupdhoop (Pack Of 4)",
//             price: 450,
//             image: "assets/images/thumbs/product-two-img1.png",
//             rating: 4.8,
//             reviews: 128,
//             quantity: 1,
//         },
//         {
//             id: 2,
//             name: "Swami Pavitra Havan Samagri Cupdhoop (Pack Of 4)",
//             price: 330,
//             image: "assets/images/thumbs/product-two-img2.png",
//             rating: 4.8,
//             reviews: 128,
//             quantity: 1,
//         },
//     ]);

//     // ✅ Remove item from cart
//     const handleRemove = (id) => {
//         const updatedCart = cartItems.filter((item) => item.id !== id);
//         setCartItems(updatedCart);
//     };
//     return (
//         <section className="cart py-80">
//             <div className="container container-lg">
//                 <div className="row gy-4">
//                     <div className="col-xl-9 col-lg-8">
//                         <div className="cart-table border border-gray-100 rounded-8 px-40 py-48">
//                             <div className="overflow-x-auto scroll-sm scroll-sm-horizontal">
//                                 <table className="table style-three">
//                                     <thead>
//                                         <tr>
//                                             <th className="h6 mb-0 text-lg fw-bold">Delete</th>
//                                             <th className="h6 mb-0 text-lg fw-bold">Product Name</th>
//                                             <th className="h6 mb-0 text-lg fw-bold">Price</th>
//                                             <th className="h6 mb-0 text-lg fw-bold">Quantity</th>
//                                             <th className="h6 mb-0 text-lg fw-bold">Subtotal</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {cartItems.length > 0 ? (
//                                             cartItems.map((item) => (
//                                                 <tr key={item.id}>
//                                                     <td>
//                                                         <button
//                                                             type="button"
//                                                             className="remove-tr-btn flex-align gap-12 hover-text-danger-600"
//                                                             onClick={() => handleRemove(item.id)}
//                                                         >
//                                                             <i className="ph ph-x-circle text-2xl d-flex" />
//                                                             Remove
//                                                         </button>
//                                                     </td>
//                                                     <td>
//                                                         <div className="table-product d-flex align-items-center gap-24">
//                                                             <Link
//                                                                 to="/product-details-two"
//                                                                 className="table-product__thumb border border-gray-100 rounded-8 flex-center "
//                                                             >
//                                                                 <img src={item.image} alt={item.name} />
//                                                             </Link>
//                                                             <div className="table-product__content text-start">
//                                                                 <h6 className="title text-lg fw-semibold mb-8">
//                                                                     <Link to="/product-details" className="link text-line-2">
//                                                                         {item.name}
//                                                                     </Link>
//                                                                 </h6>
//                                                                 <div className="flex-align gap-16 mb-16">
//                                                                     <div className="flex-align gap-6">
//                                                                         <span className="text-md fw-medium text-warning-600 d-flex">
//                                                                             <i className="ph-fill ph-star" />
//                                                                         </span>
//                                                                         <span className="text-md fw-semibold text-gray-900">
//                                                                             {item.rating}
//                                                                         </span>
//                                                                     </div>
//                                                                     <span className="text-sm fw-medium text-gray-200">|</span>
//                                                                     <span className="text-neutral-600 text-sm">
//                                                                         {item.reviews} Reviews
//                                                                     </span>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </td>
//                                                     <td>
//                                                         <span className="text-lg h6 mb-0 fw-semibold">
//                                                             ₹{item.price.toFixed(2)}
//                                                         </span>
//                                                     </td>
//                                                     <td>
//                                                         <QuantityControl initialQuantity={item.quantity} />
//                                                     </td>
//                                                     <td>
//                                                         <span className="text-lg h6 mb-0 fw-semibold">
//                                                             ₹{(item.price * item.quantity).toFixed(2)}
//                                                         </span>
//                                                     </td>
//                                                 </tr>
//                                             ))
//                                         ) : (
//                                             <tr>
//                                                 <td colSpan="5" className="text-center py-4">
//                                                     Your cart is empty.
//                                                 </td>
//                                             </tr>
//                                         )}
//                                     </tbody>
//                                 </table>
//                             </div>
//                             <div className="flex-between flex-wrap gap-16 mt-16">
//                                 <div className="flex-align gap-16">
//                                     <input
//                                         type="text"
//                                         className="common-input"
//                                         placeholder="Coupon Code"
//                                     />
//                                     <button
//                                         type="submit"
//                                         className="btn btn-main py-18 w-100 rounded-8"
//                                     >
//                                         Apply Coupon
//                                     </button>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="text-lg text-gray-500 hover-text-main-600"
//                                 >
//                                     Update Cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xl-3 col-lg-4">
//                         <div className="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
//                             <h6 className="text-xl mb-32">Cart Totals</h6>
//                             <div className="bg-color-three rounded-8 p-24">
//                                 <div className="mb-32 flex-between gap-8">
//                                     <span className="text-gray-900 font-heading-two">Subtotal</span>
//                                     <span className="text-gray-900 fw-semibold">₹250.00</span>
//                                 </div>
//                                 <div className="mb-32 flex-between gap-8">
//                                     <span className="text-gray-900 font-heading-two">
//                                         Extimated Delivery
//                                     </span>
//                                     <span className="text-gray-900 fw-semibold">Free</span>
//                                 </div>
//                                 <div className="mb-0 flex-between gap-8">
//                                     <span className="text-gray-900 font-heading-two">
//                                         Extimated Taxs
//                                     </span>
//                                     <span className="text-gray-900 fw-semibold">INR 40.00</span>
//                                 </div>
//                             </div>
//                             <div className="bg-color-three rounded-8 p-24 mt-24">
//                                 <div className="flex-between gap-8">
//                                     <span className="text-gray-900 text-xl fw-semibold">Total</span>
//                                     <span className="text-gray-900 text-xl fw-semibold">₹250.00</span>
//                                 </div>
//                             </div>
//                             <Link
//                                 to="/checkout"
//                                 className="btn btn-main mt-40 py-18 w-100 rounded-8"
//                             >
//                                 Proceed to checkout
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }

// export default CartSection

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import QuantityControl from '../helper/QuantityControl';

const CartSection = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Swami Gauvedam Sambrani Cupdhoop (Pack Of 4)",
      price: 450,
      rating: 4.8,
      reviews: 128,
      quantity: 1,
    },
    {
      id: 2,
      name: "Swami Pavitra Havan Samagri Cupdhoop (Pack Of 4)",
      price: 330,
      rating: 4.8,
      reviews: 128,
      quantity: 1,
    },
  ]);

  // ✅ Remove item from cart
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // ✅ Update quantity dynamically
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  // ✅ Calculate totals dynamically
  const { subtotal, tax, total } = useMemo(() => {
    const subtotalCalc = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const taxCalc = subtotalCalc > 0 ? 40 : 0; // Example: Fixed tax
    const totalCalc = subtotalCalc + taxCalc;
    return { subtotal: subtotalCalc, tax: taxCalc, total: totalCalc };
  }, [cartItems]);

  return (
    <section className="cart py-80">
      <div className="container container-lg">
        <div className="cart-table border border-gray-100 rounded-8 px-24 py-32">
          <div className="overflow-x-auto">
            <table className="table style-three w-100">
              <thead>
                <tr>
                  <th className="h6 mb-0 text-lg fw-bold">Delete</th>
                  <th className="h6 mb-0 text-lg fw-bold">Product Name</th>
                  <th className="h6 mb-0 text-lg fw-bold">Price</th>
                  <th className="h6 mb-0 text-lg fw-bold">Quantity</th>
                  <th className="h6 mb-0 text-lg fw-bold">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <button
                          type="button"
                          className="remove-tr-btn flex-align gap-12 hover-text-danger-600"
                          onClick={() => handleRemove(item.id)}
                        >
                          <i className="ph ph-x-circle text-2xl d-flex" />
                          Remove
                        </button>
                      </td>
                      <td>
                        <h6 className="title text-lg fw-semibold mb-0">{item.name}</h6>
                      </td>
                      <td>
                        <span className="text-lg h6 mb-0 fw-semibold">
                          ₹{item.price.toFixed(2)}
                        </span>
                      </td>
                      <td>
                        <QuantityControl
                          initialQuantity={item.quantity}
                          onChange={(qty) => handleQuantityChange(item.id, qty)}
                        />
                      </td>
                      <td>
                        <span className="text-lg h6 mb-0 fw-semibold">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      Your cart smells like... nothing! <br />Let’s fix that.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* ✅ Cart Totals Section Below Items */}
          {cartItems.length > 0 && (
            <div className="cart-total mt-32 p-24 bg-gray-50 rounded-8">
              <h6 className="text-xl mb-16 fw-bold">Cart Totals</h6>
              <div className="flex-between mb-12">
                <span className="text-gray-900 fw-semibold">Subtotal:</span>
                <span className="text-gray-900 fw-bold">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex-between mb-12">
                <span className="text-gray-900 fw-semibold">Estimated Tax:</span>
                <span className="text-gray-900 fw-bold">₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex-between mb-12">
                <span className="text-gray-900 fw-semibold">Delivery:</span>
                <span className="text-gray-900 fw-bold">Free</span>
              </div>
              <hr />
              <div className="flex-between mt-12">
                <span className="text-gray-900 text-xl fw-bold">Total:</span>
                <span className="text-gray-900 text-xl fw-bold">₹{total.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="btn btn-main mt-24 py-14 w-100 rounded-8"
              >
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartSection;
