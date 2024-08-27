import Facebook from "@/modules/core/icons/FacebookIcon";
import LinkedIn from "@/modules/core/icons/Linkedin";
import Twitter from "@/modules/core/icons/TwitterIcon";
import { SVGProps } from "react";

export const LOGIN_EXTERNAL_PROVIDERS: {
  [key: string]: { Icon: React.FC<SVGProps<SVGSVGElement>>; link: string };
} = {
  FACEBOOK: {
    Icon: Facebook,
    link: "#",
  },
  TWITTER: {
    Icon: Twitter,
    link: "#",
  },
  LINKEDIN: {
    Icon: LinkedIn,
    link: "#",
  },
};
