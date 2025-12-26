import Layout from "@/components/Layout";
import StatCard from "@/components/StatCard";
import RecentIssuedBooks from "@/components/RecentIssuedBooks";
import StatisticsChart from "@/components/StatisticsChart";
import GenrePieChart from "@/components/GenrePieChart";
import Notifications from "@/components/Notifications";
import QuickActions from "@/components/QuickActions";
import { BookOpen, CheckCircle, Users, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <Layout title="Dashboard">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          icon={BookOpen} 
          label="Total Books" 
          value={4320} 
          variant="blue" 
        />
        <StatCard 
          icon={CheckCircle} 
          label="Issued Books" 
          value={380} 
          variant="green" 
        />
        <StatCard 
          icon={Users} 
          label="Members" 
          value={1250} 
          variant="teal" 
        />
        <StatCard 
          icon={AlertTriangle} 
          label="Overdue Books" 
          value={26} 
          variant="red" 
        />
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <RecentIssuedBooks />
        <StatisticsChart />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GenrePieChart />
        <Notifications />
        <QuickActions />
      </div>
    </Layout>
  );
};

export default Index;
