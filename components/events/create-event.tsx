import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, Upload, Users } from "lucide-react"
import { format } from "date-fns"

export function CreateEvent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Event</CardTitle>
        <CardDescription>Schedule a new event for the society</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="eventTitle">Event Title</Label>
          <Input id="eventTitle" placeholder="Enter event title" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Event Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", !Date ? "text-muted-foreground" : "")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(new Date(), "PPP")}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label>Event Time</Label>
            <div className="grid grid-cols-2 gap-2">
              <Select defaultValue="18">
                <SelectTrigger>
                  <SelectValue placeholder="Hour" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, i) => (
                    <SelectItem key={i} value={i.toString()}>
                      {i.toString().padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select defaultValue="00">
                <SelectTrigger>
                  <SelectValue placeholder="Minute" />
                </SelectTrigger>
                <SelectContent>
                  {["00", "15", "30", "45"].map((minute) => (
                    <SelectItem key={minute} value={minute}>
                      {minute}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="eventType">Event Type</Label>
            <Select>
              <SelectTrigger id="eventType">
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="meeting">Meeting</SelectItem>
                <SelectItem value="activity">Activity</SelectItem>
                <SelectItem value="celebration">Celebration</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Select>
              <SelectTrigger id="location">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="community-hall">Community Hall</SelectItem>
                <SelectItem value="garden">Garden Area</SelectItem>
                <SelectItem value="playground">Playground</SelectItem>
                <SelectItem value="meeting-room">Meeting Room</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Event Description</Label>
          <Textarea id="description" placeholder="Enter event details and description" rows={4} />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="maxAttendees">Maximum Attendees</Label>
            <div className="flex items-center gap-2">
              <Input id="maxAttendees" type="number" placeholder="Enter max attendees" defaultValue="50" />
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="organizer">Organizer</Label>
            <Select defaultValue="committee">
              <SelectTrigger id="organizer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="committee">Society Committee</SelectItem>
                <SelectItem value="cultural">Cultural Committee</SelectItem>
                <SelectItem value="sports">Sports Committee</SelectItem>
                <SelectItem value="wellness">Wellness Committee</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Event Image</Label>
          <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-4 text-center hover:bg-muted/50">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Upload className="h-5 w-5 text-primary" />
            </div>
            <div className="text-xs text-muted-foreground">Click to upload an image for the event</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="rsvp" defaultChecked />
            <Label htmlFor="rsvp">Enable RSVP for this event</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="reminder" defaultChecked />
            <Label htmlFor="reminder">Send reminders to residents</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="recurring" />
            <Label htmlFor="recurring">Recurring event</Label>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Create Event</Button>
      </CardFooter>
    </Card>
  )
}
