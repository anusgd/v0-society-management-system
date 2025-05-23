import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Clock, FileText, Vote } from "lucide-react"

const candidates = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "President",
    flat: "A-7",
    image: "/placeholder.svg?height=100&width=100",
    manifesto: "I promise to improve the society's infrastructure and ensure better security measures.",
    votes: 45,
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "President",
    flat: "B-8",
    image: "/placeholder.svg?height=100&width=100",
    manifesto: "My focus will be on community building and organizing more social events for residents.",
    votes: 38,
  },
  {
    id: 3,
    name: "Amit Singh",
    position: "Secretary",
    flat: "A-3",
    image: "/placeholder.svg?height=100&width=100",
    manifesto: "I will ensure transparent financial management and timely resolution of resident issues.",
    votes: 52,
  },
  {
    id: 4,
    name: "Neha Gupta",
    position: "Secretary",
    flat: "B-15",
    image: "/placeholder.svg?height=100&width=100",
    manifesto: "I plan to digitize all society records and improve communication channels.",
    votes: 47,
  },
]

export function OngoingElections() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Society Committee Elections 2024</CardTitle>
              <CardDescription>Voting ends on May 30, 2024 at 6:00 PM</CardDescription>
            </div>
            <Badge
              variant="outline"
              className="flex items-center gap-1 border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
            >
              <Clock className="h-3 w-3" />
              <span>5 days left</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Voter Participation</span>
              <span className="text-sm text-muted-foreground">68% (82/120 residents)</span>
            </div>
            <Progress value={68} className="h-2" />
          </div>

          <Tabs defaultValue="president">
            <TabsList className="mb-4">
              <TabsTrigger value="president">President</TabsTrigger>
              <TabsTrigger value="secretary">Secretary</TabsTrigger>
              <TabsTrigger value="treasurer">Treasurer</TabsTrigger>
            </TabsList>
            <TabsContent value="president" className="space-y-4">
              {candidates
                .filter((c) => c.position === "President")
                .map((candidate) => (
                  <Card key={candidate.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col gap-4 p-4 md:flex-row">
                        <div className="flex-shrink-0">
                          <Avatar className="h-20 w-20">
                            <AvatarImage src={candidate.image || "/placeholder.svg"} alt={candidate.name} />
                            <AvatarFallback>
                              {candidate.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <h3 className="font-semibold">{candidate.name}</h3>
                            <p className="text-sm text-muted-foreground">Flat {candidate.flat}</p>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium">Manifesto</h4>
                            <p className="text-sm text-muted-foreground">{candidate.manifesto}</p>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2">
                            <FileText className="mr-2 h-4 w-4" />
                            View Full Manifesto
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 md:w-32">
                          <Button className="w-full">
                            <Vote className="mr-2 h-4 w-4" />
                            Vote
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            <TabsContent value="secretary" className="space-y-4">
              {candidates
                .filter((c) => c.position === "Secretary")
                .map((candidate) => (
                  <Card key={candidate.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col gap-4 p-4 md:flex-row">
                        <div className="flex-shrink-0">
                          <Avatar className="h-20 w-20">
                            <AvatarImage src={candidate.image || "/placeholder.svg"} alt={candidate.name} />
                            <AvatarFallback>
                              {candidate.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <h3 className="font-semibold">{candidate.name}</h3>
                            <p className="text-sm text-muted-foreground">Flat {candidate.flat}</p>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium">Manifesto</h4>
                            <p className="text-sm text-muted-foreground">{candidate.manifesto}</p>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2">
                            <FileText className="mr-2 h-4 w-4" />
                            View Full Manifesto
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 md:w-32">
                          <Button className="w-full">
                            <Vote className="mr-2 h-4 w-4" />
                            Vote
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            <TabsContent value="treasurer" className="space-y-4">
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                <AlertCircle className="mb-2 h-8 w-8 text-muted-foreground" />
                <h3 className="text-lg font-medium">No candidates yet</h3>
                <p className="text-sm text-muted-foreground">There are no candidates for the treasurer position yet.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex-col space-y-4 border-t p-4">
          <div className="w-full space-y-2">
            <Label htmlFor="otp">Enter OTP to confirm your vote</Label>
            <div className="flex gap-2">
              <Input id="otp" placeholder="Enter OTP sent to your mobile" />
              <Button variant="outline">Get OTP</Button>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Voting is secure and anonymous</span>
            </div>
            <Button disabled>Confirm Vote</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
