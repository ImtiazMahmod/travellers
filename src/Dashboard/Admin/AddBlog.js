import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddBlog = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const date = new Date().toISOString().substring(0, 10);
  const [rate, setRate] = useState(2);
  const onSubmit = (data) => {
    data.date = date;
    data.rating = rate;
    data.name = user?.displayName;

    ///add blog to server
    axios
      .post("https://arcane-peak-89690.herokuapp.com/blogs", data)
      .then((res) => {
        //bike added
        if (res.data.insertedId) {
          Swal.fire({
            title: "Blog Added",
            text: "Blog added to Website.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
  };
  return (
    <div className=" my-5 p-5 rounded shadow text-center">
      <h3 className=" fw-bold ">
        Add new <span className="primaryColor">Travel Blog</span>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {" "}
          <input
            {...register("title")}
            type="text"
            required
            placeholder="Title"
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <input
            {...register("category")}
            type="text"
            placeholder="travel category"
            required
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <input
            {...register("img")}
            type="text"
            placeholder="Tour Zone Image Link"
            required
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <input
            {...register("location")}
            type="text"
            placeholder="Tour Zone Location"
            required
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <input
            {...register("cost")}
            type="number"
            placeholder="Cost of Travel"
            required
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <input
            {...register("transport")}
            type="text"
            placeholder="Transport Facilities(good,better,bad)"
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
          Add Blog <IoMdSend />
        </Button>
      </form>
    </div>
  );
};

export default AddBlog;
