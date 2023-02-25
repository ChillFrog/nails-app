import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head />
      <Navbar />
      <Sidebar />
      <Hero />
    </div>
  );
}
