import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, Save, Upload } from "lucide-react"

export function ProfileSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal information and profile details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                size="icon"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-background"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Profile Picture</h3>
              <p className="text-sm text-muted-foreground">Upload a new profile picture</p>
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Upload Image
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Rahul" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Sharma" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="rahul.sharma@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+91 98765 43210" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="flat">Flat Number</Label>
              <Input id="flat" defaultValue="A-7" readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="block">Block</Label>
              <Select defaultValue="a">
                <SelectTrigger id="block">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Block A</SelectItem>
                  <SelectItem value="b">Block B</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself..."
              defaultValue="Resident of Green Valley Society since 2020. Love to participate in community events."
            />
          </div>

          <div className="flex justify-end">
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Contact</CardTitle>
          <CardDescription>Add emergency contact information for safety purposes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="emergencyName">Contact Name</Label>
              <Input id="emergencyName" placeholder="Enter contact name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergencyPhone">Contact Phone</Label>
              <Input id="emergencyPhone" type="tel" placeholder="Enter phone number" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="relationship">Relationship</Label>
            <Select>
              <SelectTrigger id="relationship">
                <SelectValue placeholder="Select relationship" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spouse">Spouse</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
                <SelectItem value="sibling">Sibling</SelectItem>
                <SelectItem value="child">Child</SelectItem>
                <SelectItem value="friend">Friend</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end">
            <Button variant="outline">Add Emergency Contact</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
