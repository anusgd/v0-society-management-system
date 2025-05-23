import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const paymentHistory = [
  {
    id: 1,
    date: "April 28, 2024",
    amount: "₹2,500",
    method: "Credit Card",
    status: "successful",
    reference: "TXN123456789",
  },
  {
    id: 2,
    date: "March 30, 2024",
    amount: "₹2,500",
    method: "UPI",
    status: "successful",
    reference: "TXN123456788",
  },
  {
    id: 3,
    date: "February 28, 2024",
    amount: "₹2,500",
    method: "Net Banking",
    status: "successful",
    reference: "TXN123456787",
  },
  {
    id: 4,
    date: "January 30, 2024",
    amount: "₹2,500",
    method: "Credit Card",
    status: "successful",
    reference: "TXN123456786",
  },
  {
    id: 5,
    date: "December 30, 2023",
    amount: "₹2,500",
    method: "UPI",
    status: "successful",
    reference: "TXN123456785",
  },
]

export function PaymentHistory() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Reference</TableHead>
            <TableHead className="text-right">Receipt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentHistory.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="font-medium">{payment.date}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{payment.method}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    payment.status === "successful"
                      ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                      : "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400"
                  }
                >
                  {payment.status}
                </Badge>
              </TableCell>
              <TableCell className="font-mono text-xs">{payment.reference}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
