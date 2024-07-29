import React from "react";
import { Button, Flex } from "antd";
import { AlignLeftOutlined, PlusCircleFilled } from "@ant-design/icons";
import { UniqueIdentifier } from "@dnd-kit/core";

import styles from "./index.module.scss";

interface ContainerProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
  title?: string;
  onAddItem?: () => void;
}

const Container = ({ children, title, onAddItem }: ContainerProps) => {
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
        onClick={onAddItem}
        size="large"
      >
        Add Item
        <PlusCircleFilled />
      </Button>
    </Flex>
  );
};

export default Container;
