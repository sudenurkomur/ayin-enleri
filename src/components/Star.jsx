import React from "react";
import "../styles/star.css";

const stars = [
  { top: "34%", left: "2%", size: 195 },   // Sol üst büyük
  { top: "59%", left: "18%", size: 235 },  // Sol üst küçük
  { top: "70%", left: "4%", size: 80 },  // Sol orta
  { top: "45%", left: "20%", size: 45 },  // Sol alt orta7
  { top: "6%", left: "78%", size: 150 },  // Sağ üst
  { top: "28%", left: "91%", size: 30 }, // Sağ üst biraz alt
  { top: "48%", left: "88%", size: 35 }, // Sağ orta

  { top: "72%", left: "85%", size: 50 }, // Sağ alt

  { top: "70%", left: "93%", size: 28 }, // Sol alt
  { top: "82%", left: "68%", size: 20 }, // En alt sol

  { top: "62%", left: "52%", size: 30 }, // En alt orta
  { top: "62%", left: "68%", size: 20 }, // En alt orta yanı

  { top: "75%", left: "65%", size: 25 }, // Alt sağ

  { top: "12%", left: "60%", size: 35 }, // Başlığın sağında
  { top: "10%", left: "35%", size: 30 }, // Başlık ortası gibi
];


const Star = () => {
  return (
    <div className="stars-layer">
      {stars.map((star, i) => (
        <img
          key={i}
          src="/images/star.png"
          alt=""
          className="star"
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: "twinkle 4s infinite ease-in-out"
          }}
        />
      ))}
    </div>
  );
};

export default Star;
