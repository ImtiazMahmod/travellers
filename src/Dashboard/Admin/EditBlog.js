import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const { user } = useAuth();
  const { experienceId } = useParams();
  const [blog, setBlog] = useState({});
  console.log(experienceId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const date = new Date().toISOString().substring(0, 10);
  const [rate, setRate] = useState(2);
  ///Load single Blog
  useEffect(() => {
    axios
      .get(`https://arcane-peak-89690.herokuapp.com/singleBlog/${experienceId}`)
      .then((res) => {
        setBlog(res.data);
      });
  }, [experienceId]);

  const onSubmit = (data) => {
    data.date = date;
    data.rating = rate;
    data.name = user?.displayName;

    ///Update blog to server
    axios
      .put(
        `https://arcane-peak-89690.herokuapp.com/singleBlog/${experienceId}`,
        data
      )
      .then((res) => {
        //bike added
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Blog Updated",
            text: "Update Blog to Website.",
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
      <h3 className=" fw-bold text-center">
        Edit Your <span className="primaryColor">Travel Blog</span>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {" "}
          <input
            {...register("title")}
            type="text"
            required
            defaultValue={blog?.title}
            placeholder="Title"
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <input
            {...register("category")}
            type="text"
            placeholder="travel category"
            defaultValue={blog?.category}
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
            defaultValue={blog?.img}
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <input
            {...register("location")}
            type="text"
            placeholder="Tour Zone Location"
            required
            defaultValue={blog?.location}
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <input
            {...register("cost")}
            type="number"
            placeholder="Cost of Travel"
            required
            defaultValue={blog?.cost}
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <input
            {...register("transport")}
            type="text"
            placeholder="Transport Facilities(good,better,bad)"
            defaultValue={blog?.transport}
            required
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
          <br />
          <textarea
            required
            rows="5"
            label="Experience"
            style={{ outline: "none" }}
            placeholder="Write your experience"
            defaultValue={blog?.experience}
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
          Update Blog <IoMdSend />
        </Button>
      </form>
    </div>
  );
};

export default EditBlog;
