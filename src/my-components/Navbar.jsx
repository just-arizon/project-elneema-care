import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "../assets/El-neema.svg";
import sheetLogo from "../assets/favicon-32x32.png";
import DonationBtn from "./donationbtn";
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
import { Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import {
    Navbar
  } from "@nextui-org/navbar";

const navBar = () => {
  const menuItems = [
    {
      name: "Charity",
      subMenu: [
        { name: "Pad a Yarinya", link: "/pad-a-yarinya" },
        { name: "Widow Smile", link: "/widows-smile" },
        { name: "Pad Scholarship Scheme", link: "/schorlarship-scheme" },
      ],
    },
    {
      name: "About",
      subMenu: [
        { name: "Founder", link: "/founder" },
        { name: "About Us", link: "/about" },
        { name: "Our Team", link: "/our-team" },
        { name: "Volunteers", link: "/volunteers" },
      ],
    },
    { name: "Contact Us", link: "/contact" },
    { name: "Support Us", link: "/support" },
  ];

  return (
    <Navbar shouldHideOnScroll className=" w-full shadow-md font-Manrope px- lg:px- z-40 bg-white">
      <div className="w-full flex items-center justify-between py-4">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="cursor-pointer h-12 w-16" />
        </Link>

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
                            <li key={subIndex} className="hover:text-orange-400">
                              <Link href={subItem.link}>
                        <NavigationMenuLink 
                                className="text-sm hover:text-orange-400 focus:text-orange-400"
                                >
                                  {subItem.name}
                                </NavigationMenuLink>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.link} className="bg-transparent py-3 px-5 font-semibold text-sm">
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </div>

        {/* Donation Button */}
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
                <SheetTitle className="flex gap-1 justify-start">
                  <img src={sheetLogo} alt="logo" className="h-7 w-7" />
                  <span className="font-bold font-Manrope text-lg">
                    El-Neema Care
                  </span>
                </SheetTitle>
                <SheetDescription>
                  {menuItems.map((item, index) => (
                    <Accordion key={index} type="single" collapsible  defaultValue={item.subMenu ? `item-${index}` : ""}>
                      {item.subMenu ? (
                        <AccordionItem value={`item-${index}`} className="font-Manrope" >
                          <AccordionTrigger>{item.name}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="flex flex-col">
                              {item.subMenu.map((subItem, subIndex) => (
                                <li key={subIndex} className="py-2 text-start ">
                                  <Link href={subItem.link} className="text-sm hover:text-orange-400 focus:text-orange-400">{subItem.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link href={item.link} className="block py-3 font-medium text-sm text-start font-Manrope">
                          {item.name}
                        </Link>
                      )}
                    </Accordion>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </Navbar>
  );
};

export default navBar;
