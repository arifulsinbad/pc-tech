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
  // const onClick = ({ key }) => {
  //   message.info(`Click on item ${key}`);
  // };
  // const items = [
  //   {
  //     label: (
  //       <p>
  //         <Link href={"/processor"}>CPU / Processor</Link>
  //       </p>
  //     ),
  //     key: "1",
  //   },
  //   {
  //     label: (
  //       <p>
  //         <Link href={"/motherboard"}>Motherboard</Link>
  //       </p>
  //     ),
  //     key: "2",
  //   },
  //   {
  //     label: (
  //       <p>
  //         <Link href={"/ram"}>RAM</Link>
  //       </p>
  //     ),
  //     key: "3",
  //   },
  //   {
  //     label: (
  //       <p>
  //         <Link href={"/powerSupply"}>Power Supply Unit</Link>
  //       </p>
  //     ),
  //     key: "4",
  //   },
  //   {
  //     label: (
  //       <p>
  //         <Link href={"/storage"}>Storage Device</Link>
  //       </p>
  //     ),
  //     key: "5",
  //   },
  //   {
  //     label: (
  //       <p>
  //         <Link href={"/monitor"}>Monitor</Link>
  //       </p>
  //     ),
  //     key: "6",
  //   },
  //   {
  //     label: (
  //       <p>
  //         <Link href={"/others"}>Others</Link>
  //       </p>
  //     ),
  //     key: "7",
  //   },
  // ];
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
            {/* <Dropdown
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
            </Dropdown> */}
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
