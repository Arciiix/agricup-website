import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const GA_MEASUREMENT_ID = "G-V4G17FH8MN";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (consent === "false") {
      (window as any)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
    }

    if (consent === null) {
      // Show popup if no choice has been made
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    (window as any)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-zinc-900/95 backdrop-blur-md border border-green-500/20 p-6 rounded-2xl shadow-2xl shadow-black/50">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/10 rounded-xl shrink-0">
                <Cookie className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  We value your privacy
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  We use cookies to enhance your browsing experience, serve
                  personalized content, and analyze our traffic. By clicking "I
                  understand", you consent to our use of cookies.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-black font-medium py-2.5 px-4 rounded-xl transition-colors text-sm cursor-pointer"
                  >
                    I understand
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2.5 text-zinc-400 hover:text-white font-medium text-sm transition-colors cursor-pointer"
                  >
                    Decline
                  </button>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
