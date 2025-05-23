import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Plus, Pin, TrendingUp } from "lucide-react"

const topics = [
  {
    id: 1,
    title: "Water Pressure Issues in Block A",
    description: "Discussion about recent water pressure problems",
    author: "Rahul Sharma",
    authorFlat: "A-7",
    replies: 12,
    views: 45,
    lastActivity: "2 hours ago",
    isPinned: true,
    category: "Maintenance",
  },
  {
    id: 2,
    title: "Community Event Planning",
    description: "Let's organize a fun event for children and families",
    author: "Neha Gupta",
    authorFlat: "B-15",
    replies: 8,
    views: 32,
    lastActivity: "4 hours ago",
    isPinned: false,
    category: "Events",
  },
  {
    id: 3,
    title: "Parking Slot Allocation Discussion",
    description: "Feedback on the new parking allocation system",
    author: "Amit Singh",
    authorFlat: "A-3",
    replies: 15,
    views: 67,
    lastActivity: "1 day ago",
    isPinned: false,
    category: "Parking",
  },
  {
    id: 4,
    title: "Security Camera Installation",
    description: "Proposal for additional security cameras",
    author: "Priya Patel",
    authorFlat: "B-8",
    replies: 6,
    views: 28,
    lastActivity: "2 days ago",
    isPinned: false,
    category: "Security",
  },
  {
    id: 5,
    title: "Gym Equipment Maintenance",
    description: "Some equipment needs repair or replacement",
    author: "Rajesh Kumar",
    authorFlat: "A-7",
    replies: 4,
    views: 19,
    lastActivity: "3 days ago",
    isPinned: false,
    category: "Amenities",
  },
]

const categories = [
  { name: "All", count: 25, color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400" },
  { name: "Maintenance", count: 8, color: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400" },
  { name: "Events", count: 5, color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" },
  { name: "Parking", count: 4, color: "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400" },
  { name: "Security", count: 3, color: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400" },
  { name: "Amenities", count: 5, color: "bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400" },
]

export function ChatTopics() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <div className="lg:col-span-3 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Discussion Topics</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Topic
          </Button>
        </div>

        <div className="space-y-3">
          {topics.map((topic) => (
            <Card key={topic.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt={topic.author} />
                    <AvatarFallback>
                      {topic.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      {topic.isPinned && <Pin className="h-4 w-4 text-amber-500" />}
                      <h3 className="font-semibold hover:text-primary">{topic.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {topic.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>
                          by {topic.author} ({topic.authorFlat})
                        </span>
                        <span>{topic.lastActivity}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{topic.replies}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          <span>{topic.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 cursor-pointer"
              >
                <span className="text-sm font-medium">{category.name}</span>
                <Badge variant="secondary" className={category.color}>
                  {category.count}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Popular Topics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topics
              .sort((a, b) => b.views - a.views)
              .slice(0, 3)
              .map((topic) => (
                <div key={topic.id} className="space-y-1">
                  <h4 className="text-sm font-medium line-clamp-2 hover:text-primary cursor-pointer">{topic.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{topic.views} views</span>
                    <span>•</span>
                    <span>{topic.replies} replies</span>
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Forum Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Total Topics:</span>
              <span className="text-sm font-medium">25</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Total Posts:</span>
              <span className="text-sm font-medium">156</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Active Members:</span>
              <span className="text-sm font-medium">42</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Online Now:</span>
              <span className="text-sm font-medium">8</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
