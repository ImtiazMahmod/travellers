import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { userLogin, error, googleLogin } = useAuth();
  //redirect to user destination
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/";
  const navigate = useNavigate();
  // console.log(redirect_uri, user.email);
  ///handleGoogle LOgin
  const handleGoogleLogin = () => {
    googleLogin(navigate, redirect_uri);
  };

  const inputStyle = " mb-4 p-2 rounded border-1 ";
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(data);
    userLogin(email, password, navigate, redirect_uri);
  };
  return (
    <div className="text-center">
      <Container className="w-50">
        <h3 className="fw-bold text-secondary">Welcome Back !</h3>
        <p>Lets Get you Logged in</p>
        <form
          className="d-flex flex-column  "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className={inputStyle}
            type="email"
            style={{ outline: "none" }}
            placeholder="Your Email"
            required
            {...register("email")}
          />

          <input
            className={inputStyle}
            type="password"
            placeholder="Your Password"
            required
            style={{ outline: "none" }}
            {...register("password")}
          />

          {/* error show */}
          {error ? <p className="text-danger mt-2">{error}</p> : ""}
          <Button type="submit" variant="outline-warning">
            Login
          </Button>
        </form>{" "}
        <div>
          <h5 className="fw-bold my-3 text-secondary">Alternative LogIn </h5>
          <Button
            onClick={handleGoogleLogin}
            variant="outline-warning"
            className="w-100  btnRegular"
          >
            <FcGoogle /> Google
          </Button>
          <hr />
          <h6>Don't have Account?</h6>
          <Link to="/register">
            {" "}
            <Button className="w-100   btnRegular" variant="outline-warning">
              SignUp
            </Button>
          </Link>
        </div>
      </Container>
      {/* <Link to="/">
        {" "}
        <Button className="w-25  my-2 btnRegular" variant="outline-warning">
          Back to Home
        </Button>
      </Link> */}
    </div>
  );
};

export default Login;
