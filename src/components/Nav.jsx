import React from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

import beadchef from "../assets/beadchef.png";

function Nav() {
  const navs = [
    {
      name: "Our Story",
      link: "/#about",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-foreground sticky top-0 z-50 shadow-sm backdrop-blur-sm text-primary overflow-hidden">
      <nav className="h-[80px] flex items-center justify-between cont ">
        <div className="logo">
          <a href="/" className=" font-bold italic tracking-widest">
            <img src={beadchef} alt="" className="w-[250px]" />
          </a>
        </div>
        <div className="links hidden lg:block">
          <ul className="flex items-center gap-4">
            {navs.map((nav) => {
              return (
                <li key={nav.name}>
                  <a
                    href={nav.link}
                    className="nav-links relative opacity-60 hover:opacity-100"
                  >
                    {nav.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden lg:block">
          <a
            href="/shop"
            className="px-4 py-2 bg-white text-foreground rounded-sm flex items-center gap-2"
          >
            Shop
            <ShoppingCart />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden relative z-[110] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}

      <div
        className={` h-[100vh] flex-col items-center justify-center duration-500 ease-in-out lg:hidden z-120 ${isOpen ? "translate-y-0 flex" : "-translate-y-[9999px] hidden"}`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navs.map((nav) => (
            <li key={nav.name}>
              <a
                href={nav.link}
                onClick={() => setIsOpen(false)}
                className="nav-links text-sm uppercase tracking-tight"
              >
                {nav.name}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="/shop"
              className="px-8 py-4 bg-white text-foreground rounded-sm flex items-center gap-2 font-bold uppercase tracking-widest text-sm"
            >
              Shop <ShoppingCart />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
