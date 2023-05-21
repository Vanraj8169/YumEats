import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";



const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
