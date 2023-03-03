import React from "react";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Hero />
    </div>
  );
}
