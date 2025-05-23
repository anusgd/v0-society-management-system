import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Choose how you want to receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <Bell className="h-4 w-4" />
              General Notifications
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="announcements">Society Announcements</Label>
                  <p className="text-sm text-muted-foreground">Get notified about important society announcements</p>
                </div>
                <Switch id="announcements" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance">Maintenance Reminders</Label>
                  <p className="text-sm text-muted-foreground">Receive reminders for maintenance payments</p>
                </div>
                <Switch id="maintenance" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="events">Event Updates</Label>
                  <p className="text-sm text-muted-foreground">Stay updated about society events and activities</p>
                </div>
                <Switch id="events" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="voting">Voting & Elections</Label>
                  <p className="text-sm text-muted-foreground">Get notified about voting opportunities</p>
                </div>
                <Switch id="voting" defaultChecked />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Chat & Forum
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="mentions">Direct Mentions</Label>
                  <p className="text-sm text-muted-foreground">When someone mentions you in chat</p>
                </div>
                <Switch id="mentions" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="replies">Replies to Posts</Label>
                  <p className="text-sm text-muted-foreground">When someone replies to your forum posts</p>
                </div>
                <Switch id="replies" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="newTopics">New Forum Topics</Label>
                  <p className="text-sm text-muted-foreground">Get notified about new discussion topics</p>
                </div>
                <Switch id="newTopics" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Security Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="loginAlerts">Login Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified when someone logs into your account</p>
                </div>
                <Switch id="loginAlerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="passwordChanges">Password Changes</Label>
                  <p className="text-sm text-muted-foreground">Alerts for password and security changes</p>
                </div>
                <Switch id="passwordChanges" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Channels</CardTitle>
          <CardDescription>Choose how you want to receive different types of notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="emailNotifications" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Notifications
              </Label>
              <Select defaultValue="important">
                <SelectTrigger id="emailNotifications">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All notifications</SelectItem>
                  <SelectItem value="important">Important only</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="smsNotifications" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                SMS Notifications
              </Label>
              <Select defaultValue="urgent">
                <SelectTrigger id="smsNotifications">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All notifications</SelectItem>
                  <SelectItem value="urgent">Urgent only</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quietHours">Quiet Hours</Label>
            <div className="grid grid-cols-2 gap-2">
              <Select defaultValue="22">
                <SelectTrigger>
                  <SelectValue placeholder="Start time" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, i) => (
                    <SelectItem key={i} value={i.toString()}>
                      {i.toString().padStart(2, "0")}:00
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select defaultValue="8">
                <SelectTrigger>
                  <SelectValue placeholder="End time" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, i) => (
                    <SelectItem key={i} value={i.toString()}>
                      {i.toString().padStart(2, "0")}:00
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <p className="text-sm text-muted-foreground">No notifications will be sent during these hours</p>
          </div>

          <div className="flex justify-end">
            <Button>Save Notification Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
