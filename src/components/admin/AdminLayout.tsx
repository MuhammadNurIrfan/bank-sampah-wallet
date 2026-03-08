import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  Recycle,
  MapPin,
  Gift,
  Settings,
  Leaf,
  Home,
  LogOut,
} from "lucide-react";
import { clearAdminSession } from "@/lib/admin-auth";

const adminNavItems = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/users", icon: Users, label: "Users" },
  { to: "/admin/transactions", icon: Recycle, label: "Transaksi" },
  { to: "/admin/stations", icon: MapPin, label: "Stasiun" },
  { to: "/admin/rewards", icon: Gift, label: "Rewards" },
];

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAdminSession();
    navigate("/login", { replace: true });
  };

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="flex items-center gap-2 px-2 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="font-bold text-sm text-sidebar-foreground">Bank Sampah</span>
              <span className="text-xs text-sidebar-foreground/70">Super Admin</span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminNavItems.map(({ to, icon: Icon, label }) => {
                  const isActive =
                    location.pathname === to ||
                    (to !== "/admin" && location.pathname.startsWith(to + "/"));
                  return (
                    <SidebarMenuItem key={to}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <NavLink to={to} end={to === "/admin"}>
                          <Icon className="h-4 w-4" />
                          <span>{label}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>Lainnya</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <NavLink to="/admin/settings" end>
                      <Settings className="h-4 w-4" />
                      <span>Pengaturan</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-sidebar-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink to="/home">
                  <Home className="h-4 w-4" />
                  <span>Kembali ke App</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={handleLogout} className="text-destructive hover:text-destructive">
                <LogOut className="h-4 w-4" />
                <span>Logout Admin</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex-1" />
        </header>

        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
