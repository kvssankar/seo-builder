import React from "react";
import Loading from "../components/Loading";
import "../css/landing.css";

const LandingPage = () => {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-5 hero-img">
          <h1>SEO Builder</h1>
        </div>
        <div class="col-7">
        Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.
        </div>
      </div>
    </div>
  );   
};


export default LandingPage;
