import beadchef from "../assets/beadchef.png";

const socials = [
  {
    name: "Instagram",
    icon: <i className="fa-brands fa-instagram"></i>,
    url: "https://www.instagram.com/_thatbeadchef",
  },
  {
    name: "WhatsApp",
    icon: <i className="fa-brands fa-whatsapp"></i>,
    url: "https://wa.me/message/3UEFZVMXCKJXA1",
  },
  {
    name: "X",
    icon: <i className="fa-brands fa-x-twitter"></i>,
    url: "https://www.x.com/_thatbeadchef",
  },
  {
    name: "Tiktok",
    icon: <i className="fa-brands fa-tiktok"></i>,
    url: "https://www.tiktok.com/@_thatbeadchef",
  },
];

const Footer = () => {
  return (
    <footer className="w-screen min-h-[30vh] md:h-[40vh] bg-foreground text-primary flex flex-col border-t-2 border-foreground/20">
      {/* Hidden SEO/Credits */}
      <div className="opacity-0 h-0 overflow-hidden">
        <a href="https://www.freepik.com">Image by freepik</a>
      </div>

      <div className="cont flex flex-col md:flex-row w-full h-full items-center justify-between gap-8 py-12 md:py-0 flex-grow">
        {/* Logo - Centered on mobile */}
        <a href="/" className="flex-1 flex justify-center md:justify-start">
          <img
            src={beadchef}
            alt="BeadChef Logo"
            className="w-[120px] md:w-[150px] brightness-0 invert"
          />
        </a>

        {/* Social Icons - Centered on mobile */}
        <div className="flex-1 flex items-center justify-center md:justify-end">
          <div className="flex gap-6 md:gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-xl cursor-pointer hover:opacity-70 transition-opacity"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/10 py-6 md:py-0 md:h-[90px] flex items-center">
        <div className="cont w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-[10px] md:text-sm opacity-60 text-center">
            <a
              href="https://oyenekanemmanuel.xyz"
              target="_blank"
              className="hover:underline"
            >
              Developed by Elite DEV
            </a>
            <span className="hidden md:inline">|</span>
            <span>
              © {new Date().getFullYear()} BeadChef. All rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
