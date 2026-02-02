import Nav from "./components/Nav";
import Footer from "./components/Footer";
import precious from "./assets/precious.jpeg";
import Faq from "./components/Faq";
import {
  ArrowRight,
  ShieldCheck,
  Gem,
  Sparkles,
  ShoppingCart,
} from "lucide-react";

import image1 from "./assets/image(1).jpeg";
import image6 from "./assets/image(6).jpg";
import image3 from "./assets/image(3).webp";
import image13 from "./assets/image(13).jpeg";
import image22 from "./assets/image(22).jpeg";
import MyAvatar from "./components/myavatar";

function App() {
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

  const featured = [
    {
      id: 1,
      name: "The Executive Bag",
      price: "39,999",
      img: image1,
      tag: "Bestseller",
    },
    {
      id: 2,
      name: "Bag Gorgeous",
      price: "25,000",
      img: image6,
      tag: "New Arrival",
    },
    {
      id: 3,
      name: "The Daisy Bag",
      price: "25,000",
      img: image13,
      tag: "Limited",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Elite DEV",
      text: "The craftsmanship is unparalleled. I wore my Pearl Tote to a gala and haven't stopped receiving compliments since.",
      location: "Lagos, NG",
    },
    {
      id: 2,
      name: "John Olaoluwa",
      text: "I love how these bags bridge the gap between vintage charm and modern fashion. The quality feels premium.",
      location: "Abuja, NG",
    },

    {
      id: 4,
      name: "Amara Okezie",
      text: "Usually, I used to think beaded bags were fragile, but these are built to last. The structural integrity is impressive.",
      location: "Abia, NG",
    },
  ];

  return (
    <>
      <Nav />

      {/* HEADER: Responsive Adjustments */}
      <header className="head bg-white relative min-h-[80vh] md:min-h-screen flex items-center">
        <div className="cont w-full">
          <div className="  max-sm:h-[80vh] flex w-full items-end md:items-end mb-[10%] md:mb-[3%]">
            <div className=" flex flex-col gap-4 md:gap-6">
              <h3 className="text-5xl md:text-7xl font-medium leading-tight">
                Be Stylish <br className="hidden md:block" /> & Modish.
              </h3>
              <p className="w-full md:w-[50%] text-foreground text-lg md:text-[1.1em] leading-relaxed">
                <span className="font-medium">
                  Modern silhouettes, timeless textures.
                </span>{" "}
                Reimagining a classic craft for the contemporary closet. Our
                bags bring a touch of vintage soul to your daily rotation.
              </p>
              <a
                href="https://wa.me/message/3UEFZVMXCKJXA1"
                target="_blank"
                className="flex items-center justify-center md:justify-start gap-2 px-6 py-4 bg-foreground text-primary rounded-sm w-full md:w-fit transition-transform active:scale-95"
              >
                Order on Whatsapp <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL SIDEBAR: Hidden on mobile, or moved to a better spot */}
        <div className="hidden md:block absolute right-10 top-[30%]">
          <ul className="flex flex-col items-center gap-3 px-2 py-2 border border-white/40 rounded-sm bg-white/30 backdrop-blur-2xl">
            {socials.map((social) => (
              <li
                key={social.name}
                className="text-2xl p-2 rounded-full hover:bg-white/50 transition-colors"
              >
                <a href={social.url}>{social.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="overflow-x-hidden">
        {/* FEATURED SECTION */}
        <section className="py-16 md:py-24">
          <div className="cont">
            <h3 className="relative und text-left text-3xl font-medium mb-12">
              Featured Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featured.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col bg-mine p-4 rounded-sm"
                >
                  <div className="relative overflow-hidden aspect-[4/5] bg-white/50">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-foreground text-primary text-[10px] px-3 py-1 uppercase tracking-widest font-bold">
                      {product.tag}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 mt-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-medium">{product.name}</h4>
                      <p className="font-semibold text-lg">
                        ₦ <span className="">{product.price}</span>
                      </p>
                    </div>
                    <button className="flex items-center justify-center gap-2 mt-4 w-full py-4 border border-foreground bg-transparent hover:bg-foreground hover:text-primary transition-all uppercase text-xs tracking-widest font-bold">
                      Order on Whatsapp <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION: Refined for Mobile spacing */}
        <section
          className="w-full bg-mine py-16 md:py-24 px-6 md:px-20"
          id="about"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative group overflow-hidden rounded-sm order-2 lg:order-1">
                <img
                  src={precious}
                  alt="The Artisan"
                  className="w-full h-auto object-cover grayscale-30 transition duration-700"
                />
              </div>
              <div className="flex flex-col space-y-6 md:space-y-8 order-1 lg:order-2">
                <h3 className="text-3xl md:text-5xl font-serif leading-tight italic">
                  Crafted with Intention. <br />
                  <span className="not-italic">Carried with Pride.</span>
                </h3>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg font-light leading-relaxed text-foreground/80">
                  <p>
                    <span className=" font-medium">BeadChef</span> is a
                    dedicated design house where patience is the primary medium.
                    Our work is a celebration of the handmade, blending creative
                    intuition with rigorous detail to produce beaded bags that
                    feel both personal and profound.
                  </p>

                  <p>
                    We believe a bag should be more than an accompaniment; it
                    should be a narrative you carry with you. By eschewing mass
                    production in favor of a deliberate, bead-by-bead process,
                    we ensure that every creation possesses its own soul and
                    unrivaled quality.
                  </p>

                  <p className="pt-4 font-semibold tracking-widest uppercase text-xs">
                    This is slow fashion, refined.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 md:py-24 bg-mine">
          <div className="cont">
            <h3 className="relative und text-2xl font-medium mb-12">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <ShieldCheck />,
                  title: "Artisanal Precision",
                  desc: "Every bag is hand-beaded with meticulous attention to detail.",
                },
                {
                  icon: <Gem />,
                  title: "Premium Materials",
                  desc: "We use high-grade, sustainable beads and reinforced threading.",
                },
                {
                  icon: <Sparkles />,
                  title: "Modern Versatility",
                  desc: "Seamlessly transition from casual brunch to elegant soirées.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-foreground text-primary rounded-full">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="cont">
            <h3 className="relative und text-2xl font-medium mb-10">
              Testimonials
            </h3>
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-md font-medium mb-2">
                  What our lovely customers say
                </p>
                <MyAvatar />
              </div>
              <div className="text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase opacity-60 bg-mine py-2 px-4 w-fit">
                4.9/5 Rating • 200+ Reviews
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-mine p-6 md:p-8 border-l-4 border-foreground flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 mb-4 text-[10px]">
                      {"★★★★★".split("").map((s, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-foreground/80 italic leading-relaxed">
                      "{t.text}"
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold text-sm uppercase tracking-wider">
                      {t.name}
                    </h4>
                    <p className="text-[10px] opacity-50">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Faq />
      </main>

      <Footer nav />
    </>
  );
}

export default App;
