import React from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { user, newUser, setName, error, setEmail, setPassword } = useAuth();
  //   //redirect to user destination
  //   const location = useLocation();
  //   const redirect_uri = location?.state?.from || "/";
  //   const navigate = useNavigate();

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
    setName(name);
    setEmail(email);
    setPassword(password);
    // console.log(data);
    newUser();
  };

  return (
    <div className="text-center">
      <Container style={{ height: "33rem" }}>
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
              {...register("password")}
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
