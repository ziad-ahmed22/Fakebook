import InputField from "../InputField/InputField";
import "./LoginForm.scss";
import Button from "../MainButton/Button";
import { useFormik } from "formik";
import { loginRequest } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { loginSchema } from "../../validationSchema/yupSchema";

export default function LoginForm() {
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
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(loginRequest(values));
    },
    validationSchema: loginSchema,
  });

  const isError = (name) => {
    return !!(touched[name] && errors[name]);
  };

  return (
    <div className="login-form px-3 py-4 shadow">
      <form onSubmit={handleSubmit}>
        <h3 className="fw-bold text-center mb-3 fs-26">Login</h3>

        <div className="mb-3">
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

        <div className="mb-3">
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

        <Button
          type="submit"
          label="Login"
          btnClassName="mt-2"
          labelClassName="fs-20"
          fullWidth
          // disabled={!dirty || !isValid}
        />
      </form>
    </div>
  );
}
