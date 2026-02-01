import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Toaster, toast } from "sonner";

// Asset Imports
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

// 1. PRODUCT CARD SUB-COMPONENT
const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleOrder = () => {
    const phoneNumber = "2349133617435";
    const message = `Hello BeadChef, I want to order ${quantity} unit(s) of the ${product.name}. Total: ₦${(product.price * quantity).toLocaleString()}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setIsAdded(true);

    // Visual feedback delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsAdded(false);
    }, 800);
  };

  return (
    <div className="group flex flex-col bg-mine p-4 rounded-sm border border-transparent hover:border-foreground/10 transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white/50 rounded-sm">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {product.stock <= 2 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-[9px] px-2 py-1 uppercase font-bold tracking-tighter">
            Low Stock
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="mt-5 space-y-4">
        <div className="flex justify-between items-start gap-2">
          <h4 className="text-lg md:text-xl font-medium leading-tight">
            {product.name}
          </h4>
          <p className="text-md md:text-lg font-bold whitespace-nowrap">
            ₦{product.price.toLocaleString()}
          </p>
        </div>

        <div className="flex gap-3">
          {/* Quantity Selector */}
          <div className="flex items-center justify-between bg-white px-3 py-2 border border-foreground/10 rounded-sm">
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="bg-transparent text-sm font-bold outline-none cursor-pointer pr-2"
            >
              {[...Array(product.stock)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Action Button */}
          <button
            onClick={() => {
              toast.loading("Redirecting to WhatsApp...");
              setTimeout(() => {
                handleOrder();
              }, 100);
            }}
            className={`flex flex-1 items-center justify-center gap-2 py-4 px-6 uppercase text-[10px] tracking-[0.2em] font-bold transition-all active:scale-95 bg-foreground text-primary hover:opacity-90`}
          >
            {isAdded ? (
              <>
                Order Loading <Check size={16} />
              </>
            ) : (
              <>
                Order on WhatsApp <ShoppingBag size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. MAIN SHOP COMPONENT
const Shop = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "The Pearl Tote", price: 45000, img: image1, stock: 5 },
    { id: 2, name: "Midnight Clutch", price: 32000, img: image6, stock: 3 },
    { id: 3, name: "Crystal Mini", price: 28500, img: image3, stock: 10 },
    { id: 4, name: "Golden Aura", price: 35000, img: image2, stock: 4 },
    { id: 5, name: "Noir Evening Bag", price: 30000, img: image4, stock: 6 },
    { id: 6, name: "Oceanic Beads", price: 27500, img: image5, stock: 8 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />
      <Toaster position="top-center" richColors duration={1000} />

      {/* Breadcrumb / Back Navigation */}
      <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="cont py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all duration-300 group"
          >
            <ArrowLeft size={18} className="group-hover:text-foreground" />
            <span className="uppercase tracking-widest text-[10px]">
              Go Back
            </span>
          </button>
        </div>
      </div>

      {/* Shop Content */}
      <main className="flex-grow py-12 md:py-20">
        <div className="cont">
          <header className="flex flex-col gap-3 mb-12">
            <h3 className="relative und text-left text-3xl md:text-4xl font-medium">
              Shop Collection
            </h3>
            <p className="text-sm opacity-60 uppercase tracking-widest">
              Limited Edition • Hand-crafted Silhouettes
            </p>
          </header>

          {/* Product Grid - Responsive Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
