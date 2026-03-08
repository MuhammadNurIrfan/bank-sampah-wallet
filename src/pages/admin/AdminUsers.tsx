import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockUsers = [
  { id: 1, name: "Eco Warrior", email: "eco@example.com", phone: "081234567890", rank: 142, token: 1250, status: "active" },
  { id: 2, name: "Green Hero", email: "green@example.com", phone: "081234567891", rank: 89, token: 2100, status: "active" },
  { id: 3, name: "Earth Lover", email: "earth@example.com", phone: "081234567892", rank: 256, token: 450, status: "active" },
  { id: 4, name: "Recycle King", email: "recycle@example.com", phone: "081234567893", rank: 12, token: 5800, status: "active" },
  { id: 5, name: "Plastic Fighter", email: "plastic@example.com", phone: "081234567894", rank: 567, token: 120, status: "suspended" },
];

const AdminUsers = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = mockUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Kelola Users</h1>
        <p className="text-muted-foreground mt-1">
          Daftar dan kelola akun pengguna Bank Sampah
        </p>
      </div>

      <Card className="border-border shadow-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Daftar User</CardTitle>
              <CardDescription>{filteredUsers.length} pengguna terdaftar</CardDescription>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari nama atau email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telepon</TableHead>
                <TableHead>Rank</TableHead>
                <TableHead>Token (SRC)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>#{user.rank}</TableCell>
                  <TableCell>{user.token.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "active" ? "default" : "destructive"
                      }
                    >
                      {user.status === "active" ? "Aktif" : "Suspended"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Lihat Detail</DropdownMenuItem>
                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                        <DropdownMenuItem>
                          {user.status === "active" ? "Suspend" : "Aktifkan"}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AdminUsers;
