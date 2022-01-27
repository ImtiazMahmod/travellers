import React from "react";
import "./Home.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col sm={12} md={6} className="bannerTitle p-5  text-start">
            <div style={{ position: "relative" }}>
              <div>
                <h1>Amazing Tour In Sajek</h1>
                <h3 className="text-light">Awesome Experience</h3>
                <Link to="/blog">
                  <Button className="mt-4" variant="outline-light">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeBanner;
