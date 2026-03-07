import { motion } from "framer-motion";
import { ArrowLeft, Recycle, Leaf, Droplets, TreePine, TrendingUp, Trophy, Medal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const stats = [
  { icon: Recycle, label: "Total Recycled", value: "45.2 kg", color: "text-primary", bg: "bg-primary/10" },
  { icon: Droplets, label: "Plastic Saved", value: "28.5 kg", color: "text-waste-plastic", bg: "bg-waste-plastic/10" },
  { icon: Leaf, label: "CO₂ Reduced", value: "12.8 kg", color: "text-waste-glass", bg: "bg-waste-glass/10" },
  { icon: TreePine, label: "Trees Saved", value: "3 trees", color: "text-waste-organic", bg: "bg-waste-organic/10" },
];

const weeklyData = [
  { day: "Mon", kg: 2.5 }, { day: "Tue", kg: 1.8 }, { day: "Wed", kg: 3.2 },
  { day: "Thu", kg: 0.5 }, { day: "Fri", kg: 4.1 }, { day: "Sat", kg: 2.0 }, { day: "Sun", kg: 1.2 },
];
const maxKg = Math.max(...weeklyData.map(d => d.kg));

const wasteBreakdown = [
  { label: "Plastic", pct: 45, color: "bg-waste-plastic" },
  { label: "Paper", pct: 25, color: "bg-waste-paper" },
  { label: "Metal", pct: 15, color: "bg-waste-metal" },
  { label: "Glass", pct: 10, color: "bg-waste-glass" },
  { label: "Organic", pct: 5, color: "bg-waste-organic" },
];

const leaderboard = [
  { rank: 1, name: "EcoHero99", kg: "120.5", medal: "🥇" },
  { rank: 2, name: "GreenWarrior", kg: "98.2", medal: "🥈" },
  { rank: 3, name: "RecycleKing", kg: "87.1", medal: "🥉" },
  { rank: 142, name: "You", kg: "45.2", medal: "🌱" },
];

const ImpactDashboard = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout noPadding className="flex flex-col pb-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="px-5 pt-6 pb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Environmental Impact</h1>
        </div>

        {/* Stats Grid */}
        <div className="px-5 mb-5 grid grid-cols-2 gap-2.5">
          {stats.map(({ icon: Icon, label, value, color, bg }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-3.5 shadow-card">
              <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center mb-2`}>
                <Icon size={18} className={color} />
              </div>
              <p className="text-lg font-bold text-foreground">{value}</p>
              <p className="text-[10px] text-muted-foreground font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Weekly Chart */}
        <div className="px-5 mb-5">
          <h3 className="text-sm font-bold text-foreground mb-3">Weekly Activity</h3>
          <div className="bg-card border border-border rounded-xl p-4 shadow-card">
            <div className="flex items-end justify-between gap-2 h-32">
              {weeklyData.map(({ day, kg }) => (
                <div key={day} className="flex flex-col items-center gap-1 flex-1">
                  <span className="text-[9px] font-bold text-primary">{kg}</span>
                  <div className="w-full rounded-t-lg gradient-primary" style={{ height: `${(kg / maxKg) * 80}px` }} />
                  <span className="text-[10px] text-muted-foreground font-medium">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Waste Breakdown */}
        <div className="px-5 mb-5">
          <h3 className="text-sm font-bold text-foreground mb-3">Waste Breakdown</h3>
          <div className="bg-card border border-border rounded-xl p-4 shadow-card">
            <div className="flex h-3 rounded-full overflow-hidden mb-3">
              {wasteBreakdown.map(({ color, pct }) => (
                <div key={color} className={`${color}`} style={{ width: `${pct}%` }} />
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {wasteBreakdown.map(({ label, pct, color }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                  <span className="text-[10px] text-muted-foreground font-medium">{label} {pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="px-5">
          <div className="flex items-center gap-2 mb-3">
            <Trophy size={16} className="text-gold" />
            <h3 className="text-sm font-bold text-foreground">Community Leaderboard</h3>
          </div>
          <div className="space-y-2">
            {leaderboard.map((user) => (
              <div key={user.rank} className={`flex items-center gap-3 p-3 rounded-xl border ${
                user.name === "You" ? "bg-primary/5 border-primary/20" : "bg-card border-border"
              }`}>
                <span className="text-lg w-8 text-center">{user.medal}</span>
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${user.name === "You" ? "text-primary" : "text-foreground"}`}>
                    {user.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground">{user.kg} kg recycled</p>
                </div>
                <span className="text-xs font-bold text-muted-foreground">#{user.rank}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <BottomNav />
    </MobileLayout>
  );
};

export default ImpactDashboard;
