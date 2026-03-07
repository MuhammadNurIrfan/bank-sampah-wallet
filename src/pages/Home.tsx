import { motion } from "framer-motion";
import { Bell, Coins, Leaf, TrendingUp, Users, QrCode, Recycle, MapPin, ShoppingBag, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const quickActions = [
  { icon: QrCode, label: "Scan QR", path: "/scan", color: "bg-primary/10 text-primary" },
  { icon: Recycle, label: "Submit", path: "/recycle", color: "bg-secondary/10 text-secondary" },
  { icon: MapPin, label: "Stations", path: "/map", color: "bg-waste-glass/10 text-waste-glass" },
  { icon: ShoppingBag, label: "Rewards", path: "/wallet", color: "bg-accent/10 text-accent-foreground" },
];

const recentActivity = [
  { type: "earn", desc: "Plastic Recycling", amount: "+25 SRC", time: "2h ago", icon: Recycle },
  { type: "earn", desc: "Paper Recycling", amount: "+15 SRC", time: "1d ago", icon: Recycle },
  { type: "redeem", desc: "Phone Credit", amount: "-50 SRC", time: "3d ago", icon: ShoppingBag },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout noPadding className="pb-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
        {/* Header */}
        <div className="px-5 pt-6 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-xl">🌱</div>
            <div>
              <p className="text-xs text-muted-foreground">Good morning</p>
              <h2 className="text-base font-bold text-foreground">Eco Warrior</h2>
            </div>
          </div>
          <button className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center relative">
            <Bell size={20} className="text-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-destructive rounded-full border-2 border-background" />
          </button>
        </div>

        {/* Balance Card */}
        <div className="mx-5 mb-5">
          <div className="gradient-hero rounded-2xl p-5 text-primary-foreground shadow-elevated relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <Coins size={16} className="opacity-80" />
                <span className="text-xs font-medium opacity-80">Token Balance</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">1,250 SRC</h1>
              <button
                onClick={() => navigate("/wallet")}
                className="bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-semibold text-sm py-2.5 px-5 rounded-xl hover:bg-primary-foreground/30 transition-colors active:scale-[0.98]"
              >
                Redeem Rewards
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-5 mb-5 grid grid-cols-3 gap-3">
          {[
            { icon: Recycle, label: "Recycled", value: "45.2 kg", color: "text-primary" },
            { icon: Leaf, label: "CO₂ Saved", value: "12.8 kg", color: "text-waste-glass" },
            { icon: Users, label: "Rank", value: "#142", color: "text-secondary" },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-3 shadow-card text-center">
              <Icon size={20} className={`${color} mx-auto mb-1.5`} />
              <p className="text-sm font-bold text-foreground">{value}</p>
              <p className="text-[10px] text-muted-foreground font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="px-5 mb-5">
          <h3 className="text-sm font-bold text-foreground mb-3">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map(({ icon: Icon, label, path, color }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <Icon size={22} />
                </div>
                <span className="text-[11px] font-semibold text-foreground">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="px-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-foreground">Recent Activity</h3>
            <button className="text-xs font-medium text-primary">See All</button>
          </div>
          <div className="space-y-2.5">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-xl p-3 shadow-card">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  item.type === "earn" ? "bg-primary/10" : "bg-accent/10"
                }`}>
                  <item.icon size={18} className={item.type === "earn" ? "text-primary" : "text-accent-foreground"} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{item.desc}</p>
                  <p className="text-[11px] text-muted-foreground">{item.time}</p>
                </div>
                <div className="flex items-center gap-1">
                  {item.type === "earn" ? (
                    <ArrowUpRight size={14} className="text-primary" />
                  ) : (
                    <ArrowDownRight size={14} className="text-destructive" />
                  )}
                  <span className={`text-sm font-bold ${item.type === "earn" ? "text-primary" : "text-destructive"}`}>
                    {item.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <BottomNav />
    </MobileLayout>
  );
};

export default Home;
