import Head from "next/head";
import Image from "next/image";
import React from "react";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head />
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
}
