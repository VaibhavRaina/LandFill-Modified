import React from "react";
import Footer from "./Components/Footer";
import TopBar from "./Components/Header";
import Landing from "./Components/Landing.";
import RecentSearches from "./Components/Searches";

export default function HomePage() {
  return (
    <div>
      <TopBar />
      <Landing />
      <RecentSearches />
      <Footer />
    </div>
  );
}
