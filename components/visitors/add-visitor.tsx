"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Clock } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useState } from "react"

export function AddVisitor() {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>("")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register New Visitor</CardTitle>
        <CardDescription>Add details for a new visitor to generate a pass</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Visitor Name</Label>
              <Input id="name" placeholder="Enter visitor's full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter visitor's phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Visitor Type</Label>
              <Select>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select visitor type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="guest">Guest</SelectItem>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="service">Service Provider</SelectItem>
                  <SelectItem value="vendor">Vendor</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicle">Vehicle Number (if any)</Label>
              <Input id="vehicle" placeholder="Enter vehicle number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Visit Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Visit Time</Label>
              <Select onValueChange={setTime} value={time}>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select time">
                    {time ? (
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {time}
                      </div>
                    ) : (
                      "Select time"
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }).map((_, hour) => (
                    <>
                      <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {`${hour.toString().padStart(2, "0")}:00`}
                        </div>
                      </SelectItem>
                      <SelectItem key={`${hour}:30`} value={`${hour}:30`}>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {`${hour.toString().padStart(2, "0")}:30`}
                        </div>
                      </SelectItem>
                    </>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose">Purpose of Visit</Label>
            <Textarea id="purpose" placeholder="Enter the purpose of visit" />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button type="submit" className="flex-1">
              Register Visitor
            </Button>
            <Button variant="outline" type="button" className="flex-1">
              Clear Form
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
