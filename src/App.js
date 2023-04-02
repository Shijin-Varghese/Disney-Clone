import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}>
            {/* <Home /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
