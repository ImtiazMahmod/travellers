import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router";
import TravellersInfo from "../../Shared/TravellersInfo";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Comment from "./Comment";
import { HiLocationMarker } from "react-icons/hi";

const SingleBlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  ///load specific blog
  useEffect(() => {
    axios
      .get(`https://arcane-peak-89690.herokuapp.com/singleBlog/${blogId}`)
      .then((res) => {
        setBlog(res.data);
      });
  }, [blogId]);
  console.log(blog);
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={8} lg={8} className="mt-3  ">
            <div>
              <img className="img-fluid rounded" src={blog?.img} alt="" />
              <div className="text-start">
                <div className="d-flex justify-content-between">
                  <div>
                    <h1 className=" mt-5">{blog?.title}</h1>
                    <br />
                    <p className="text-secondary fw-bold">
                      <HiLocationMarker /> {blog?.location}
                    </p>
                  </div>
                  <div className="my-auto">
                    <Rating
                      initialRating={blog?.rating}
                      className="primaryColor fs-5 my-auto"
                      {...{
                        emptySymbol: <AiOutlineStar>star_border</AiOutlineStar>,
                        fullSymbol: <AiFillStar>star_rate</AiFillStar>,
                      }}
                      readonly
                    />
                    <h5 className="mt-3 text-secondary">৳ {blog?.cost}</h5>
                  </div>
                </div>

                <div className="border-top  border-bottom mb-3">
                  {" "}
                  <h5 className="mt-3 fw-bold text-secondary">{blog?.name}</h5>
                  <p className="text-secondary">{blog?.date}</p>
                </div>
                {/* <h5 className="my-3 fw-bold text-secondary">
                  Traveller Experience
                </h5> */}
                <p className="text-secondary">{blog?.experience}</p>
              </div>
            </div>
            <div className="my-5">
              {" "}
              <TravellersInfo blog={blog} />
            </div>
            <Comment>{blog}</Comment>
          </Col>
          <Col sm={12} md={4} lg={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleBlogDetails;
