import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./registrationForm.css";
import API from "../API";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const formInitialVal = {
    firstName: "",
    lastName: "",
    email: "",
    state: "",
  };
  const [formData, setFormData] = useState(formInitialVal);
  const navigate = useNavigate();

  async function register(data) {
    const res = await API.createUser(data);
    setFormData((data) => {
      return { ...data, ...res };
    });
  }

  const handleChange = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
    setFormData(formInitialVal);
    return navigate("/users");
  };

  return (
    <div className="wrapper">
      <Form onSubmit={handleSubmit}>
        <FormGroup tag="fieldset">
          <legend> Yodlr Registration Portal </legend>

          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              type="text"
              id="firstname"
              name="firstName"
              autoComplete="firstname"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              type="text"
              id="lastname"
              name="lastName"
              autoComplete="lastname"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              type="text"
              id="state"
              name="state"
              autoComplete="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />
          </FormGroup>
          <Button color="primary">Submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
};
export default RegistrationForm;
