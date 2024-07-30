"use client";

import { createPortal } from "react-dom";
import { Button, Flex, Input } from "antd";
import {
  ArrowsAltOutlined,
  CalendarOutlined,
  CloseOutlined,
  EditOutlined,
  ShareAltOutlined,
  StarOutlined,
  SunOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import classNames from "classnames";
import FormField from "./FormField";

import styles from "./index.module.scss";
import baseStyles from "@/app/assets/baseStyles.module.scss";

interface SidePanelProps {
  isOpen: boolean;
  setClose: () => void;
}

export default function SidePanel({ isOpen, setClose }: SidePanelProps) {
  const statusOption = [
    { value: "pending", label: "Pending" },
    { value: "progress", label: "Progress" },
    { value: "review", label: "Review" },
    { value: "finished", label: "Finished" },
  ];

  const priorityOption = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "urgent", label: "Urgent" },
  ];

  return createPortal(
    <div
      className={classNames(styles.drawer, !isOpen && styles.hide)}
      style={{ width: "500px" }}
    >
      <div className={styles.header}>
        <div className={styles.left}>
          <CloseOutlined onClick={setClose} className={styles.icon} />
          <ArrowsAltOutlined onClick={() => {}} className={styles.icon} />
        </div>
        <div className={styles.right}>
          <Button>
            Share <ShareAltOutlined />
          </Button>
          <Button>
            Favourite <StarOutlined />
          </Button>
        </div>
      </div>
      <Flex gap={32} className={styles.content} vertical>
        <Input className={styles.input} placeholder="Title" />
        <Flex
          justify="space-between"
          gap={32}
          className={styles.fields}
          vertical
        >
          <FormField Icon={SunOutlined} name="status" options={statusOption} />
          <FormField
            Icon={WarningOutlined}
            name="priority"
            options={priorityOption}
          />
          <FormField Icon={CalendarOutlined} name="deadline" />
          <FormField Icon={EditOutlined} name="description" />
        </Flex>
        <Button type="primary" size="large" className={baseStyles.button}>
          Add Task
        </Button>
      </Flex>
    </div>,
    document.body
  );
}
