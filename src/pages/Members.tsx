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
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Users, Mail, Phone, Calendar } from "lucide-react";
import { toast } from "sonner";

const initialMembers = [
  { id: 1, memberId: "MEM001", name: "John Smith", email: "john.smith@email.com", phone: "+1 234-567-8901", joinDate: "2024-01-15", booksIssued: 2, status: "active" },
  { id: 2, memberId: "MEM002", name: "Emma Brown", email: "emma.brown@email.com", phone: "+1 234-567-8902", joinDate: "2024-02-20", booksIssued: 1, status: "active" },
  { id: 3, memberId: "MEM003", name: "Michael Lee", email: "michael.lee@email.com", phone: "+1 234-567-8903", joinDate: "2024-03-10", booksIssued: 3, status: "active" },
  { id: 4, memberId: "MEM004", name: "Sarah Wilson", email: "sarah.wilson@email.com", phone: "+1 234-567-8904", joinDate: "2024-01-25", booksIssued: 1, status: "suspended" },
  { id: 5, memberId: "MEM005", name: "David Chen", email: "david.chen@email.com", phone: "+1 234-567-8905", joinDate: "2024-04-05", booksIssued: 1, status: "active" },
  { id: 6, memberId: "MEM006", name: "Lisa Anderson", email: "lisa.anderson@email.com", phone: "+1 234-567-8906", joinDate: "2024-03-18", booksIssued: 0, status: "active" },
  { id: 7, memberId: "MEM007", name: "Robert Taylor", email: "robert.taylor@email.com", phone: "+1 234-567-8907", joinDate: "2024-02-28", booksIssued: 2, status: "active" },
  { id: 8, memberId: "MEM008", name: "Jennifer Martinez", email: "jennifer.m@email.com", phone: "+1 234-567-8908", joinDate: "2024-04-12", booksIssued: 0, status: "active" },
];

const Members = () => {
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.memberId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMember = () => {
    const member = {
      id: members.length + 1,
      memberId: `MEM${String(members.length + 1).padStart(3, "0")}`,
      ...newMember,
      joinDate: new Date().toISOString().split("T")[0],
      booksIssued: 0,
      status: "active" as const,
    };
    setMembers([...members, member]);
    setNewMember({ name: "", email: "", phone: "" });
    setIsDialogOpen(false);
    toast.success("Member added successfully!");
  };

  const handleDeleteMember = (id: number) => {
    setMembers(members.filter((member) => member.id !== id));
    toast.success("Member removed successfully!");
  };

  const totalMembers = members.length;
  const activeMembers = members.filter((m) => m.status === "active").length;
  const suspendedMembers = members.filter((m) => m.status === "suspended").length;

  return (
    <Layout title="Members">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Members</p>
                <p className="text-2xl font-bold text-foreground">{totalMembers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Members</p>
                <p className="text-2xl font-bold text-foreground">{activeMembers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Suspended</p>
                <p className="text-2xl font-bold text-foreground">{suspendedMembers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Members Table */}
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Members</CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-accent hover:bg-accent/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Member
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Register New Member</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={newMember.name}
                      onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newMember.email}
                      onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={newMember.phone}
                      onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                    />
                  </div>
                  <Button onClick={handleAddMember} className="bg-accent hover:bg-accent/90">
                    Register Member
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
                <TableHead>Member ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead className="text-center">Books Issued</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-mono text-sm">{member.memberId}</TableCell>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell className="text-muted-foreground">{member.email}</TableCell>
                  <TableCell className="text-muted-foreground">{member.phone}</TableCell>
                  <TableCell>{member.joinDate}</TableCell>
                  <TableCell className="text-center">{member.booksIssued}</TableCell>
                  <TableCell>
                    <Badge variant={member.status === "active" ? "default" : "destructive"}>
                      {member.status}
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
                        onClick={() => handleDeleteMember(member.id)}
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

export default Members;
