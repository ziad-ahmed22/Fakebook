import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import InputField from "../InputField/InputField";
import FileInput from "../FileInput/FileInput";
import Button from "../MainButton/Button";

import { registerNewUser } from "../../store/slices/authSlice";
import "./RegisterForm.scss";
import { registrationSchema } from "../../validationSchema/yupSchema";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    values,
    errors,
    touched,
    setFieldTouched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userImg: "",
    },
    onSubmit: async (values) => {
      const formData = {};
      formData.username = values.username;
      formData.name = values.name;
      formData.email = values.email;
      formData.password = values.password;
      formData.image = values.userImg;

      dispatch(registerNewUser(formData));
    },
    validationSchema: registrationSchema,
  });

  const isError = (name) => {
    return !!(touched[name] && errors[name]);
  };

  return (
    <div className="register-form p-3 pt-1">
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <InputField
            type="text"
            name="username"
            label="Username"
            placeholder="Enter Your Username"
            value={values["username"]}
            onChange={(val) => setFieldValue("username", val)}
            onBlur={() => setFieldTouched("username")}
            isInputHasErr={isError("username")}
            errMsg={errors["username"]}
          />
        </div>

        <div className="mb-1">
          <InputField
            type="text"
            name="name"
            label="Name"
            placeholder="Enter Your Name"
            value={values["name"]}
            onChange={(val) => setFieldValue("name", val)}
            onBlur={() => setFieldTouched("name")}
            isInputHasErr={isError("name")}
            errMsg={errors["name"]}
          />
        </div>

        <div className="mb-1">
          <InputField
            type="text"
            name="email"
            label="Email"
            placeholder="Enter Your Email"
            value={values["email"]}
            onChange={(val) => setFieldValue("email", val)}
            onBlur={() => setFieldTouched("email")}
            isInputHasErr={isError("email")}
            errMsg={errors["email"]}
          />
        </div>

        <div className="mb-1">
          <InputField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Your Password"
            value={values["password"]}
            onChange={(val) => setFieldValue("password", val)}
            onBlur={() => setFieldTouched("password")}
            isInputHasErr={isError("password")}
            errMsg={errors["password"]}
          />
        </div>

        <div className="mb-1">
          <InputField
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Enter The Same Password"
            value={values["confirmPassword"]}
            onChange={(val) => setFieldValue("confirmPassword", val)}
            onBlur={() => setFieldTouched("confirmPassword")}
            isInputHasErr={isError("confirmPassword")}
            errMsg={errors["confirmPassword"]}
          />
        </div>

        {/* User Image */}
        <div className="my-2">
          <FileInput
            label="Upload Your Image"
            name="userImg"
            onChange={(val) => {
              setFieldValue("userImg", val);
            }}
            isInputHasErr={isError("userImg")}
            errMsg={errors["userImg"]}
          />
        </div>

        <Button
          type="submit"
          label="Register"
          btnClassName="mt-2"
          labelClassName="fs-20"
          fullWidth
          // disabled={!dirty || !isValid}
        />
      </form>
    </div>
  );
}
