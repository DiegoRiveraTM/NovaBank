import DashboardNav from "@/components/ui/DashboardNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <DashboardNav />
      <main className="p-6">{children}</main>
    </div>
  );
}
