import { motion } from "framer-motion";
import { ArrowLeft, Coins, Recycle, Leaf, ChevronRight, Receipt, Gift, Settings, HelpCircle, LogOut, Flame, Star, Award, Shield, Zap, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const badges = [
  { emoji: "🌱", label: "First Recycle", earned: true },
  { emoji: "🔥", label: "7-Day Streak", earned: true },
  { emoji: "⭐", label: "50 kg Club", earned: false },
  { emoji: "🏆", label: "Top 100", earned: false },
  { emoji: "💎", label: "1000 SRC", earned: true },
  { emoji: "🌍", label: "Eco Leader", earned: false },
];

const menuItems = [
  { icon: Receipt, label: "Transaction History", path: "/wallet" },
  { icon: Gift, label: "Rewards", path: "/wallet" },
  { icon: Leaf, label: "Impact Dashboard", path: "/impact" },
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help & Support" },
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout noPadding className="flex flex-col pb-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="px-5 pt-6 pb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Profile</h1>
        </div>

        {/* Profile Card */}
        <div className="mx-5 mb-5 bg-card border border-border rounded-2xl p-5 shadow-card text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl mx-auto mb-3 border-2 border-primary/20">
            🌱
          </div>
          <h2 className="text-lg font-bold text-foreground">Eco Warrior</h2>
          <p className="text-xs text-muted-foreground mb-4">Jakarta • Member since 2024</p>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-muted rounded-xl p-2.5">
              <Coins size={16} className="text-primary mx-auto mb-1" />
              <p className="text-sm font-bold text-foreground">1,250</p>
              <p className="text-[9px] text-muted-foreground font-medium">SRC Tokens</p>
            </div>
            <div className="bg-muted rounded-xl p-2.5">
              <Recycle size={16} className="text-waste-glass mx-auto mb-1" />
              <p className="text-sm font-bold text-foreground">45.2</p>
              <p className="text-[9px] text-muted-foreground font-medium">kg Recycled</p>
            </div>
            <div className="bg-muted rounded-xl p-2.5">
              <Flame size={16} className="text-destructive mx-auto mb-1" />
              <p className="text-sm font-bold text-foreground">12</p>
              <p className="text-[9px] text-muted-foreground font-medium">Day Streak</p>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="px-5 mb-5">
          <h3 className="text-sm font-bold text-foreground mb-3">Achievements</h3>
          <div className="grid grid-cols-3 gap-2">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${
                  badge.earned
                    ? "bg-primary/5 border-primary/20"
                    : "bg-muted/50 border-border opacity-50"
                }`}
              >
                <span className="text-2xl">{badge.emoji}</span>
                <span className="text-[9px] font-semibold text-foreground text-center leading-tight">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Streak Progress */}
        <div className="px-5 mb-5">
          <div className="bg-card border border-border rounded-xl p-4 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Flame size={16} className="text-destructive" />
                <span className="text-sm font-bold text-foreground">12 Day Streak!</span>
              </div>
              <span className="text-[10px] text-muted-foreground font-medium">18 more for badge</span>
            </div>
            <div className="h-2.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full gradient-primary rounded-full" style={{ width: "40%" }} />
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="px-5">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
            {menuItems.map(({ icon: Icon, label, path }, i) => (
              <button
                key={label}
                onClick={() => path && navigate(path)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 hover:bg-muted/50 transition-colors ${
                  i < menuItems.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <Icon size={18} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground flex-1 text-left">{label}</span>
                <ChevronRight size={16} className="text-muted-foreground" />
              </button>
            ))}
          </div>

          <button className="w-full flex items-center justify-center gap-2 mt-4 py-3 text-destructive text-sm font-medium">
            <LogOut size={16} /> Log Out
          </button>
        </div>
      </motion.div>
      <BottomNav />
    </MobileLayout>
  );
};

export default Profile;
