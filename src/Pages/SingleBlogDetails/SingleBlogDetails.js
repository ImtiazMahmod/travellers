import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router";
import TravellersInfo from "../../Shared/TravellersInfo";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Comment from "./Comment";
import { HiLocationMarker } from "react-icons/hi";
import Experience from "./Experience";

const SingleBlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const [specificExperience, setSpecificExperience] = useState([]);
  ///load specific blog
  useEffect(() => {
    axios
      .get(`https://arcane-peak-89690.herokuapp.com/singleBlog/${blogId}`)
      .then((res) => {
        setBlog(res.data);
      });
  }, [blogId]);

  ///load specific Experience
  useEffect(() => {
    axios
      .get(
        `https://arcane-peak-89690.herokuapp.com/specificExperience?title=${blog?.title}`
      )
      .then((res) => {
        setSpecificExperience(res.data);
      });
  }, [specificExperience, blog?.title]);
  console.log(specificExperience.length);
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

                <p className="text-secondary">{blog?.experience}</p>
              </div>
            </div>
            <div className="my-5">
              {" "}
              <TravellersInfo blog={blog} />
            </div>
            <h5 className="mb-3 fw-bold text-secondary border-bottom pb-2">
              Travellers Experience
            </h5>
            {specificExperience?.map((experience) =>
              experience?.status === "Approved" ? (
                <Experience
                  key={experience?._id}
                  experience={experience}
                ></Experience>
              ) : (
                <p className="text-secondary">No Experience </p>
              )
            )}
            <Comment>{blog}</Comment>
          </Col>
          <Col sm={12} md={4} lg={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleBlogDetails;
