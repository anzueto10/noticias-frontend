"use client";

import { useAuthStore } from "@/context/store";
import WelcomeToNewsSection from "../../sections/home/WelcomeToNewsSection";
import WhyToChoiseUsSection from "../../sections/home/WhyToChoiseUsSection";
import PopularCategoriesSection from "../../sections/PopularCategoriesSection";
import ReadyToJoinSection from "../../sections/home/ReadyToJoinSection";
import FeaturedNewsSection from "../../sections/FeaturedNewsSection";
import InformedFormSection from "../../sections/InformedFormSection";
import OpinionsAndLastNewsSection from "../../sections/OpinionsAndLastNewsSection";

const HomeSectionsContainer = () => {
  const { token } = useAuthStore();
  if (!token)
    return (
      <div className="container mx-auto px-4 py-8">
        <WelcomeToNewsSection />
        <WhyToChoiseUsSection />
        <PopularCategoriesSection />
        <ReadyToJoinSection />
      </div>
    );

  return (
    <>
      <FeaturedNewsSection />
      <PopularCategoriesSection />
      <InformedFormSection />
      <OpinionsAndLastNewsSection />
    </>
  );
};

export default HomeSectionsContainer;
