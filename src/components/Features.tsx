import { motion } from "framer-motion";
import {
  AlertTriangle,
  Bot,
  Cpu,
  Layers,
  Smartphone,
  Sprout,
} from "lucide-react";

const features = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Modular Architecture",
    description:
      "Plug-and-play design that scales seamlessly from desktop plants to full-size farms without redesigning hardware or software.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Assistant",
    description:
      "Built-in AI assistant explains decisions and guides users in sustainable plant care.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Multi-sensor Intelligence",
    description:
      "Precise micro-climate monitoring and data-driven irrigation using advanced sensors.",
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Predictive Alerts",
    description:
      "Automated actions and alerts to prevent plant stress and soil issues before they happen.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Remote Monitoring",
    description:
      "Control via a sleek web platform with full automation options from anywhere.",
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Plant-Specific Care",
    description:
      "AI-driven algorithms water only when each plant truly requires it, eliminating guesswork.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Innovation
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Our comprehensive ecosystem combines hardware and software to
            deliver the most efficient irrigation solution.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-20 relative rounded-2xl overflow-hidden border border-white/10 group mx-5"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        <img
          src="/photos/deployment.png"
          alt="AgricUp System Deployed in Field"
          className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 p-8 z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 mb-4 backdrop-blur-md">
            <Sprout className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-xs font-bold uppercase tracking-wider">
              a real solution
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Real-world testing
          </h3>
          <p className="text-gray-300 max-w-xl">
            Our systems are currently being tested in real-world agricultural
            environments, delivering consistent results day after day.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
