import React, { FC } from "react";
import Logo from "@/app/components/shared/Logo";
import Navigation from "@/app/components/shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "@/app/components/shared/ButtonPrimary";
import MenuBar from "@/app/components/shared/MenuBar";
import SwitchDarkMode from "@/app/components/shared/SwitchDarkMode";
// import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import LangDropdown from "./LangDropdown";
import Button from "@/app/components/shared/Button";

export interface MainNav1Props {
  className?: string;
}

const MainNav: FC<MainNav1Props> = ({ className = "" }) => {
  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="px-4 lg:container h-20 relative flex justify-around m-auto">
        <div className="hidden md:flex gap-10">
          <Logo className="w-24 self-center" />
          <Navigation />
        </div>

        <div className="flex md:hidden">
          <Logo className="w-24 self-center" />
        </div>

        <div className="flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden md:flex space-x-0.5">
            <SwitchDarkMode />
            <SearchDropdown className="flex items-center" />
            <div className="px-1" />
            <Button className="self-center bg-transparent backgroundButton rounded-full" href="/contact">
              Contact
            </Button>
            <Button className="self-center bg-transparent backgroundButton rounded-full" href="/login">
              Login
            </Button>
            <Button className="self-center bg-d-background dark:bg-background hover:bg-background text-background dark:text-d-background hover:text-d-background rounded-lg  border border-d-background" href="/register">
              Sign up
            </Button>
          </div>

          <div className="flex md:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
