import { FOOTER_LINKS } from "@/modules/core/constants/componentsConstants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark rounded-lg shadow mt-auto">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-muted-foreground-light dark:text-muted-foreground-dark sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Noticias™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-muted-foreground-light dark:text-muted-foreground-dark sm:mt-0">
          {Object.entries(FOOTER_LINKS).map(([key, { text, href }]) => (
            <li key={key}>
              <Link href={href} className="hover:underline me-4 md:me-6">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
