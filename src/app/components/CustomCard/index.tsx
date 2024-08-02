"use client";

import { Image } from "antd";

import styles from "./index.module.scss";

interface CustomCardProps {
  imageSrc: string;
  alt?: string;
  title: string;
  content: string;
}

export default function CustomCard({
  imageSrc,
  alt,
  title,
  content,
}: CustomCardProps) {
  return (
    <div className={styles.cardStyle}>
      <Image
        src={imageSrc}
        alt={alt || "illustrator-1"}
        width={100}
        height={100}
        preview={false}
      />
      <div style={{ maxWidth: "200px" }}>
        <h3 className={styles.title} style={{ color: "#2F2E41" }}>
          {title}
        </h3>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
}
