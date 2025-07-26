import React, { useEffect, useState } from 'react';

const flowerImages = [
  'assets/images/shape/flower1.png',
  'assets/images/shape/flower2.png',
  'assets/images/shape/flower3.png',
  'assets/images/shape/flower4.png',
];


const FlowerDrop = () => {
  const [flowers, setFlowers] = useState([]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isActive) return;

      const left = Math.floor(Math.random() * window.innerWidth);
      const size = Math.random() * 30 + 30; // 30px–60px

      const id = Date.now() + Math.random();
      const img = flowerImages[Math.floor(Math.random() * flowerImages.length)];

      const newFlower = {
        id,
        left,
        size,
        img,
      };

      setFlowers((prev) => [...prev, newFlower]);

      setTimeout(() => {
        setFlowers((prev) => prev.filter((f) => f.id !== newFlower.id));
      }, 6000);
    }, 300);

    const timeout = setTimeout(() => {
      setIsActive(false);
      clearInterval(interval);
    }, 12000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isActive]);

  return (
    <div className="flower-container">
      {flowers.map((flower) => (
        <img
          key={flower.id}
          src={flower.img}
          className="flower"
          alt="flower"
          style={{
            left: `${flower.left}px`,
            width: `${flower.size}px`,
            height: `${flower.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FlowerDrop;