import { motion } from "framer-motion";
import { MapPin, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockStations = [
  { id: 1, name: "Bank Sampah Jakarta Selatan", address: "Jl. Sudirman No. 123", capacity: "500 kg/hari", status: "active" },
  { id: 2, name: "Bank Sampah Bandung", address: "Jl. Dago No. 45", capacity: "350 kg/hari", status: "active" },
  { id: 3, name: "Bank Sampah Surabaya", address: "Jl. Thamrin No. 78", capacity: "450 kg/hari", status: "maintenance" },
  { id: 4, name: "Bank Sampah Yogyakarta", address: "Jl. Malioboro No. 12", capacity: "280 kg/hari", status: "active" },
];

const AdminStations = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Stasiun Daur Ulang</h1>
          <p className="text-muted-foreground mt-1">
            Kelola lokasi stasiun Bank Sampah
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Tambah Stasiun
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {mockStations.map((station) => (
          <Card key={station.id} className="border-border shadow-card">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{station.name}</CardTitle>
                    <CardDescription className="mt-1">{station.address}</CardDescription>
                  </div>
                </div>
                <Badge
                  variant={
                    station.status === "active" ? "default" : "secondary"
                  }
                >
                  {station.status === "active" ? "Aktif" : "Maintenance"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Kapasitas: <span className="font-medium text-foreground">{station.capacity}</span>
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="ghost" size="sm">
                  Lihat Detail
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default AdminStations;
