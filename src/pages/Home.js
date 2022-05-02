import React from "react";

import Navbar from "../components/Navbar";
import ContentLayout from "../components/ContentLayout";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <>
      <Navbar />
      <ContentLayout>
        <Countries />
      </ContentLayout>
    </>
  );
};

export default Home;
