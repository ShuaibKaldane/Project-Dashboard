import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../authContext";
import { Link } from "react-router-dom";
import { FaGoogle, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setCurrentUser } = useAuth();
  const [showSignUpOptions, setShowSignUpOptions] = useState(false);

  const toggleSignUpOptions = () => {
    setShowSignUpOptions(!showSignUpOptions);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/signup", {
        email: email,
        password: password,
        username: username,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      setCurrentUser(res.data.userId);
      setLoading(false);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Signup Failed!");
      setLoading(false);
    }
  };

  return (
    <div>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow className="align-items-center">
          <MDBCol md="6" className="d-none d-md-block">
            <img
              src="https://watermark.lovepik.com/photo/20211124/large/lovepik-business-team-corporate-image-showing-picture_500924136.jpg"
              className="img-fluid rounded-start w-100 h-100 object-fit-cover"
              loading="lazy"
              alt="Corporate Image"
            />
          </MDBCol>
          <MDBCol md="6">
            <div className="signup-form-container">
              <div className="form-box">
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                <div className="w-full max-w-lg mx-auto space-y-4">
                  <div className="w-full mb-4">
                    <MDBInput
                      placeholder="Role"
                      type="text"
                      className="block border border-grey-light w-full p-3 rounded"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <MDBInput
                      placeholder="Email"
                      type="text"
                      className="block border border-grey-light w-full p-3 rounded"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <MDBInput
                      placeholder="Password"
                      type="password"
                      className="block border border-grey-light w-full p-3 rounded"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <MDBInput
                      placeholder="Confirm Password"
                      type="password"
                      className="block border border-grey-light w-full p-3 rounded"
                    />
                  </div>
                  <div className="w-full">
                    <button
                      type="submit"
                      className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none my-1"
                      onClick={handleSignup}
                    >
                      {loading ? "Loading..." : "Create Account"}
                    </button>
                  </div>
                </div>
                <div className="text-center text-sm text-grey-dark mt-4">
                  By signing up, you agree to the{" "}
                  <a
                    className="no-underline border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    className="no-underline border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">OR</p>
                </div>
                <div className="social-login-icons">
                  <a href="YOUR_GOOGLE_LOGIN_URL" className="social-icon">
                    <FaGoogle />
                  </a>
                  <a href="YOUR_LINKEDIN_LOGIN_URL" className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="YOUR_FACEBOOK_LOGIN_URL" className="social-icon">
                    <FaFacebook />
                  </a>
                </div>
              </div>
              <div className="text-grey-dark mt-6">
                Already have an account?{" "}
                <Link className="no-underline border-b border-blue text-blue" to="/auth">
                  Log in
                </Link>
                .
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Signup;
