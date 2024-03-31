import React from "react";
import Footer from "./Components/Footer";
import TopBar from "./Components/Header";
import Landing from "./Components/Landing.";

export default function HomePage() {
  return (
    <div>
      <TopBar />
      <Landing />
      <Footer />
    </div>
  );
}
