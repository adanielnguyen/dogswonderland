/**
 * GallerySection — Photo gallery with real farm photos
 * Design: Cream background, asymmetric grid showcasing authentic property images
 * All images are real photos from Dogs Wonderland farm, Kyneton
 */

export default function GallerySection() {
  const images = [
    {
      src: "/images/dogs_at_lake_composite.webp",
      alt: "Dianne's four dogs playing on the grassy bank of the lake at Dogs Wonderland",
      caption: "The pack at the lake",
    },
    {
      src: "/images/farm_dog_lake1_lush.webp",
      alt: "A golden retriever exploring the lush green open paddock beside the lake at Dogs Wonderland",
      caption: "Open paddock freedom",
    },
    {
      src: "/images/lake_photo_be0cd9be.jpg",
      alt: "The stunning natural lake at Dogs Wonderland in Kyneton — winter morning",
      caption: "The lake in winter light",
    },
    {
      src: "/images/hero_dogs_farm.webp",
      alt: "Golden retriever and border collie running across the farm at sunset",
      caption: "Golden hour on the paddocks",
    },
    {
      src: "/images/dianne_gallery_portrait.webp",
      alt: "Dianne with her golden retriever and white fluffy dog on the farm paddocks",
      caption: "Dianne & her beloved dogs",
    },
    {
      src: "/images/farm_aerial_lake_33d62a8b.jpg",
      alt: "Aerial view of the stunning lake and property at Dogs Wonderland, Kyneton",
      caption: "2.25 hectares from above",
    },
    {
      src: "/images/farm_gumtree_creek_e4e45e2e.jpg",
      alt: "Gum tree beside the creek at Dogs Wonderland farm",
      caption: "Creekside gum trees",
    },
    {
      src: "/images/dogs_chihuahua_autumn_lake.webp",
      alt: "Black and tan Chihuahua pair sitting on lush green grass by the autumn lake at Dogs Wonderland",
      caption: "Autumn at the lake",
    },
    {
      src: "/images/dogs_white_golden_autumn_lake.webp",
      alt: "White fluffy dog and golden retriever on green grass by the autumn lake with golden willow trees",
      caption: "Golden autumn companions",
    },
    {
      src: "/images/farm_boardwalk_lilypads_dad2aee4.jpg",
      alt: "Wooden boardwalk over lily pads at Dogs Wonderland lake",
      caption: "The lily pad boardwalk",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.99 0.005 90)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 reveal">
          <div
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.48 0.08 200)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Life at the Farm
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.04 55)" }}
          >
            The{" "}
            <span style={{ color: "oklch(0.32 0.09 145)", fontStyle: "italic" }}>
              Wonderland
            </span>{" "}
            Experience
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "oklch(0.48 0.04 55)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Real photos from the farm — because seeing is believing.
          </p>
        </div>

        {/* Gallery Grid — 3 column asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Row 1: Big left (spans 7 cols, tall) + right stack (spans 5 cols) */}
          {/* Image 1 — large feature, real dogs by lake */}
          <div
            className="relative rounded-2xl overflow-hidden group reveal md:col-span-7"
            style={{ height: "420px" }}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
              style={{ background: "linear-gradient(to top, oklch(0.15 0.08 145 / 0.8) 0%, transparent 55%)" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {images[0].caption}
              </span>
            </div>
          </div>

          {/* Right column — two stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Image 2 — golden retriever at lake */}
            <div
              className="relative rounded-2xl overflow-hidden group reveal reveal-delay-1 flex-1"
              style={{ height: "200px" }}
            >
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, oklch(0.15 0.08 145 / 0.8) 0%, transparent 55%)" }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {images[1].caption}
                </span>
              </div>
            </div>

            {/* Image 3 — winter lake */}
            <div
              className="relative rounded-2xl overflow-hidden group reveal reveal-delay-2 flex-1"
              style={{ height: "200px" }}
            >
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: "center 60%" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, oklch(0.15 0.08 145 / 0.8) 0%, transparent 55%)" }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {images[2].caption}
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Two wide images side by side */}
          {/* Image 4 — golden hour dogs running */}
          <div
            className="relative rounded-2xl overflow-hidden group reveal reveal-delay-1 md:col-span-6"
            style={{ height: "300px" }}
          >
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
              style={{ background: "linear-gradient(to top, oklch(0.15 0.08 145 / 0.8) 0%, transparent 55%)" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {images[3].caption}
              </span>
            </div>
          </div>

          {/* Image 5 — Dianne portrait */}
          <div
            className="relative rounded-2xl overflow-hidden group reveal reveal-delay-2 md:col-span-6"
            style={{ height: "300px" }}
          >
            <img
              src={images[4].src}
              alt={images[4].alt}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
              style={{ background: "linear-gradient(to top, oklch(0.15 0.08 145 / 0.8) 0%, transparent 55%)" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {images[4].caption}
              </span>
            </div>
          </div>

          {/* Row 3: Aerial (wide) + gum tree + boardwalk */}
          {/* Image 6 — aerial lake view */}
          <div
            className="relative rounded-2xl overflow-hidden group reveal md:col-span-6"
            style={{ height: "300px" }}
          >
            <img
              src={images[5].src}
              alt={images[5].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
              style={{ background: "linear-gradient(to top, oklch(0.15 0.08 145 / 0.8) 0%, transparent 55%)" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {images[5].caption}
              </span>
            </div>
          </div>

          {/* Image 7 — gum tree by creek */}
          <div
            className="relative rounded-2xl overflow-hidden group reveal reveal-delay-1 md:col-span-3"
            style={{ height: "300px" }}
          >
            <img
              src={images[6].src}
              alt={images[6].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
              style={{ background: "linear-gradient(to top, oklch(0.15 0.08 145 / 0.8) 0%, transparent 55%)" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {images[6].caption}
              </span>
            </div>
          </div>

          {/* Image 8 — boardwalk over lily pads */}
          <div
            className="relative rounded-2xl overflow-hidden group reveal reveal-delay-2 md:col-span-3"
            style={{ height: "300px" }}
          >
            <img
              src={images[7].src}
              alt={images[7].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
              style={{ background: "linear-gradient(to top, oklch(0.15 0.08 145 / 0.8) 0%, transparent 55%)" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {images[7].caption}
              </span>
            </div>
          </div>

          {/* Row 4: Two autumn dog landscape photos */}
          {/* Image 9 — Chihuahua pair in autumn */}
          <div
            className="relative rounded-2xl overflow-hidden group reveal md:col-span-6"
            style={{ height: "300px" }}
          >
            <img
              src={images[8].src}
              alt={images[8].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
              style={{ background: "linear-gradient(to top, oklch(0.15 0.08 145 / 0.8) 0%, transparent 55%)" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {images[8].caption}
              </span>
            </div>
          </div>

          {/* Image 10 — White fluffy & golden retriever in autumn */}
          <div
            className="relative rounded-2xl overflow-hidden group reveal reveal-delay-1 md:col-span-6"
            style={{ height: "300px" }}
          >
            <img
              src={images[9].src}
              alt={images[9].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
              style={{ background: "linear-gradient(to top, oklch(0.15 0.08 145 / 0.8) 0%, transparent 55%)" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {images[9].caption}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
