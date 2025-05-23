"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Search, Filter, Download, Eye } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useState } from "react"

export function VisitorHistory() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
          <CardDescription>Find visitor entries by name, date, or type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search by name or phone..." className="pl-8" />
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="guest">Guest</SelectItem>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="service">Service Provider</SelectItem>
                  <SelectItem value="vendor">Vendor</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("justify-start text-left font-normal", !startDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PP") : "Start date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PP") : "End date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Apply Filters
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Visitor History</CardTitle>
          <CardDescription>Complete record of all visitor entries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Visitor Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    name: "John Doe",
                    type: "Guest",
                    date: "May 15, 2023",
                    time: "2:30 PM",
                    duration: "1h 45m",
                    status: "Completed",
                  },
                  {
                    name: "Delivery Person",
                    type: "Delivery",
                    date: "May 14, 2023",
                    time: "11:15 AM",
                    duration: "10m",
                    status: "Completed",
                  },
                  {
                    name: "Plumber",
                    type: "Service",
                    date: "May 12, 2023",
                    time: "10:00 AM",
                    duration: "2h 30m",
                    status: "Completed",
                  },
                  {
                    name: "Jane Smith",
                    type: "Guest",
                    date: "May 10, 2023",
                    time: "4:45 PM",
                    duration: "3h 15m",
                    status: "Completed",
                  },
                  {
                    name: "Electrician",
                    type: "Service",
                    date: "May 8, 2023",
                    time: "9:30 AM",
                    duration: "1h 20m",
                    status: "Completed",
                  },
                  {
                    name: "Package Delivery",
                    type: "Delivery",
                    date: "May 5, 2023",
                    time: "3:00 PM",
                    duration: "5m",
                    status: "Completed",
                  },
                  {
                    name: "Mike Johnson",
                    type: "Guest",
                    date: "May 3, 2023",
                    time: "6:15 PM",
                    duration: "2h 45m",
                    status: "Completed",
                  },
                ].map((visitor, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{visitor.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{visitor.type}</Badge>
                    </TableCell>
                    <TableCell>
                      {visitor.date} at {visitor.time}
                    </TableCell>
                    <TableCell>{visitor.duration}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                      >
                        {visitor.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 flex items-center justify-end space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
