import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../css/tabs.css";
import "../css/form.css";
import Basic from "../components/Basic";

const AppPage = () => (
  <div className="container-fluid" style={{ height: "100vh" }}>
    <div className="row">
      <div className="col-4 hero-art oy">
        <div className="hero-content">
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
                  <input type="tel" placeholder="NIP" />
                </div>
                <div class="formComponent">
                  <input type="tel" placeholder="NIP" />
                </div>
                <div class="formComponent">
                  <input type="tel" placeholder="NIP" />
                </div>
                <div class="formComponent">
                  <input type="tel" placeholder="NIP" />
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
        </div>
      </div>
      <div className="col-8 hero-text">
        <Tabs>
          <TabList>
            <Tab>Basic</Tab>
            <Tab>PWA</Tab>
            <Tab>FCM</Tab>
          </TabList>

          <TabPanel className="oy" style={{ height: "100vh" }}>
            <Basic />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  </div>
);

export default AppPage;
