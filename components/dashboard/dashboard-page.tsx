import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileNav } from "@/components/mobile-nav"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentAnnouncements } from "@/components/dashboard/recent-announcements"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
import { QuickActions } from "@/components/dashboard/quick-actions"

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to Green Valley Society Management System</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <DashboardStats />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <RecentAnnouncements />
              </CardContent>
            </Card>
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <UpcomingEvents />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <QuickActions />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Analytics data will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Reports data will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
