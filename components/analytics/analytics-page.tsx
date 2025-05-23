"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  CalendarIcon,
  Download,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function AnalyticsPage() {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(2024, 0, 1),
    to: new Date(),
  })

  const stats = [
    {
      title: "Total Residents",
      value: "248",
      change: "+12",
      changeType: "increase",
      icon: Users,
      description: "Active residents",
    },
    {
      title: "Monthly Revenue",
      value: "₹2,48,000",
      change: "+8.2%",
      changeType: "increase",
      icon: DollarSign,
      description: "Maintenance collected",
    },
    {
      title: "Pending Issues",
      value: "23",
      change: "-5",
      changeType: "decrease",
      icon: AlertTriangle,
      description: "Open complaints",
    },
    {
      title: "Resolved Issues",
      value: "187",
      change: "+15",
      changeType: "increase",
      icon: CheckCircle,
      description: "This month",
    },
  ]

  const financialData = [
    { month: "Jan", income: 240000, expenses: 180000 },
    { month: "Feb", income: 248000, expenses: 175000 },
    { month: "Mar", income: 252000, expenses: 190000 },
    { month: "Apr", income: 248000, expenses: 185000 },
    { month: "May", income: 255000, expenses: 195000 },
    { month: "Jun", income: 248000, expenses: 180000 },
  ]

  const issueCategories = [
    { category: "Plumbing", count: 45, percentage: 35 },
    { category: "Electrical", count: 32, percentage: 25 },
    { category: "Security", count: 25, percentage: 20 },
    { category: "Maintenance", count: 18, percentage: 14 },
    { category: "Others", count: 8, percentage: 6 },
  ]

  const occupancyData = [
    { floor: "Ground", occupied: 8, total: 10, percentage: 80 },
    { floor: "1st Floor", occupied: 12, total: 12, percentage: 100 },
    { floor: "2nd Floor", occupied: 11, total: 12, percentage: 92 },
    { floor: "3rd Floor", occupied: 12, total: 12, percentage: 100 },
    { floor: "4th Floor", occupied: 10, total: 12, percentage: 83 },
    { floor: "5th Floor", occupied: 9, total: 12, percentage: 75 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Committee Analytics</h1>
          <p className="text-muted-foreground">Comprehensive insights and reports for society management</p>
        </div>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange?.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(dateRange.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar initialFocus mode="range" defaultMonth={dateRange?.from} numberOfMonths={2} />
            </PopoverContent>
          </Popover>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.changeType === "increase" ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span className={stat.changeType === "increase" ? "text-green-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span className="ml-1">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="financial" className="space-y-4">
        <TabsList>
          <TabsTrigger value="financial">Financial Overview</TabsTrigger>
          <TabsTrigger value="issues">Issue Analytics</TabsTrigger>
          <TabsTrigger value="occupancy">Occupancy Report</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="financial" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Income vs Expenses</CardTitle>
                <CardDescription>Financial performance over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {financialData.map((data) => (
                    <div key={data.month} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{data.month}</span>
                        <span>₹{(data.income - data.expenses).toLocaleString()}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Income: ₹{data.income.toLocaleString()}</span>
                          <span>Expenses: ₹{data.expenses.toLocaleString()}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: `${(data.income / 300000) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Collection Rate</CardTitle>
                <CardDescription>Maintenance payment statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500">94.2%</div>
                    <p className="text-sm text-muted-foreground">Collection Rate</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Paid on Time</span>
                      <span className="text-green-500">234 units</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Late Payment</span>
                      <span className="text-yellow-500">12 units</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Pending</span>
                      <span className="text-red-500">2 units</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="issues" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Issues by Category</CardTitle>
                <CardDescription>Distribution of reported issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {issueCategories.map((item) => (
                    <div key={item.category} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.category}</span>
                        <span>{item.count} issues</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${item.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resolution Time</CardTitle>
                <CardDescription>Average time to resolve issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">2.4</div>
                    <p className="text-sm text-muted-foreground">Average Days</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Same Day</span>
                      <Badge variant="secondary">45%</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>1-3 Days</span>
                      <Badge variant="secondary">35%</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>4-7 Days</span>
                      <Badge variant="secondary">15%</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>7+ Days</span>
                      <Badge variant="destructive">5%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="occupancy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Floor-wise Occupancy</CardTitle>
              <CardDescription>Current occupancy status by floor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {occupancyData.map((floor) => (
                  <div key={floor.floor} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{floor.floor}</span>
                      <span>
                        {floor.occupied}/{floor.total} units ({floor.percentage}%)
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          floor.percentage === 100
                            ? "bg-green-500"
                            : floor.percentage >= 80
                              ? "bg-blue-500"
                              : floor.percentage >= 60
                                ? "bg-yellow-500"
                                : "bg-red-500",
                        )}
                        style={{ width: `${floor.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Schedule</CardTitle>
                <CardDescription>Upcoming and overdue maintenance tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Elevator Service</span>
                    <Badge variant="destructive">Overdue</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Generator Maintenance</span>
                    <Badge variant="secondary">Due in 3 days</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Water Tank Cleaning</span>
                    <Badge variant="secondary">Due in 1 week</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Fire Safety Check</span>
                    <Badge variant="outline">Due in 2 weeks</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vendor Performance</CardTitle>
                <CardDescription>Service provider ratings and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cleaning Service</span>
                    <div className="flex items-center gap-2">
                      <div className="text-yellow-500">★★★★☆</div>
                      <span className="text-xs text-muted-foreground">4.2</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Security Agency</span>
                    <div className="flex items-center gap-2">
                      <div className="text-yellow-500">★★★★★</div>
                      <span className="text-xs text-muted-foreground">4.8</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Plumbing Service</span>
                    <div className="flex items-center gap-2">
                      <div className="text-yellow-500">★★★☆☆</div>
                      <span className="text-xs text-muted-foreground">3.5</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Electrical Service</span>
                    <div className="flex items-center gap-2">
                      <div className="text-yellow-500">★★★★☆</div>
                      <span className="text-xs text-muted-foreground">4.1</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
