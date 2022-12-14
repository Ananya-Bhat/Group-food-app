import HomeThree from "../../components/homeThree/homeThree";
import "./home.css";
import HomeTwo from "../../components/homeTwo/homeTwo";
import HomeFive from "../../components/homeFive/homeFive";
import HomeFour from "../../components/homeFour/homeFour";
import HomeOne from "../../components/homeOne/homeOne";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/modalSlice";
import SignUp from "../../components/signUp/signUp";
import OtpVerification from "../../components/otpVerification/otpVerification";
import { Route, Routes } from "react-router-dom";
import OtpVerified from "../../components/otpVerified/otpVerified";
import OtpVerifiedSuccess from "../../components/otpVerifiedSuccess/otpVerifiedSuccess";
import ForgotPassword from "../../components/forgotPassword/forgotPassword";
import ForgotPasswordSuccess from "../../components/forgotPasswordSuccess/forgotPasswordSuccess";
import Login from "../../components/login/login";
import LoginOne from "../../components/loginOne/loginOne";
import EmailBox from "../../components/emailBoxForForgotPassword/emailBox";
import MobileBox from "../../components/mobileNumberBoxFor/mobileBox";
import OtpVerificationLogin from "../../components/otpVerificationLogin/otpVerificationLogin";
import MobileVerified from "../../components/mobileVerified/mobileVerified";
const Home = () => {
  const dispatch = useDispatch();
  //modal styling
  // const style: any = {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     transform: "translate(-50%, -50%)",
  //     width: "50%",
  //     minWidth: 700,
  //     height: 580,
  //     border: "none",
  //     outline: "none",
  //     p: 4,
  // };
  let showModal: any = useSelector((state: any) => state.modalStatus.value);
  // console.log(showModal);

  // const [open, setOpen] = useState(showModal);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <div className="homeContainer">
        <HomeOne />
        <HomeTwo />
        <HomeThree />
        <HomeFour />
        <HomeFive />
      </div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modalDiv style">
          <div className="leftSide">
            <img
              src={require("../../assets/Image.png")}
              alt=""
              className="bgForModalLeftSide"
            />
            <div className="contentDiv">
              <span className="contentDivHeading">LOREM</span>
              <span className="contentDivSubHeading">
                Experience the easiest a way to get
                <span className="boldify"> great food</span> Delivered
              </span>
            </div>
          </div>
          <div className="rightSide">
            <Routes>
              <Route path="/login" element={<LoginOne />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/signup/verifyotp" element={<OtpVerification />} />
              <Route
                path="/signup/verifyotp/verified"
                element={<OtpVerified />}
              />
              <Route
                path="/signup/verifyotp/verified/done"
                element={<OtpVerifiedSuccess />}
              />
            </Routes>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Home;
