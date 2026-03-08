import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockTransactions = [
  { id: "TXN001", user: "Eco Warrior", type: "recycle", item: "Plastic 2kg", amount: "+25 SRC", date: "2025-03-07 10:30" },
  { id: "TXN002", user: "Green Hero", type: "recycle", item: "Paper 1.5kg", amount: "+15 SRC", date: "2025-03-07 10:25" },
  { id: "TXN003", user: "Earth Lover", type: "redeem", item: "Pulsa 10k", amount: "-50 SRC", date: "2025-03-07 10:15" },
  { id: "TXN004", user: "Recycle King", type: "recycle", item: "Metal 3kg", amount: "+42 SRC", date: "2025-03-07 10:00" },
  { id: "TXN005", user: "Plastic Fighter", type: "recycle", item: "Glass 1kg", amount: "+8 SRC", date: "2025-03-07 09:45" },
];

type Transaction = (typeof mockTransactions)[number];

const TransactionsTable = ({ data }: { data: Transaction[] }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>User</TableHead>
        <TableHead>Tipe</TableHead>
        <TableHead>Detail</TableHead>
        <TableHead>Jumlah</TableHead>
        <TableHead>Tanggal</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((tx) => (
        <TableRow key={tx.id}>
          <TableCell className="font-mono text-xs">{tx.id}</TableCell>
          <TableCell className="font-medium">{tx.user}</TableCell>
          <TableCell>
            <Badge variant={tx.type === "recycle" ? "default" : "secondary"}>
              {tx.type === "recycle" ? "Daur Ulang" : "Redeem"}
            </Badge>
          </TableCell>
          <TableCell>{tx.item}</TableCell>
          <TableCell
            className={`font-bold ${
              tx.type === "recycle" ? "text-primary" : "text-destructive"
            }`}
          >
            {tx.amount}
          </TableCell>
          <TableCell className="text-muted-foreground text-sm">{tx.date}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const AdminTransactions = () => {
  const [filter, setFilter] = useState<"all" | "recycle" | "redeem">("all");

  const filteredTx = mockTransactions.filter((tx) => {
    if (filter === "all") return true;
    return tx.type === filter;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Transaksi</h1>
        <p className="text-muted-foreground mt-1">
          Riwayat transaksi daur ulang dan redeem rewards
        </p>
      </div>

      <Card className="border-border shadow-card">
        <CardHeader>
          <CardTitle>Riwayat Transaksi</CardTitle>
          <CardDescription>
            Semua transaksi yang terjadi di platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">Semua</TabsTrigger>
              <TabsTrigger value="recycle">Daur Ulang</TabsTrigger>
              <TabsTrigger value="redeem">Redeem</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <TransactionsTable data={filteredTx} />
            </TabsContent>
            <TabsContent value="recycle" className="mt-0">
              <TransactionsTable data={filteredTx} />
            </TabsContent>
            <TabsContent value="redeem" className="mt-0">
              <TransactionsTable data={filteredTx} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AdminTransactions;
