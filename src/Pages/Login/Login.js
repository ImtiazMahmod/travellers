import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { user, userLogin, error, googleLogin } = useAuth();
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
    userLogin(email, password);
  };
  return (
    <div className="text-center">
      <Container style={{ height: "33rem" }}>
        <Row>
          <Col
            className=" d-flex justify-content-center align-items-center"
            sm={12}
            md={5}
            lg={5}
          >
            <div>
              <h4 className="fw-bold text-secondary">Alternative LogIn </h4>
              <Button
                onClick={handleGoogleLogin}
                variant="outline-warning"
                className="w-100  btnRegular"
              >
                <FcGoogle /> Google
              </Button>
              <hr />
              <h5>Don't have Account?</h5>
              <Link to="/register">
                {" "}
                <Button
                  className="w-100   btnRegular"
                  variant="outline-warning"
                >
                  SignUp
                </Button>
              </Link>
            </div>
          </Col>
          <Col sm={12} md={7} lg={7}>
            <h2 className="fw-bold text-secondary">Welcome Back !</h2>
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
          </Col>
        </Row>
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
