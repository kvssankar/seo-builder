import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../css/tabs.css";
import Basic from "../components/Basic";

const AppPage = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-4 hero-art">
        <div className="hero-content">
          <h1>SEO Builder</h1>
          <h2>Your one-stop destination for all things web</h2>
        </div>
        <img
          class="hero-img"
          alt="img"
          src="../imgs/undraw_websiteBuilder.svg"
        />
      </div>
      <div className="col-8 hero-text">
        <Tabs>
          <TabList>
            <Tab>Basic</Tab>
            <Tab>PWA</Tab>
            <Tab>FCM</Tab>
          </TabList>

          <TabPanel>
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
