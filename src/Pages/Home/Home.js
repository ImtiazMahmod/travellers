import React from "react";
import { Col, Row } from "react-bootstrap";

import HomeBlog from "./HomeBlog/HomeBlog";
import HomeCarousel from "./HomeCarousel";
import HomeSidebar from "./HomeSidebar";

const Home = () => {
  return (
    <div>
      {/* <HomeBanner></HomeBanner> */}
      <Row>
        <Col md={3} lg={2} className=" d-sm-none d-md-block">
          <HomeSidebar></HomeSidebar>
        </Col>
        <Col md={9} lg={10}>
          <HomeCarousel></HomeCarousel>
        </Col>
      </Row>
      <HomeBlog itemsPerPage={5}></HomeBlog>
    </div>
  );
};

export default Home;
