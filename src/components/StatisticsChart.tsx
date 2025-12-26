import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Area, AreaChart } from "recharts";

const data = [
  { month: "Jan", issued: 120, returned: 100 },
  { month: "Feb", issued: 150, returned: 130 },
  { month: "Mar", issued: 280, returned: 200 },
  { month: "Apr", issued: 320, returned: 280 },
  { month: "May", issued: 450, returned: 350 },
  { month: "Jun", issued: 380, returned: 420 },
];

const StatisticsChart = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground">Statistics</CardTitle>
        <div className="flex items-center gap-6 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-chart-issued rounded"></div>
            <span className="text-sm text-muted-foreground">Books Issued</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-chart-returned rounded"></div>
            <span className="text-sm text-muted-foreground">Books Returned</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIssued" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(207, 90%, 54%)" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="hsl(207, 90%, 54%)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorReturned" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(145, 63%, 42%)" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="hsl(145, 63%, 42%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(213, 20%, 45%)', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(213, 20%, 45%)', fontSize: 12 }}
            />
            <Area 
              type="monotone" 
              dataKey="issued" 
              stroke="hsl(207, 90%, 54%)" 
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorIssued)"
            />
            <Area 
              type="monotone" 
              dataKey="returned" 
              stroke="hsl(145, 63%, 42%)" 
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorReturned)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default StatisticsChart;
