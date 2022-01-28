import React, { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [error, setError] = useState(false);
  const { registerUser, logout } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(data);
    if (data.password === data.confirmPassword) {
      registerUser(email, password, name);

      Swal.fire({
        title: "Successfully Registered?",
        text: "You are registered as Traveller",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Check!", "Verify your Email please.", "warning").then(() =>
            logout()
          );
        }
      });
      setError(false);
      reset();
    } else {
      setError(true);
    }
  };
  console.log(error);

  return (
    <div className="text-center">
      <Container>
        <h3 className="fw-bold text-secondary my-3">
          Register as <span className="primaryColor">Traveller</span>
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {" "}
            <input
              {...register("name")}
              type="text"
              required
              placeholder="Your Full Name"
              style={{ outline: "none" }}
              className="m-2  p-2 rounded border-1 w-50"
            />{" "}
            <br />
            <input
              {...register("email")}
              type="email"
              placeholder="your email"
              required
              style={{ outline: "none" }}
              className="m-2  p-2 rounded border-1 w-50"
            />{" "}
            <br />
            <input
              required
              label="password"
              type="password"
              style={{ outline: "none" }}
              placeholder="password"
              className="m-2 p-2 rounded border-1  w-50"
              {...register("password")}
            />
            <input
              required
              label="password"
              type="password"
              style={{ outline: "none" }}
              placeholder="confirm password"
              className="m-2 p-2 rounded border-1  w-50"
              {...register("confirmPassword")}
            />{" "}
            <br />
            <Button
              className="w-50 my-2"
              type="submit"
              variant="outline-warning"
            >
              Register
            </Button>
          </div>
          {/* error show */}
          {error && (
            <p className="text-danger mt-2">
              <Alert variant="danger" className="w-50 mx-auto mt-2">
                Password Not Matched
              </Alert>
            </p>
          )}
          <hr className="w-50 mx-auto mt-5" />
          <h5>Have an Account?</h5>
          <Link to="/login">
            {" "}
            <Button className="w-50   btnRegular" variant="outline-warning">
              Login
            </Button>
          </Link>
        </form>
      </Container>
    </div>
  );
};

export default Register;
