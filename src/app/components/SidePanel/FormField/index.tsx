"use client";

import { DatePicker, Flex, Input, Select } from "antd";
import startCase from "lodash/startCase";
import { useEffect, useState } from "react";

import styles from "../index.module.scss";

interface FormFieldPropType {
  Icon: React.ComponentType;
  name: string;
  options?: { value: string; label: string }[];
  defaultStatus?: "pending" | "progress" | "review" | "finished" | null;
}

export default function FormField({
  Icon,
  name,
  options,
  defaultStatus,
}: FormFieldPropType) {
  const [status, setStatus] = useState(defaultStatus);

  useEffect(() => {
    setStatus(defaultStatus);
  }, [defaultStatus]);

  return (
    <Flex align="center" gap={60} className={styles.field}>
      <Flex align="center" gap={24}>
        <div className={styles.fieldIcon}>
          <Icon />
        </div>
        <span className={styles.fieldName}>{startCase(name)}</span>
      </Flex>
      {name === "deadline" && <DatePicker className={styles.select} />}
      {name === "description" && <Input.TextArea />}
      {name === "status" && (
        <Select
          options={options}
          value={status}
          onChange={setStatus}
          placeholder="Not Selected"
          className={styles.select}
        />
      )}
      {name === "priority" && (
        <Select
          placeholder="Not Selected"
          options={options}
          className={styles.select}
        />
      )}
    </Flex>
  );
}
