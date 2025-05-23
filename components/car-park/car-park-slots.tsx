import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Generate mock data for parking slots
const generateSlots = () => {
  const areas = ["A", "B"]
  const slots = []

  for (const area of areas) {
    for (let i = 1; i <= 20; i++) {
      const status = Math.random() > 0.7 ? "available" : "occupied"
      const owner = status === "occupied" ? `Flat ${area}-${Math.floor(Math.random() * 20) + 1}` : null

      slots.push({
        id: `${area}-${i}`,
        area,
        number: i,
        status,
        owner,
      })
    }
  }

  return slots
}

const parkingSlots = generateSlots()

export function CarParkSlots() {
  return (
    <div className="space-y-6">
      {["A", "B"].map((area) => (
        <div key={area} className="space-y-2">
          <h3 className="font-medium">Area {area}</h3>
          <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
            {parkingSlots
              .filter((slot) => slot.area === area)
              .map((slot) => (
                <TooltipProvider key={slot.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={cn(
                          "flex h-10 items-center justify-center rounded-md border text-sm font-medium transition-colors",
                          slot.status === "available"
                            ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
                            : slot.status === "occupied"
                              ? "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
                              : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-800/20 dark:text-gray-400 dark:hover:bg-gray-800/30",
                        )}
                      >
                        {slot.number}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Slot {slot.id}</p>
                      <p className="text-xs text-muted-foreground">
                        {slot.status === "occupied" ? `Occupied by ${slot.owner}` : "Available"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
          </div>
        </div>
      ))}
      <div className="flex flex-wrap gap-3 pt-2">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/20"></div>
          <span className="text-xs text-muted-foreground">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-900/20"></div>
          <span className="text-xs text-muted-foreground">Occupied</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full border-primary/20 bg-primary/10"></div>
          <span className="text-xs text-muted-foreground">Your Slot</span>
        </div>
      </div>
    </div>
  )
}
