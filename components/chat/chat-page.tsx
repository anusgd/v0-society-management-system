import { MobileNav } from "@/components/mobile-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChatForum } from "@/components/chat/chat-forum"
import { ChatTopics } from "@/components/chat/chat-topics"
import { ChatModeration } from "@/components/chat/chat-moderation"

export function ChatPage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Chat Forum</h1>
        <p className="text-muted-foreground">Connect with your neighbors and discuss community topics</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General Chat</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="moderation">Moderation</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <ChatForum />
        </TabsContent>
        <TabsContent value="topics" className="space-y-4">
          <ChatTopics />
        </TabsContent>
        <TabsContent value="moderation" className="space-y-4">
          <ChatModeration />
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
