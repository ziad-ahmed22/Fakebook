import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Button from "../../components/MainButton/Button";
import Modal from "../../components/Modal/Modal";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { showHideRegistrationModal } from "../../store/slices/registrationModalSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.registrationModal);

  // const isAuth = true;

  // useEffect(() => {
  //   isAuth && redirect("/feed");
  // }, [isAuth]);

  return (
    <div className="home-login">
      <div className="container">
        {/* Header */}
        <div className="header flex-between py-3 mb-2">
          <h1 className="logo fw-bold mb-0 fs-40">Fakebook</h1>
          <Button
            label="Register"
            btnClassName="register-btn"
            labelClassName="fs-18 px-sm-1 px-md-2"
            onClick={() => {
              dispatch(showHideRegistrationModal(true));
            }}
          />
        </div>

        <div className="content flex-center flex-column">
          <div className="text my-5 text-center">
            <h3 className="fs-26 mb-3 fw-bold">Welcome to Fakebook</h3>
            <p className="fs-20">The world biggest Social Network</p>
          </div>

          <LoginForm />
        </div>

        {/* Registration Modal */}
        <Modal
          setOpen={(val) => dispatch(showHideRegistrationModal(val))}
          open={isModalOpen}
          title="Registration"
          modalBody={<RegisterForm />}
        />
      </div>
    </div>
  );
};
