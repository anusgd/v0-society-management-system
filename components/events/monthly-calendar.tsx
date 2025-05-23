"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, CalendarIcon, MapPin, Users } from "lucide-react"

// Generate days for the calendar
const generateCalendarDays = (month: number, year: number) => {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  const days = []

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      date: daysInPrevMonth - i,
      currentMonth: false,
      events: [],
    })
  }

  // Current month days with events
  for (let i = 1; i <= daysInMonth; i++) {
    const events = eventsData.filter((event) => {
      const eventDate = new Date(event.date)
      return eventDate.getDate() === i && eventDate.getMonth() === month && eventDate.getFullYear() === year
    })

    days.push({
      date: i,
      currentMonth: true,
      events,
    })
  }

  // Next month days to fill the grid
  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: i,
      currentMonth: false,
      events: [],
    })
  }

  return days
}

// Sample events data
const eventsData = [
  {
    id: 1,
    title: "Monthly Society Meeting",
    date: "2024-05-15T19:00:00",
    location: "Community Hall",
    type: "meeting",
    description: "Monthly meeting to discuss society matters and updates.",
    attendees: 25,
  },
  {
    id: 2,
    title: "Yoga Session",
    date: "2024-05-18T06:00:00",
    location: "Garden Area",
    type: "activity",
    description: "Weekly yoga session for all residents.",
    attendees: 15,
  },
  {
    id: 3,
    title: "Children's Day Celebration",
    date: "2024-05-25T17:00:00",
    location: "Playground",
    type: "celebration",
    description: "Fun activities and games for children.",
    attendees: 40,
  },
  {
    id: 4,
    title: "Maintenance Committee Meeting",
    date: "2024-05-10T18:00:00",
    location: "Meeting Room",
    type: "meeting",
    description: "Discussion about upcoming maintenance projects.",
    attendees: 8,
  },
  {
    id: 5,
    title: "Cultural Night",
    date: "2024-05-28T19:00:00",
    location: "Community Hall",
    type: "celebration",
    description: "Cultural performances by society residents.",
    attendees: 60,
  },
]

export function MonthlyCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const calendarDays = generateCalendarDays(currentMonth, currentYear)

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const handleEventClick = (event: any) => {
    setSelectedEvent(event)
    setIsDialogOpen(true)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            {monthNames[currentMonth]} {currentYear}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setCurrentMonth(new Date().getMonth())
                setCurrentYear(new Date().getFullYear())
              }}
            >
              <CalendarIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={goToNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CardDescription>View and manage society events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1">
          {dayNames.map((day) => (
            <div key={day} className="p-2 text-center text-sm font-medium">
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`min-h-24 rounded-md border p-1 ${
                day.currentMonth ? "bg-background" : "bg-muted/50 text-muted-foreground"
              } ${
                day.date === new Date().getDate() &&
                currentMonth === new Date().getMonth() &&
                currentYear === new Date().getFullYear()
                  ? "border-primary"
                  : ""
              }`}
            >
              <div className="flex justify-between">
                <span className="text-sm">{day.date}</span>
                {day.date === new Date().getDate() &&
                  currentMonth === new Date().getMonth() &&
                  currentYear === new Date().getFullYear() && (
                    <Badge variant="outline" className="border-primary bg-primary/10 text-xs">
                      Today
                    </Badge>
                  )}
              </div>
              <div className="mt-1 space-y-1">
                {day.events.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => handleEventClick(event)}
                    className={`cursor-pointer rounded-sm p-1 text-xs ${
                      event.type === "meeting"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                        : event.type === "activity"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400"
                    }`}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {selectedEvent && (
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedEvent.title}</DialogTitle>
                <DialogDescription>Event details</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  <span>
                    {new Date(selectedEvent.date).toLocaleDateString()} at{" "}
                    {new Date(selectedEvent.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{selectedEvent.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{selectedEvent.attendees} attendees</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{selectedEvent.description}</p>
                </div>
                <div className="flex justify-between">
                  <Badge
                    variant="outline"
                    className={
                      selectedEvent.type === "meeting"
                        ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
                        : selectedEvent.type === "activity"
                          ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                          : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                    }
                  >
                    {selectedEvent.type}
                  </Badge>
                  <Button variant="outline" size="sm">
                    RSVP
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </CardContent>
    </Card>
  )
}
