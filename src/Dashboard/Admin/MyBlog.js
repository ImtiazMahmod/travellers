import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

import SingleExperience from "../User/SingleExperience";

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuth();
  ///load all orders
  useEffect(() => {
    axios
      .get(
        `https://arcane-peak-89690.herokuapp.com/myBlog?name=${user?.displayName}`
      )
      .then((res) => {
        setBlogs(res.data);
      });
  }, [blogs]);
  console.log(blogs);
  return (
    <div>
      <h3 className=" fw-bold  text-center">
        My <span className="primaryColor">Blog</span>
      </h3>
      <Container className="d-flex justify-content-center">
        <Row>
          {blogs?.map((experience) => (
            <Col key={experience._id} item xs={12} sm={12} md={12} lg={6}>
              <SingleExperience experience={experience}></SingleExperience>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyBlog;
