import DashboardHero from "@/components/dashboard/dashboard-hero";
import Insights from "@/components/dashboard/Insights/insights";
import Orders from "@/components/dashboard/orders/orders";

export default function Dashboard() {
  return (
    <div className="h-full mt-20 p-2 sm:p-8">
      <div className="border rounded-xl p-4 sm:p-8 flex flex-col gap-14">
        <DashboardHero />
        <Insights />
        <Orders />
      </div>
    </div>
  );
}
