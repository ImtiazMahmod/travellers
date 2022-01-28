import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Rating from "react-rating";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Experience = ({ experience }) => {
  const { admin } = useAuth();
  //delete Experience
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your order will be canceled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/deleteExperience/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire("Deleted!", " Experience has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="d-flex my-5">
        <img width={60} height={60} src={experience?.photoURL} alt="" />
        <div className="mx-3">
          {" "}
          <h5>{experience?.name}</h5>
          <p className="text-secondary ">{experience?.date}</p>
          <Rating
            initialRating={experience?.rating}
            className="primaryColor "
            readonly
            {...{
              emptySymbol: <AiOutlineStar>star_border</AiOutlineStar>,
              fullSymbol: <AiFillStar>star_rate</AiFillStar>,
            }}
          />
          <p className="border-top border-bottom p-2 my-2">
            {experience?.experience}
          </p>
          {admin && (
            <Button
              onClick={() => handleDelete(experience?._id)}
              variant="danger"
            >
              <MdDelete className="text-center" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
