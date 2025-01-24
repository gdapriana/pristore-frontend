import {assets} from "../assets/assets.js";
import {Link, NavLink} from "react-router-dom";
import {twMerge} from "tailwind-merge";
import { useLocation } from 'react-router-dom';
import { motion as m } from "motion/react"
import {useState} from "react";

const navigations = [
  {path: "/", name: "HOME"},
  {path: "/collection", name: "COLLECTION"},
  {path: "/about", name: "ABOUT"},
  {path: "/contact", name: "CONTACT"},
]

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1]

  const [visible, setVisible] = useState(false)

  return (
    <div className="flex item-center justify-between py-5 font-medium">
      <img src={assets.logo || ""} className="w-36" alt="logo"/>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {navigations.map((nav, index) => {
          return (
            <NavLink key={index} to={nav.path} className="flex flex-col items-center gap-1">
              <p>{nav.name}</p>
              <m.hr
                animate={path === nav.path.split("/")[1] ? { width: ["0", "50%"], background: "gray" } : {width: ["50%", "0"], background: "white"}}
                transition={{ duration: 1, ease: "anticipate" }}
                className={twMerge("border-none h-[1.5px] bg-white")} />
            </NavLink>
          )
        })}
      </ul>
      
      <div className="flex items-center gap-6">
        <img src={assets.search_icon || ""} alt="search" className="w-5 cursor-pointer" />
        <div className="group relative">
          <img src={assets.profile_icon || ""} alt="profile" className="w-5 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Pofile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon || ""} alt="cart" className="w-5 min-w-5"/>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon || ""} alt="menu" className="w-5 cursor-pointer sm:hidden" />
      </div>

      <div className={twMerge("absolute flex flex-col justify-start items-stretch top-0 right-0 bottom-0 overflow-hidden bg-white transition-all", visible ? "w-full" : "w-0")}>
        <div className="flex p-8 justify-start items-center">
          <img onClick={() => setVisible(false)} src={assets.dropdown_icon || ""} className="w-4" alt="close"/>
        </div>
        <div className="flex flex-col jusify-start items-center gap-4">
          {navigations.map((nav, index) => {
            return (
              <NavLink onClick={() => setVisible(false)} key={index} to={nav.path} className="flex flex-col items-center gap-1">
                <p>{nav.name}</p>
                <m.hr
                  animate={path === nav.path.split("/")[1] ? { width: ["0", "50%"], background: "gray" } : {width: ["50%", "0"], background: "white"}}
                  transition={{ duration: 1, ease: "anticipate" }}
                  className={twMerge("border-none h-[1.5px] bg-white")} />
              </NavLink>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;