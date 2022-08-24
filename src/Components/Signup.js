import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="mainbox">
      <div className="p-4box">
        <h2 className="mb-3">Let's set up your account</h2>
        <Form.Group className="mb-3">
            <Form.Control
              type="name"
              placeholder="Enter name Optional"
            />
          </Form.Group>
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
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="textbox">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Signup;