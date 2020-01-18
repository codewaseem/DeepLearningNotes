import React from "react";
import { Link } from "gatsby";

export default () => {
  return (
    <>
      <h1>
        <Link to="/introduction"> Hello, World1</Link>
      </h1>
      <Link to="/demo">Demo</Link>
    </>
  );
};
