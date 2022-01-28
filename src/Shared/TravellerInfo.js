import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHandshake, FaSmile, FaUserShield, FaUserTie } from "react-icons/fa";
import "./TravellerInfo.css";

const TravellerInfo = () => {
  return (
    <Container className="my-5 ">
      <Row className="mx-auto">
        <div className="my-3 ">
          <h5 className="primaryColor text-center text-decoration-underline mt-5">
            Why Traveller
          </h5>
          <h1 className=" text-light text-center">
            Why Traveller is Best for <br />{" "}
            <span className="primaryColor"> All Travellers</span>
          </h1>
        </div>
        <Col sm={12} md={6} lg={3} className="info mx-auto p-5">
          <FaUserTie className="infoIcon " />

          <h5>2000+ Our worldwide Travellers</h5>
        </Col>
        <Col sm={12} md={6} lg={3} className="info  p-5  mx-auto">
          <FaHandshake className="infoIcon  " />
          <h5>100% trusted travel agency</h5>
        </Col>

        <Col sm={12} md={6} lg={3} className="info  p-5  mx-auto">
          <FaUserShield className="infoIcon" />
          <h5>10+ year of travel experience</h5>
        </Col>
        <Col sm={12} md={6} lg={3} className="info  p-5  mx-auto">
          <FaSmile className="infoIcon " />
          <h5>90% of our traveller happy</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default TravellerInfo;
