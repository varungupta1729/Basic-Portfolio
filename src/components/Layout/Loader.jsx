import React from "react";

const Loader = () => {
  const overlayStyle = {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.5,
    zIndex: 1000,
  };

  const loaderStyle = {
    borderTop: "4px solid #FFB400",
    borderRight: "4px solid transparent",
    borderBottom: "4px solid transparent",
    borderLeft: "4px solid transparent",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
  };

  return (
    <div style={overlayStyle}>
      <div style={loaderStyle}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
