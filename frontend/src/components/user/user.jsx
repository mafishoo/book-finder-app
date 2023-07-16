import { Button, TextField } from "@mui/material";

import Header from "../header/Header";
import NavBar from "../navBar/navBar";
import "./addBook.css";
import { useForm } from "../useForm";

function User() {
  const {formValues,setFormValues,handleChange} = useForm({
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

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
export default User;
