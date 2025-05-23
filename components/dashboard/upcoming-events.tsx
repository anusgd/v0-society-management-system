import { Calendar, Clock } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Monthly Society Meeting",
    date: "May 15, 2024",
    time: "7:00 PM",
    location: "Community Hall",
  },
  {
    id: 2,
    title: "Yoga Session",
    date: "May 18, 2024",
    time: "6:00 AM",
    location: "Garden Area",
  },
  {
    id: 3,
    title: "Children's Day Celebration",
    date: "May 25, 2024",
    time: "5:00 PM",
    location: "Playground",
  },
]

export function UpcomingEvents() {
  return (
    <div className="space-y-3">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex items-start gap-3 rounded-md border p-3 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Calendar className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="font-medium">{event.title}</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{event.time}</span>
              </div>
              <div>{event.location}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
