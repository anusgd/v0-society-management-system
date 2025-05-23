"use client"

import { cn } from "@/lib/utils"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Plus,
  Wrench,
  Zap,
  Droplets,
  Shield,
  Car,
  Home,
  Scissors,
  Stethoscope,
} from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const serviceCategories = [
  { id: "plumbing", name: "Plumbing", icon: Droplets, color: "bg-blue-500" },
  { id: "electrical", name: "Electrical", icon: Zap, color: "bg-yellow-500" },
  { id: "security", name: "Security", icon: Shield, color: "bg-green-500" },
  { id: "maintenance", name: "Maintenance", icon: Wrench, color: "bg-gray-500" },
  { id: "automotive", name: "Automotive", icon: Car, color: "bg-red-500" },
  { id: "home", name: "Home Services", icon: Home, color: "bg-purple-500" },
  { id: "personal", name: "Personal Care", icon: Scissors, color: "bg-pink-500" },
  { id: "healthcare", name: "Healthcare", icon: Stethoscope, color: "bg-teal-500" },
]

const serviceProviders = [
  {
    id: 1,
    name: "Raj Plumbing Services",
    category: "plumbing",
    rating: 4.8,
    reviews: 156,
    phone: "+91 98765 43210",
    email: "raj.plumbing@email.com",
    address: "Sector 15, Gurgaon",
    services: ["Pipe Repair", "Leak Fixing", "Bathroom Fitting"],
    availability: "24/7",
    verified: true,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "PowerFix Electricians",
    category: "electrical",
    rating: 4.6,
    reviews: 89,
    phone: "+91 98765 43211",
    email: "info@powerfix.com",
    address: "DLF Phase 2, Gurgaon",
    services: ["Wiring", "Fan Installation", "Switch Repair"],
    availability: "9 AM - 9 PM",
    verified: true,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "SecureGuard Services",
    category: "security",
    rating: 4.9,
    reviews: 234,
    phone: "+91 98765 43212",
    email: "contact@secureguard.com",
    address: "Cyber City, Gurgaon",
    services: ["Security Guards", "CCTV Installation", "Access Control"],
    availability: "24/7",
    verified: true,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "QuickFix Maintenance",
    category: "maintenance",
    rating: 4.4,
    reviews: 67,
    phone: "+91 98765 43213",
    email: "service@quickfix.com",
    address: "Golf Course Road, Gurgaon",
    services: ["AC Repair", "Appliance Service", "General Maintenance"],
    availability: "8 AM - 8 PM",
    verified: false,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "AutoCare Garage",
    category: "automotive",
    rating: 4.7,
    reviews: 123,
    phone: "+91 98765 43214",
    email: "info@autocare.com",
    address: "Udyog Vihar, Gurgaon",
    services: ["Car Wash", "Oil Change", "Tire Service"],
    availability: "7 AM - 10 PM",
    verified: true,
    image: "/placeholder.svg?height=40&width=40",
  },
]

const serviceRequests = [
  {
    id: 1,
    title: "Kitchen Sink Leak",
    category: "plumbing",
    status: "completed",
    provider: "Raj Plumbing Services",
    requestDate: "2024-01-15",
    completedDate: "2024-01-16",
    rating: 5,
    cost: "₹800",
  },
  {
    id: 2,
    title: "Ceiling Fan Installation",
    category: "electrical",
    status: "in-progress",
    provider: "PowerFix Electricians",
    requestDate: "2024-01-18",
    cost: "₹1,200",
  },
  {
    id: 3,
    title: "AC Service",
    category: "maintenance",
    status: "pending",
    requestDate: "2024-01-20",
    cost: "₹1,500",
  },
]

export function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false)

  const filteredProviders = serviceProviders.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.services.some((service) => service.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || provider.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleServiceRequest = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Service request submitted successfully!")
    setIsRequestDialogOpen(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-blue-500">In Progress</Badge>
      case "pending":
        return <Badge variant="outline">Pending</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getCategoryIcon = (categoryId: string) => {
    const category = serviceCategories.find((cat) => cat.id === categoryId)
    return category ? category.icon : Wrench
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Service Directory</h1>
          <p className="text-muted-foreground">Find trusted service providers and manage your service requests</p>
        </div>
        <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Request Service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Request a Service</DialogTitle>
              <DialogDescription>
                Submit a new service request. We'll connect you with verified providers.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleServiceRequest} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="service-title">Service Title</Label>
                <Input id="service-title" placeholder="e.g., Kitchen sink repair" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service-category">Category</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service-description">Description</Label>
                <Textarea id="service-description" placeholder="Describe the issue or service needed..." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferred-time">Preferred Time</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <Button type="submit">Submit Request</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="directory" className="space-y-4">
        <TabsList>
          <TabsTrigger value="directory">Service Directory</TabsTrigger>
          <TabsTrigger value="requests">My Requests</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="space-y-4">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search services or providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {serviceCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {serviceCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.id}
                  className={cn(
                    "cursor-pointer transition-all hover:shadow-md",
                    selectedCategory === category.id && "ring-2 ring-primary",
                  )}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2",
                        category.color,
                      )}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-xs font-medium">{category.name}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Service Providers */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProviders.map((provider) => {
              const Icon = getCategoryIcon(provider.category)
              return (
                <Card key={provider.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={provider.image || "/placeholder.svg"} alt={provider.name} />
                          <AvatarFallback>
                            <Icon className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg flex items-center gap-2">
                            {provider.name}
                            {provider.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified
                              </Badge>
                            )}
                          </CardTitle>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{provider.rating}</span>
                            <span>({provider.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {provider.services.slice(0, 3).map((service) => (
                        <Badge key={service} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3" />
                        <span>{provider.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        <span>{provider.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{provider.availability}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Phone className="mr-1 h-3 w-3" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Mail className="mr-1 h-3 w-3" />
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          <div className="grid gap-4">
            {serviceRequests.map((request) => {
              const Icon = getCategoryIcon(request.category)
              return (
                <Card key={request.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{request.title}</CardTitle>
                          <CardDescription>
                            Requested on {new Date(request.requestDate).toLocaleDateString()}
                          </CardDescription>
                        </div>
                      </div>
                      {getStatusBadge(request.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 text-sm">
                      {request.provider && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Provider:</span>
                          <span>{request.provider}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Cost:</span>
                        <span>{request.cost}</span>
                      </div>
                      {request.completedDate && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Completed:</span>
                          <span>{new Date(request.completedDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      {request.rating && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rating:</span>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: request.rating }).map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 mt-4">
                      {request.status === "pending" && (
                        <Button size="sm" variant="outline">
                          Cancel Request
                        </Button>
                      )}
                      {request.status === "completed" && !request.rating && <Button size="sm">Rate Service</Button>}
                      {request.status === "in-progress" && (
                        <Button size="sm" variant="outline">
                          Contact Provider
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-muted-foreground">
                <Star className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No Favorites Yet</h3>
                <p>Add service providers to your favorites for quick access.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
