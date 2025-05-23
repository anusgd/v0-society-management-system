import { MobileNav } from "@/components/mobile-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CameraFeed } from "@/components/surveillance/camera-feed"
import { AccessLogs } from "@/components/surveillance/access-logs"

export function SurveillancePage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Camera Surveillance</h1>
        <p className="text-muted-foreground">Monitor security cameras and access logs</p>
      </div>

      <Tabs defaultValue="live" className="space-y-4">
        <TabsList>
          <TabsTrigger value="live">Live Feed</TabsTrigger>
          <TabsTrigger value="logs">Access Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="live" className="space-y-4">
          <CameraFeed />
        </TabsContent>
        <TabsContent value="logs" className="space-y-4">
          <AccessLogs />
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
