
// import IconDatePicker from "../../components/StyledDatepicker/StyledDatepicker";
import PageTitle from "../../components/PageTitle/PageTitle";
import SignupForm from "../../components/SignupForm/SignupForm";
import { BackgroundImage } from "../WelcomePage/WelcomePage.styled";

export default function SignupPage() {

  return <div>
    <BackgroundImage/>
    <PageTitle title="Sign Up" /><SignupForm/>
    {/* <IconDatePicker/> */}
  </div>;

}
