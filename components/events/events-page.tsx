import { MobileNav } from "@/components/mobile-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MonthlyCalendar } from "@/components/events/monthly-calendar"
import { UpcomingEvents } from "@/components/events/upcoming-events"
import { CreateEvent } from "@/components/events/create-event"

export function EventsPage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Event Calendar</h1>
        <p className="text-muted-foreground">View and manage society events and activities</p>
      </div>

      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="create">Create Event</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar" className="space-y-4">
          <MonthlyCalendar />
        </TabsContent>
        <TabsContent value="upcoming" className="space-y-4">
          <UpcomingEvents />
        </TabsContent>
        <TabsContent value="create" className="space-y-4">
          <CreateEvent />
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
