import React from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { IoMdSend } from "react-icons/io";
import Swal from "sweetalert2";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    emailjs
      .send(
        "service_lt17chc",
        "template_q30yzug",
        data,
        "user_OwivAPdhOSZStwKjITaV1"
      )
      .then(
        (result) => {
          if (result.text) {
            Swal.fire({
              title: "Message Sent",
              text: "We got your message",
              icon: "success",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "OK",
            });
            e.target.reset();
          }
        },
        (error) => {
          if (error.text) {
            Swal.fire({
              title: "Error",
              text: "Please try again later",
              icon: "warning",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "OK",
            });
            e.target.reset();
          }
        }
      );
  };

  return (
    <Container className="text-center w-75">
      <div className=" my-5 ">
        <h2 className="p-3 fw-bold">
          <span className="primaryColor">Get </span>
          in Touch
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {" "}
            <input
              {...register("name")}
              type="text"
              required
              placeholder="Your Name"
              style={{ outline: "none" }}
              className="m-2 mb-4 p-2 rounded border-0 shadow w-75"
            />{" "}
            <br />
            <input
              {...register("email")}
              type="email"
              placeholder="your email"
              required
              style={{ outline: "none" }}
              className="m-2 mb-4 p-2 rounded border-0 shadow w-75"
            />{" "}
            <br />
            <textarea
              required
              rows="3"
              label="Review"
              style={{ outline: "none" }}
              placeholder="Put your Idea."
              className="m-2 mb-4 p-2 rounded border-0 shadow w-75"
              {...register("message")}
            />
          </div>
          <Button type="submit" variant="secondary">
            {" "}
            SEND <IoMdSend />
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
