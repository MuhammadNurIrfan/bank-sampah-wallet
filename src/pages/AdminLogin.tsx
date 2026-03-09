import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import { setAdminSession } from "@/lib/admin-auth";

const ADMIN_PIN = "12345678";

const AdminLogin = () => {
  const [adminPin, setAdminPin] = useState("");
  const [adminError, setAdminError] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    setAdminError("");
    if (adminPin !== ADMIN_PIN) {
      setAdminError("PIN salah. Masukkan PIN yang benar.");
      return;
    }
    setAdminSession();
    navigate("/admin", { replace: true });
  };

  return (
    <MobileLayout className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col pt-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-6"
        >
          <ArrowLeft size={20} className="text-foreground" />
        </button>

        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
            <Shield size={32} className="text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Super Admin</h1>
          <p className="text-muted-foreground text-sm max-w-[280px]">
            Masuk ke panel admin untuk mengelola users, transaksi, stasiun, dan rewards Bank Sampah.
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Masukkan PIN Admin
            </label>
            <input
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={8}
              placeholder="PIN 8 digit"
              value={adminPin}
              onChange={(e) => {
                setAdminPin(e.target.value.replace(/\D/g, ""));
                setAdminError("");
              }}
              className="w-full px-4 py-3.5 text-base border border-border rounded-xl bg-card outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground text-center tracking-[0.3em]"
            />
          </div>
          {adminError && (
            <p className="text-sm text-destructive font-medium text-center">{adminError}</p>
          )}
          <button
            onClick={handleAdminLogin}
            className="w-full flex items-center justify-center gap-2 py-4 px-4 gradient-primary text-primary-foreground font-semibold rounded-2xl shadow-elevated hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            <Shield size={18} />
            Masuk ke Panel Admin
          </button>
        </div>
      </motion.div>
    </MobileLayout>
  );
};

export default AdminLogin;
