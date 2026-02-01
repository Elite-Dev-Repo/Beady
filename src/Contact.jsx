import React from "react";
import { Send, MessageCircle, ArrowLeft } from "lucide-react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const socials = [
    {
      name: "Gmail",

      icon: <i className="fa-brands fa-google"></i>,

      url: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=preciousakachukwu625@gmail.com",
    },

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
  return (
    <>
      <Nav />
      <div className="cont py-4 flex items-center justify-between bg-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all duration-300 group"
        >
          <ArrowLeft size={18} className="group-hover:text-primary" />
          <span className="uppercase tracking-widest text-[10px]">Go Back</span>
        </button>
      </div>
      {/* CONTACT SECTION */}
      <section
        className="section w-screen min-h-screen bg-white py-24"
        id="contact"
      >
        <div className="cont">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Side: Text & Socials */}
            <div className="flex flex-col justify-center">
              <h3 className="relative und text-left text-4xl font-serif font-medium mb-6">
                Get in Touch
              </h3>
              <p className="text-foreground/60 text-lg mb-12 max-w-md">
                Have a custom design in mind? Or perhaps a question about our
                collections? We'd love to hear from you.
              </p>

              <div className="flex flex-col gap-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group w-fit"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-mine group-hover:bg-foreground group-hover:text-primary transition-all duration-300 text-xl">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-bold">
                        Connect on
                      </p>
                      <p className="text-lg font-medium">{social.name}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-mine p-8 md:p-12 rounded-sm shadow-sm border border-foreground/5">
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                      Full Name
                    </label>
                    <input
                      type="text"
                      disabled
                      placeholder="John Doe"
                      className="bg-transparent border-b border-foreground/20 py-2 focus:border-foreground outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="user@example.com"
                      disabled
                      className="bg-transparent border-b border-foreground/20 py-2 focus:border-foreground outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your custom request..."
                    disabled
                    className="bg-transparent border-b border-foreground/20 py-2 focus:border-foreground outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  disabled
                  className="flex items-center disabled:opacity-50 justify-center gap-3 bg-foreground text-primary py-4 px-8 mt-4 hover:opacity-90 transition-opacity uppercase text-xs tracking-[0.2em] font-bold"
                >
                  Messaging currently disabled <Send size={16} />
                </button>

                <div className="flex items-center gap-4 mt-4">
                  <div className="h-[1px] flex-1 bg-foreground/10"></div>
                  <span className="text-[10px] uppercase tracking-widest opacity-40">
                    Or
                  </span>
                  <div className="h-[1px] flex-1 bg-foreground/10"></div>
                </div>

                <a
                  href="https://wa.me/message/3UEFZVMXCKJXA1"
                  target="_blank"
                  className="flex items-center justify-center gap-3 border border-foreground py-4 px-8 hover:bg-foreground hover:text-primary transition-all uppercase text-xs tracking-[0.2em] font-bold"
                >
                  Chat on WhatsApp <MessageCircle size={16} />
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
