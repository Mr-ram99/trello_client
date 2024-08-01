"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Button, Flex } from "antd";
import { AlignLeftOutlined, PlusCircleFilled } from "@ant-design/icons";
import { UniqueIdentifier } from "@dnd-kit/core";

import styles from "./index.module.scss";

interface ContainerProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
  title?: string;
  onAddItem?: () => void;
  setDefaultNewTaskStatus: Dispatch<
    SetStateAction<"pending" | "progress" | "review" | "finished" | null>
  >;
  setIsSidePanelOpen: Dispatch<boolean>;
}

const TaskColumnContainer = ({
  children,
  title,
  onAddItem,
  setIsSidePanelOpen,
  setDefaultNewTaskStatus,
}: ContainerProps) => {
  let columnStatus: "pending" | "progress" | "review" | "finished" | null =
    null;
  switch (title) {
    case "To do":
      columnStatus = "pending";
      break;
    case "In Progress":
      columnStatus = "progress";
      break;
    case "Under Review":
      columnStatus = "review";
      break;
    case "Finished":
      columnStatus = "finished";
      break;
    default:
      columnStatus = null;
  }
  return (
    <Flex gap={10} className={styles.container} justify="start" vertical>
      <Flex justify="space-between" align="center">
        <h1 className={styles.title}>{title}</h1>
        <AlignLeftOutlined className={styles.icon} />
      </Flex>
      {children}
      <Button
        type="default"
        className={styles.button}
        onClick={() => {
          setDefaultNewTaskStatus(columnStatus);
          setIsSidePanelOpen(true);
        }}
        size="large"
      >
        Add Item
        <PlusCircleFilled />
      </Button>
    </Flex>
  );
};

export default TaskColumnContainer;
