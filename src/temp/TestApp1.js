// import { Link } from "react-router-dom";
// import { Routes, Route, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";
import TestText from "./TestText";
import Loading from "../components/Loading";

const TestApp = () => {
  console.log("TestApp");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="App">
      <p className="link-light">TestApp</p>

      <p className="link-light">{loading ? "loading=true" : "loading=false"}</p>
      <Loading />
      <TestText />
    </div>
  );
};

export default TestApp;
