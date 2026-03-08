import { motion } from "framer-motion";
import { Gift, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockRewards = [
  { id: 1, name: "Pulsa 10k", cost: 50, type: "pulsa", status: "active", stock: 100 },
  { id: 2, name: "Voucher Grab 25k", cost: 120, type: "voucher", status: "active", stock: 50 },
  { id: 3, name: "Tas Daur Ulang", cost: 500, type: "merchandise", status: "active", stock: 20 },
  { id: 4, name: "Dompet Eco", cost: 350, type: "merchandise", status: "out", stock: 0 },
];

const AdminRewards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Kelola Rewards</h1>
          <p className="text-muted-foreground mt-1">
            Konfigurasi hadiah yang bisa ditukar dengan SRC
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Tambah Reward
        </Button>
      </div>

      <Card className="border-border shadow-card">
        <CardHeader>
          <CardTitle>Daftar Reward</CardTitle>
          <CardDescription>
            {mockRewards.length} reward tersedia di katalog
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRewards.map((reward) => (
              <div
                key={reward.id}
                className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Gift className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{reward.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {reward.cost} SRC • Stok: {reward.stock}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{reward.type}</Badge>
                  <Badge variant={reward.status === "active" ? "default" : "secondary"}>
                    {reward.status === "active" ? "Aktif" : "Habis"}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AdminRewards;
