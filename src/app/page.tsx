import Image from "next/image";
import { CgBorderStyleSolid } from "react-icons/cg";
import { CgArrowRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { CgChevronDown } from "react-icons/cg";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiMoneyCheck1 } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";

export default function Home() {
  return (
    // header starts here

    <div className="max-w-screen-2xl mx-auto">
      <header>
        <div className=" hidden bg-customBlue w-full h-8 md:flex justify-center items-center text-semi-bold text-white text-Space Grotesk ">
          <img className="mr-3" src="./Vector.png" alt="" />
          30% off storewide{" "}
          <span className="mt-0.5 px-0.5">
            {" "}
            <CgBorderStyleSolid />
          </span>{" "}
          limited time!
          <div className="underline underline-offset-4  text-white text-sm">
            <span className=" ml-3 flex items-center">
              {" "}
              Shop Now
              <span className="mt-1 ml-1">
                <CgArrowRight />
              </span>
            </span>
          </div>
          <div className="absolute right-0 mr-1">
            <CgClose />
          </div>
        </div>

        {/* nav bar starts here */}

        <div className="  bg-black md:bg-white w-full h-[60px] md:flex justify-around items-center  ">
          <div className="">
            <img src="./logo.png" alt="logo" />
          </div>
          <div>
            <nav>
              <ul className=" hidden md:flex space-x-6 items-center font-semi-bold font-medium">
                <li>Home</li>
                <li>
                  <a href="#shop" className="flex items-center  ">
                    Shop
                    <CgChevronDown />
                  </a>
                </li>
                <li>
                  <a href="#product" className="flex items-center">
                    Product <CgChevronDown />
                  </a>
                </li>
                <li>
                  <a href="#contact">Contact us</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className=" hidden md:flex space-x-3 ">
            <HiOutlineSearch size={26} />
            <HiOutlineUserCircle size={26} />
            <div className="flex">
              <HiOutlineShoppingBag size={26} />
              <PiNumberCircleTwoFill className="mt-1" size={23} />
            </div>
          </div>

          <div className="md:hidden text-4xl bg-customBlue">
            <a href="#">&#8801</a>
          </div>
        </div>
      </header>

      {/* nav bar end here */}

      {/* header ends here */}

      {/* hero section starts here */}

      <div className=" ">
        <div className="w-full h-auto">
          <img src="./slider-section.png" alt="pic" width={1500} />
        </div>
        <div className="w-full h-24">
          <div className="h-12 flex justify-center items-center ml-14 text-2xl font-bold">
            Trending Brands
          </div>
          <div className="h-12 flex justify-end ml-14 text-2xl mr-28">
            <img
              className="w-auto h-[70px] mr-40"
              src="./brands-logos.png"
              alt="logos"
            />
          </div>
        </div>

        <div className="w-[1440px] h-[547px]">
          <div className=" h-12 text-3xl mt-12 font-semibold ml-36 flex justify-between">
            <span className="ml-20">Just In</span>
            <div className="mr-60 mt-6">
              <Image src="/dots.png" alt="dots" width={35} height={10} />
            </div>
          </div>
          <div className="w-[1280px] h-[459px]  ml-[170px] flex space-x-2 ">
            <Image
              className="ml-2"
              src="/pc1.png"
              alt="pic"
              width={250}
              height={459}
            />
            <Image src="/pc2.png" alt="pic" width={250} height={459} />
            <Image src="/pc3.png" alt="pic" width={250} height={459} />
            <Image src="/pc4.png" alt="pic" width={250} height={459} />
            <Image src="/pc5.png" alt="pic" width={120} height={459} />
          </div>
        </div>
        {/* hero section ends here */}
      </div>

      {/* main section starts here */}

      {/* shop Categories starts here */}
      <div id="shop" className="w-[1440px] h-389 flex flex-col items-center ">
        <div className="w-1120 h-20 font-medium text-3xl text-center text-slate-500">
          Shop By Categories
        </div>
        <div className="w-1122 h-201 flex space-x-2 text-center py-8">
          <Image src="/rounded.png" alt="pic" width={1122} height={201} />
        </div>
      </div>

      {/* shop category ends here */}

      <div className="w-1440 h-760 py-3 px-9">
        <div>
          <Image src="/grid.png" alt="banner" height={664} width={1440} />
        </div>
      </div>

      {/* best seller part */}

      <div className="w-1440 h-1206 flex flex-col">
        <p className="w-1120 h-32 font-medium text-3xl py-8 text-center">
          Best Seller
        </p>
        <div className="flex justify-center mb-24 gap-3  ">
          <Image src="/bs1.png" alt="" width={262} height={459} />
          <Image src="/bs2.png" alt="" width={262} height={459} />
          <Image src="/bs3.png" alt="" width={262} height={459} />
          <Image src="/bs4.png" alt="" width={262} height={459} />
        </div>
        {/* best seller part ends here */}

        {/* banner section starts here */}

        <div className="w-1440 h-532 flex  bg-slate-200">
          <div>
            <Image src="/img.png" alt="img" width={720} height={532} />
          </div>
          <div className="flex flex-col justify-center  items-start text-left ml-24">
            <p className="text-blue-500 text-[16px] font-bold ">
              SALE UPTO 35% OFF
            </p>
            <p className="font-medium text-4xl mt-4">HUNDREDS of</p>
            <p className="font-medium text-4xl ">New lower prices</p>
            <p className="text-xl font-normal mt-6">
              Hurry up!!! Winter is coming!
            </p>
            <div className="flex justify-center mt-5">
              <button>Shop Now </button>
              <span className="mt-1">
                <CgArrowRight size={20} />
              </span>
            </div>
            <div className="w-24 border-t-2 border-black "></div>
          </div>
        </div>
      </div>

      {/* banner section ends here */}

      {/* promotion card  */}

      <div
        id="product"
        className="w-full h-[780px] flex flex-col justify-center items-center py-10"
      >
        <div className="flex flex-col justify-center items-center h-[780px]">
          <p className="font-bold text-base text-blue-700 ">Promotion</p>
          <p className="font-medium text-4xl mt-4">Winter Collections</p>
          <p className="font-normal text-xl mt-4 mb-4 ">
            Introducing the new winter jackets
          </p>
        </div>
        <div className="w-[1120px] h-[544px] flex justify-center items-center">
          <Image src="/video.png" alt="video" width={1120} height={500} />
        </div>
      </div>

      {/* Promotion card ends here */}

      {/* article section starts here */}

      <div className="w-full h-[657px] flex  flex-col justify-center items-center ">
        <div className="w-[1121px] h-[44px] flex justify-between">
          <p className="font-medium text-4xl">Latest Article</p>

          <div className="flex flex-col items-center">
            <div className="flex items-center mb-1">
              <button>Shop Now</button>
              <span className="ml-2">
                <CgArrowRight size={20} />
              </span>
            </div>
            <div className="w-24 border-b-2 border-black"></div>
          </div>
        </div>
        <div className="w-full space-x-2 flex justify-center mt-8">
          <div>
            <img src="./article.png" alt="" />
          </div>
          <div>
            <img src="./article2.png" alt="" />
          </div>
          <div>
            <img src="./article3.png" alt="" />
          </div>
        </div>
      </div>

      {/* artcle section ends here */}

      {/* Contact us section */}

      <div className="w-full h-[450px] flex flex-col items-center justify-center">
        <div className="w-[554px] h-[168px] flex justify-center items-center flex-col ">
          <p className="h-4 text-slate-600 font-bold text-base">NEWSFEED</p>
          <p className=" h-11 font-medium text-4xl">Instagram</p>
          <p className="h-8 font-normal text-xl">Follow us on social media</p>
          <p className="h-7 text-slate-700">@elegant_@_offical</p>
        </div>

        <div className="w-[1120px] h-[262px] ">
          <div className="flex justify-center">
            <img src="./instacards.png" alt="" />
          </div>
        </div>
      </div>

      <div className="w-full h-[252px] flex justify-center items-center">
        <div className="w-[262px] h-[220px] flex flex-col items-center justify-center">
          <span>
            <LiaShippingFastSolid size={40} />
          </span>
          <p className="font-medium text-xl mt-2">Free Shipping</p>{" "}
          {/* Added mt-2 for spacing */}
          <p className="text-sm text-slate-700 mt-1">Order above $200</p>{" "}
          {/* Added mt-1 for spacing */}
        </div>

        <div className="w-[262px] h-[220px] flex flex-col items-center justify-center">
          <span>
            <CiMoneyCheck1 size={40} />
          </span>
          <p className="font-medium text-xl mt-2">Money-back</p>
          <p className="text-sm text-slate-700 mt-1">30 days gurrantee</p>
        </div>

        <div className="w-[262px] h-[220px] flex flex-col items-center justify-center">
          <span>
            <CiLock size={40} />
          </span>
          <p className="font-medium text-xl mt-2">Secure Payments</p>
          <p className="text-sm text-slate-700 mt-1">Secured by Stripe</p>
        </div>

        <div className="w-[262px] h-[220px] flex flex-col items-center justify-center">
          <span>
            <BsTelephone size={40} />
          </span>
          <p className="font-medium text-xl mt-2">24/7 Support</p>
          <p className="text-sm text-slate-700 mt-1">Phone and Email support</p>
        </div>
      </div>

      {/*  section ends here */}

      {/* footer starts here */}

      <footer>
        <div
          id="contact"
          className="w-full min-h-[240px] bg-slate-200 flex justify-center"
        >
          <div className="w-[1120px] h-full flex justify-between items-start p-8">
            <div className="w-[352px] h-[234px] space-y-2">
              <img src="./flogo.png" alt="Logo" />
              <p>43111 Hai Trieu street</p>
              <p>District 1, HCMC</p>
              <p>Vietnam</p>
              <div className="flex gap-2 mt-2">
                <span>
                  <FaInstagram size={20} />
                </span>
                <span>
                  <CiFacebook size={20} />
                </span>
                <span>
                  <FiYoutube size={21} />
                </span>
              </div>
            </div>

            <div className="w-[160px] h-[270px] space-y-2">
              <p className="font-medium text-base">Page</p>
              <p>Home</p>
              <p>Shop</p>
              <p>Product</p>
              <p>Articles</p>
              <p>Contact Us</p>
            </div>

            <div className="w-[160px] h-[224px] space-y-2">
              <p className="font-medium text-base">Info</p>
              <p>Shipping Policy</p>
              <p>Return and Refund</p>
              <p>Support</p>
              <p>FAQs</p>
            </div>

            <div className="w-[352px] h-[182px] space-y-2 ml-4">
              <p className="font-medium text-base ">Join Newsletter</p>
              <p>
                Subscribe to our newsletter to get more deals, new products, and
                promotions.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
