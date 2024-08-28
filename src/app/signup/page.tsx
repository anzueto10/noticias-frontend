import SignUpFormSection from "@/modules/signup/sections/SignUpFormSection";
import WhyToJoinUsSection from "@/modules/signup/sections/WhyToJoinUsSection";

const newsCategories = [
  "Política",
  "Economía",
  "Tecnología",
  "Ciencia",
  "Deportes",
  "Entretenimiento",
  "Salud",
  "Educación",
];

const SignUpPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
        <SignUpFormSection />
        <WhyToJoinUsSection />
      </div>
    </div>
  );
};

export default SignUpPage;
