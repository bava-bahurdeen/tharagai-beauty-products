import React from "react";
import Hero from "./Hero";
import Ingredients from "./Ingredients";
import BestSeller from "./BestSeller";
import Categories from "./Categories";
import Favorite from "./Favorite";
import Testimonials from "./Testimonials";
import QuestinBottom from "../../assets/components/QuestinBottom";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ingredients />
      <BestSeller />
      <Categories />
      <Favorite />
      <Testimonials />
      <QuestinBottom />
    </main>
  );
}
