import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle2, Eye, Trash2 } from "lucide-react"

const reportedMessages = [
  {
    id: 1,
    message: "This is inappropriate content that violates community guidelines",
    author: "Anonymous User",
    authorFlat: "B-12",
    reportedBy: "Priya Patel",
    reason: "Inappropriate content",
    timestamp: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    message: "Spam message promoting external services",
    author: "John Doe",
    authorFlat: "A-5",
    reportedBy: "Rahul Sharma",
    reason: "Spam",
    timestamp: "1 day ago",
    status: "resolved",
  },
  {
    id: 3,
    message: "Offensive language used in discussion",
    author: "Jane Smith",
    authorFlat: "B-3",
    reportedBy: "Amit Singh",
    reason: "Offensive language",
    timestamp: "2 days ago",
    status: "pending",
  },
]

const moderationActions = [
  {
    id: 1,
    action: "Message deleted",
    target: "Inappropriate content about neighbors",
    moderator: "Society Admin",
    timestamp: "1 hour ago",
    type: "delete",
  },
  {
    id: 2,
    action: "User warned",
    target: "John Doe (A-5)",
    moderator: "Society Admin",
    timestamp: "1 day ago",
    type: "warn",
  },
  {
    id: 3,
    action: "Topic locked",
    target: "Heated discussion about parking",
    moderator: "Society Admin",
    timestamp: "2 days ago",
    type: "lock",
  },
  {
    id: 4,
    action: "User temporarily banned",
    target: "Jane Smith (B-3)",
    moderator: "Society Admin",
    timestamp: "3 days ago",
    type: "ban",
  },
]

const bannedUsers = [
  {
    id: 1,
    name: "Jane Smith",
    flat: "B-3",
    reason: "Repeated violations",
    bannedBy: "Society Admin",
    bannedDate: "3 days ago",
    duration: "7 days",
    status: "active",
  },
  {
    id: 2,
    name: "Mike Johnson",
    flat: "A-8",
    reason: "Spam posting",
    bannedBy: "Society Admin",
    bannedDate: "1 week ago",
    duration: "3 days",
    status: "expired",
  },
]

export function ChatModeration() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Chat Moderation</h2>
          <p className="text-sm text-muted-foreground">Manage reported content and user behavior</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />3 pending reports
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="reports" className="space-y-4">
        <TabsList>
          <TabsTrigger value="reports">Reported Messages</TabsTrigger>
          <TabsTrigger value="actions">Moderation Log</TabsTrigger>
          <TabsTrigger value="banned">Banned Users</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reported Messages</CardTitle>
              <CardDescription>Review and take action on reported content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reportedMessages.map((report) => (
                  <Card key={report.id} className="border-l-4 border-l-amber-500">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt={report.author} />
                              <AvatarFallback className="text-xs">
                                {report.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{report.author}</div>
                              <div className="text-xs text-muted-foreground">{report.authorFlat}</div>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className={
                              report.status === "pending"
                                ? "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                                : "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                            }
                          >
                            {report.status}
                          </Badge>
                        </div>
                        <div className="rounded-md bg-muted p-3">
                          <p className="text-sm">{report.message}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-muted-foreground">
                            Reported by {report.reportedBy} • {report.reason} • {report.timestamp}
                          </div>
                          {report.status === "pending" && (
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="mr-2 h-3 w-3" />
                                View Context
                              </Button>
                              <Button variant="outline" size="sm">
                                <CheckCircle2 className="mr-2 h-3 w-3" />
                                Approve
                              </Button>
                              <Button variant="destructive" size="sm">
                                <Trash2 className="mr-2 h-3 w-3" />
                                Delete
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="actions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Moderation Log</CardTitle>
              <CardDescription>History of moderation actions taken</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Action</TableHead>
                      <TableHead>Target</TableHead>
                      <TableHead>Moderator</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {moderationActions.map((action) => (
                      <TableRow key={action.id}>
                        <TableCell className="font-medium">{action.action}</TableCell>
                        <TableCell>{action.target}</TableCell>
                        <TableCell>{action.moderator}</TableCell>
                        <TableCell>{action.timestamp}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              action.type === "delete"
                                ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400"
                                : action.type === "warn"
                                  ? "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                                  : action.type === "ban"
                                    ? "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-900 dark:bg-purple-900/20 dark:text-purple-400"
                                    : "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
                            }
                          >
                            {action.type}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="banned" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Banned Users</CardTitle>
              <CardDescription>Manage user bans and restrictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Banned By</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bannedUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.name} />
                              <AvatarFallback className="text-xs">
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{user.name}</div>
                              <div className="text-xs text-muted-foreground">{user.flat}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.reason}</TableCell>
                        <TableCell>{user.bannedBy}</TableCell>
                        <TableCell>{user.duration}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              user.status === "active"
                                ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400"
                                : "border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-800 dark:bg-gray-800/20 dark:text-gray-400"
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          {user.status === "active" ? (
                            <Button variant="outline" size="sm">
                              Unban
                            </Button>
                          ) : (
                            <Button variant="ghost" size="sm" disabled>
                              Expired
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Moderation Settings</CardTitle>
              <CardDescription>Configure chat moderation rules and policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Auto-Moderation</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Enable automatic spam detection</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Filter inappropriate language</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Require approval for new member posts</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Message Limits</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm text-muted-foreground">Max messages per minute</label>
                      <input type="number" className="w-full rounded-md border px-3 py-2" defaultValue="5" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm text-muted-foreground">Max message length</label>
                      <input type="number" className="w-full rounded-md border px-3 py-2" defaultValue="500" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Moderator Permissions</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Can delete messages</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Can ban users</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Can lock topics</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
