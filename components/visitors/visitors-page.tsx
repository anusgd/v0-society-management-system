import { MobileNav } from "@/components/mobile-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AddVisitor } from "@/components/visitors/add-visitor"
import { VisitorStatus } from "@/components/visitors/visitor-status"
import { VisitorHistory } from "@/components/visitors/visitor-history"

export function VisitorsPage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Visitor Management</h1>
        <p className="text-muted-foreground">Manage guest entries and track visitor status</p>
      </div>

      <Tabs defaultValue="add" className="space-y-4">
        <TabsList>
          <TabsTrigger value="add">Add Visitor</TabsTrigger>
          <TabsTrigger value="status">Visitor Status</TabsTrigger>
          <TabsTrigger value="history">Visitor History</TabsTrigger>
        </TabsList>
        <TabsContent value="add" className="space-y-4">
          <AddVisitor />
        </TabsContent>
        <TabsContent value="status" className="space-y-4">
          <VisitorStatus />
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <VisitorHistory />
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
