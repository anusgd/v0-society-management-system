import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Car, CreditCard, Users } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Maintenance Status</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹2,500</div>
          <p className="text-xs text-muted-foreground">Due on May 30, 2024</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
            <div className="h-1.5 w-3/4 rounded-full bg-primary"></div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Parking Allocation</CardTitle>
          <Car className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Slot B-12</div>
          <p className="text-xs text-muted-foreground">Valid until June 30, 2024</p>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-500">
            <span className="rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-600 dark:bg-green-900/30 dark:text-green-500">
              Active
            </span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
          <AlertCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2</div>
          <p className="text-xs text-muted-foreground">1 pending, 1 in progress</p>
          <div className="mt-2 flex items-center gap-1 text-xs text-amber-600 dark:text-amber-500">
            <AlertCircle className="h-3 w-3" />
            <span>Plumbing issue needs attention</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Upcoming Visitors</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-muted-foreground">Expected this weekend</p>
          <div className="mt-2 flex items-center gap-1 text-xs">
            <span className="rounded-full bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-500">
              Approved
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
