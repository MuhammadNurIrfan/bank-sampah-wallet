import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, ArrowRight, MapPin } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";

const avatars = ["🌱", "🌿", "🍃", "🌎", "♻️", "🌻"];

const ProfileSetup = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const navigate = useNavigate();

  return (
    <MobileLayout className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col pt-8"
      >
        <h1 className="text-2xl font-bold text-foreground mb-1">Create Your Profile</h1>
        <p className="text-muted-foreground text-sm mb-8">Tell us about yourself to personalize your experience</p>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-4xl mb-4 border-2 border-primary/20 shadow-card">
            {avatars[selectedAvatar]}
          </div>
          <div className="flex gap-2">
            {avatars.map((a, i) => (
              <button
                key={i}
                onClick={() => setSelectedAvatar(i)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all ${
                  i === selectedAvatar ? "bg-primary/10 ring-2 ring-primary" : "bg-muted"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3.5 text-sm bg-card border border-border rounded-xl outline-none focus:ring-2 focus:ring-primary/30 transition-all text-foreground placeholder:text-muted-foreground/60"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">City</label>
            <div className="flex items-center border border-border rounded-xl bg-card focus-within:ring-2 focus-within:ring-primary/30 transition-all">
              <MapPin size={16} className="ml-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-1 px-3 py-3.5 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60"
              />
            </div>
          </div>
        </div>

        <div className="mt-auto pb-8 space-y-3">
          <button
            onClick={() => navigate("/home")}
            className="w-full gradient-primary text-primary-foreground font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-elevated hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            Complete Setup <ArrowRight size={18} />
          </button>
          <button
            onClick={() => navigate("/home")}
            className="w-full text-muted-foreground font-medium py-3 text-sm hover:text-foreground transition-colors"
          >
            Skip for now
          </button>
        </div>
      </motion.div>
    </MobileLayout>
  );
};

export default ProfileSetup;
