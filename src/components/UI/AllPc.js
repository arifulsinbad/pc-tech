import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllPc = ({ allPc }) => {
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #COMPELATE PC
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allpc?.map((pc) => (
          <Col key={pc.id} className="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                <Image
                  src={pc?.image_url}
                  height={200}
                  width={500}
                  layout="responsive"
                  alt="pc image"
                />
              }
            >
              <Meta title={pc.title} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0px",
                  background: "#000",
                  width: "100%",
                }}
              ></div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <span>
                  <CalendarOutlined />
                  {pc?.release_date}
                </span>
                <span>
                  <CommentOutlined />
                  {pc?.comment_count}
                </span>
                <span>
                  <ProfileOutlined />
                  {pc?.category}
                </span>
              </p>
              <p style={{ fontSize: "15px" }}>
                {pc?.description.length > 100
                  ? pc?.description.slice(0, 70) + "..."
                  : pc?.description}
              </p>
              <Link href={`/pc/${pc?._id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  Keep Reading <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllPc;
