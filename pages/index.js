import Head from "next/head";
import Image from "next/image";
import React from "react";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head />
      <Navbar />
      <div className="block md:flex">
        <Sidebar />
        <Hero />
      </div>
    </div>
  );
}
