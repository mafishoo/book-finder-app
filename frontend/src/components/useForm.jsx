import React, { useState } from "react";

export const useForm = (initialValue) => {
  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(e.target.value);
  };

  const handleReset = () => {
    setFormValues(initialValue);
  };
  return {
    formValues,
    setFormValues,
    handleChange,
    handleReset,
  };
};
