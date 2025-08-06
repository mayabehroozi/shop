"use client";

import Image from "next/image";
import { Typography } from "antd";
import { useEffect, useState } from "react";

const { Text } = Typography;

const images = [
  { src: "/images/t1.png", caption: "Livraison offerte" },
  { src: "/images/t2.png", caption: "Un conseiller est à votre disposition" },
  { src: "/images/t3.png", caption: "Paiement sécurisé" },
  { src: "/images/t4.png", caption:"La Maison vous offre"},
  { src: "/images/t5.png", caption: "2 échantillons offerts" },
];

export default function ImageStrip() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 10px",
      
        gap: "10px",
        boxSizing: "border-box",
      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            flex: "1 1 auto",
            height: "25vh", // ارتفاع باکس ثابت
            minWidth: isDesktop ? "10%" : "20%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: isDesktop ? "80%" : "80%", // فقط این خط تغییر می‌کنه
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              src={img.src}
              alt={img.caption}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
          </div>
          <Text style={{ fontSize: "0.75rem", marginTop: "6px",textAlign:"right" ,color:"#65737e"}}>
            {img.caption}
          </Text>
        </div>
      ))}
    </div>
  );
}
