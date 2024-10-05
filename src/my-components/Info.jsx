import React from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

import { Link } from "@nextui-org/react";
const info = () => {
  return (
    <div className="bg-orange-900 w-full py-3 text-white text-center gap-2 flex justify-between lg:px-40 lg:flex hidden font-Manrope">
      <div className="flex gap-5">
        <small className="flex gap-1">
          <div className="flex items-center">
            <FaPhoneFlip />
          </div>
          <div>+234 813 628 0417</div>
        </small>
        <small className="flex gap-1">
          <div className="flex items-center">
            <MdOutlineMailOutline />
          </div>
          <div>elneemacaresinitiative@gmail.com</div>
        </small>
        <small className="flex gap-1">
          <div className="flex items-center">
            <IoLocationSharp />
          </div>
          <div> 13, Line 3, Police Estate Karsana, Abuja</div>
        </small>
      </div>

      <div className="flex gap-5">
        <small className="flex gap-1">
          <div className="flex items-center">
            <Link href="https://www.facebook.com/share/p42aqYin7Tx1Yaxg/?mibextid=LQQJ4d" className="text-white">
              <FaFacebookF />
            </Link>
          </div>
          <div></div>
        </small>
        <small className="flex gap-1">
          <div className="flex items-center">
          <Link href="https://www.instagram.com/elneema_cares?igsh=MWdiMDZ2MHRqYXljaA==" className="text-white">
            <PiInstagramLogoFill />
          </Link>

          </div>
          <div></div>
        </small>
        <small className="flex gap-1">
          <div className="flex items-center">
          <Link href="https://www.linkedin.com/company/el-neema-cares-initiative/" className="text-white">
            <FaLinkedin />
          </Link>

          </div>
          <div></div>
        </small>

        <small className="flex gap-1">
          <div className="flex items-center">
          <Link href="https://www.tiktok.com/@elneema_cares?_t=8qHkgFBycGT&_r=1" className="text-white">
            <IoLogoTiktok />
          </Link>

          </div>
          <div></div>
        </small>


      </div>
    </div>
  );
};

export default info;
