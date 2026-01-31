import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
      name: "The Pearl Tote",
      price: "₦45,000",
      img: image1,
      tag: "Bestseller",
    },
    {
      id: 2,
      name: "Midnight Clutch",
      price: "₦32,000",
      img: image6,
      tag: "New Arrival",
    },
    {
      id: 3,
      name: "Crystal Mini",
      price: "₦28,500",
      img: image3,
      tag: "Limited",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Amara Okezie",
      text: "The craftsmanship is unparalleled. I wore my Pearl Tote to a gala and haven't stopped receiving compliments since. It's a literal piece of art.",
      location: "Lagos, NG",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      text: "I love how these bags bridge the gap between vintage charm and modern fashion. The quality of the beads feels incredibly premium.",
      location: "London, UK",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      text: "Usually, beaded bags are fragile, but these are built to last. The structural integrity is impressive for something so delicate looking.",
      location: "New York, USA",
    },
  ];
  return (
    <>
      <Nav />

      <header className="head bg-white relative top-[-80px]">
        <div className="cont flex h-full w-full">
          <div className="flex  w-full items-end mb-[3%]">
            <div className="flex flex-col gap-3 ">
              <h3 className="text-5xl font-medium">Be Stylish & Modish.</h3>
              <p className="w-[50%] text-foreground text-[1.1em] ">
                <span className="font-medium ">
                  Modern silhouettes, timeless textures.
                </span>{" "}
                Reimagining a classic craft for the contemporary closet. Our
                bags bring a touch of vintage soul to your daily rotation
              </p>{" "}
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-3 bg-foreground text-primary rounded-sm w-fit"
              >
                Order on Whatsapp <ArrowRight />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute right-10 top-[30%] ">
          <ul className="flex  flex-col items-center gap-3 px-2 py-2 border border-white/40 rounded-sm bg-[#ffffff46] backdrop-blur-2xl ">
            {socials.map((social) => (
              <li
                key={social.name}
                className="text-2xl p-2 rounded-full hover:bg-white/30"
              >
                <a href={social.url}>{social.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="min-h-screen">
        <section className="w-full h-screen bg-mine">
          <div className="cont">
            <div className=" text-left pt-9 text-2xl font-medium" id="about">
              <p className="relative und"> About Us</p>
            </div>

            <div className="flex w-full h-full items-center justify-between">
              <div className="flex-1">
                <img src="" alt="" />
              </div>
              <div className="flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus deleniti beatae, dignissimos et harum porro. Qui
                dignissimos iste voluptas accusamus eaque facere nulla magnam
                sit perspiciatis natus. Pariatur architecto, ex natus soluta
                eveniet doloribus magni.
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED SECTION */}
        <div className="section w-screen min-h-screen py-20">
          <div className="cont">
            <h3 className="relative und text-left pt-9 text-2xl font-medium mb-12">
              Featured Products
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featured.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col bg-mine p-4 rounded-sm transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/5] bg-white/50">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <span className="absolute top-4 left-4 bg-foreground text-primary text-xs px-3 py-1 uppercase tracking-widest font-bold">
                      {product.tag}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col gap-2 mt-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-medium">{product.name}</h4>
                      <p className="font-semibold text-lg">{product.price}</p>
                    </div>

                    <button className="flex items-center justify-center gap-2 mt-4 w-full py-3 border border-foreground hover:bg-foreground hover:text-primary transition-colors duration-300 uppercase text-xs tracking-widest font-bold">
                      Order on Whatsapp <ShoppingCart />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <section className="section w-screen min-h-[70vh] bg-mine pb-20">
          <div className="cont">
            <h3 className="relative und text-left pt-9 text-2xl font-medium mb-16">
              Why Choose Us
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Reason 1 */}
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-foreground text-primary rounded-full">
                  <ShieldCheck />
                </div>
                <h4 className="text-xl font-semibold">Artisanal Precision</h4>
                <p className="text-gray-600 leading-relaxed">
                  Every bag is hand-beaded with meticulous attention to detail,
                  ensuring a unique masterpiece that mass-produced items can't
                  replicate.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-foreground text-primary rounded-full">
                  <Gem />
                </div>
                <h4 className="text-xl font-semibold">Premium Materials</h4>
                <p className="text-gray-600 leading-relaxed">
                  We use high-grade, sustainable beads and reinforced threading
                  to ensure your bag remains a staple in your wardrobe for years
                  to come.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-foreground text-primary rounded-full">
                  <Sparkles />
                </div>
                <h4 className="text-xl font-semibold">Modern Versatility</h4>
                <p className="text-gray-600 leading-relaxed">
                  Designed for the modern woman, our bags seamlessly transition
                  from casual brunch dates to elegant evening soirées.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* TESTIMONIALS */}
        <div className="section w-screen h-auto py-20 bg-white">
          <div className="cont">
            <h3 className="relative und text-left pt-9 text-2xl font-medium">
              Testimonials
            </h3>
            <div className="mt-9 mb-12 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-md font-medium">
                  What our lovely customers say
                </p>
                <div className="mt-2">
                  <MyAvatar />
                </div>
              </div>
              <div className="text-sm font-medium tracking-widest uppercase opacity-60">
                4.9/5 Rating based on 200+ Reviews
              </div>
            </div>

            {/* The Testimonial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-mine p-8 border-l-6 border-foreground hover:border-l-12 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 mb-4 text-[10px]">
                      {"★★★★★".split("").map((s, i) => (
                        <span key={i} className="text-foreground">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-foreground/80 leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-bold text-sm uppercase tracking-wider">
                      {t.name}
                    </h4>
                    <p className="text-xs opacity-50">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer nav />
    </>
  );
}

export default App;
