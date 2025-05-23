import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Clock, MessageSquare } from "lucide-react"

const issues = [
  {
    id: 1,
    title: "Water Leakage in Bathroom",
    description:
      "There is water leakage from the ceiling of the bathroom. It seems to be coming from the apartment above.",
    category: "Plumbing",
    status: "in-progress",
    priority: "high",
    date: "May 10, 2024",
    assignedTo: "Maintenance Team",
    comments: 3,
  },
  {
    id: 2,
    title: "Electrical Socket Not Working",
    description: "The electrical socket in the living room is not working. I have checked the fuse and it seems fine.",
    category: "Electrical",
    status: "pending",
    priority: "medium",
    date: "May 12, 2024",
    assignedTo: "Pending Assignment",
    comments: 1,
  },
  {
    id: 3,
    title: "Broken Window Handle",
    description: "The handle of the window in the bedroom is broken and needs to be replaced.",
    category: "Carpentry",
    status: "resolved",
    priority: "low",
    date: "April 28, 2024",
    assignedTo: "Maintenance Team",
    comments: 5,
    resolvedDate: "May 5, 2024",
  },
]

export function IssuesList() {
  return (
    <div className="space-y-4">
      {issues.map((issue) => (
        <Card key={issue.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  {issue.title}
                  {issue.status === "resolved" && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                </CardTitle>
                <CardDescription>
                  Reported on {issue.date} • {issue.category}
                </CardDescription>
              </div>
              <Badge
                variant="outline"
                className={
                  issue.status === "resolved"
                    ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                    : issue.status === "in-progress"
                      ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                }
              >
                {issue.status === "in-progress" ? "In Progress" : issue.status === "resolved" ? "Resolved" : "Pending"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{issue.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className={
                  issue.priority === "high"
                    ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400"
                    : issue.priority === "medium"
                      ? "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                      : "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                }
              >
                {issue.priority} priority
              </Badge>
              <Badge variant="outline">Assigned to: {issue.assignedTo}</Badge>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="flex justify-between p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageSquare className="h-4 w-4" />
              <span>{issue.comments} comments</span>
            </div>
            <div className="flex gap-2">
              {issue.status !== "resolved" ? (
                <>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                  <Button variant="default" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Comment
                  </Button>
                </>
              ) : (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Resolved on {issue.resolvedDate}</span>
                </div>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
