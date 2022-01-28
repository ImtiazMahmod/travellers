import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import SingleBlog from "../../../Shared/SingleBlog";

const HomeBlog = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [blogs, setBlogs] = useState([]);
  ///load all Blogs
  useEffect(() => {
    axios.get("https://arcane-peak-89690.herokuapp.com/blogs").then((res) => {
      if (res.data) {
        setBlogs(res.data);
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {isLoading ? (
        <div className="py-5">
          <Spinner
            animation="grow"
            className="primaryColor spinnerStyle"
          ></Spinner>
        </div>
      ) : (
        <Container className="my-5">
          <div className="mb-5 text-center">
            <h5 className="primaryColor mt-5">Most visited Places</h5>
            <h1>
              Get Your Best Experience <br /> From Your Travel
            </h1>
          </div>
          <Row xs={1} className="g-4" sm={1} md={2} lg={2}>
            {blogs?.map((blog) => (
              <Col key={blog?._id}>
                <SingleBlog blog={blog}></SingleBlog>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default HomeBlog;
