"use client";

import { Card, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const { Title, Paragraph } = Typography;

interface Card2Props {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
}

export default function Card2({
  imageUrl,
  title,
  description,
  linkUrl,
}: Card2Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Card
      style={{
        width: isMobile ? "90%" : 400,
        height: isMobile ? "85vh" : 500,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
      styles={{
        body: {
          padding: 16,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        },
      }}
      hoverable
    >
      <div style={{ position: "relative", height: "60%" }}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </div>

      <div style={{ marginTop: 16, flex: 1 }}>
        <Link href={linkUrl}>
          <span
            style={{
              fontSize: "1.3rem",
              fontWeight: "bold",
              color: "#222",
              textDecoration: "none",
              borderBottom: "2px solid transparent",
              transition: "border-color 0.3s",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLSpanElement).style.borderBottom =
                "2px solid #888")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLSpanElement).style.borderBottom =
                "2px solid transparent")
            }
          >
            {title}
          </span>
        </Link>

        <Paragraph style={{ marginTop: 12, fontSize: "1rem", color: "#555" }}>
          {description}
        </Paragraph>

        <Link href={linkUrl}>
          <span
            style={{
              marginTop: 8,
              color: "#444",
              textDecoration: "underline",
              fontSize: "1rem",
              display: "inline-block",
            }}
          >
            Découvrir →
          </span>
        </Link>
      </div>
    </Card>
  );
}
