import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Button, Form } from "react-bootstrap";
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
          .delete(
            `https://arcane-peak-89690.herokuapp.com/deleteExperience/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire("Deleted!", " Experience has been deleted.", "success");
            }
          });
      }
    });
  };
  const status = experience?.status;
  const [newStatus, setNewStatus] = useState(status);
  //handle status
  const handleStatus = (e) => {
    const changeStatus = e.target.value;

    ///update status
    axios
      .put(
        `https://arcane-peak-89690.herokuapp.com/experience?id=${experience?._id}&status=${changeStatus}`
      )
      .then((res) => {
        setNewStatus(changeStatus);
      });
  };

  return (
    <div>
      <div className="d-flex my-5">
        <img width={60} height={60} src={experience?.photoURL} alt="" />
        <div className="mx-3">
          {" "}
          <h5>{experience?.name}</h5>{" "}
          <p className="text-secondary ">{experience?.date}</p>
          <div className="d-flex justify-content-between">
            {admin && <p className="text-secondary ">{experience?.title}</p>}

            <Rating
              initialRating={experience?.rating}
              className="primaryColor "
              readonly
              {...{
                emptySymbol: <AiOutlineStar>star_border</AiOutlineStar>,
                fullSymbol: <AiFillStar>star_rate</AiFillStar>,
              }}
            />
          </div>{" "}
          <Badge bg="warning" className="p-2 text-dark">
            {experience?.status}
          </Badge>
          <p className="border-top border-bottom p-2 my-2">
            {experience?.experience}
          </p>
          {admin && (
            <div className="d-flex justify-content-between">
              <Button
                onClick={() => handleDelete(experience?._id)}
                variant="danger"
              >
                <MdDelete className="text-center" />
              </Button>
              <Form.Select defaultValue={newStatus} onChange={handleStatus}>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
              </Form.Select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
