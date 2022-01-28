import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
// import "./Tour.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const SingleBlog = ({ blog }) => {
  return (
    <div>
      <Card className="tourCard border-0 shadow">
        <Link className="text-decoration-none" to={`/blogDetail/${blog?._id}`}>
          <div>
            <Card.Img
              style={{ height: "200px" }}
              className="img-fluid rounded"
              variant="top"
              src={blog?.img}
            />
          </div>
        </Link>
        <Card.Body>
          <div className="text-start">
            <Card.Title className="cartTitle  fw-bold primaryColor">
              {blog?.title}
            </Card.Title>
          </div>
          <div className="d-flex justify-content-between">
            {" "}
            <Card.Title className="text-secondary">৳ {blog?.cost}</Card.Title>
            <Rating
              initialRating={blog?.rating}
              className="primaryColor fs-5 "
              {...{
                emptySymbol: <AiOutlineStar>star_border</AiOutlineStar>,
                fullSymbol: <AiFillStar>star_rate</AiFillStar>,
              }}
              readonly
            />
          </div>
          <Card.Text className="text-secondary text-start border-top py-2">
            {blog?.experience.slice(0, 50)}...
          </Card.Text>
          <Link to={`/blogDetail/${blog?._id}`}>
            <Button variant="outline-secondary">Book Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBlog;
