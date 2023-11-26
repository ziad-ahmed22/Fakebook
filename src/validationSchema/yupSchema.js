import * as Yup from "yup";

const registrationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username Is Required")
    .min(3, "Username Must Be At Least 3 Characters")
    .max(12, "Username Must Be At Most 12 Characters"),

  name: Yup.string()
    .required("Name Is Required")
    .min(3, "name Must Be At Least 3 Characters"),

  email: Yup.string()
    .required("Email Is Required")
    .email("Invalid Email Address"),

  password: Yup.string()
    .required("Password Is Required")
    .min(6, "Password Must Be At Least 6 Characters"),

  confirmPassword: Yup.string()
    .required("Confirm Password Is Required")
    .oneOf(
      [Yup.ref("password")],
      "Confirm Password Does Not Match The Password"
    ),

  userImg: Yup.mixed().required("The Image Is Required"),
});

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username Is Required"),

  password: Yup.string().required("Password Is Required"),
});

export { registrationSchema, loginSchema };
