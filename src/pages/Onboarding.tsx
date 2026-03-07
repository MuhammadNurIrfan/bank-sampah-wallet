import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Recycle, Coins, TreePine, ArrowRight } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";

const slides = [
  {
    icon: Recycle,
    color: "from-primary to-primary/80",
    bgAccent: "bg-primary/10",
    title: "Recycle Your Waste",
    description: "Drop off your recyclable waste at nearby stations and contribute to a cleaner planet.",
  },
  {
    icon: Coins,
    color: "from-accent to-accent/80",
    bgAccent: "bg-accent/10",
    title: "Earn Digital Tokens",
    description: "Get rewarded with blockchain-verified tokens for every recycling contribution you make.",
  },
  {
    icon: TreePine,
    color: "from-secondary to-secondary/80",
    bgAccent: "bg-secondary/10",
    title: "Track Your Impact",
    description: "See your real environmental impact — CO₂ saved, plastic diverted, and trees preserved.",
  },
];

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else navigate("/login");
  };

  return (
    <MobileLayout className="flex flex-col justify-between">
      <div className="flex justify-end pt-2">
        <button
          onClick={() => navigate("/login")}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Skip
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col items-center justify-center text-center gap-8 px-4"
        >
          <div className={`w-40 h-40 rounded-[2.5rem] ${slides[current].bgAccent} flex items-center justify-center animate-float`}>
            <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${slides[current].color} flex items-center justify-center shadow-elevated`}>
              {(() => {
                const Icon = slides[current].icon;
                return <Icon size={48} className="text-primary-foreground" />;
              })()}
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-foreground">{slides[current].title}</h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-[280px] mx-auto">
              {slides[current].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col items-center gap-6 pb-8">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-full gradient-primary text-primary-foreground font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-elevated hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          {current === slides.length - 1 ? "Get Started" : "Next"}
          <ArrowRight size={18} />
        </button>
      </div>
    </MobileLayout>
  );
};

export default Onboarding;
