import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, Clock, User, Phone, Car, Calendar, CheckCircle2, XCircle } from "lucide-react"

export function VisitorStatus() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Pending Approvals</CardTitle>
            <CardDescription>Visitors waiting for approval</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <div className="mt-2 flex items-center gap-1 text-xs text-amber-600 dark:text-amber-500">
              <Clock className="h-3 w-3" />
              <span>2 require immediate attention</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Expected Today</CardTitle>
            <CardDescription>Visitors expected to arrive today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-500">
              <CheckCircle2 className="h-3 w-3" />
              <span>All passes generated</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Currently Inside</CardTitle>
            <CardDescription>Visitors currently in the society</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <div className="mt-2 flex items-center gap-1 text-xs text-blue-600 dark:text-blue-500">
              <User className="h-3 w-3" />
              <span>1 guest, 1 delivery</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Visitor Passes</CardTitle>
          <CardDescription>Manage and view visitor passes</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="expected">
            <TabsList className="mb-4">
              <TabsTrigger value="expected">Expected</TabsTrigger>
              <TabsTrigger value="inside">Inside</TabsTrigger>
              <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            </TabsList>
            <TabsContent value="expected" className="space-y-4">
              {[
                {
                  name: "John Doe",
                  type: "Guest",
                  time: "2:00 PM",
                  phone: "+91 98765 43210",
                  vehicle: "MH 01 AB 1234",
                  purpose: "Personal visit",
                },
                {
                  name: "Delivery Person",
                  type: "Delivery",
                  time: "3:30 PM",
                  phone: "+91 87654 32109",
                  vehicle: "None",
                  purpose: "Package delivery",
                },
                {
                  name: "Plumber",
                  type: "Service",
                  time: "4:00 PM",
                  phone: "+91 76543 21098",
                  vehicle: "None",
                  purpose: "Plumbing repair",
                },
              ].map((visitor, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-4 p-4 md:flex-row">
                      <div className="flex-shrink-0">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="/placeholder.svg?height=64&width=64" alt={visitor.name} />
                          <AvatarFallback>
                            {visitor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{visitor.name}</h3>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{visitor.type}</Badge>
                              <span className="text-xs text-muted-foreground">Expected at {visitor.time}</span>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className="border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                          >
                            Approved
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{visitor.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Car className="h-4 w-4 text-muted-foreground" />
                            <span>{visitor.vehicle}</span>
                          </div>
                          <div className="flex items-center gap-2 md:col-span-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Purpose: {visitor.purpose}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2 md:w-32">
                        <div className="rounded-md border border-dashed p-2">
                          <QrCode className="h-16 w-16 text-primary" />
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Share Pass
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="inside" className="space-y-4">
              {[
                {
                  name: "Jane Smith",
                  type: "Guest",
                  entryTime: "11:30 AM",
                  phone: "+91 98765 12345",
                  vehicle: "None",
                  purpose: "Meeting with resident",
                },
                {
                  name: "Courier Person",
                  type: "Delivery",
                  entryTime: "12:15 PM",
                  phone: "+91 87654 23456",
                  vehicle: "MH 02 CD 5678",
                  purpose: "Package delivery",
                },
              ].map((visitor, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-4 p-4 md:flex-row">
                      <div className="flex-shrink-0">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="/placeholder.svg?height=64&width=64" alt={visitor.name} />
                          <AvatarFallback>
                            {visitor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{visitor.name}</h3>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{visitor.type}</Badge>
                              <span className="text-xs text-muted-foreground">Entered at {visitor.entryTime}</span>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className="border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
                          >
                            Inside
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{visitor.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Car className="h-4 w-4 text-muted-foreground" />
                            <span>{visitor.vehicle}</span>
                          </div>
                          <div className="flex items-center gap-2 md:col-span-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Purpose: {visitor.purpose}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2 md:w-32">
                        <Button variant="outline" size="sm" className="w-full">
                          Mark Exit
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="pending" className="space-y-4">
              {[
                {
                  name: "Mike Johnson",
                  type: "Guest",
                  requestTime: "10:30 AM",
                  phone: "+91 98765 87654",
                  vehicle: "MH 03 EF 9012",
                  purpose: "Personal visit",
                },
                {
                  name: "Electrician",
                  type: "Service",
                  requestTime: "11:45 AM",
                  phone: "+91 87654 76543",
                  vehicle: "None",
                  purpose: "Electrical repair",
                },
                {
                  name: "Sarah Williams",
                  type: "Guest",
                  requestTime: "12:30 PM",
                  phone: "+91 76543 65432",
                  vehicle: "None",
                  purpose: "Meeting with resident",
                },
              ].map((visitor, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-4 p-4 md:flex-row">
                      <div className="flex-shrink-0">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="/placeholder.svg?height=64&width=64" alt={visitor.name} />
                          <AvatarFallback>
                            {visitor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{visitor.name}</h3>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{visitor.type}</Badge>
                              <span className="text-xs text-muted-foreground">Requested at {visitor.requestTime}</span>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className="border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                          >
                            Pending
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{visitor.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Car className="h-4 w-4 text-muted-foreground" />
                            <span>{visitor.vehicle}</span>
                          </div>
                          <div className="flex items-center gap-2 md:col-span-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Purpose: {visitor.purpose}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2 md:w-32">
                        <Button variant="default" size="sm" className="w-full">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Approve
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          <XCircle className="mr-1 h-3 w-3" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
