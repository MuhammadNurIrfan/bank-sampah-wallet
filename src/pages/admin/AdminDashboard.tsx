import { motion } from "framer-motion";
import {
  Users,
  Recycle,
  Coins,
  MapPin,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Users",
    value: "12,450",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Transaksi Hari Ini",
    value: "342",
    change: "+8.2%",
    trend: "up",
    icon: Recycle,
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "SRC Beredar",
    value: "2.4M",
    change: "-2.1%",
    trend: "down",
    icon: Coins,
    color: "bg-accent/10 text-accent-foreground",
  },
  {
    title: "Stasiun Aktif",
    value: "28",
    change: "+3",
    trend: "up",
    icon: MapPin,
    color: "bg-waste-glass/10 text-waste-glass",
  },
];

const recentTransactions = [
  { id: 1, user: "Eco Warrior", type: "earn", amount: "+25 SRC", item: "Plastic", time: "2 menit lalu" },
  { id: 2, user: "Green Hero", type: "earn", amount: "+18 SRC", item: "Paper", time: "5 menit lalu" },
  { id: 3, user: "Earth Lover", type: "redeem", amount: "-50 SRC", item: "Pulsa", time: "12 menit lalu" },
  { id: 4, user: "Recycle King", type: "earn", amount: "+42 SRC", item: "Metal", time: "18 menit lalu" },
];

const AdminDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Ringkasan performa Bank Sampah
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ title, value, change, trend, icon: Icon, color }) => (
          <Card key={title} className="border-border shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${color}`}>
                <Icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{value}</div>
              <p className="flex items-center gap-1 text-xs mt-1">
                {trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-primary" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-destructive" />
                )}
                <span className={trend === "up" ? "text-primary" : "text-destructive"}>
                  {change}
                </span>
                <span className="text-muted-foreground">vs kemarin</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Transactions */}
      <Card className="border-border shadow-card">
        <CardHeader>
          <CardTitle>Transaksi Terbaru</CardTitle>
          <CardDescription>
            Aktivitas daur ulang dan redeem rewards terakhir
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      tx.type === "earn" ? "bg-primary/10" : "bg-accent/10"
                    }`}
                  >
                    {tx.type === "earn" ? (
                      <Recycle className="h-5 w-5 text-primary" />
                    ) : (
                      <Coins className="h-5 w-5 text-accent-foreground" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{tx.user}</p>
                    <p className="text-xs text-muted-foreground">
                      {tx.item} • {tx.time}
                    </p>
                  </div>
                </div>
                <span
                  className={`font-bold ${
                    tx.type === "earn" ? "text-primary" : "text-destructive"
                  }`}
                >
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AdminDashboard;
