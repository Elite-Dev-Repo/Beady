import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

function Nav() {
  const navs = [
    {
      name: "About",
      link: "#about",
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
  return (
    <div className="bg-foreground sticky top-0 z-50 shadow-sm backdrop-blur-sm text-primary">
      <nav className="h-[80px] flex items-center justify-between cont ">
        <div className="logo">
          <a href="/" className="text-2xl font-bold italic tracking-widest">
            Beady
          </a>
        </div>
        <div className="links">
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

        <div className="">
          <a
            href="https://wa.me/message/3UEFZVMXCKJXA1"
            target="_blank"
            className="px-4 py-2 bg-white text-foreground rounded-sm flex items-center gap-2"
          >
            View Catalog <ChevronRight />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
