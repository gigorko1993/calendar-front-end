import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import s from "./RegisterView.module.css";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      e.target.name.value.trim() === "" ||
      !email ||
      e.target.email.value.trim() === "" ||
      !password ||
      e.target.password.value.trim() === ""
    ) {
      toast.warn("Write your name, email and password");
      return;
    }
    if (password.length < 8 || e.target.password.value.length < 8) {
      toast.warn(
        "Password should be minimum 8 characters, and contain at least one small and one letter in capital register [a-z], [A-Z]"
      );
      return;
    }

    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.container}>
      <h1>Registration Page</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <TextField
          // id="standard-basic"
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          // id="standard-basic"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          // id="standard-basic"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={s.button}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
