import React from "react";
import Hero from "./Hero";
import Ingredients from "./Ingredients";
import BestSeller from "./BestSeller";
import Categories from "./Categories";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ingredients />
      <BestSeller />
      <Categories />
    </main>
  );
}
