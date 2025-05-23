import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

const pastElections = [
  {
    id: 1,
    title: "Society Committee Elections 2023",
    date: "December 10, 2023",
    positions: ["President", "Secretary", "Treasurer"],
    candidates: 7,
    voters: 98,
    turnout: "82%",
  },
  {
    id: 2,
    title: "Special Budget Approval Vote",
    date: "August 15, 2023",
    positions: ["Budget Approval"],
    candidates: 1,
    voters: 105,
    turnout: "88%",
  },
  {
    id: 3,
    title: "Society Committee Elections 2022",
    date: "December 12, 2022",
    positions: ["President", "Secretary", "Treasurer"],
    candidates: 8,
    voters: 92,
    turnout: "77%",
  },
  {
    id: 4,
    title: "Renovation Project Vote",
    date: "July 20, 2022",
    positions: ["Project Approval"],
    candidates: 1,
    voters: 88,
    turnout: "73%",
  },
  {
    id: 5,
    title: "Society Committee Elections 2021",
    date: "December 15, 2021",
    positions: ["President", "Secretary", "Treasurer"],
    candidates: 6,
    voters: 90,
    turnout: "75%",
  },
]

export function PastElections() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Past Elections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Election</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Positions</TableHead>
                <TableHead>Candidates</TableHead>
                <TableHead>Turnout</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pastElections.map((election) => (
                <TableRow key={election.id}>
                  <TableCell className="font-medium">{election.title}</TableCell>
                  <TableCell>{election.date}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {election.positions.map((position, index) => (
                        <Badge key={index} variant="outline">
                          {position}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{election.candidates}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{election.turnout}</span>
                      <span className="text-xs text-muted-foreground">({election.voters} voters)</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Results
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
