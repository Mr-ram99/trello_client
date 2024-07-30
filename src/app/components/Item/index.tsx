"use client";

import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

import styles from "./index.module.scss";

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
  description: string;
  status: "pending" | "progress" | "review" | "finished";
  priority: "low" | "medium" | "urgent";
  deadline: Date;
};

const Items = ({
  id,
  title,
  description,
  status,
  priority,
  deadline,
}: ItemsType) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={styles.item}
      {...listeners}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <Tag color="#FF6B6B" className={styles.priority}>
        {priority.toUpperCase()}
      </Tag>
      <div className={styles.deadline}>
        <ClockCircleOutlined />
        {deadline.toDateString()}
      </div>
    </div>
  );
};

export default Items;
