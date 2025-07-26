// src/data/productData.js
export const products = [
  {
    id: 1,
    slug: "swami-gauvedam-sambrani",
    name: "Swami Gauvedam Sambrani Cupdhoop",
    price: 27,
    oldPrice: 38,
    rating: 4.8,
    reviewsCount: "21,671",
    available: 42,
    images: [
      "/assets/images/thumbs/product-details-thumb1.jpg",
      "/assets/images/thumbs/product-details-thumb1.jpg",
      "/assets/images/thumbs/product-details-thumb1.jpg",
    //   "/assets/images/thumbs/product-details-thumb2.png",
    //   "/assets/images/thumbs/product-details-thumb3.png",
    ],
    description1: [
      "Wherever celebrations and good times happen, the LAY'S brand will be there just as it has been for more than 75 years.",
      "Morbi ut sapien vitae odio accumsan gravida."
    ],
    description2: [
      "Wherever celebrations and good times happen, the LAY'S brand will be there just as it has been for more than 75 years.",
      "Morbi ut sapien vitae odio accumsan gravida."
    ],
    bulletPoints: [
      "8.0 oz. bag of LAY'S Classic Potato Chips",
      "Includes potatoes, oil, and salt",
      "Gluten free product"
    ],
    specifications: [
      { label: "Product Type", value: "Chips & Dips" },
      { label: "Product Name", value: "Potato Chips Classic" },
      { label: "Brand", value: "Lay's" }
    ],
    nutritionFacts: ["Total Fat 10g", "Sodium 170mg", "Potassium 350mg"],
    moreDetails: ["Secure packaging", "Fast shipping"],
    seller: { name: "Swami", storeLink: "/shop" },
    sidebarInfo: [
      {
        icon: "ph-fill ph-truck",
        title: "Fast Delivery",
        text: "Lightning-fast shipping, guaranteed."
      },
      {
        icon: "ph-fill ph-credit-card",
        title: "Payment Options",
        text: "Card, Google Pay, UPI"
      }
    ],
    reviews: [
      {
        user: "Nicolas Cage",
        avatar: "/assets/images/thumbs/comment-img1.png",
        rating: 5,
        date: "3 Days ago",
        title: "Great Product",
        content:
          "There are many variations of passages of Lorem Ipsum available."
      }
    ],
    ratingSummary: {
      average: 4.8,
      breakdown: [
        { stars: 5, percent: 70, count: 124 },
        { stars: 4, percent: 50, count: 52 }
      ]
    }
  },
  // Add more products here...
];
