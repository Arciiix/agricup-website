import { motion } from "framer-motion";
import { Activity, ArrowRight, Cloud, Cpu, Droplets } from "lucide-react";

const steps = [
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Multi-Sensor Input",
    description:
      "Humidity, temperature, and soil moisture sensors continuously monitor the micro-climate and tank water levels.",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "ESP32 Processing",
    description:
      "The mesh of ESP32 modules with an integrated monitoring screen processes data and handles internet communication.",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "AI Analysis",
    description:
      "Cloud algorithms analyze sensor data to generate precise watering instructions.",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Precision Action",
    description:
      "The pumps activate automatically, delivering the exact amount of water needed.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-900/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              AgricUp
            </span>{" "}
            Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A seamless, intelligent loop that transforms raw data into
            actionable insights for your farm.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-gray-900 border-4 border-gray-800 flex items-center justify-center text-gray-400 group-hover:border-green-500 group-hover:text-green-400 transition-all duration-500 z-10 relative shadow-xl">
                    {step.icon}
                  </div>
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {index < steps.length - 1 && (
                  <div className="md:hidden text-gray-700 mb-8">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
