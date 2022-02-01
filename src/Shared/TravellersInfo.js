import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaClock, FaLanguage, FaUsersCog, FaWalking } from "react-icons/fa";

const TravellersInfo = ({ blog }) => {
  return (
    <div>
      <Container className="my-2 border-top border-bottom">
        <Row className="mx-auto">
          <Col
            xm={6}
            md={6}
            lg={3}
            className="d-flex align-items-center info mx-auto p-2"
          >
            <FaClock className="primaryColor fs-2" />

            <div className="mx-3 text-start">
              <h5>Duration</h5>
              <p>{blog?.category}</p>
            </div>
          </Col>
          <Col
            xm={6}
            md={6}
            lg={3}
            className="d-flex align-items-center info mx-auto p-2"
          >
            <FaWalking className="primaryColor fs-1 " />
            <div className="mx-3 text-start">
              <h5>Transportation</h5>
              <p>{blog?.transport}</p>{" "}
            </div>
          </Col>

          <Col
            xm={6}
            md={6}
            lg={3}
            className="d-flex  align-items-center info mx-auto p-2"
          >
            <FaUsersCog className="primaryColor fs-1" />
            <div className="mx-3 text-start">
              <h5>Group Size</h5>
              <p>30 People</p>
            </div>
          </Col>
          <Col
            xm={6}
            md={6}
            lg={3}
            className="d-flex align-items-center info mx-auto p-2"
          >
            <FaLanguage className="primaryColor fs-1 " />
            <div className="mx-3 text-start">
              <h5>Languages</h5>
              <p>Bangla, English</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TravellersInfo;
