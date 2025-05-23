import { MobileNav } from "@/components/mobile-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IssuesList } from "@/components/issues/issues-list"
import { IssueForm } from "@/components/issues/issue-form"
import { IssueTracker } from "@/components/issues/issue-tracker"

export function IssuesPage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Issue Reporting</h1>
        <p className="text-muted-foreground">Report and track maintenance issues in your apartment</p>
      </div>

      <Tabs defaultValue="my-issues" className="space-y-4">
        <TabsList>
          <TabsTrigger value="my-issues">My Issues</TabsTrigger>
          <TabsTrigger value="raise-issue">Raise Issue</TabsTrigger>
          <TabsTrigger value="tracker">Issue Tracker</TabsTrigger>
        </TabsList>
        <TabsContent value="my-issues" className="space-y-4">
          <IssuesList />
        </TabsContent>
        <TabsContent value="raise-issue" className="space-y-4">
          <IssueForm />
        </TabsContent>
        <TabsContent value="tracker" className="space-y-4">
          <IssueTracker />
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
