import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, Coins, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const categories = [
  { id: "plastic", label: "Plastic", emoji: "🧴", color: "bg-waste-plastic/10 border-waste-plastic/30 text-waste-plastic", rate: 10 },
  { id: "paper", label: "Paper", emoji: "📄", color: "bg-waste-paper/10 border-waste-paper/30 text-waste-paper", rate: 5 },
  { id: "metal", label: "Metal", emoji: "🥫", color: "bg-waste-metal/10 border-waste-metal/30 text-waste-metal", rate: 15 },
  { id: "glass", label: "Glass", emoji: "🫙", color: "bg-waste-glass/10 border-waste-glass/30 text-waste-glass", rate: 8 },
  { id: "organic", label: "Organic", emoji: "🍂", color: "bg-waste-organic/10 border-waste-organic/30 text-waste-organic", rate: 3 },
];

const RecycleSubmit = () => {
  const [selected, setSelected] = useState("plastic");
  const [weight, setWeight] = useState(1.0);
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === selected)!;
  const reward = Math.round(weight * category.rate);

  return (
    <MobileLayout className="flex flex-col pb-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Submit Waste</h1>
        </div>

        <h3 className="text-sm font-bold text-foreground mb-3">Select Category</h3>
        <div className="grid grid-cols-5 gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelected(cat.id)}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all ${
                selected === cat.id ? cat.color + " border-current" : "bg-card border-border"
              }`}
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className="text-[10px] font-semibold">{cat.label}</span>
            </button>
          ))}
        </div>

        <h3 className="text-sm font-bold text-foreground mb-3">Weight (kg)</h3>
        <div className="flex items-center justify-center gap-6 bg-card border border-border rounded-2xl p-6 mb-6 shadow-card">
          <button
            onClick={() => setWeight(Math.max(0.5, weight - 0.5))}
            className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
          >
            <Minus size={20} className="text-foreground" />
          </button>
          <div className="text-center">
            <span className="text-4xl font-bold text-foreground">{weight.toFixed(1)}</span>
            <span className="text-lg text-muted-foreground ml-1">kg</span>
          </div>
          <button
            onClick={() => setWeight(weight + 0.5)}
            className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-card"
          >
            <Plus size={20} className="text-primary-foreground" />
          </button>
        </div>

        {/* Reward Preview */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-card">
            <Coins size={22} className="text-primary-foreground" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium">Estimated Reward</p>
            <p className="text-xl font-bold text-primary">{reward} SRC Tokens</p>
          </div>
        </div>

        <div className="mt-auto">
          <button className="w-full gradient-primary text-primary-foreground font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-elevated hover:opacity-90 transition-opacity active:scale-[0.98]">
            <Send size={18} /> Submit Waste
          </button>
        </div>
      </motion.div>
      <BottomNav />
    </MobileLayout>
  );
};

export default RecycleSubmit;
