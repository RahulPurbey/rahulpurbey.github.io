import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const notifications = [
  { type: "overdue", label: "Overdue:", message: '"Calculus Basics" due on 2024-04-25.', color: "bg-destructive" },
  { type: "reminder", label: "Reminder:", message: 'Return "Modern Physics".', color: "bg-warning" },
  { type: "new", label: "New Member:", message: "Sarah Wilson registered.", color: "bg-accent" },
];

const Notifications = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">Notifications</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col gap-3">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full mt-2 ${notification.color}`}></div>
              <div>
                <span className="text-accent font-medium">{notification.label}</span>{" "}
                <span className="text-muted-foreground">{notification.message}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Notifications;
