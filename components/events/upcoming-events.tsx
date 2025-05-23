import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, Users, CalendarDays, Bell } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Monthly Society Meeting",
    date: "May 15, 2024",
    time: "7:00 PM",
    location: "Community Hall",
    description: "Monthly meeting to discuss society matters and updates.",
    organizer: "Society Committee",
    attendees: 25,
    type: "meeting",
    image: "/placeholder.svg?height=100&width=100&text=Meeting",
  },
  {
    id: 2,
    title: "Yoga Session",
    date: "May 18, 2024",
    time: "6:00 AM",
    location: "Garden Area",
    description: "Weekly yoga session for all residents. Please bring your own yoga mat.",
    organizer: "Wellness Committee",
    attendees: 15,
    type: "activity",
    image: "/placeholder.svg?height=100&width=100&text=Yoga",
  },
  {
    id: 3,
    title: "Children's Day Celebration",
    date: "May 25, 2024",
    time: "5:00 PM",
    location: "Playground",
    description: "Fun activities and games for children. Snacks and refreshments will be provided.",
    organizer: "Cultural Committee",
    attendees: 40,
    type: "celebration",
    image: "/placeholder.svg?height=100&width=100&text=Children",
  },
  {
    id: 4,
    title: "Cultural Night",
    date: "May 28, 2024",
    time: "7:00 PM",
    location: "Community Hall",
    description: "Cultural performances by society residents. Please register if you want to perform.",
    organizer: "Cultural Committee",
    attendees: 60,
    type: "celebration",
    image: "/placeholder.svg?height=100&width=100&text=Cultural",
  },
  {
    id: 5,
    title: "Gardening Workshop",
    date: "June 2, 2024",
    time: "10:00 AM",
    location: "Garden Area",
    description: "Learn about urban gardening and plant care. Free saplings will be distributed.",
    organizer: "Environment Committee",
    attendees: 20,
    type: "activity",
    image: "/placeholder.svg?height=100&width=100&text=Garden",
  },
]

export function UpcomingEvents() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>This Month</CardTitle>
            <CardDescription>May 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              <CalendarDays className="h-3 w-3" />
              <span>Events scheduled</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>This Week</CardTitle>
            <CardDescription>May 13 - May 19</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>Upcoming events</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Your RSVPs</CardTitle>
            <CardDescription>Events you're attending</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>Confirmed attendance</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Upcoming Events</h2>

        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col gap-4 md:flex-row">
                <div
                  className="h-40 w-full bg-cover bg-center md:h-auto md:w-48"
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{event.title}</h3>
                      <Badge
                        variant="outline"
                        className={
                          event.type === "meeting"
                            ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
                            : event.type === "activity"
                              ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                              : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                        }
                      >
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt={event.organizer} />
                        <AvatarFallback>OC</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Organized by {event.organizer}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Bell className="mr-2 h-3 w-3" />
                        Remind
                      </Button>
                      <Button size="sm">RSVP</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
