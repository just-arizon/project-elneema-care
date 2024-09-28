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
import DonationBtn from "./donationbtn"; // Replace with your actual logo path
import { TbMenuDeep } from "react-icons/tb";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
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
    // { name: "Donate", link: "#", isButton: true },
  ];

  return (
    <nav className="w-full shadow-md font-Manrope px-5 lg:px-">
      <div className="flex items-center justify-between py- lg:px-20 px-">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="cursor-pointer h- w-16" />
        </div>

        {/* Menu */}
        <div className="flex lg:flex hidden">
          {menuItems.map((item, index) => (
            <NavigationMenu key={index}
            className=""
            >
              <NavigationMenuList>
                <NavigationMenuItem className="hover:text-gray-500">
                {item.subMenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent py-3 px-5 ">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="py-3 px-5">
                        <ul className="grid w-[300px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[250px]">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex}
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
                    // For items without a submenu, use NavigationMenuLink
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
        <div className="lg:block hidden">
            <DonationBtn />
        </div>
        <div className="lg:hidden block text-2xl">
        <Sheet>
  <SheetTrigger><TbMenuDeep /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
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
