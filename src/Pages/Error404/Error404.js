import React from "react";
import error404 from "../../images/error404.svg";
import "./Error404.css";

const Error404 = () => {
  return (
    <>
      <div className="errorContainer">
        <img src={error404} alt="error 404" />
        <p>Whoops, that page is gone.</p>
      </div>
    </>
  );
};

export default Error404;
