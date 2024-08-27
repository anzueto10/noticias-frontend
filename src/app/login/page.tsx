import WhyToJoinUsSection from "@/modules/login/components/forms/WhyToJoinUsSection";
import LoginSection from "@/modules/login/sections/LoginSection";

const LoginPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center w-full gap-10">
        <div className="h-full flex items-center justify-end">
          <LoginSection />
        </div>
        <div className="h-full flex items-center justify-start">
          <WhyToJoinUsSection />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
