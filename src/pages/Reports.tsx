import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from "recharts";
import { FileText, Download, TrendingUp, BookOpen, Users, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const monthlyData = [
  { month: "Jan", issued: 120, returned: 100 },
  { month: "Feb", issued: 150, returned: 130 },
  { month: "Mar", issued: 280, returned: 200 },
  { month: "Apr", issued: 320, returned: 280 },
  { month: "May", issued: 450, returned: 350 },
  { month: "Jun", issued: 380, returned: 420 },
];

const categoryData = [
  { name: "Fiction", value: 1200, color: "hsl(207, 90%, 54%)" },
  { name: "Science", value: 850, color: "hsl(145, 63%, 42%)" },
  { name: "History", value: 620, color: "hsl(25, 95%, 53%)" },
  { name: "Technology", value: 980, color: "hsl(0, 72%, 51%)" },
  { name: "Biography", value: 450, color: "hsl(280, 60%, 50%)" },
];

const topBooks = [
  { rank: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", timesIssued: 45 },
  { rank: 2, title: "Data Structures", author: "Seymour Lipschutz", timesIssued: 38 },
  { rank: 3, title: "Python Programming", author: "John Zelle", timesIssued: 35 },
  { rank: 4, title: "1984", author: "George Orwell", timesIssued: 32 },
  { rank: 5, title: "To Kill a Mockingbird", author: "Harper Lee", timesIssued: 28 },
];

const overdueReport = [
  { member: "Sarah Wilson", book: "Calculus Basics", dueDate: "2024-04-25", daysOverdue: 5 },
  { member: "James Brown", book: "World History", dueDate: "2024-04-20", daysOverdue: 10 },
  { member: "Emily Davis", book: "Physics 101", dueDate: "2024-04-22", daysOverdue: 8 },
];

const Reports = () => {
  const handleExport = (reportType: string) => {
    toast.success(`${reportType} report exported successfully!`);
  };

  return (
    <Layout title="Reports">
      {/* Report Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="shadow-sm cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">Monthly Activity</p>
                <p className="text-sm text-muted-foreground">Issue & Return trends</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="font-medium text-foreground">Book Analytics</p>
                <p className="text-sm text-muted-foreground">Popular books & genres</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-info" />
              </div>
              <div>
                <p className="font-medium text-foreground">Member Stats</p>
                <p className="text-sm text-muted-foreground">Member activity</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="font-medium text-foreground">Overdue Report</p>
                <p className="text-sm text-muted-foreground">Late returns</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Monthly Activity Chart */}
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Monthly Activity</CardTitle>
            <Button variant="outline" size="sm" onClick={() => handleExport("Monthly Activity")}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
                <XAxis dataKey="month" tick={{ fill: 'hsl(213, 20%, 45%)', fontSize: 12 }} />
                <YAxis tick={{ fill: 'hsl(213, 20%, 45%)', fontSize: 12 }} />
                <Legend />
                <Bar dataKey="issued" name="Books Issued" fill="hsl(207, 90%, 54%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="returned" name="Books Returned" fill="hsl(145, 63%, 42%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Books by Category</CardTitle>
            <Button variant="outline" size="sm" onClick={() => handleExport("Category")}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <ResponsiveContainer width="60%" height={250}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={2}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-2">
                {categoryData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-sm" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-muted-foreground">{item.name} ({item.value})</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Books */}
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Most Popular Books</CardTitle>
            <Button variant="outline" size="sm" onClick={() => handleExport("Top Books")}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Rank</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead className="text-right">Times Issued</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topBooks.map((book) => (
                  <TableRow key={book.rank}>
                    <TableCell className="font-bold text-accent">#{book.rank}</TableCell>
                    <TableCell className="font-medium">{book.title}</TableCell>
                    <TableCell className="text-muted-foreground">{book.author}</TableCell>
                    <TableCell className="text-right">{book.timesIssued}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Overdue Books */}
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-destructive flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Overdue Books
            </CardTitle>
            <Button variant="outline" size="sm" onClick={() => handleExport("Overdue")}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Book</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Days Overdue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {overdueReport.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.member}</TableCell>
                    <TableCell className="text-accent">{item.book}</TableCell>
                    <TableCell className="text-muted-foreground">{item.dueDate}</TableCell>
                    <TableCell className="text-right text-destructive font-bold">{item.daysOverdue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reports;
