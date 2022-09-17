import { useRouter } from "next/router";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { errorHelper } from "../../helpers/functions";
import Loader from "../../helpers/loader";
import Box from "@mui/system/Box";

const signin = () => {
  const [formType, setFormType] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "chris.ware.dev@gmail.com",
      password: "testing123",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Sorry the email is required")
        .email("This is an invalid email"),
      password: Yup.string().required("Sorry the password is required"),
    }),
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  const submitForm = async (values) => {
    if (formType) {
      //  register
      console.log("Register");
    } else {
      // Login
      console.log("Sign In");
    }
  };

  const handleFormType = () => {
    setFormType(!formType);
  };

  return (
    <div className='container full_vh small top-space'>
      <>
        <h1>{formType ? "Register" : "Sign In"}</h1>
        <Box
          component='form'
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete='off'
          onSubmit={formik.handleSubmit}
        >
          <TextField
            name='email'
            label='Enter Your Email'
            variant='outlined'
            {...formik.getFieldProps("email")}
            {...errorHelper(formik, "email")}
          />
          <TextField
            name='password'
            label='Enter Your Pasword'
            variant='outlined'
            type='password'
            {...formik.getFieldProps("password")}
            {...errorHelper(formik, "password")}
          />
        </Box>

        <div className='mb-3 si-btns'>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            size='small'
            className='me-2'
          >
            {formType ? "Register" : "Sign In"}
          </Button>
          <Button variant='outlined' size='small' onClick={handleFormType}>
            {formType
              ? "Already Registered?  Click here"
              : "Already Signed In?  Click here"}
          </Button>
        </div>
      </>
    </div>
  );
};
export default signin;
