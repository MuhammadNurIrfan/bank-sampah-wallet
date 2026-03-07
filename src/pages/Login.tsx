import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Smartphone, Wallet, Leaf, ArrowRight } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [tab, setTab] = useState<"phone" | "wallet">("phone");
  const navigate = useNavigate();

  return (
    <MobileLayout className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col pt-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-card">
            <Leaf size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Sampah Reward Chain</h1>
            <p className="text-xs text-muted-foreground">Blockchain-Powered Recycling</p>
          </div>
        </div>

        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-1">Welcome back 👋</h2>
          <p className="text-muted-foreground text-sm">Sign in to start recycling and earning rewards</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-muted rounded-xl p-1 mb-6">
          <button
            onClick={() => setTab("phone")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              tab === "phone" ? "bg-card text-foreground shadow-card" : "text-muted-foreground"
            }`}
          >
            <Smartphone size={16} /> Phone
          </button>
          <button
            onClick={() => setTab("wallet")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              tab === "wallet" ? "bg-card text-foreground shadow-card" : "text-muted-foreground"
            }`}
          >
            <Wallet size={16} /> Wallet
          </button>
        </div>

        {tab === "phone" ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
              <div className="flex items-center border border-border rounded-xl overflow-hidden bg-card focus-within:ring-2 focus-within:ring-primary/30 transition-all">
                <span className="px-3 py-3.5 text-sm font-medium text-muted-foreground bg-muted border-r border-border">+62</span>
                <input
                  type="tel"
                  placeholder="812 3456 7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-3 py-3.5 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60"
                />
              </div>
            </div>
            <button
              onClick={() => navigate("/profile-setup")}
              className="w-full gradient-primary text-primary-foreground font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-elevated hover:opacity-90 transition-opacity active:scale-[0.98]"
            >
              Continue <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {["MetaMask", "WalletConnect", "Trust Wallet"].map((wallet) => (
              <button
                key={wallet}
                onClick={() => navigate("/profile-setup")}
                className="w-full flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-card transition-all active:scale-[0.98]"
              >
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <Wallet size={20} className="text-primary" />
                </div>
                <span className="font-semibold text-foreground text-sm">{wallet}</span>
                <ArrowRight size={16} className="ml-auto text-muted-foreground" />
              </button>
            ))}
          </div>
        )}

        <p className="text-center text-xs text-muted-foreground mt-8">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </MobileLayout>
  );
};

export default Login;
