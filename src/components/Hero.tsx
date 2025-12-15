import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mt-24 text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Smart irrigation of tomorrow, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500">
              available today.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed">
            AgricUp is an AI-driven irrigation ecosystem that adapts to each
            plant's real needs, dramatically reducing water waste while boosting
            plant's health. By combining smart sensors, automation, and climate
            intelligence, it enables sustainable agriculture with minimal
            environmental impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#features">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all flex items-center gap-2 group cursor-pointer">
                WATER YOUR PLANTS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm"
          >
            <img
              src="/photos/Web_App_1.png"
              alt="AgricUp Dashboard Interface"
              className="rounded-xl shadow-2xl shadow-green-500/20 w-full"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
