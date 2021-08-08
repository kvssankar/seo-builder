import React from "react";
import "../css/form.css";

const Form = () => {
  return (
    <>
      <div class="form-container">
        <div class="form">
          <div class="formName">
            <div class="formP">Dane Firmy</div>
          </div>
          <div class="formMain">
            <div class="formComponent">
              <input type="text" placeholder="Nazwa" />
            </div>
            <div class="formComponent">
              <input type="tel" placeholder="NIP" />
            </div>
            <div class="formComponent">
              <input type="date" placeholder="Data" />
            </div>
            <div class="formComponent">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
