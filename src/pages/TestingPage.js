import React from "react";
import Loading from "../components/Loading";
import "../css/firebase.css";

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
          <img class="hero-img" src="../imgs/undraw_websiteBuilder.svg" />
        </div>
        <div className="col-8 hero-text">
          <div className="firebase">
            <h2>Firebase Admin SDK</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              cumque, iusto ut, incidunt mollitia eius nisi repudiandae enim,
              rerum assumenda voluptatibus blanditiis omnis aut magnam
              voluptatem cum praesentium. Nisi, voluptate?{" "}
              <a href="/">Learn more</a>
            </p>
            <p>Firebase service accound</p>
            <strong>seo-builder@seobuilder.com</strong>
            <hr />
            <p>Admin SDK configuration snippet</p>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Node.js
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Java
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Python
              </label>
            </div>
            <hr />
            <div className="copy-text">
              {/* <pre>
                <code>
                  import SyntaxHighlighter from 'react-syntax-highlighter';
                  import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
                  const Component = () => {
                    const codeString = '(num) => num + 1';
                    return (
                      <SyntaxHighlighter language="javascript" style={docco}>
                        {codeString}
                      </SyntaxHighlighter>
                    );
                  };
                </code>
              </pre> */}
            </div>
            <button className="btn" type="submit">
              GENERATE NEW PRIVATE KEY
            </button>

            <p>
              <small>Last Key downloaded:</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
