import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { FileUp, ImageIcon, FileText, Film } from "lucide-react"

export function CreateAnnouncement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Announcement</CardTitle>
        <CardDescription>Share important information with society members</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Announcement Title</Label>
          <Input id="title" placeholder="Enter announcement title" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="type">Announcement Type</Label>
            <Select>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="alert">Alert</SelectItem>
                <SelectItem value="meeting">Meeting</SelectItem>
                <SelectItem value="event">Event</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2 pt-6">
            <Switch id="pin" />
            <Label htmlFor="pin">Pin to top</Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Announcement Details</Label>
          <Textarea id="description" placeholder="Enter announcement details" rows={5} />
        </div>

        <div className="space-y-2">
          <Label>Attachments</Label>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Button variant="outline" className="flex h-24 flex-col items-center justify-center gap-2">
              <FileUp className="h-5 w-5 text-primary" />
              <span className="text-xs">Upload File</span>
            </Button>
            <Button variant="outline" className="flex h-24 flex-col items-center justify-center gap-2">
              <ImageIcon className="h-5 w-5 text-primary" />
              <span className="text-xs">Add Image</span>
            </Button>
            <Button variant="outline" className="flex h-24 flex-col items-center justify-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-xs">Add PDF</span>
            </Button>
            <Button variant="outline" className="flex h-24 flex-col items-center justify-center gap-2">
              <Film className="h-5 w-5 text-primary" />
              <span className="text-xs">Add Video</span>
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Publish Announcement</Button>
      </CardFooter>
    </Card>
  )
}
