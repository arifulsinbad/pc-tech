import RootLayout from "@/components/Layouts/RootLayout";
import { useGetProcessorQuery } from "@/redux/api/api";
import { useRouter } from "next/router";
import React from "react";

const CatagoryItem = () => {
  const router = useRouter();
  const { data } = useGetProcessorQuery(router.query.catagoryId);
  console.log(data);
  return (
    <div>
      <h1>Catagory</h1>
    </div>
  );
};

export default CatagoryItem;

CatagoryItem.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
