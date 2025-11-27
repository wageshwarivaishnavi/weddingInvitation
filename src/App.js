/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import BackgroundMusic from "./components/BackgroundMusic";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Story from "./components/Story";
import Where from "./components/Where";

const Organization = lazy(() => import("./components/Organization"));
const RSVP = lazy(() => import("./components/RSVP"));
const Gallery = lazy(() => import("./components/Gallery"));

function App() {
  return (
    <>
      <Sidebar />
      <BackgroundMusic />
      <div id="oliven-main">
        <Header />
        {/* <Organization /> */}
        <Story />
        <Suspense fallback={<div />}>
          <Gallery />
        </Suspense>
        <Countdown />

        <Where />
        <Footer />
      </div>
    </>
  );
}

export default App;
