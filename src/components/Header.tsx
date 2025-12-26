import { Monitor, Bell, Settings, User } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Monitor className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
          <Bell className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <User className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
