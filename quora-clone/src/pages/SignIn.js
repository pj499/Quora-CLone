import React, { useState } from "react";
import styles from "../styles/Signin.module.css";
import logo from "../assets/images/logo.png";
import googleLogin from "../assets/images/googleLogin.png";
import SignUp from "../componets/Signup";
import VerifyEmail from "../componets/VerifyEmail";

function SignIn ()  {
  const [showSignUp, setShowSignUp] = useState(false);
  const [isNextSignUp, setIsNextSignUp] = useState(false);


  function handleCloseSignUp (){
    setShowSignUp(false);
  }

  function handleCloseVerifyEmail(){
    setIsNextSignUp(false);
  }
  function handleIsNextSignUp(){
    setShowSignUp(false);
    setIsNextSignUp(true);
  }
  function handleCloseVerifyEmail(){
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
    return (
      <>
      {showSignUp && <SignUp onNextClick={handleIsNextSignUp} onSignUpClose={handleCloseSignUp}/>}
      {isNextSignUp && <VerifyEmail onClose={handleCloseVerifyEmail} onNextClick={handleCloseVerifyEmail}/>}
      <div className={styles.Outer}>
        <div className={styles.loginContainer}>
          <div className={styles.title}>
            <img src={logo} style={{ width: "23%" }}></img>
            <h4 style={{ margin: "0" }}>
              A place to share knowledge and better understand the world
            </h4>
          </div>
          <div className={styles.loginInfo}>
            <div className={styles.socialMediaLogin}>
              <p>
                By continuing you indicate that you agree to Quora’s{" "}
                <a
                  className={styles.aTagStyle}
                  href="https://www.quora.com/about/tos"
                  target="_blank"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className={styles.aTagStyle}
                  href="https://www.quora.com/about/privacy"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <button type="button" className={styles.googleLogin}>
                <img
                  style={{
                    width: "10%",
                    marginRight: "25px",
                    padding: "5px",
                    backgroundColor: "transparent",
                  }}
                  src={googleLogin}
                ></img>
                Continue with Google
              </button>
              <button  type="button"
                className={styles.signupButton}
                onClick={() => setShowSignUp(true)}
              >
                Sign up with email
              </button>
            </div>
            <div className={styles.loginDivider}></div>
            <div className={styles.manualLogin}>
              <h4
                style={{
                  textAlign: "left",
                  fontWeight: "lighter",
                  marginBottom: "0",
                  marginTop: "15px",
                }}
              >
                Login
              </h4>
              <div
                style={{
                  width: "90%",
                  height: "0",
                  borderTop: "1px solid lightgray",
                  marginTop: "15px",
                }}
              ></div>

              <form action="" method="">
                <div className={styles.formInputDiv}>
                  <label>
                    <h5 className={styles.formLabel}>Email</h5>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className={styles.formInput}
                  ></input>
                </div>

                <div className={styles.formInputDiv}>
                  <label>
                    <h5 className={styles.formLabel}>Password</h5>
                  </label>
                  <input
                    type="password"
                    placeholder="Your password"
                    className={styles.formInput}
                  ></input>
                </div>

                <div className={styles.formButton}>
                  <h5 style={{ fontWeight: "lighter", color: "gray" }}>
                    Forgot password?
                  </h5>
                  <button type="submit" className={styles.formLoginButton} disabled>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className={styles.loginFooter}>

          </div> */}
        </div>
      </div>
      </>
    );
};

export default SignIn;
