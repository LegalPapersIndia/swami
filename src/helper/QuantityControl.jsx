import React, { useState, useEffect} from 'react';

// const QuantityControl = ({ initialQuantity = 1 }) => {
//     const [quantity, setQuantity] = useState(initialQuantity);

//     const incrementQuantity = () => setQuantity(quantity + 1);
//     const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

const QuantityControl = ({ initialQuantity, onChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    // ✅ Sync with parent if initialQuantity changes
    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    const updateQuantity = (newQuantity) => {
        if (newQuantity < 1) return; // Prevent zero or negative
        setQuantity(newQuantity);
        if (onChange) onChange(newQuantity); // Notify parent
    };

    return (
        <div className="d-flex rounded-4 overflow-hidden">
            <button
                type="button"
                onClick={() => updateQuantity(quantity - 1)}
                className="quantity__minus border border-end border-gray-100 flex-shrink-0 h-48 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
            >
                <i className="ph ph-minus" />
            </button>
            <input
                type="text"
                className="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-4"
                value={quantity}
                min={1}
                onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    if (!isNaN(val)) updateQuantity(val);
                }}
            // readOnly
            />
            <button
                type="button"
                onClick={() => updateQuantity(quantity + 1)}
                className="quantity__plus border border-end border-gray-100 flex-shrink-0 h-48 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
            >
                <i className="ph ph-plus" />
            </button>
        </div>
    );
};

export default QuantityControl;
