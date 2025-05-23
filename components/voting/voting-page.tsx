import { MobileNav } from "@/components/mobile-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OngoingElections } from "@/components/voting/ongoing-elections"
import { ElectionResults } from "@/components/voting/election-results"
import { PastElections } from "@/components/voting/past-elections"

export function VotingPage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Voting & Elections</h1>
        <p className="text-muted-foreground">Participate in society elections and view results</p>
      </div>

      <Tabs defaultValue="ongoing" className="space-y-4">
        <TabsList>
          <TabsTrigger value="ongoing">Ongoing Elections</TabsTrigger>
          <TabsTrigger value="results">Election Results</TabsTrigger>
          <TabsTrigger value="past">Past Elections</TabsTrigger>
        </TabsList>
        <TabsContent value="ongoing" className="space-y-4">
          <OngoingElections />
        </TabsContent>
        <TabsContent value="results" className="space-y-4">
          <ElectionResults />
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          <PastElections />
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
