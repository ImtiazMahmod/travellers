import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark p-5 mt-5">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <h1 className="primaryColor logo">Travellers</h1>
            <p className="text-secondary">
              Travellers is the leading force that grows and sustains travel and
              protects the freedom to travel.
            </p>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h4 className="primaryColor  mt-2">Contact Us</h4>
            <div className="text-secondary mt-3">
              <p>
                <FaPhone /> +01852-1111122
              </p>
            </div>
            <div>
              <p className="text-secondary">
                <FaMailBulk /> support@travellers.com
              </p>
            </div>
            <div>
              <p className="text-secondary">
                <FaLocationArrow /> Dhaka, Bangladesh
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h4 className="primaryColor mt-2">Support</h4>
            <div>
              <Link
                to="/about"
                className="text-secondary mt-3 d-block text-decoration-none"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-secondary  d-block text-decoration-none"
              >
                Contact Us
              </Link>
              <Link
                to="/blog"
                className="text-secondary  d-block text-decoration-none"
              >
                Blog
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h4 className="primaryColor mt-2">Follow Us</h4>
            <FaFacebook className="text-secondary mx-2 mt-3" />
            <FaTwitter className="text-secondary mx-2" />
            <FaLinkedin className="text-secondary mx-2" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
