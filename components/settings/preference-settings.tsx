import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Globe, Moon, Palette, Sun } from "lucide-react"

export function PreferenceSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Appearance
          </CardTitle>
          <CardDescription>Customize the look and feel of your dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Theme</Label>
            <div className="grid grid-cols-3 gap-3">
              <div className="cursor-pointer rounded-md border p-3 text-center hover:bg-muted">
                <Sun className="mx-auto mb-2 h-6 w-6" />
                <div className="text-sm font-medium">Light</div>
              </div>
              <div className="cursor-pointer rounded-md border p-3 text-center hover:bg-muted">
                <Moon className="mx-auto mb-2 h-6 w-6" />
                <div className="text-sm font-medium">Dark</div>
              </div>
              <div className="cursor-pointer rounded-md border-2 border-primary p-3 text-center">
                <div className="mx-auto mb-2 flex h-6 w-6 items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-gray-900 to-gray-100"></div>
                </div>
                <div className="text-sm font-medium">System</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="accentColor">Accent Color</Label>
            <Select defaultValue="teal">
              <SelectTrigger id="accentColor">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="teal">Teal</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="purple">Purple</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="compactMode">Compact Mode</Label>
              <p className="text-sm text-muted-foreground">Use a more compact layout to fit more content</p>
            </div>
            <Switch id="compactMode" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="animations">Enable Animations</Label>
              <p className="text-sm text-muted-foreground">Show smooth transitions and animations</p>
            </div>
            <Switch id="animations" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Language & Region
          </CardTitle>
          <CardDescription>Set your language and regional preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                  <SelectItem value="mr">Marathi</SelectItem>
                  <SelectItem value="gu">Gujarati</SelectItem>
                  <SelectItem value="ta">Tamil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select defaultValue="ist">
                <SelectTrigger id="timezone">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="est">Eastern Standard Time</SelectItem>
                  <SelectItem value="pst">Pacific Standard Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="dateFormat">Date Format</Label>
              <Select defaultValue="dd-mm-yyyy">
                <SelectTrigger id="dateFormat">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                  <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                  <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select defaultValue="inr">
                <SelectTrigger id="currency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                  <SelectItem value="usd">US Dollar ($)</SelectItem>
                  <SelectItem value="eur">Euro (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dashboard Preferences</CardTitle>
          <CardDescription>Customize your dashboard layout and default views</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="defaultPage">Default Landing Page</Label>
            <Select defaultValue="dashboard">
              <SelectTrigger id="defaultPage">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dashboard">Dashboard</SelectItem>
                <SelectItem value="announcements">Announcements</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="chat">Chat Forum</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sidebarCollapsed">Collapse Sidebar by Default</Label>
              <p className="text-sm text-muted-foreground">Start with a collapsed sidebar for more content space</p>
            </div>
            <Switch id="sidebarCollapsed" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="autoRefresh">Auto-refresh Data</Label>
              <p className="text-sm text-muted-foreground">Automatically refresh dashboard data every few minutes</p>
            </div>
            <Switch id="autoRefresh" defaultChecked />
          </div>

          <div className="space-y-2">
            <Label htmlFor="itemsPerPage">Items per Page</Label>
            <Select defaultValue="10">
              <SelectTrigger id="itemsPerPage">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 items</SelectItem>
                <SelectItem value="10">10 items</SelectItem>
                <SelectItem value="20">20 items</SelectItem>
                <SelectItem value="50">50 items</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data & Storage</CardTitle>
          <CardDescription>Manage your data and storage preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="dataSync">Sync Data Across Devices</Label>
              <p className="text-sm text-muted-foreground">Keep your preferences synced across all devices</p>
            </div>
            <Switch id="dataSync" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="offlineMode">Enable Offline Mode</Label>
              <p className="text-sm text-muted-foreground">
                Cache data for offline access when internet is unavailable
              </p>
            </div>
            <Switch id="offlineMode" defaultChecked />
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-medium text-destructive">Danger Zone</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Export My Data
              </Button>
              <Button variant="outline" className="w-full">
                Clear Cache & Stored Data
              </Button>
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Save All Preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
