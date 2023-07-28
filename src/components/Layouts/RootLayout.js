import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Space } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const RootLayout = ({ children }) => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: <Link href={"/processor"}>CPU / Processor</Link>,
      key: "1",
    },
    {
      label: <Link href={"/motherboard"}>Motherboard</Link>,
      key: "2",
    },
    {
      label: <Link href={"/ram"}>RAM</Link>,
      key: "3",
    },
    {
      label: <Link href={"/powerSupply"}>Power Supply Unit</Link>,
      key: "4",
    },
    {
      label: <Link href={"/storage"}>Storage Device</Link>,
      key: "5",
    },
    {
      label: <Link href={"/monitor"}>Monitor</Link>,
      key: "6",
    },
    {
      label: <Link href={"/others"}>Others</Link>,
      key: "7",
    },
  ];
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PC TECH
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Link href="/allNews">
            <items>
              <ProfileOutlined />
              All PC
            </items>
          </Link>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <Dropdown
                menu={{
                  items,
                  onClick,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Featured Category
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </items>
          </Link>
          <Link href="/contact">
            <Button>
              <MobileOutlined />
              Pc Builder
            </Button>
          </Link>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC TECH
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        News Portal ©2023 Created by Programming Hero
      </Footer>
    </Layout>
  );
};
export default RootLayout;
