import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon, User, Bell, Shield, Database, Mail } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const [librarySettings, setLibrarySettings] = useState({
    libraryName: "City Public Library",
    address: "123 Main Street, City, State 12345",
    phone: "+1 234-567-8900",
    email: "contact@citylibrary.com",
    maxBooksPerMember: 5,
    defaultLoanPeriod: 14,
    lateFeePerDay: 0.50,
  });

  const [notifications, setNotifications] = useState({
    emailReminders: true,
    smsReminders: false,
    overdueAlerts: true,
    newMemberNotifications: true,
    weeklyReports: true,
  });

  const handleSaveGeneral = () => {
    toast.success("General settings saved successfully!");
  };

  const handleSaveNotifications = () => {
    toast.success("Notification preferences saved!");
  };

  return (
    <Layout title="Settings">
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-muted">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <SettingsIcon className="w-4 h-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="backup" className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            Backup
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Library Information</CardTitle>
              <CardDescription>Update your library's basic information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="libraryName">Library Name</Label>
                  <Input
                    id="libraryName"
                    value={librarySettings.libraryName}
                    onChange={(e) => setLibrarySettings({ ...librarySettings, libraryName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={librarySettings.email}
                    onChange={(e) => setLibrarySettings({ ...librarySettings, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={librarySettings.phone}
                    onChange={(e) => setLibrarySettings({ ...librarySettings, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={librarySettings.address}
                    onChange={(e) => setLibrarySettings({ ...librarySettings, address: e.target.value })}
                  />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Loan Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="maxBooks">Max Books Per Member</Label>
                    <Input
                      id="maxBooks"
                      type="number"
                      min="1"
                      value={librarySettings.maxBooksPerMember}
                      onChange={(e) => setLibrarySettings({ ...librarySettings, maxBooksPerMember: parseInt(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="loanPeriod">Default Loan Period (days)</Label>
                    <Input
                      id="loanPeriod"
                      type="number"
                      min="1"
                      value={librarySettings.defaultLoanPeriod}
                      onChange={(e) => setLibrarySettings({ ...librarySettings, defaultLoanPeriod: parseInt(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lateFee">Late Fee Per Day ($)</Label>
                    <Input
                      id="lateFee"
                      type="number"
                      min="0"
                      step="0.25"
                      value={librarySettings.lateFeePerDay}
                      onChange={(e) => setLibrarySettings({ ...librarySettings, lateFeePerDay: parseFloat(e.target.value) })}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={handleSaveGeneral} className="bg-accent hover:bg-accent/90">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Reminders</Label>
                    <p className="text-sm text-muted-foreground">Send email reminders for due dates</p>
                  </div>
                  <Switch
                    checked={notifications.emailReminders}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, emailReminders: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Reminders</Label>
                    <p className="text-sm text-muted-foreground">Send SMS reminders for due dates</p>
                  </div>
                  <Switch
                    checked={notifications.smsReminders}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, smsReminders: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Overdue Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get alerts when books become overdue</p>
                  </div>
                  <Switch
                    checked={notifications.overdueAlerts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, overdueAlerts: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Member Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get notified when new members register</p>
                  </div>
                  <Switch
                    checked={notifications.newMemberNotifications}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, newMemberNotifications: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Reports</Label>
                    <p className="text-sm text-muted-foreground">Receive weekly activity summary via email</p>
                  </div>
                  <Switch
                    checked={notifications.weeklyReports}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyReports: checked })}
                  />
                </div>
              </div>

              <Button onClick={handleSaveNotifications} className="bg-accent hover:bg-accent/90">
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>

              <Button onClick={() => toast.success("Password updated successfully!")} className="bg-accent hover:bg-accent/90">
                Update Password
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Backup Settings */}
        <TabsContent value="backup">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Backup & Restore</CardTitle>
              <CardDescription>Manage your library data backups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-dashed">
                  <CardContent className="pt-6 text-center">
                    <Database className="w-12 h-12 mx-auto text-accent mb-4" />
                    <h3 className="font-medium mb-2">Create Backup</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Export all library data to a backup file
                    </p>
                    <Button onClick={() => toast.success("Backup created successfully!")} className="bg-accent hover:bg-accent/90">
                      Create Backup
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-dashed">
                  <CardContent className="pt-6 text-center">
                    <Database className="w-12 h-12 mx-auto text-success mb-4" />
                    <h3 className="font-medium mb-2">Restore from Backup</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Import library data from a backup file
                    </p>
                    <Button variant="outline">
                      Select Backup File
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Last Backup</h4>
                <p className="text-sm text-muted-foreground">December 25, 2024 at 10:30 PM</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Settings;
