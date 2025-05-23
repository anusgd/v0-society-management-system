import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Paperclip, Send, Smile, ThumbsUp, Reply, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const messages = [
  {
    id: 1,
    user: "Rahul Sharma",
    flat: "A-7",
    avatar: "/placeholder.svg?height=40&width=40",
    message: "Good morning everyone! Has anyone noticed the water pressure issue in Block A?",
    timestamp: "9:30 AM",
    likes: 3,
    replies: 2,
    isAdmin: false,
  },
  {
    id: 2,
    user: "Priya Patel",
    flat: "B-8",
    avatar: "/placeholder.svg?height=40&width=40",
    message: "Yes, I've been facing the same issue since yesterday. Should we report this to the maintenance team?",
    timestamp: "9:45 AM",
    likes: 1,
    replies: 0,
    isAdmin: false,
  },
  {
    id: 3,
    user: "Society Admin",
    flat: "Admin",
    avatar: "/placeholder.svg?height=40&width=40",
    message:
      "Thank you for reporting this. We've contacted the water department and they will be fixing the issue today between 2-4 PM.",
    timestamp: "10:15 AM",
    likes: 8,
    replies: 1,
    isAdmin: true,
  },
  {
    id: 4,
    user: "Amit Singh",
    flat: "A-3",
    avatar: "/placeholder.svg?height=40&width=40",
    message: "Great! Thanks for the quick response. Will there be any water supply interruption during the fix?",
    timestamp: "10:30 AM",
    likes: 2,
    replies: 0,
    isAdmin: false,
  },
  {
    id: 5,
    user: "Neha Gupta",
    flat: "B-15",
    avatar: "/placeholder.svg?height=40&width=40",
    message: "I wanted to discuss about organizing a community event for children. What do you all think?",
    timestamp: "11:00 AM",
    likes: 5,
    replies: 3,
    isAdmin: false,
  },
]

export function ChatForum() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <div className="lg:col-span-3">
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="flex-shrink-0">
            <CardTitle className="flex items-center justify-between">
              <span>General Discussion</span>
              <Badge variant="secondary">24 online</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex gap-3">
                    <Avatar className="h-10 w-10 flex-shrink-0">
                      <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.user} />
                      <AvatarFallback>
                        {message.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{message.user}</span>
                        <span className="text-xs text-muted-foreground">{message.flat}</span>
                        {message.isAdmin && (
                          <Badge variant="outline" className="text-xs">
                            Admin
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                      </div>
                      <p className="text-sm">{message.message}</p>
                      <div className="flex items-center gap-4 pt-1">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <ThumbsUp className="mr-1 h-3 w-3" />
                          {message.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <Reply className="mr-1 h-3 w-3" />
                          {message.replies > 0 ? `${message.replies} replies` : "Reply"}
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Report</DropdownMenuItem>
                            <DropdownMenuItem>Copy link</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Separator />
            <div className="p-4">
              <div className="flex gap-2">
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                  <AvatarFallback>YU</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <Textarea placeholder="Type your message..." className="min-h-[60px] resize-none" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Smile className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm">
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Active Members</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Rahul Sharma", flat: "A-7", status: "online" },
              { name: "Priya Patel", flat: "B-8", status: "online" },
              { name: "Amit Singh", flat: "A-3", status: "away" },
              { name: "Neha Gupta", flat: "B-15", status: "online" },
              { name: "Society Admin", flat: "Admin", status: "online" },
            ].map((member, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={member.name} />
                    <AvatarFallback className="text-xs">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background ${
                      member.status === "online"
                        ? "bg-green-500"
                        : member.status === "away"
                          ? "bg-amber-500"
                          : "bg-gray-400"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{member.name}</div>
                  <div className="text-xs text-muted-foreground">{member.flat}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Chat Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Be respectful to all community members</p>
            <p>• No spam or promotional content</p>
            <p>• Keep discussions relevant to society matters</p>
            <p>• Report inappropriate behavior</p>
            <p>• Use appropriate language</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
