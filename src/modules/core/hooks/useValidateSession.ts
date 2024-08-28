import { useAuthStore } from "@/context/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useValidateSession = () => {
  const router = useRouter();
  const { token } = useAuthStore();

  useEffect(() => {
    if (!token) {
      router.push("/login/");
    }
  }, [router, token]);

  return { token };
};

export default useValidateSession;
