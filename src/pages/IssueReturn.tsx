import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, RotateCcw, BookOpen, User, Calendar } from "lucide-react";
import { toast } from "sonner";

const issuedBooks = [
  { id: 1, member: "John Smith", memberId: "MEM001", book: "The Great Gatsby", issueDate: "2024-04-15", dueDate: "2024-05-01", status: "active" },
  { id: 2, member: "Emma Brown", memberId: "MEM002", book: "Data Structures", issueDate: "2024-04-18", dueDate: "2024-05-03", status: "active" },
  { id: 3, member: "Michael Lee", memberId: "MEM003", book: "Python Programming", issueDate: "2024-04-20", dueDate: "2024-05-05", status: "active" },
  { id: 4, member: "Sarah Wilson", memberId: "MEM004", book: "Calculus Basics", issueDate: "2024-04-10", dueDate: "2024-04-25", status: "overdue" },
  { id: 5, member: "David Chen", memberId: "MEM005", book: "World History", issueDate: "2024-04-22", dueDate: "2024-05-07", status: "active" },
];

const IssueReturn = () => {
  const [issueForm, setIssueForm] = useState({
    memberId: "",
    bookIsbn: "",
    dueDate: "",
  });

  const [returnForm, setReturnForm] = useState({
    memberId: "",
    bookIsbn: "",
  });

  const handleIssueBook = () => {
    if (!issueForm.memberId || !issueForm.bookIsbn || !issueForm.dueDate) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Book issued successfully!");
    setIssueForm({ memberId: "", bookIsbn: "", dueDate: "" });
  };

  const handleReturnBook = () => {
    if (!returnForm.memberId || !returnForm.bookIsbn) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Book returned successfully!");
    setReturnForm({ memberId: "", bookIsbn: "" });
  };

  return (
    <Layout title="Issue & Return">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Issue Book Card */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-success" />
              Issue Book
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="issue-member" className="flex items-center gap-2">
                  <User className="w-4 h-4" /> Member ID
                </Label>
                <Input
                  id="issue-member"
                  placeholder="Enter member ID (e.g., MEM001)"
                  value={issueForm.memberId}
                  onChange={(e) => setIssueForm({ ...issueForm, memberId: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="issue-book" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Book ISBN
                </Label>
                <Input
                  id="issue-book"
                  placeholder="Enter book ISBN"
                  value={issueForm.bookIsbn}
                  onChange={(e) => setIssueForm({ ...issueForm, bookIsbn: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="due-date" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Due Date
                </Label>
                <Input
                  id="due-date"
                  type="date"
                  value={issueForm.dueDate}
                  onChange={(e) => setIssueForm({ ...issueForm, dueDate: e.target.value })}
                />
              </div>
              <Button onClick={handleIssueBook} className="bg-success hover:bg-success/90 text-success-foreground">
                <ArrowRight className="w-4 h-4 mr-2" />
                Issue Book
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Return Book Card */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-accent" />
              Return Book
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="return-member" className="flex items-center gap-2">
                  <User className="w-4 h-4" /> Member ID
                </Label>
                <Input
                  id="return-member"
                  placeholder="Enter member ID (e.g., MEM001)"
                  value={returnForm.memberId}
                  onChange={(e) => setReturnForm({ ...returnForm, memberId: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="return-book" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Book ISBN
                </Label>
                <Input
                  id="return-book"
                  placeholder="Enter book ISBN"
                  value={returnForm.bookIsbn}
                  onChange={(e) => setReturnForm({ ...returnForm, bookIsbn: e.target.value })}
                />
              </div>
              <div className="h-[68px]"></div>
              <Button onClick={handleReturnBook} className="bg-accent hover:bg-accent/90">
                <RotateCcw className="w-4 h-4 mr-2" />
                Return Book
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Currently Issued Books */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Currently Issued Books</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Member ID</TableHead>
                <TableHead>Book Title</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {issuedBooks.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.member}</TableCell>
                  <TableCell className="font-mono text-sm">{record.memberId}</TableCell>
                  <TableCell className="text-accent">{record.book}</TableCell>
                  <TableCell>{record.issueDate}</TableCell>
                  <TableCell>{record.dueDate}</TableCell>
                  <TableCell>
                    <Badge variant={record.status === "overdue" ? "destructive" : "default"}>
                      {record.status === "overdue" ? "Overdue" : "Active"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default IssueReturn;
