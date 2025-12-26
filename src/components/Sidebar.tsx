import { 
  Home, 
  BookOpen, 
  ArrowLeftRight, 
  Users, 
  FileText, 
  Settings, 
  LogOut,
  Library
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const NavItem = ({ icon, label, to, active }: NavItemProps) => (
  <Link 
    to={to}
    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors rounded-md mx-2 ${
      active 
        ? 'bg-sidebar-accent text-sidebar-foreground' 
        : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-64 bg-sidebar h-screen flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-6 border-b border-sidebar-border">
        <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
          <Library className="w-6 h-6 text-sidebar-primary-foreground" />
        </div>
        <div>
          <h1 className="text-sidebar-foreground font-bold text-lg leading-tight">Library</h1>
          <p className="text-sidebar-foreground/70 text-sm">Management System</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <NavItem 
          icon={<Home className="w-5 h-5" />} 
          label="Dashboard" 
          to="/"
          active={currentPath === "/"} 
        />
        <NavItem 
          icon={<BookOpen className="w-5 h-5" />} 
          label="Manage Books" 
          to="/books"
          active={currentPath === "/books"} 
        />
        <NavItem 
          icon={<ArrowLeftRight className="w-5 h-5" />} 
          label="Issue & Return" 
          to="/issue-return"
          active={currentPath === "/issue-return"} 
        />
        <NavItem 
          icon={<Users className="w-5 h-5" />} 
          label="Members" 
          to="/members"
          active={currentPath === "/members"} 
        />
        <NavItem 
          icon={<FileText className="w-5 h-5" />} 
          label="Reports" 
          to="/reports"
          active={currentPath === "/reports"} 
        />
        <NavItem 
          icon={<Settings className="w-5 h-5" />} 
          label="Settings" 
          to="/settings"
          active={currentPath === "/settings"} 
        />
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <button className="flex items-center gap-2 px-4 py-2 text-sidebar-foreground bg-sidebar-primary/20 hover:bg-sidebar-primary/30 rounded-md transition-colors text-sm font-medium w-full">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
