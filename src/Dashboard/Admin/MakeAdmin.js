import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const MakeAdmin = ({ children }) => {
  const { user } = useAuth();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    ///post for book experience
    axios.put("http://localhost:5000/makeAdmin", data).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Admin has made",
          text: "Traveller as Admin.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Try Again.",
          icon: "error",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          // cancelButtonColor: "#3085d6",
          confirmButtonText: "ok",
        });
      }
      reset();
    });
  };

  return (
    <div className=" my-5 p-5 rounded shadow text-center">
      <h3 className=" fw-bold ">
        Make <span className="primaryColor">Admin</span>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {" "}
          <input
            {...register("email")}
            type="email"
            placeholder="Traveller Email"
            required
            style={{ outline: "none" }}
            className="m-2 mb-4 p-2 rounded border-1 w-75"
          />{" "}
        </div>
        <Button type="submit" variant="warning">
          {" "}
          Make <IoMdSend />
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
