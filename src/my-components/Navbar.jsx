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
import {Snippet} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button} from "@nextui-org/react";

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
  import { FaPhoneFlip } from "react-icons/fa6";
  import { MdOutlineMailOutline } from "react-icons/md";
  import { IoLocationSharp } from "react-icons/io5";
  import { FaLinkedinIn } from "react-icons/fa6";
  import { FaFacebookF } from "react-icons/fa";
  import { PiInstagramLogoFill } from "react-icons/pi";
  import { IoLogoTiktok } from "react-icons/io5";
  import { AiFillBank } from "react-icons/ai";

const navBar = () => {
  const menuItems = [
    {
      name: "Our initiative",
      subMenu: [
        { name: "Pad a Yarinya", link: "/pad-a-yarinya" },
        { name: "Widow Smile", link: "/widows-smile" },
        { name: "Pad Scholarship Scheme", link: "/schorlarship-scheme" },
        { name: "Pad on the Street", link: "/pad-on-the-street" },
        { name: "El Neema Cares Period Guide", link: "/guide-booklet" },
        { name: "El Neema Cares Period Magazine", link: "/magazine-booklet" },
      ],
    },
    {
      name: "About",
      subMenu: [
        { name: "Founder", link: "/founder" },
        { name: "About Us", link: "/about" },
        { name: "Our Team", link: "/our-team" },
        { name: "Become A Volunteer", link: "https://docs.google.com/forms/d/e/1FAIpQLSfRR6UwEJ89KyRzlqHmaEHD7xNgjwug8aGNBCryQwkdSgEqNA/viewform" },
      ],
    },
    { name: "Contact Us", link: "/contact" },
    { name: "Support Us", link: "/support" },
  ];

  // const contacts = [
  //   {name: "elneemacaresinitiative@gmail.com",
  //     icon: <MdOutlineMailOutline />,
  //   },
  //   {name: "Line 3, Police Estate Karsana, Abuja",
  //     icon: <IoLocationSharp />,
  //   },
  //   {name: "+234 813 628 0417 | +234 813 628 0417",
  //     icon: <FaPhoneFlip />,
  //   }
  // ];

  const NavbarIcons = [
    { img: <FaLinkedinIn />, href: "https://www.linkedin.com/company/el-neema-cares-initiative/" },
    { img: <FaFacebookF />, href: "https://www.facebook.com/share/p42aqYin7Tx1Yaxg/?mibextid=LQQJ4d" },
    { img: <PiInstagramLogoFill />, href: "https://www.instagram.com/elneema_cares?igsh=MWdiMDZ2MHRqYXljaA==" },
    { img: <IoLogoTiktok />, href: "https://www.tiktok.com/@elneema_cares?_t=8qHkgFBycGT&_r=1" },
  ];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
        <Button
              as={Link}
              href={"#"}
              className="bg-orange-500 text-white rounded-full font-bold px-8"
              size="lg"
              onPress={onOpen}
            >
              Donate
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Account Details</ModalHeader>
              <ModalBody>
                <p> 
                 <span className="bold">Naira Account :</span>
                 <span className=""> El-Neema cares initiative </span>
                </p>
                <Snippet symbol={<AiFillBank />} variant="flat" color="warning"
                hideCopyButton
                >Guaranty Trust Bank</Snippet>
                <Snippet symbol="#"> 0826233968</Snippet>
                <p>
                 <span className="bold">USD Account :</span>
                 <span className=""> El-Neema cares initiative </span>
                </p>
                <Snippet symbol="#"> 0837099221</Snippet>

              </ModalBody>
              <ModalFooter>
               Thanks for your Support
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden md:hidden block text-2xl overflow-auto">
          <Sheet>
            <SheetTrigger>
              <TbMenuDeep />
            </SheetTrigger>
            <SheetContent className="">
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
                  {/* <div className="my-5">
                    {contacts.map((contact, index) => (
                   <ul className="flex flex-start gap-5" key={index}>
                   <li className="flex my-2 gap-1">
                    <span className="flex items-center">{contact.icon}</span>
                    <span className="">{contact.name} </span>
                   </li>
                   </ul>
                    ))}

                    </div> */}
                    <div className="footer-social flex items-center pt-5">
            {NavbarIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-black hover:text-gray-400 p-2 text-sm font-medium border-2 rounded-full gap-5 mr-6"
              >
                {item.img}
              </a>
            ))}
          </div>
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