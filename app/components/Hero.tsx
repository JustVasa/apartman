"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      // fixní rámeček podle reálné velikosti obrazovky (aktuálně 1 %)
      const offsetX = screen.width * 0.01;
      const offsetY = screen.height * 0.01;
      setOffset(Math.min(offsetX, offsetY));
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <section className="relative w-screen h-screen bg-[#f6f4ef] overflow-hidden">
      {/* box s fixním rámečkem kolem dokola */}
      <div
        className="absolute overflow-hidden rounded-[20px] bg-[#132430]"
        style={{
          top: offset,
          bottom: offset,
          left: offset,
          right: offset,
        }}
      >
        {/* Pohybující se vrstva pro “video” efekt – drží se uvnitř boxu */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ transformOrigin: "center", willChange: "transform" }}
          animate={{ scale: [1, 1.05, 1], x: [0, -15, 0], y: [0, -10, 0] }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src="/hero1.jpg"
            alt="Apartmány"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Obsah */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#f6f4ef] px-[4%]">
          <h1
            className="leading-[1em] max-w-[8em] mb-[-0.17em] heading-hero"
            style={{
              fontFamily: "URWGothic, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
              lineHeight: "1em",
              color: "#f6f4ef",
            }}
          >
            <span className="block">Poznejte</span>
            <span className="block">Dokonalé</span>
            <span className="block">Pohodlí</span>
          </h1>


          <div className="mt-6">
            <Image src="/wave.svg" alt="Oddělovač" width={70} height={10} className="opacity-90" />
          </div>

          <p className="mt-6 text-[#f6f4efcc] text-lg max-w-xl font-light">
            Místo kde se luxus, klid a příroda setkávají v dokonalé harmonii.
          </p>
        </div>
      </div>
    </section>
  );
}
