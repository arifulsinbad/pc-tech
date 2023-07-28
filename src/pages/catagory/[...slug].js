import RootLayout from "@/components/Layouts/RootLayout";
import { useGetCatagoryIdQuery } from "@/redux/api/api";

import { Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const CatagoyDetails = () => {
  const router = useRouter();
  const { data } = useGetCatagoryIdQuery(router.query.slug);
  console.log(data);
  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div>
            <Image
              src={data?.image_url}
              height={200}
              width={500}
              layout="responsive"
              alt="Pc image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1
              style={{
                fontSize: "35px",
              }}
            >
              {data?.name}
            </h1>
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
                Price:
                {data?.price}
              </span>
              <span>Rating: {data?.rating}</span>
              <span>Catagory: {data?.catagory}</span>
            </p>
            {data?.description?.map((feture) => (
              <li key={feture} style={{ fontSize: "25px" }}>
                {feture}
              </li>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CatagoyDetails;
CatagoyDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
