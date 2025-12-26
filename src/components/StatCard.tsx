import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  variant: 'blue' | 'green' | 'teal' | 'red';
}

const variantStyles = {
  blue: 'bg-stat-blue',
  green: 'bg-stat-green',
  teal: 'bg-stat-teal',
  red: 'bg-stat-red',
};

const StatCard = ({ icon: Icon, label, value, variant }: StatCardProps) => {
  return (
    <div className={`${variantStyles[variant]} rounded-lg p-4 flex items-center gap-4 min-w-[180px]`}>
      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-white/90 text-sm font-medium">{label}</p>
        <p className="text-white text-2xl font-bold">{value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default StatCard;
