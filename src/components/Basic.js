import React from "react";
import "../css/firebase.css";

const Basic = () => {
  return (
    <div className="firebase">
      <h2>Firebase Admin SDK</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque,
        iusto ut, incidunt mollitia eius nisi repudiandae enim, rerum assumenda
        voluptatibus blanditiis omnis aut magnam voluptatem cum praesentium.
        Nisi, voluptate? <a href="/">Learn more</a>
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
  );
};

export default Basic;
