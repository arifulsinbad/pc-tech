import RootLayout from "@/components/Layouts/RootLayout";
import { useGetPcQuery } from "@/redux/api/api";

import { Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const PcDetails = () => {
  const router = useRouter();
  const { data } = useGetPcQuery(router.query.pcId);
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
              src={data?.image}
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
              {data?.model}
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
              <span>Catagory: PC</span>
            </p>
            {data?.keyFeature?.map((feture) => (
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

export default PcDetails;
PcDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
