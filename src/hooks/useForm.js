import { useState } from "react";

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  const cleanForm = () => {
    setValues({
      FirstName: "",
      LastName: "",
      Email: "",
      Title: "",
    });
  };

  return [values, handleInputChange, cleanForm];
};
