import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Comment = ({ children }) => {
  const { user } = useAuth();
  console.log(user);
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
    data.photoURL =
      user?.photoUrl ||
      "https://tpng.net/download/800x800_202-2024792_profile-icon-png.png";
    data.date = date;
    data.status = "pending";
    data.rating = rate;
    console.log(data);
    ///post for book experience
    axios
      .post("https://arcane-peak-89690.herokuapp.com/userExperience", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Experience Added",
            text: "Experience added to Website.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
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
            defaultValue={user?.displayName}
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
            defaultValue={user?.email}
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
