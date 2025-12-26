import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, BookOpen, RotateCcw, FileText } from "lucide-react";

const actions = [
  { icon: Plus, label: "Add New Book" },
  { icon: BookOpen, label: "Issue Book" },
  { icon: RotateCcw, label: "Return Book" },
  { icon: FileText, label: "Generate Report" },
];

const QuickActions = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col gap-2">
          {actions.map((action, index) => (
            <Button 
              key={index} 
              variant="default"
              className="w-full justify-start gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            >
              <action.icon className="w-4 h-4" />
              {action.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
