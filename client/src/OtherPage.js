import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      I am some other page
      <Link to="/">Return to home</Link>
    </div>
  );
};
