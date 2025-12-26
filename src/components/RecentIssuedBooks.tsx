import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentBooks = [
  { member: "John Smith", bookTitle: "The Great Gatsby", issueDate: "2024-04-15", dueDate: "2024-05-01" },
  { member: "Emma Brown", bookTitle: "Data Structures", issueDate: "2024-04-18", dueDate: "2024-05-03" },
  { member: "Michael Lee", bookTitle: "Python Programming", issueDate: "2024-04-20", dueDate: "2024-05-05" },
];

const RecentIssuedBooks = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">Recent Issued Books</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-muted-foreground font-semibold">Member</TableHead>
              <TableHead className="text-muted-foreground font-semibold">Book Title</TableHead>
              <TableHead className="text-muted-foreground font-semibold">Issue Date</TableHead>
              <TableHead className="text-muted-foreground font-semibold">Due Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentBooks.map((book, index) => (
              <TableRow key={index} className="border-border">
                <TableCell className="font-medium text-foreground">{book.member}</TableCell>
                <TableCell className="text-accent hover:underline cursor-pointer">{book.bookTitle}</TableCell>
                <TableCell className="text-muted-foreground">{book.issueDate}</TableCell>
                <TableCell className="text-muted-foreground">{book.dueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentIssuedBooks;
