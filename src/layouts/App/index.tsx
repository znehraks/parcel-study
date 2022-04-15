import React from "react";
import loadable from "@loadable/component";
import { Routes, Route } from "react-router-dom";
const Home = loadable(() => import("../../pages/Home"));
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default App;
