import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { CalendarClock, CreditCard, Receipt } from "lucide-react"

export function PaymentDueCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Due</CardTitle>
        <CardDescription>Your current maintenance dues</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border p-4 text-center">
          <div className="text-4xl font-bold text-primary">₹2,500</div>
          <p className="text-sm text-muted-foreground">Due on May 30, 2024</p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Maintenance Fee:</span>
            <span>₹2,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Water Charges:</span>
            <span>₹300</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sinking Fund:</span>
            <span>₹200</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-medium">
            <span>Total:</span>
            <span>₹2,500</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 pt-2">
          <Switch id="auto-reminder" />
          <Label htmlFor="auto-reminder">Enable payment reminders</Label>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full" variant="default">
          <CreditCard className="mr-2 h-4 w-4" />
          Pay Now
        </Button>
        <div className="flex w-full gap-2">
          <Button className="flex-1" variant="outline" size="sm">
            <Receipt className="mr-2 h-4 w-4" />
            Download Invoice
          </Button>
          <Button className="flex-1" variant="outline" size="sm">
            <CalendarClock className="mr-2 h-4 w-4" />
            Schedule
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
