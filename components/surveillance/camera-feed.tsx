import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Expand, Maximize2, Pause, RepeatIcon as Record, RefreshCw } from "lucide-react"

const cameras = [
  { id: 1, name: "Main Gate", location: "Entrance", status: "online" },
  { id: 2, name: "Lobby", location: "Ground Floor", status: "online" },
  { id: 3, name: "Parking A", location: "Basement", status: "online" },
  { id: 4, name: "Parking B", location: "Basement", status: "online" },
  { id: 5, name: "Garden", location: "Outdoor", status: "online" },
  { id: 6, name: "Playground", location: "Outdoor", status: "offline" },
  { id: 7, name: "Swimming Pool", location: "Outdoor", status: "online" },
  { id: 8, name: "Gym", location: "First Floor", status: "online" },
]

export function CameraFeed() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">Live Camera Feed</h2>
          <p className="text-sm text-muted-foreground">View live feeds from security cameras</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="entrance">Entrance</SelectItem>
              <SelectItem value="ground">Ground Floor</SelectItem>
              <SelectItem value="basement">Basement</SelectItem>
              <SelectItem value="outdoor">Outdoor</SelectItem>
              <SelectItem value="first">First Floor</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cameras.map((camera) => (
          <Card key={camera.id} className={camera.status === "offline" ? "opacity-60" : ""}>
            <CardHeader className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-sm">{camera.name}</CardTitle>
                  <CardDescription className="text-xs">{camera.location}</CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className={
                    camera.status === "online"
                      ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400"
                      : "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400"
                  }
                >
                  {camera.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted">
                {camera.status === "online" ? (
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/placeholder.svg?height=180&width=320&text=Camera+${camera.id}')`,
                    }}
                  >
                    <div className="absolute bottom-2 right-2 flex gap-1">
                      <Button variant="secondary" size="icon" className="h-6 w-6 rounded-full bg-background/80 p-1">
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                      <Button variant="secondary" size="icon" className="h-6 w-6 rounded-full bg-background/80 p-1">
                        <Pause className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="h-6 w-6 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                      >
                        <Record className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute left-2 top-2">
                      <Badge variant="secondary" className="bg-background/80">
                        Live
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <div className="text-xs text-white/90">
                        {new Date().toLocaleTimeString()} • {new Date().toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <div className="text-sm font-medium">Camera Offline</div>
                    <Button variant="outline" size="sm" className="mt-2">
                      <RefreshCw className="mr-2 h-3 w-3" />
                      Retry
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Featured Camera</CardTitle>
          <CardDescription>Expanded view of selected camera</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video rounded-md bg-muted">
            <div
              className="h-full w-full rounded-md bg-cover bg-center"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=800&text=Main+Gate+Camera')`,
              }}
            >
              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button variant="secondary" size="sm" className="bg-background/80">
                  <Expand className="mr-2 h-4 w-4" />
                  Fullscreen
                </Button>
                <Button variant="secondary" size="sm" className="bg-background/80">
                  <Pause className="mr-2 h-4 w-4" />
                  Pause
                </Button>
                <Button variant="secondary" size="sm" className="bg-red-500 text-white hover:bg-red-600">
                  <Record className="mr-2 h-4 w-4" />
                  Record
                </Button>
              </div>
              <div className="absolute left-4 top-4">
                <Badge variant="secondary" className="bg-background/80">
                  Live
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="text-sm text-white/90">
                  {new Date().toLocaleTimeString()} • {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
