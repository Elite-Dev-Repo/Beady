import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Expand } from "lucide-react";

// Importing all images
import image1 from "./assets/image(1).jpeg";
import image2 from "./assets/image(2).jpg";
import image3 from "./assets/image(3).webp";
import image4 from "./assets/image(4).jpeg";
import image5 from "./assets/image(5).jpg";
import image6 from "./assets/image(6).jpg";
import image7 from "./assets/image(7).jpeg";
import image8 from "./assets/image(8).jpg";
import image9 from "./assets/image(9).jpeg";
import image10 from "./assets/image(10).jpg";
import image11 from "./assets/image(11).jpeg";
import image12 from "./assets/image(12).jpg";
import image13 from "./assets/image(13).jpeg";
import image14 from "./assets/image(14).jpg";
import image15 from "./assets/image(15).jpeg";
import image16 from "./assets/image(16).jpg";
import image17 from "./assets/image(17).jpg";
import image18 from "./assets/image(18).jpg";
import image19 from "./assets/image(19).jpeg";
import image20 from "./assets/image(20).jpeg";
import image21 from "./assets/image(21).jpeg";
import image22 from "./assets/image(22).jpeg";
import image23 from "./assets/image(23).jpeg";
import image24 from "./assets/image(24).jpeg";
import image25 from "./assets/image(25).jpeg";
import image26 from "./assets/image(26).jpeg";
import image27 from "./assets/image(27).jpeg";

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav />

      <main className="w-screen min-h-screen bg-mine">
        {/* Sticky Header for Navigation */}
        <div className="sticky top-20 z-10 bg-primary/80 backdrop-blur-md border-b border-gray-100">
          <div className="cont py-4 flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all duration-300 group"
            >
              <ArrowLeft size={18} className="group-hover:text-primary" />
              <span className="uppercase tracking-widest text-[10px]">
                Go Back
              </span>
            </button>
            <span className="text-[10px] uppercase tracking-[0.2em] ">
              {galleryImages.length} Curated Pieces
            </span>
          </div>
        </div>

        <div className="cont py-16">
          {/* Section Title */}
          <div className="flex flex-col gap-4 mb-16 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-serif font-light tracking-tight italic">
              The Gallery
            </h1>
            <div className="w-20 h-[1px] bg-foreground hidden md:block"></div>
            <p className="max-w-md text-foreground/60 leading-relaxed">
              Explore our visual journey of handcrafted elegance, where every
              bead tells a story of modern sophistication.
            </p>
          </div>

          {/* Optimized Responsive Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-sm bg-mine border border-gray-100"
              >
                {/* Image */}
                <img
                  src={img}
                  alt={`Beaded Bag Collection - Piece ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Expand size={20} />
                  </div>
                </div>

                {/* Subtle Image Counter for Detail */}
                <div className="absolute bottom-4 left-4 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest font-bold">
                  COLLECTION No. {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
