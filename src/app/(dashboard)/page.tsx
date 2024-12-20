import DashboardHero from "@/components/dashboard/dashboard-hero";
import Insights from "@/components/dashboard/Insights/insights";
import Orders from "@/components/dashboard/orders/orders";

export default function Dashboard() {
  return (
    <div className="h-full mt-14 p-8">
      <div className="border rounded-xl px-4 py-6 flex flex-col gap-14">
        <DashboardHero />
        <Insights />
        <Orders />
      </div>
    </div>
  );
}
