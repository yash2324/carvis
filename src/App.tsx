import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerIntakeForm from "./components/CustomerIntakeForm";
import Pricing from "./components/Pricing";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";
import VehicleInfo from "./components/VehicleInfo";
import HomePage from "./components/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/pricing"
              element={
                <div className="flex">
                  <Sidebar />
                  <Pricing />
                </div>
              }
            />
            <Route path="/screen1" element={<Screen1 />} />
            <Route path="/screen2" element={<Screen2 />} />
            <Route path="/screen3" element={<Screen3 />} />
            <Route
              path="/settings"
              element={
                <div className="flex">
                  <Sidebar />
                  <Settings />
                </div>
              }
            />
            <Route
              path="/vehicle-info"
              element={
                <div className="flex">
                  <Sidebar />
                  <VehicleInfo />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
