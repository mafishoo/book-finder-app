import { Button, TextField } from "@mui/material";

import Header from "../header/Header";
import NavBar from "../navBar/navBar";
import { useForm } from "../useForm";
import "./addUser.css";


function AddUser() {
  const { formValues, setFormValues, handleChange, handleReset } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {};

  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="addBookContainer">
        <form className="classesform" onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <div className="formbuttons">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button
              onclick={handleReset}
              type="reset"
              variant="contained"
              color="primary"
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddUser;
