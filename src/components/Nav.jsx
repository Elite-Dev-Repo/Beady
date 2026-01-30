import React from "react";

function Nav() {
  const navs = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Gallery",
      link: "#gallery",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="bg-[#fdfbfb] sticky top-0 z-50 shadow-sm">
      <nav className="h-[80px] flex items-center justify-between cont ">
        <div className="logo">
          <p>Logo</p>
        </div>
        <div className="links">
          <ul className="flex items-center gap-4">
            {navs.map((nav) => {
              return (
                <li key={nav.name}>
                  <a href={nav.link}>{nav.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="">
          <a className="px-4 py-3 bg-foreground text-primary rounded-sm">
            View Catalog
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
