import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Upload } from "lucide-react"

export function IssueForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Raise a New Issue</CardTitle>
        <CardDescription>Fill in the details to report a maintenance issue</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Issue Title</Label>
          <Input id="title" placeholder="Enter a brief title for the issue" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plumbing">Plumbing</SelectItem>
                <SelectItem value="electrical">Electrical</SelectItem>
                <SelectItem value="carpentry">Carpentry</SelectItem>
                <SelectItem value="painting">Painting</SelectItem>
                <SelectItem value="cleaning">Cleaning</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select>
              <SelectTrigger id="priority">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Provide a detailed description of the issue" rows={5} />
        </div>

        <div className="space-y-2">
          <Label>Upload Images</Label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-4 text-center hover:bg-muted/50">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Upload className="h-5 w-5 text-primary" />
              </div>
              <div className="text-xs text-muted-foreground">Click to upload</div>
            </div>
            <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-4 text-center hover:bg-muted/50">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Camera className="h-5 w-5 text-primary" />
              </div>
              <div className="text-xs text-muted-foreground">Take a photo</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Submit Issue</Button>
      </CardFooter>
    </Card>
  )
}
