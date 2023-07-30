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
import { useSelector } from "react-redux";

const data = [
  {
    title: "Processor",
    image: cpu,
    quary: "processors",
    catagory: "Processor",
  },
  {
    title: "Keyboard",
    image: keboard,
    quary: "others",
  },
  {
    title: "Monitor",
    image: monitor,
    quary: "monitors",
  },
  {
    title: "Motherboard",
    image: motherboard,
    quary: "motherboards",
  },
  {
    title: "Mouse",
    image: mouse,
    quary: "others",
  },
  {
    title: "Power Supply",
    image: powerSupplies,
    quary: "powerSupplies",
  },
  {
    title: "Ram",
    image: ram,
    quary: "ram",
  },
  {
    title: "Storage",
    image: storage,
    quary: "storage",
  },
];

const pcBuider = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
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
                  {cart.catagory === item.title && <p>{cart.description}</p>}
                </ul>
              ))}
            />

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
