import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"; // Ensure proper path for components
import Logo from "../assets/El-neema.svg"; // Replace with your actual logo path
import sheetLogo from "../assets/favicon-32x32.png"; // Replace with your actual logo path
import DonationBtn from "./donationbtn"; // Import donation button component
import { TbMenuDeep } from "react-icons/tb";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const menuItems = [
    {
      name: "Charity",
      link: "#",
      subMenu: ["Pad a Yarinya", "Widow Smile", "Pad Scholarship Scheme"],
    },
    {
      name: "About",
      link: "#",
      subMenu: [
        "Founder",
        "About Us",
        "Our Team",
        "Ongoing Project",
        "Board Members",
      ],
    },
    { name: "Contact Us", link: "#" },
    { name: "Support Us", link: "#" },
  ];

  return (
    <nav className="w-full shadow-md font-Manrope px-5 lg:px-20">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="cursor-pointer h-12 w-16" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex md:flex">
          {menuItems.map((item, index) => (
            <NavigationMenu key={index}>
              <NavigationMenuList>
                <NavigationMenuItem className="hover:text-gray-500">
                  {item.subMenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent py-3 px-5">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="py-3 px-5">
                        <ul className="grid gap-3 p-4 w-[250px]">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="hover:text-orange-400"
                            >
                              <NavigationMenuLink href="#">
                                {subItem}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={item.link}
                      className="bg-transparent py-3 px-5 font-semibold text-sm"
                    >
                      {item.name}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </div>

        {/* Donation Button (Visible on large screens) */}
        <div className="hidden lg:block md:block">
          <DonationBtn />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden md:hidden block text-2xl">
          <Sheet>
            <SheetTrigger>
              <TbMenuDeep />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="mt-10">
                <SheetTitle className="flex gap-1 justify-center">
                  <img src={sheetLogo} alt="logo" className="h-7 w-7" />
                  <span className="font-bold font-Manrope text-lg">El-Neema Care</span>
                </SheetTitle>
                <SheetDescription>
                  {menuItems.map((item, index) => (
                    <Accordion key={index} type="single" collapsible>
                      {item.subMenu ? (
                        <AccordionItem value={`item-${index}`} className="font-Manrope">
                          <AccordionTrigger>{item.name}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="flex flex-col ">
                              {item.subMenu.map((subItem, subIndex) => (
                                <li key={subIndex} className="py-2 text-start">
                                  {subItem}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <a
                          href={item.link}
                          className="block py-3 font-medium text-sm text-start font-Manrope"
                        >
                          {item.name}
                        </a>
                      )}
                    </Accordion>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
