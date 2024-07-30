"use client";

import { DatePicker, Flex, Input, Select } from "antd";
import startCase from "lodash/startCase";

import styles from "../index.module.scss";

interface FormFieldPropType {
  Icon: React.ComponentType;
  name: string;
  options?: { value: string; label: string }[];
}

export default function FormField({ Icon, name, options }: FormFieldPropType) {
  return (
    <Flex align="center" gap={60} className={styles.field}>
      <Flex align="center" gap={24}>
        <div className={styles.fieldIcon}>
          <Icon />
        </div>
        <span className={styles.fieldName}>{startCase(name)}</span>
      </Flex>
      {name === "deadline" && <DatePicker />}
      {name === "description" && <Input.TextArea />}
      {["status", "priority"].includes(name) && (
        <Select placeholder="Not Selected" options={options} />
      )}
    </Flex>
  );
}
