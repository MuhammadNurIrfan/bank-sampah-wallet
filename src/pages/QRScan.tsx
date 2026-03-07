import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, CheckCircle2, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";

const QRScan = () => {
  const [scanned, setScanned] = useState(false);
  const navigate = useNavigate();

  return (
    <MobileLayout noPadding className="flex flex-col bg-foreground">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col">
        {/* Header */}
        <div className="px-5 pt-6 pb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
            <ArrowLeft size={20} className="text-primary-foreground" />
          </button>
          <h1 className="text-lg font-bold text-primary-foreground">Scan QR Code</h1>
        </div>

        {!scanned ? (
          <>
            {/* Scanner Area */}
            <div className="flex-1 flex items-center justify-center px-10">
              <div className="relative w-full aspect-square max-w-[280px]">
                {/* Corners */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-2xl" />
                {/* Scan line */}
                <motion.div
                  animate={{ y: [0, 240, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-4 right-4 h-0.5 gradient-primary rounded-full shadow-glow"
                />
              </div>
            </div>

            <div className="px-5 pb-8 text-center">
              <p className="text-primary-foreground/80 text-sm mb-6">
                Point your camera at the recycling station QR code
              </p>
              <button
                onClick={() => setScanned(true)}
                className="w-full gradient-primary text-primary-foreground font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-elevated"
              >
                <Zap size={18} /> Simulate Scan
              </button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col items-center justify-center px-5 pb-8"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <CheckCircle2 size={48} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold text-primary-foreground mb-1">Station Verified!</h2>
            <p className="text-primary-foreground/60 text-sm mb-6">Recycling Station #RC-0042 • Jakarta Selatan</p>

            <div className="w-full bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Coins size={20} className="text-primary" />
                <span className="text-sm text-primary-foreground/80 font-medium">Reward Preview</span>
              </div>
              <p className="text-2xl font-bold text-primary-foreground">+25 SRC Tokens</p>
              <p className="text-xs text-primary-foreground/50 mt-1">For 2.5 kg of Plastic</p>
            </div>

            <button
              onClick={() => navigate("/home")}
              className="w-full gradient-primary text-primary-foreground font-semibold py-4 rounded-2xl shadow-elevated"
            >
              Continue
            </button>
          </motion.div>
        )}
      </motion.div>
    </MobileLayout>
  );
};

export default QRScan;
