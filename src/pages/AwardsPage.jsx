import React, { useEffect, useRef, useState } from "react";
import AwardCard from "../components/AwardCard";
import TopKaizenCard from "../components/TopKaizenCard";
import Star from "../components/Star";
import "../styles/awards.css";
import "../styles/star.css";
import Header from "../components/Header";
import html2canvas from "html2canvas"; // 📸 kütüphaneyi ekle

const AwardsPage = () => {
  const [data, setData] = useState(null);
  const awardsRef = useRef(); // 📌 DOM referansı

  useEffect(() => {
    fetch("/data/awards.json")  
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Veri yüklenemedi:", err));
  }, []);

  useEffect(() => {
    if (data && awardsRef.current) {
      const timeout = setTimeout(() => {
        html2canvas(awardsRef.current).then((canvas) => {
          const link = document.createElement("a");
  
          // 📌 Ayı JSON'dan al
          const ay = data.month?.toLowerCase() || "ay";
          const dosyaAdi = `${ay}-enleri.png`;
  
          link.download = dosyaAdi;
          link.href = canvas.toDataURL("image/png");
          link.click();
        });
      }, 1000);
  
      return () => clearTimeout(timeout);
    }
  }, [data]);
  

  if (!data) return <div className="loading">Yükleniyor...</div>;

  return (
    <div className="awards-page" ref={awardsRef}>
      {/* Arka plan yıldızlar */}
      <Star count={30} />

      {/* Başlık */}
      <Header month={data.month}/>

      {/* En yüksek kazançlı kaizen */}
      <TopKaizenCard
        topawardTitle={data.topKaizen.topawardTitle}
        name={data.topKaizen.name}
        description={data.topKaizen.description}
        value={data.topKaizen.value}
      />

      {/* Ödül kartları */}
      <div className="award-card-grid">
        {data.awards.map((award, i) => (
          <AwardCard
            key={i}
            title={award.title}
            name={award.name}
            className={`card-${i + 1}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsPage;
