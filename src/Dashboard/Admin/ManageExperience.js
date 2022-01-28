import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Experience from "../../Pages/SingleBlogDetails/Experience";

const ManageExperience = () => {
  const [experiences, setExperiences] = useState([]);
  ///load all orders
  useEffect(() => {
    axios.get("http://localhost:5000/allExperience").then((res) => {
      setExperiences(res.data);
    });
  }, [experiences]);
  console.log(experiences);
  return (
    <div>
      <h3 className=" fw-bold text-center">
        Manage <span className="primaryColor">Experience</span>
      </h3>
      <Container className="d-flex justify-content-center">
        <Row>
          {experiences.length ? (
            experiences?.map((experience) => (
              <Col key={experience._id} item xs={12} sm={12} md={12} lg={6}>
                <Experience experience={experience}></Experience>
              </Col>
            ))
          ) : (
            <p className="text-secondary mt-3">No Experience </p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ManageExperience;
