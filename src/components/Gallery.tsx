import { motion } from "framer-motion";

const images = [
  {
    src: "/photos/System_1.png",
    alt: "AgricUp System Overview",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/photos/System_2.jpg",
    alt: "Sensor Detail",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/photos/System_3.jpg",
    alt: "Irrigation Setup",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/photos/System_4.jpg",
    alt: "Field Deployment",
    className: "md:col-span-2 md:row-span-1",
  },
];

export const Gallery = () => {
  return (
    <section className="bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            A glimpse into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              AgricUp
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We've captured the essence of AgricUp through this little prototype
            for showcase.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${image.className}`}
            >
              <div className="absolute inset-0 bg-green-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
