import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Comment = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const date = new Date().toISOString().substring(0, 10);
  const [rate, setRate] = useState(2);
  const onSubmit = (data) => {
    data.title = children?.title;
    data.date = date;
    data.rating = rate;
    console.log(data);
    ///post for book tour
    // axios
    //   .post("https://obscure-forest-04277.herokuapp.com/bookTour", data)
    //   .then((res) => {
    //     if (res.data.insertedId) {
    //       alert("WOW, you are Booked a Tour.");
    //       reset();
    //     }
    //   });
  };

  return (
    <div className=" my-5 p-5 rounded shadow text-start">
      <h3 className=" fw-bold ">
        Leave Your <span className="primaryColor">Experience</span>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {" "}
          <input
            {...register("name")}
            type="text"
            required
            placeholder="Your Name"
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <input
            {...register("email")}
            type="email"
            placeholder="your email"
            required
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <textarea
            required
            rows="3"
            label="Experience"
            style={{ outline: "none" }}
            placeholder="Write your experience"
            className="m-2 p-2 rounded border-1  w-75"
            {...register("experience")}
          />
          <br />
          <Rating
            initialRating={rate}
            className="primaryColor fs-3 mb-3"
            onChange={(rate) => {
              setRate(rate);
            }}
            {...{
              emptySymbol: <AiOutlineStar>star_border</AiOutlineStar>,
              fullSymbol: <AiFillStar>star_rate</AiFillStar>,
            }}
          />
        </div>
        <Button type="submit" variant="warning">
          {" "}
          Submit <IoMdSend />
        </Button>
      </form>
    </div>
  );
};

export default Comment;
