"use client";

import React, { useState } from "react";
import { Button, Flex, Image, Input, Layout, Menu, MenuProps } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import classNames from "classnames";
import {
  BellOutlined,
  CalendarOutlined,
  DoubleRightOutlined,
  FilterOutlined,
  HomeOutlined,
  LineChartOutlined,
  PlusCircleFilled,
  ProjectOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  ShareAltOutlined,
  StarOutlined,
  SunOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import CustomCard from "../components/CustomCard";
import DragDropWrapper from "../components/DragDropWrapper";
import Link from "next/link";
import SidePanel from "../components/SidePanel";

import styles from "./index.module.scss";
import baseStyles from "@/app/assets/baseStyles.module.scss";

export default function Dashboard() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [defaultNewTaskStatus, setDefaultNewTaskStatus] = useState<
    "pending" | "progress" | "review" | "finished" | null
  >(null);

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
            <Link href="/login">Logout</Link>
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
          onClick={() => {
            setDefaultNewTaskStatus(null);
            setIsSidePanelOpen(true);
          }}
        >
          Create new Task <PlusCircleFilled />
        </Button>
      </Sider>
      <Layout>
        <Header className={styles.headerStyle}>
          <h2>Good Morning, Joe!</h2>
          <p>
            Help & feedback <QuestionCircleOutlined />
          </p>
        </Header>
        <Content className={styles.contentStyle}>
          <Flex justify="space-between" align="center" gap={8}>
            <CustomCard
              imageSrc="/assets/illustrator-1.png"
              alt="illustrator-1"
              title="Introducing tags"
              content="Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."
            />
            <CustomCard
              imageSrc="/assets/illustrator-2.png"
              alt="illustrator-2"
              title="Share Notes Instantly"
              content="Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."
            />
            <CustomCard
              imageSrc="/assets/illustrator-3.png"
              alt="illustrator-3"
              title="Access Anywhere"
              content="Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer."
            />
          </Flex>
          <Flex justify="space-between" align="center">
            <Input
              placeholder="Search"
              style={{ width: 200 }}
              suffix={<SearchOutlined />}
              size="large"
            />
            <div>
              <Button className="bg-transparent" size="large">
                Calender View <CalendarOutlined />
              </Button>
              <Button className="bg-transparent" size="large">
                Automation <StarOutlined />
              </Button>
              <Button className="bg-transparent" size="large">
                Filter <FilterOutlined />
              </Button>
              <Button className="bg-transparent" size="large">
                Share <ShareAltOutlined />
              </Button>
              <Button
                type="primary"
                className={baseStyles.button}
                size="large"
                onClick={() => {
                  setDefaultNewTaskStatus(null);
                  setIsSidePanelOpen(true);
                }}
              >
                Create new <PlusCircleFilled />
              </Button>
            </div>
          </Flex>
          <div className={styles.board}>
            <DragDropWrapper
              setDefaultNewTaskStatus={setDefaultNewTaskStatus}
              setIsSidePanelOpen={setIsSidePanelOpen}
            />
          </div>
          <SidePanel
            isOpen={isSidePanelOpen}
            setClose={() => setIsSidePanelOpen(false)}
            defaultStatus={defaultNewTaskStatus}
          />
        </Content>
      </Layout>
    </Layout>
  );
}
