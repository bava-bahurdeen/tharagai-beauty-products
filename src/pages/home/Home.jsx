import React from "react";
import Hero from "./Hero";
import Ingredients from "./Ingredients";
import BestSeller from "./BestSeller";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ingredients />
      <BestSeller />
    </main>
  );
}
