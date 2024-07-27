import React from "react";
import { Button, Image, Layout, Menu, MenuProps } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import classNames from "classnames";
import {
  BellOutlined,
  DoubleRightOutlined,
  HomeOutlined,
  LineChartOutlined,
  PlusCircleFilled,
  ProjectOutlined,
  SettingOutlined,
  SunOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import styles from "./index.module.scss";
import baseStyles from "@/app/assets/baseStyles.module.scss";

export default function Dashboard() {
  const items: MenuProps["items"] = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "boards",
      icon: <ProjectOutlined />,
      label: "Boards",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Setings",
    },
    {
      key: "teams",
      icon: <TeamOutlined />,
      label: "Teams",
    },
    {
      key: "analytics",
      icon: <LineChartOutlined />,
      label: "Analytics",
    },
  ];

  return (
    <Layout className={styles.layoutStyle}>
      <Sider width="285px" className={styles.siderStyle}>
        <div className="flex items-center">
          <Image
            width={40}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            alt="profile_img"
            className={styles.profileImg}
          />
          <span className="pl-2 text-lg">Joe Gardner</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div>
            <BellOutlined className={baseStyles.icon} />
            <SunOutlined className={baseStyles.icon} />
            <DoubleRightOutlined className={baseStyles.icon} />
          </div>
          <Button type="default" size="large">
            Logout
          </Button>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["home"]}
          items={items}
          className={styles.menuStyle}
          inlineIndent={8}
        />
        <Button
          type="primary"
          className={classNames(baseStyles.button, "w-full")}
          size="large"
        >
          Create new Task <PlusCircleFilled />
        </Button>
      </Sider>
      <Layout>
        <Header className={styles.headerStyle}>
          <h2>Good Morning, Joe!</h2>
        </Header>
        <Content className={styles.contentStyle}>Content</Content>
      </Layout>
    </Layout>
  );
}
