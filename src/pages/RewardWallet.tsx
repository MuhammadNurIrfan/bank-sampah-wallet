import { motion } from "framer-motion";
import { ArrowLeft, Coins, ArrowUpRight, ArrowDownRight, Smartphone, ShoppingBag, Wallet, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const redeemOptions = [
  { icon: Smartphone, label: "Phone Credit", desc: "50 SRC = Rp 10.000", color: "bg-secondary/10 text-secondary" },
  { icon: ShoppingBag, label: "Shopping Voucher", desc: "100 SRC = Rp 25.000", color: "bg-accent/10 text-accent-foreground" },
  { icon: Wallet, label: "E-Wallet", desc: "75 SRC = Rp 15.000", color: "bg-primary/10 text-primary" },
  { icon: Heart, label: "Donate", desc: "Any amount", color: "bg-destructive/10 text-destructive" },
];

const transactions = [
  { type: "earn", desc: "Plastic Recycling", amount: "+25", date: "Mar 5, 2026" },
  { type: "earn", desc: "Paper Recycling", amount: "+15", date: "Mar 4, 2026" },
  { type: "redeem", desc: "Phone Credit", amount: "-50", date: "Mar 2, 2026" },
  { type: "earn", desc: "Metal Recycling", amount: "+45", date: "Mar 1, 2026" },
  { type: "earn", desc: "Glass Recycling", amount: "+20", date: "Feb 28, 2026" },
];

const RewardWallet = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout noPadding className="flex flex-col pb-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="px-5 pt-6 pb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Reward Wallet</h1>
        </div>

        {/* Balance */}
        <div className="mx-5 mb-5 gradient-hero rounded-2xl p-5 text-primary-foreground shadow-elevated relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <Coins size={16} className="opacity-80" />
              <span className="text-xs font-medium opacity-80">SRC Token Balance</span>
            </div>
            <h1 className="text-3xl font-bold mb-1">1,250 SRC</h1>
            <p className="text-xs opacity-60">≈ Rp 250.000</p>
          </div>
        </div>

        {/* Redeem */}
        <div className="px-5 mb-5">
          <h3 className="text-sm font-bold text-foreground mb-3">Redeem Tokens</h3>
          <div className="grid grid-cols-2 gap-2.5">
            {redeemOptions.map(({ icon: Icon, label, desc, color }) => (
              <button key={label} className="bg-card border border-border rounded-xl p-3 text-left hover:shadow-card transition-all active:scale-[0.98]">
                <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-2`}>
                  <Icon size={20} />
                </div>
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="text-[10px] text-muted-foreground">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="px-5">
          <h3 className="text-sm font-bold text-foreground mb-3">Transaction History</h3>
          <div className="space-y-2">
            {transactions.map((tx, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-xl p-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  tx.type === "earn" ? "bg-primary/10" : "bg-destructive/10"
                }`}>
                  {tx.type === "earn" ? <ArrowUpRight size={16} className="text-primary" /> : <ArrowDownRight size={16} className="text-destructive" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{tx.desc}</p>
                  <p className="text-[10px] text-muted-foreground">{tx.date}</p>
                </div>
                <span className={`text-sm font-bold ${tx.type === "earn" ? "text-primary" : "text-destructive"}`}>
                  {tx.amount} SRC
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <BottomNav />
    </MobileLayout>
  );
};

export default RewardWallet;
