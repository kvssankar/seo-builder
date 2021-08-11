import React from "react";
import "../css/landing.css";

const LandingPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 hero-art">
          <div className="hero-content">
            <h1>SEO Builder</h1>
            <h4>
              Google only loves you when everyone else loves you first. And we
              help you make it possible.
            </h4>
          </div>
          <img
            class="hero-img"
            src="../imgs/landing-svg.png"
            alt="landingsvg"
          />
        </div>
        <div className="col-8 hero-text">
          <div className="sign-up">
            Not a member? <a href="/">Sign up now</a>
          </div>
          <div className="main">
            <h1>Sign in to SEO Builder</h1>
            <button
              className="btn"
              type="submit"
              style={{ background: "#00C1D4" }}
            >
              <img
                className="icon-google"
                src="../imgs/google.png"
                alt="icon"
              />{" "}
              Sign in with Google
            </button>
            <hr className="divider" />
            <form>
              <div className="login-form">
                <label for="login">Username or Email Address</label>
                <br />
                <input
                  className="text-input"
                  type="text"
                  name="login"
                  id="login"
                ></input>
                <br />

                <label class="password" for="password">
                  Password <a href="/">Forgot password</a>
                </label>
                <br />
                <input
                  className="text-input"
                  type="password"
                  name="password"
                  id="password"
                ></input>
                <br />
              </div>
            </form>

            <button className="btn btn-signin mt-5" type="submit">
              Sign in
            </button>
            <button className="btn btn-warning mt-5" type="submit">
              Sign in as guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
