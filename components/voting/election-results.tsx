import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Trophy } from "lucide-react"

export function ElectionResults() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Society Committee Elections 2023</CardTitle>
              <CardDescription>Results announced on December 15, 2023</CardDescription>
            </div>
            <Badge
              variant="outline"
              className="flex items-center gap-1 border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
            >
              <CheckCircle2 className="h-3 w-3" />
              <span>Completed</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="president">
            <TabsList className="mb-4">
              <TabsTrigger value="president">President</TabsTrigger>
              <TabsTrigger value="secretary">Secretary</TabsTrigger>
              <TabsTrigger value="treasurer">Treasurer</TabsTrigger>
            </TabsList>
            <TabsContent value="president">
              <div className="space-y-6">
                <div className="flex flex-col items-center justify-center rounded-lg border bg-muted/20 p-6 text-center">
                  <div className="relative mb-4">
                    <Avatar className="h-24 w-24 border-4 border-primary">
                      <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Rajesh Kumar" />
                      <AvatarFallback>RK</AvatarFallback>
                    </Avatar>
                    <div className="absolute -right-2 -top-2 rounded-full bg-primary p-1 text-white">
                      <Trophy className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Rajesh Kumar</h3>
                  <p className="text-sm text-muted-foreground">Flat A-7</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="secondary">58% votes</Badge>
                    <Badge variant="outline">Winner</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Vote Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Rajesh Kumar" />
                              <AvatarFallback>RK</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">Rajesh Kumar</span>
                          </div>
                          <span className="text-sm font-medium">58% (70 votes)</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-[58%] rounded-full bg-primary"></div>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Priya Patel" />
                              <AvatarFallback>PP</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">Priya Patel</span>
                          </div>
                          <span className="text-sm font-medium">42% (50 votes)</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-[42%] rounded-full bg-muted-foreground/50"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Voter Turnout</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex h-full flex-col items-center justify-center">
                        <div className="relative h-32 w-32">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-3xl font-bold">82%</div>
                              <div className="text-xs text-muted-foreground">Turnout</div>
                            </div>
                          </div>
                          <svg className="h-32 w-32" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="8"
                              className="stroke-muted"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="8"
                              strokeDasharray="251.2"
                              strokeDashoffset="45.2"
                              className="stroke-primary"
                              transform="rotate(-90 50 50)"
                            />
                          </svg>
                        </div>
                        <div className="mt-4 text-center text-sm text-muted-foreground">
                          <p>98 out of 120 eligible voters</p>
                          <p>participated in this election</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="secretary">
              <div className="space-y-6">
                <div className="flex flex-col items-center justify-center rounded-lg border bg-muted/20 p-6 text-center">
                  <div className="relative mb-4">
                    <Avatar className="h-24 w-24 border-4 border-primary">
                      <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Neha Gupta" />
                      <AvatarFallback>NG</AvatarFallback>
                    </Avatar>
                    <div className="absolute -right-2 -top-2 rounded-full bg-primary p-1 text-white">
                      <Trophy className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Neha Gupta</h3>
                  <p className="text-sm text-muted-foreground">Flat B-15</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="secondary">53% votes</Badge>
                    <Badge variant="outline">Winner</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Vote Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Neha Gupta" />
                              <AvatarFallback>NG</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">Neha Gupta</span>
                          </div>
                          <span className="text-sm font-medium">53% (52 votes)</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-[53%] rounded-full bg-primary"></div>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Amit Singh" />
                              <AvatarFallback>AS</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">Amit Singh</span>
                          </div>
                          <span className="text-sm font-medium">47% (46 votes)</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-[47%] rounded-full bg-muted-foreground/50"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Voter Turnout</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex h-full flex-col items-center justify-center">
                        <div className="relative h-32 w-32">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-3xl font-bold">82%</div>
                              <div className="text-xs text-muted-foreground">Turnout</div>
                            </div>
                          </div>
                          <svg className="h-32 w-32" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="8"
                              className="stroke-muted"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="8"
                              strokeDasharray="251.2"
                              strokeDashoffset="45.2"
                              className="stroke-primary"
                              transform="rotate(-90 50 50)"
                            />
                          </svg>
                        </div>
                        <div className="mt-4 text-center text-sm text-muted-foreground">
                          <p>98 out of 120 eligible voters</p>
                          <p>participated in this election</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="treasurer">
              <div className="space-y-6">
                <div className="flex flex-col items-center justify-center rounded-lg border bg-muted/20 p-6 text-center">
                  <div className="relative mb-4">
                    <Avatar className="h-24 w-24 border-4 border-primary">
                      <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Sanjay Verma" />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>
                    <div className="absolute -right-2 -top-2 rounded-full bg-primary p-1 text-white">
                      <Trophy className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Sanjay Verma</h3>
                  <p className="text-sm text-muted-foreground">Flat A-9</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="secondary">Unopposed</Badge>
                    <Badge variant="outline">Winner</Badge>
                  </div>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Voter Turnout</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex h-full flex-col items-center justify-center">
                      <div className="relative h-32 w-32">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold">82%</div>
                            <div className="text-xs text-muted-foreground">Turnout</div>
                          </div>
                        </div>
                        <svg className="h-32 w-32" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            className="stroke-muted"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeDasharray="251.2"
                            strokeDashoffset="45.2"
                            className="stroke-primary"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                      </div>
                      <div className="mt-4 text-center text-sm text-muted-foreground">
                        <p>98 out of 120 eligible voters</p>
                        <p>participated in this election</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
