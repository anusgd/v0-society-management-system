import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Download, Search } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const accessLogs = [
  {
    id: 1,
    name: "Rahul Sharma",
    type: "resident",
    location: "Main Gate",
    direction: "entry",
    timestamp: "May 15, 2024 08:45 AM",
  },
  {
    id: 2,
    name: "Delivery Person",
    type: "visitor",
    location: "Main Gate",
    direction: "entry",
    timestamp: "May 15, 2024 09:30 AM",
  },
  {
    id: 3,
    name: "Delivery Person",
    type: "visitor",
    location: "Main Gate",
    direction: "exit",
    timestamp: "May 15, 2024 09:45 AM",
  },
  {
    id: 4,
    name: "Priya Patel",
    type: "resident",
    location: "Main Gate",
    direction: "exit",
    timestamp: "May 15, 2024 10:15 AM",
  },
  {
    id: 5,
    name: "Maintenance Staff",
    type: "staff",
    location: "Service Entrance",
    direction: "entry",
    timestamp: "May 15, 2024 10:30 AM",
  },
  {
    id: 6,
    name: "Amit Singh",
    type: "resident",
    location: "Main Gate",
    direction: "entry",
    timestamp: "May 15, 2024 11:00 AM",
  },
  {
    id: 7,
    name: "John Doe",
    type: "visitor",
    location: "Main Gate",
    direction: "entry",
    timestamp: "May 15, 2024 11:30 AM",
  },
  {
    id: 8,
    name: "Maintenance Staff",
    type: "staff",
    location: "Service Entrance",
    direction: "exit",
    timestamp: "May 15, 2024 12:45 PM",
  },
  {
    id: 9,
    name: "Rahul Sharma",
    type: "resident",
    location: "Main Gate",
    direction: "entry",
    timestamp: "May 15, 2024 01:30 PM",
  },
  {
    id: 10,
    name: "John Doe",
    type: "visitor",
    location: "Main Gate",
    direction: "exit",
    timestamp: "May 15, 2024 02:15 PM",
  },
]

export function AccessLogs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Access Logs</CardTitle>
        <CardDescription>View entry and exit records for the society</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1 space-y-2">
            <div className="text-sm font-medium">Search</div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by name or location" className="pl-8" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="space-y-2">
              <div className="text-sm font-medium">Date</div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"outline"} className={cn("w-[180px] justify-start text-left font-normal")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>May 15, 2024</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Type</div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="resident">Resident</SelectItem>
                  <SelectItem value="visitor">Visitor</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Direction</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accessLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.name}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        log.type === "resident"
                          ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
                          : log.type === "visitor"
                            ? "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                            : "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                      }
                    >
                      {log.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{log.location}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        log.direction === "entry"
                          ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                          : "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400"
                      }
                    >
                      {log.direction}
                    </Badge>
                  </TableCell>
                  <TableCell>{log.timestamp}</TableCell>
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

        <div className="flex justify-between">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Logs
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
