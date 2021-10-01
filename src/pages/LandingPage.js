import React from "react";
import Loading from "../components/Loading";
import "../css/landing.css";

const LandingPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 hero-art">
          <div className="hero-content">
            <h1>SEO Builder</h1>
            <h2>Your one-stop destination for all things web</h2>
          </div>
          {/* <img class="hero-img" src="https://cdn.dribbble.com/assets/auth/sign-in-a63d9cf6c1f626ccbde669c582b10457b07523adb58c2a4b46833b7b4925d9a3.jpg"/> */}
          <img class="hero-img" src="../imgs/undraw_websiteBuilder.svg"/>
        </div>
        <div className="col-8 hero-text">
          <div className="sign-up">
            Not a member? <a href="">Sign up now</a>
          </div>
          <div className="main">
            <h1>Sign in to SEO Builder</h1>
            <button className= "btn" type="submit"><img className="icon-google" src="../imgs/google.png" alt="icon"/>   Sign in with Google</button>
            <hr className="divider"/>
            <form>
              <div className="login-form">
                <label for="login">Username or Email Address</label><br/>
                <input className="text-input" type="text" name="login" id="login"></input><br/>

                <label class="password" for="password">Password <a href="/">Forgot password</a></label><br/>
                <input className="text-input" type="password" name="password" id="password"></input><br/>

              </div>

            </form>
            
            <button className= "btn btn-signin" type="submit">Sign in</button>

          
          </div>
        </div>
      </div>
    </div>
  );   
};


export default LandingPage;
