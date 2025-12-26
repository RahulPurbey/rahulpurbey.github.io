import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const initialBooks = [
  { id: 1, isbn: "978-0-13-468599-1", title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", copies: 5, available: 3 },
  { id: 2, isbn: "978-0-07-352957-8", title: "Data Structures", author: "Seymour Lipschutz", category: "Technology", copies: 8, available: 5 },
  { id: 3, isbn: "978-0-13-409341-3", title: "Python Programming", author: "John Zelle", category: "Technology", copies: 10, available: 7 },
  { id: 4, isbn: "978-0-19-954391-6", title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", copies: 4, available: 2 },
  { id: 5, isbn: "978-0-06-112008-4", title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", copies: 6, available: 4 },
  { id: 6, isbn: "978-0-14-028329-7", title: "1984", author: "George Orwell", category: "Fiction", copies: 7, available: 5 },
  { id: 7, isbn: "978-0-521-67595-6", title: "Calculus Basics", author: "James Stewart", category: "Science", copies: 3, available: 0 },
  { id: 8, isbn: "978-0-674-97645-2", title: "World History", author: "Peter Stearns", category: "History", copies: 5, available: 3 },
];

const ManageBooks = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    copies: 1,
  });

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.includes(searchTerm)
  );

  const handleAddBook = () => {
    const book = {
      id: books.length + 1,
      ...newBook,
      available: newBook.copies,
    };
    setBooks([...books, book]);
    setNewBook({ title: "", author: "", isbn: "", category: "", copies: 1 });
    setIsDialogOpen(false);
  };

  const handleDeleteBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Layout title="Manage Books">
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent" />
            Book Inventory
          </CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-accent hover:bg-accent/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Book
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Book</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newBook.title}
                      onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={newBook.author}
                      onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="isbn">ISBN</Label>
                    <Input
                      id="isbn"
                      value={newBook.isbn}
                      onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={newBook.category}
                      onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="copies">Number of Copies</Label>
                    <Input
                      id="copies"
                      type="number"
                      min="1"
                      value={newBook.copies}
                      onChange={(e) => setNewBook({ ...newBook, copies: parseInt(e.target.value) })}
                    />
                  </div>
                  <Button onClick={handleAddBook} className="bg-accent hover:bg-accent/90">
                    Add Book
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ISBN</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-center">Total Copies</TableHead>
                <TableHead className="text-center">Available</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBooks.map((book) => (
                <TableRow key={book.id}>
                  <TableCell className="font-mono text-sm">{book.isbn}</TableCell>
                  <TableCell className="font-medium text-accent">{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{book.category}</Badge>
                  </TableCell>
                  <TableCell className="text-center">{book.copies}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={book.available > 0 ? "default" : "destructive"}>
                      {book.available}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteBook(book.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
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

export default ManageBooks;
