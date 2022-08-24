import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <div className="mainbox">
      <div className="p-4box">
      <img className="logoimg"
        src="data:image/jpeg;base64,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"
        alt=""
        />

        <h1 className="mb-3">Welcome Back</h1>
        <h2>Please Login below to get started.</h2>

        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      </div>
    </>
  );
};

export default Login;