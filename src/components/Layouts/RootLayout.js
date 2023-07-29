import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  DownOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Space } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const RootLayout = ({ children }) => {
  const onClick = ({ key }) => {
    // message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: (
        <p>
          <Link href={"/catagory/processors"}>CPU / Processor</Link>
        </p>
      ),
      key: "1",
    },
    {
      label: (
        <p>
          <Link href={"/catagory/motherboards"}>Motherboard</Link>
        </p>
      ),
      key: "2",
    },
    {
      label: (
        <p>
          <Link href={"/catagory/ram"}>RAM</Link>
        </p>
      ),
      key: "3",
    },
    {
      label: (
        <p>
          <Link href={"/catagory/powerSupplies"}>Power Supply Unit</Link>
        </p>
      ),
      key: "4",
    },
    {
      label: (
        <p>
          <Link href={"/catagory/storage"}>Storage Device</Link>
        </p>
      ),
      key: "5",
    },
    {
      label: (
        <p>
          <Link href={"/catagory/monitors"}>Monitor</Link>
        </p>
      ),
      key: "6",
    },
    {
      label: (
        <p>
          <Link href={"/catagory/others"}>Others</Link>
        </p>
      ),
      key: "7",
    },
  ];
  const { data: session } = useSession();
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
          {session?.user ? (
            <items>
              <Button onClick={() => signOut()} type="primary" danger>
                Logout
              </Button>
            </items>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/login"
            >
              <items>Login</items>
            </Link>
          )}

          <span
            style={{
              padding: "0 50px",
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
          </span>

          <Link href="/pcBuilder">
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
