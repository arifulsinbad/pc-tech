import RootLayout from "@/components/Layouts/RootLayout";
import { Avatar, Button, Col, List, Row } from "antd";
import React, { useState } from "react";
import cpu from "@/assets/pc/cpu.jpg";
import keboard from "@/assets/pc/keboard.png";
import monitor from "/src/assets/pc/monitor.webp";
import motherboard from "@/assets/pc/motherboard.jpg";
import mouse from "@/assets/pc/mouse.jpg";
import powerSupplies from "@/assets/pc/powerSuply.jpg";
import ram from "@/assets/pc/ram.png";
import storage from "@/assets/pc/storage.jpg";
import Image from "next/image";
import Link from "next/link";

import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { removeToCart } from "@/redux/features/cart/cartSlice";
import { UseDispatch, UseSelector } from "@/redux/hook";

const data = [
  {
    title: "Processor",
    image: cpu,
    quary: "processors",
    require: "Required",
  },

  {
    title: "Monitor",
    image: monitor,
    quary: "monitors",
    require: "Required",
  },
  {
    title: "Motherboard",
    image: motherboard,
    quary: "motherboards",
    require: "Required",
  },

  {
    title: "Power Supply",
    image: powerSupplies,
    quary: "powerSupplies",
    require: "Required",
  },
  {
    title: "Ram",
    image: ram,
    quary: "ram",
    require: "Required",
  },
  {
    title: "Storage",
    image: storage,
    quary: "storage",
    require: "Required",
  },
  {
    title: "Graphics Card",
    image:
      "https://www.startech.com.bd/image/cache/catalog/graphics-card/msi/gt-710-1gd3h-lp/gt-710-1gd3h-lp-01-500x500.webp",
    quary: "others",
  },
  {
    title: "Keyboard",
    image: keboard,
    quary: "others",
  },
  {
    title: "Mouse",
    image: mouse,
    quary: "others",
  },
];

const pcBuider = () => {
  const { cart, total } = UseSelector((state) => state.cart);
  const dispatch = UseDispatch(null);

  return (
    <div>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "end",

            paddingTop: "30px",
          }}
          span={24}
        >
          <h4 style={{ marginRight: "15%" }}>Total Price : {total}</h4>
          {cart.length >= 6 && (
            <Button type="primary" danger>
              COMPELATE
            </Button>
          )}
        </Col>
      </Row>
      <div
        className="line"
        style={{
          height: "5px",
          margin: "20px 0px",
          background: "#000",
          width: "100%",
        }}
      ></div>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Image src={item.image} alt="" width={35} height={35} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={cart.map((cart) => (
                <ul key={cart.id}>
                  {cart.catagory === item.title && (
                    <p>
                      <CheckOutlined style={{ color: "green" }} />{" "}
                      {cart.description}
                      {cart.catagory === item.title && (
                        <span
                          onClick={() => dispatch(removeToCart(cart))}
                          style={{
                            margin: "0px 10px",
                            color: "red",
                            fontSize: "20px",
                            backgroundColor: "ButtonFace",
                          }}
                        >
                          <CloseOutlined />
                        </span>
                      )}
                    </p>
                  )}
                </ul>
              ))}
            />
            <p style={{ backgroundColor: "greenyellow" }}>{item.require}</p>
            <Link href={`/catagory/${item.quary}`}>
              <Button>Choose</Button>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default pcBuider;
pcBuider.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
