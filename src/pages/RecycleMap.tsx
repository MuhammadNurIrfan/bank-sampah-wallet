import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Navigation, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const filters = ["All", "Plastic", "Paper", "Metal", "Glass", "Organic"];

const stations = [
  { id: 1, name: "EcoStation Sudirman", address: "Jl. Sudirman No. 45", distance: "0.5 km", hours: "08:00 - 20:00", types: ["Plastic", "Paper", "Metal"] },
  { id: 2, name: "Green Point Kemang", address: "Jl. Kemang Raya No. 12", distance: "1.2 km", hours: "09:00 - 18:00", types: ["Plastic", "Glass", "Organic"] },
  { id: 3, name: "RecycleHub Senayan", address: "Jl. Asia Afrika No. 8", distance: "2.1 km", hours: "07:00 - 21:00", types: ["All Types"] },
];

const RecycleMap = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedStation, setSelectedStation] = useState(stations[0]);
  const navigate = useNavigate();

  return (
    <MobileLayout noPadding className="flex flex-col pb-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col">
        <div className="px-5 pt-6 pb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Recycling Stations</h1>
        </div>

        {/* Filters */}
        <div className="px-5 mb-4 flex gap-2 overflow-x-auto no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === f
                  ? "gradient-primary text-primary-foreground shadow-card"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mx-5 mb-4 h-52 rounded-2xl bg-muted border border-border relative overflow-hidden shadow-card">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="text-primary mx-auto mb-2 animate-float" />
              <p className="text-xs text-muted-foreground font-medium">Interactive Map View</p>
            </div>
          </div>
          {/* Fake map markers */}
          <div className="absolute top-8 left-12 w-6 h-6 gradient-primary rounded-full flex items-center justify-center shadow-card">
            <MapPin size={12} className="text-primary-foreground" />
          </div>
          <div className="absolute top-16 right-16 w-6 h-6 gradient-secondary rounded-full flex items-center justify-center shadow-card">
            <MapPin size={12} className="text-secondary-foreground" />
          </div>
          <div className="absolute bottom-12 left-1/3 w-6 h-6 gradient-primary rounded-full flex items-center justify-center shadow-card">
            <MapPin size={12} className="text-primary-foreground" />
          </div>
        </div>

        {/* Station List */}
        <div className="px-5 flex-1">
          <h3 className="text-sm font-bold text-foreground mb-3">Nearby Stations</h3>
          <div className="space-y-2.5">
            {stations.map((station) => (
              <button
                key={station.id}
                onClick={() => setSelectedStation(station)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  selectedStation.id === station.id
                    ? "bg-primary/5 border-primary/20 shadow-card"
                    : "bg-card border-border"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">{station.name}</p>
                    <p className="text-[11px] text-muted-foreground">{station.address}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Navigation size={10} /> {station.distance}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Clock size={10} /> {station.hours}
                      </span>
                    </div>
                    <div className="flex gap-1 mt-2">
                      {station.types.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[9px] font-semibold bg-muted rounded-full text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
      <BottomNav />
    </MobileLayout>
  );
};

export default RecycleMap;
