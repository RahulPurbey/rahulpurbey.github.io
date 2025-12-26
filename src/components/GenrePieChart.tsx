import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Fiction", value: 35, color: "hsl(207, 90%, 54%)" },
  { name: "Science", value: 25, color: "hsl(145, 63%, 42%)" },
  { name: "History", value: 20, color: "hsl(25, 95%, 53%)" },
  { name: "Technology", value: 20, color: "hsl(0, 72%, 51%)" },
];

const GenrePieChart = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground">Available Books by Genre</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center">
          <ResponsiveContainer width="60%" height={180}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={70}
                dataKey="value"
                stroke="white"
                strokeWidth={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-sm" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GenrePieChart;
