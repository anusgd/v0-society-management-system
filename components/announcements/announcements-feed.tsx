import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Megaphone, AlertTriangle, Calendar, FileText, Pin, ThumbsUp, MessageSquare, Share2 } from "lucide-react"

const announcements = [
  {
    id: 1,
    title: "Monthly Society Meeting",
    description:
      "The monthly society meeting will be held on May 15th at 7:00 PM in the community hall. All residents are requested to attend.",
    date: "May 10, 2024",
    type: "meeting",
    isPinned: true,
    likes: 12,
    comments: 5,
    attachments: ["meeting_agenda.pdf"],
  },
  {
    id: 2,
    title: "Water Supply Interruption",
    description:
      "Due to maintenance work, there will be no water supply on May 20th from 10:00 AM to 2:00 PM. Please store water accordingly.",
    date: "May 12, 2024",
    type: "alert",
    isPinned: true,
    likes: 8,
    comments: 15,
    attachments: [],
  },
  {
    id: 3,
    title: "New Gym Equipment",
    description:
      "We are pleased to inform you that new gym equipment has been installed in the society gym. The gym will be open from 6:00 AM to 10:00 PM.",
    date: "May 8, 2024",
    type: "general",
    isPinned: false,
    likes: 24,
    comments: 7,
    attachments: ["gym_equipment.jpg"],
  },
  {
    id: 4,
    title: "Annual Cultural Event",
    description:
      "The annual cultural event will be held on June 5th. All residents interested in participating should register by May 25th.",
    date: "May 5, 2024",
    type: "event",
    isPinned: false,
    likes: 32,
    comments: 18,
    attachments: ["event_details.pdf", "registration_form.pdf"],
  },
  {
    id: 5,
    title: "Security System Upgrade",
    description:
      "We are upgrading our security system on May 22nd. There might be temporary disruptions in the access control system during the upgrade.",
    date: "May 3, 2024",
    type: "alert",
    isPinned: false,
    likes: 15,
    comments: 6,
    attachments: [],
  },
  {
    id: 6,
    title: "New Gardening Initiative",
    description:
      "We are starting a new gardening initiative in our society. Interested residents can join the gardening committee by contacting the society office.",
    date: "April 28, 2024",
    type: "general",
    isPinned: false,
    likes: 28,
    comments: 12,
    attachments: ["gardening_plan.pdf"],
  },
]

export function AnnouncementsFeed({ filter = "all" }: { filter?: "all" | "pinned" }) {
  const filteredAnnouncements = filter === "pinned" ? announcements.filter((a) => a.isPinned) : announcements

  return (
    <div className="space-y-4">
      {filteredAnnouncements.map((announcement) => (
        <Card key={announcement.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {announcement.type === "meeting" && <Calendar className="h-4 w-4 text-blue-500" />}
                  {announcement.type === "alert" && <AlertTriangle className="h-4 w-4 text-red-500" />}
                  {announcement.type === "general" && <Megaphone className="h-4 w-4 text-green-500" />}
                  {announcement.type === "event" && <FileText className="h-4 w-4 text-purple-500" />}
                  <h3 className="font-semibold">{announcement.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  {announcement.isPinned && <Pin className="h-3 w-3 text-amber-500" />}
                  <Badge
                    variant="outline"
                    className={`${
                      announcement.type === "alert"
                        ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400"
                        : announcement.type === "meeting"
                          ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
                          : announcement.type === "event"
                            ? "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-900 dark:bg-purple-900/20 dark:text-purple-400"
                            : "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                    }`}
                  >
                    {announcement.type}
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{announcement.description}</p>

              {announcement.attachments.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {announcement.attachments.map((attachment, index) => (
                    <Badge key={index} variant="secondary" className="cursor-pointer">
                      {attachment}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="text-xs text-muted-foreground">Posted on {announcement.date}</div>

              <div className="mt-2 flex items-center gap-4 border-t pt-3 text-sm text-muted-foreground">
                <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{announcement.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>{announcement.comments}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
                {!announcement.isPinned && (
                  <Button variant="ghost" size="sm" className="ml-auto flex items-center gap-1 px-2">
                    <Pin className="h-4 w-4" />
                    <span>Pin</span>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
