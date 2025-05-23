import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Key, Lock, Shield, Smartphone } from "lucide-react"

const loginSessions = [
  {
    id: 1,
    device: "Chrome on Windows",
    location: "Mumbai, India",
    lastActive: "Current session",
    status: "active",
  },
  {
    id: 2,
    device: "Mobile App on Android",
    location: "Mumbai, India",
    lastActive: "2 hours ago",
    status: "active",
  },
  {
    id: 3,
    device: "Safari on iPhone",
    location: "Mumbai, India",
    lastActive: "1 day ago",
    status: "inactive",
  },
]

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Password & Authentication
          </CardTitle>
          <CardDescription>Manage your password and authentication settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Change Password</h3>
            <div className="space-y-3">
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
              <Button>
                <Key className="mr-2 h-4 w-4" />
                Update Password
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Two-Factor Authentication
            </h3>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="twoFactor">Enable 2FA</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch id="twoFactor" />
            </div>
            <div className="rounded-md border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-500 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-amber-800 dark:text-amber-200">
                    Two-factor authentication is disabled
                  </p>
                  <p className="text-amber-700 dark:text-amber-300">
                    Enable 2FA to secure your account with an additional verification step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Login Sessions
          </CardTitle>
          <CardDescription>Manage your active login sessions across devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loginSessions.map((session) => (
                  <TableRow key={session.id}>
                    <TableCell className="font-medium">{session.device}</TableCell>
                    <TableCell>{session.location}</TableCell>
                    <TableCell>{session.lastActive}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          session.status === "active"
                            ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                            : "border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-800 dark:bg-gray-800/20 dark:text-gray-400"
                        }
                      >
                        {session.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {session.lastActive !== "Current session" && (
                        <Button variant="outline" size="sm">
                          Revoke
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outline">Revoke All Other Sessions</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
          <CardDescription>Control your privacy and data sharing preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="profileVisibility">Profile Visibility</Label>
              <p className="text-sm text-muted-foreground">Allow other residents to see your profile information</p>
            </div>
            <Switch id="profileVisibility" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="contactInfo">Share Contact Information</Label>
              <p className="text-sm text-muted-foreground">Allow committee members to access your contact details</p>
            </div>
            <Switch id="contactInfo" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="activityStatus">Show Activity Status</Label>
              <p className="text-sm text-muted-foreground">Let others see when you're online in chat</p>
            </div>
            <Switch id="activityStatus" defaultChecked />
          </div>
          <div className="flex justify-end">
            <Button>Save Privacy Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
