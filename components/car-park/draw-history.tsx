import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const drawHistory = [
  {
    id: 1,
    date: "April 25, 2024",
    participants: 18,
    slots: 6,
    winners: [
      { name: "Rahul Sharma", flat: "A-12", slot: "A-5" },
      { name: "Priya Patel", flat: "B-8", slot: "B-12" },
      { name: "Amit Singh", flat: "A-3", slot: "A-9" },
    ],
    status: "completed",
  },
  {
    id: 2,
    date: "March 25, 2024",
    participants: 15,
    slots: 5,
    winners: [
      { name: "Neha Gupta", flat: "B-15", slot: "B-3" },
      { name: "Rajesh Kumar", flat: "A-7", slot: "A-15" },
    ],
    status: "completed",
  },
  {
    id: 3,
    date: "February 25, 2024",
    participants: 20,
    slots: 8,
    winners: [
      { name: "Sanjay Verma", flat: "A-9", slot: "A-2" },
      { name: "Anita Desai", flat: "B-4", slot: "B-7" },
      { name: "Vikram Mehta", flat: "A-1", slot: "A-18" },
    ],
    status: "completed",
  },
  {
    id: 4,
    date: "January 25, 2024",
    participants: 12,
    slots: 4,
    winners: [
      { name: "Deepak Joshi", flat: "B-11", slot: "B-19" },
      { name: "Meera Shah", flat: "A-5", slot: "A-10" },
    ],
    status: "completed",
  },
]

export function DrawHistory() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Participants</TableHead>
            <TableHead>Slots</TableHead>
            <TableHead>Winners</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drawHistory.map((draw) => (
            <TableRow key={draw.id}>
              <TableCell className="font-medium">{draw.date}</TableCell>
              <TableCell>{draw.participants}</TableCell>
              <TableCell>{draw.slots}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  {draw.winners.map((winner, index) => (
                    <div key={index} className="text-xs">
                      {winner.name} ({winner.flat}) → Slot {winner.slot}
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className="border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                >
                  {draw.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
