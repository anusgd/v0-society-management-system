import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CalendarDays, Clock, Users } from "lucide-react"

export function LuckyDrawPanel() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <div className="mb-4 space-y-2">
          <h3 className="font-medium">Next Lucky Draw</h3>
          <p className="text-sm text-muted-foreground">Select a date to participate in the upcoming lucky draw</p>
        </div>
        <Calendar mode="single" selected={new Date(2024, 4, 25)} className="rounded-md border" />
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="mb-2 font-medium">Draw Details</h3>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <Label>Date</Label>
                    <p className="font-medium">May 25, 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <Label>Time</Label>
                    <p className="font-medium">11:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <Label>Participants</Label>
                    <p className="font-medium">12 / 20</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="mb-2 font-medium">Available Slots</h3>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Area A:</span>
                  <span className="font-medium">5 slots</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Area B:</span>
                  <span className="font-medium">3 slots</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between">
                  <span className="font-medium">Total:</span>
                  <span className="font-medium">8 slots</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
