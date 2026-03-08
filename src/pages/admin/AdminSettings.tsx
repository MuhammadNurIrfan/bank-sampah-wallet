import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AdminSettings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-2xl"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Pengaturan</h1>
        <p className="text-muted-foreground mt-1">
          Konfigurasi sistem dan preferensi admin
        </p>
      </div>

      <Card className="border-border shadow-card">
        <CardHeader>
          <CardTitle>Konfigurasi Token</CardTitle>
          <CardDescription>
            Setel nilai konversi SRC per kg sampah
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="plastic">Plastic (SRC/kg)</Label>
            <Input id="plastic" type="number" defaultValue="12" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="paper">Paper (SRC/kg)</Label>
            <Input id="paper" type="number" defaultValue="10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="metal">Metal (SRC/kg)</Label>
            <Input id="metal" type="number" defaultValue="14" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="glass">Glass (SRC/kg)</Label>
            <Input id="glass" type="number" defaultValue="8" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border shadow-card">
        <CardHeader>
          <CardTitle>Notifikasi</CardTitle>
          <CardDescription>
            Atur notifikasi untuk admin
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Notifikasi transaksi baru</p>
              <p className="text-sm text-muted-foreground">
                Kirim notifikasi saat ada transaksi baru
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Laporan harian</p>
              <p className="text-sm text-muted-foreground">
                Kirim laporan ringkasan harian
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border shadow-card">
        <CardHeader>
          <CardTitle>Kebijakan Admin</CardTitle>
          <CardDescription>
            Pengaturan keamanan dan akses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive">Ganti Password Admin</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AdminSettings;
