import { Button } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Landmark } from "lucide-react"

export function PaymentForm() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="payment-method">Payment Method</Label>
          <Select defaultValue="card">
            <SelectTrigger id="payment-method">
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="card">Credit/Debit Card</SelectItem>
              <SelectItem value="upi">UPI</SelectItem>
              <SelectItem value="netbanking">Net Banking</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" placeholder="Enter amount" defaultValue="2,500" readOnly />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Card Details</CardTitle>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <Landmark className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="card-name">Name on Card</Label>
            <Input id="card-name" placeholder="Enter name on card" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="Enter card number" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" placeholder="MM/YY" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="CVV" />
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="w-full md:w-auto">
            <CreditCard className="mr-2 h-4 w-4" />
            Pay ₹2,500
          </Button>
        </div>
      </div>
    </div>
  )
}
