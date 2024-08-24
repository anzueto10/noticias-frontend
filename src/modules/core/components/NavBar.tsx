"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAVBAR_LINKS } from "../constants/componentsConstants";
import Link from "next/link";

const NavBar = () => {
  return (
    <Disclosure as="nav" className="border-b-2">
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-primary-foreground-light dark:text-primary-foreground-dark">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="/placeholder-logo.png"
                className="h-3/4 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex items-center">
              <div className="flex space-x-4">
                {Object.entries(NAVBAR_LINKS).map(([key, { href, text }]) => (
                  <Link
                    key={key}
                    href={href}
                    className="hover:underline rounded-md px-3 py-2 font-medium"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown  <UserDropdown /> */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {Object.entries(NAVBAR_LINKS).map(([key, { href, text }]) => (
            <DisclosureButton
              key={key}
              as={Link}
              href={href}
              className="block rounded-md px-3 py-2 text-base font-medium"
            >
              {text}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
