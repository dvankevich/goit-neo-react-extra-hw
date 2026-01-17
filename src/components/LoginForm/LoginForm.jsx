import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Box, Button, TextField } from "@mui/material";
import { logIn } from "../../redux/auth/operations";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(7, "The password must contain at least 7 characters.")
    .required("Password is required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("Login success");
        resetForm();
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 400,
              margin: "auto",
              mt: 4,
            }}
          >
            <Field
              as={TextField}
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />

            <Field
              as={TextField}
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              sx={{ py: 1.5 }}
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
