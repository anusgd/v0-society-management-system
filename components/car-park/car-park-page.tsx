import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CarParkSlots } from "@/components/car-park/car-park-slots"
import { DrawHistory } from "@/components/car-park/draw-history"
import { LuckyDrawPanel } from "@/components/car-park/lucky-draw-panel"

export function CarParkPage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Car Park Allotment</h1>
        <p className="text-muted-foreground">Manage your parking slots and participate in lucky draws</p>
      </div>

      <Tabs defaultValue="slots" className="space-y-4">
        <TabsList>
          <TabsTrigger value="slots">Parking Slots</TabsTrigger>
          <TabsTrigger value="lucky-draw">Lucky Draw</TabsTrigger>
          <TabsTrigger value="history">Draw History</TabsTrigger>
        </TabsList>
        <TabsContent value="slots" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Resident Slot Grid</CardTitle>
                  <CardDescription>Current parking slot allocations</CardDescription>
                </CardHeader>
                <CardContent>
                  <CarParkSlots />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Your Allocation</CardTitle>
                  <CardDescription>Details of your current parking slot</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4 text-center">
                    <div className="text-4xl font-bold text-primary">B-12</div>
                    <p className="text-sm text-muted-foreground">Basement Level 1</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Allocation Date:</span>
                      <span>January 15, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Valid Until:</span>
                      <span>June 30, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="font-medium text-green-600 dark:text-green-500">Active</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Request Change</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="lucky-draw" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lucky Draw Panel</CardTitle>
              <CardDescription>Participate in the upcoming parking slot lucky draw</CardDescription>
            </CardHeader>
            <CardContent>
              <LuckyDrawPanel />
            </CardContent>
            <CardFooter>
              <Button className="w-full">Join Draw</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Draw History</CardTitle>
              <CardDescription>Past lucky draws and their results</CardDescription>
            </CardHeader>
            <CardContent>
              <DrawHistory />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
