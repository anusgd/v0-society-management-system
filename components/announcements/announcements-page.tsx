import { MobileNav } from "@/components/mobile-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnnouncementsFeed } from "@/components/announcements/announcements-feed"
import { CreateAnnouncement } from "@/components/announcements/create-announcement"

export function AnnouncementsPage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
        <p className="text-muted-foreground">Stay updated with the latest society announcements</p>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Announcements</TabsTrigger>
          <TabsTrigger value="pinned">Pinned</TabsTrigger>
          <TabsTrigger value="create">Create Announcement</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <AnnouncementsFeed filter="all" />
        </TabsContent>
        <TabsContent value="pinned" className="space-y-4">
          <AnnouncementsFeed filter="pinned" />
        </TabsContent>
        <TabsContent value="create" className="space-y-4">
          <CreateAnnouncement />
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
