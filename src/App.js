import React, { useEffect } from "react";
import { autoLogin } from "./store/login";
import { useDispatch } from "react-redux";

import "./App.css";

import Header from "./Components/Header";
import Content from "./Components/Content";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <Header />
        <Content />
      </div>
    </>
  );
}
