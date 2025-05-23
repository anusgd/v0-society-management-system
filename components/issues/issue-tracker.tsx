import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

const issues = [
  {
    id: 1,
    title: "Water Leakage in Bathroom",
    flat: "A-12",
    resident: "Rahul Sharma",
    category: "Plumbing",
    status: "in-progress",
    priority: "high",
    date: "May 10, 2024",
  },
  {
    id: 2,
    title: "Electrical Socket Not Working",
    flat: "B-8",
    resident: "Priya Patel",
    category: "Electrical",
    status: "pending",
    priority: "medium",
    date: "May 12, 2024",
  },
  {
    id: 3,
    title: "Broken Window Handle",
    flat: "A-3",
    resident: "Amit Singh",
    category: "Carpentry",
    status: "resolved",
    priority: "low",
    date: "April 28, 2024",
  },
  {
    id: 4,
    title: "Lift Not Working",
    flat: "B-15",
    resident: "Neha Gupta",
    category: "Electrical",
    status: "in-progress",
    priority: "high",
    date: "May 8, 2024",
  },
  {
    id: 5,
    title: "Garbage Not Collected",
    flat: "A-7",
    resident: "Rajesh Kumar",
    category: "Cleaning",
    status: "resolved",
    priority: "medium",
    date: "May 5, 2024",
  },
  {
    id: 6,
    title: "Noise Complaint",
    flat: "B-4",
    resident: "Anita Desai",
    category: "Other",
    status: "pending",
    priority: "low",
    date: "May 11, 2024",
  },
]

export function IssueTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Issue Tracker</CardTitle>
        <CardDescription>Track and manage all reported issues in the society</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1 space-y-2">
            <Label htmlFor="search">Search</Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="search" placeholder="Search by title, flat, or resident" className="pl-8" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="space-y-2">
              <Label htmlFor="status-filter">Status</Label>
              <Select>
                <SelectTrigger id="status-filter" className="w-[140px]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category-filter">Category</Label>
              <Select>
                <SelectTrigger id="category-filter" className="w-[140px]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="carpentry">Carpentry</SelectItem>
                  <SelectItem value="painting">Painting</SelectItem>
                  <SelectItem value="cleaning">Cleaning</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Issue</TableHead>
                <TableHead>Flat</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {issues.map((issue) => (
                <TableRow key={issue.id}>
                  <TableCell className="font-medium">{issue.title}</TableCell>
                  <TableCell>
                    {issue.flat}
                    <div className="text-xs text-muted-foreground">{issue.resident}</div>
                  </TableCell>
                  <TableCell>{issue.category}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        issue.priority === "high"
                          ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400"
                          : issue.priority === "medium"
                            ? "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                            : "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                      }
                    >
                      {issue.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        issue.status === "resolved"
                          ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                          : issue.status === "in-progress"
                            ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
                            : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                      }
                    >
                      {issue.status === "in-progress"
                        ? "In Progress"
                        : issue.status === "resolved"
                          ? "Resolved"
                          : "Pending"}
                    </Badge>
                  </TableCell>
                  <TableCell>{issue.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
