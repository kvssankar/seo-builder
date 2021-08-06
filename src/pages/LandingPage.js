import React from "react";
import Loading from "../components/Loading";
import "../css/landing.css";

const LandingPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 hero-art">
          <h1>SEO Builder</h1>
          <h2>Your one-stop destination for everything</h2>
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
                <input type="text" name="login" id="login"></input><br/>

                <label for="password">Password <a href="/">Forgot password</a></label><br/>
                <input type="password" name="password" id="password"></input><br/>

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
