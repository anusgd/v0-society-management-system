"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Filter,
  Download,
  Eye,
  MoreHorizontal,
  Trash2,
  Edit,
  FileText,
  Image,
  FileSpreadsheet,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface Document {
  id: string
  name: string
  category: string
  type: string
  size: string
  uploadDate: string
  access: string
  uploadedBy: string
  description?: string
  url?: string
}

const initialDocuments: Document[] = [
  {
    id: "1",
    name: "Society Bylaws 2024.pdf",
    category: "Legal",
    type: "PDF",
    size: "2.4 MB",
    uploadDate: "2024-01-15",
    access: "All Members",
    uploadedBy: "Admin",
    description: "Updated society bylaws and regulations",
    url: "/documents/bylaws-2024.pdf",
  },
  {
    id: "2",
    name: "Monthly Budget Report.xlsx",
    category: "Financial",
    type: "Excel",
    size: "1.8 MB",
    uploadDate: "2024-01-10",
    access: "Committee Only",
    uploadedBy: "Treasurer",
    description: "Detailed monthly budget breakdown",
  },
  {
    id: "3",
    name: "AGM Minutes - December 2023.docx",
    category: "Meeting Minutes",
    type: "Word",
    size: "856 KB",
    uploadDate: "2023-12-20",
    access: "All Members",
    uploadedBy: "Secretary",
    description: "Annual General Meeting minutes",
  },
  {
    id: "4",
    name: "Maintenance Schedule.pdf",
    category: "Maintenance",
    type: "PDF",
    size: "1.2 MB",
    uploadDate: "2024-01-05",
    access: "All Members",
    uploadedBy: "Maintenance Head",
    description: "Quarterly maintenance schedule",
  },
  {
    id: "5",
    name: "Emergency Contact List.pdf",
    category: "Emergency",
    type: "PDF",
    size: "324 KB",
    uploadDate: "2024-01-01",
    access: "All Members",
    uploadedBy: "Admin",
    description: "Updated emergency contact information",
  },
]

export function DocumentLibrary() {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [accessFilter, setAccessFilter] = useState("all")
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || doc.category === categoryFilter
    const matchesAccess = accessFilter === "all" || doc.access === accessFilter

    return matchesSearch && matchesCategory && matchesAccess
  })

  const handleDownload = (doc: Document) => {
    toast({
      title: "Download Started",
      description: `Downloading ${doc.name}...`,
    })
    // Simulate download
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: `${doc.name} has been downloaded successfully.`,
      })
    }, 2000)
  }

  const handlePreview = (doc: Document) => {
    setSelectedDocument(doc)
    setIsPreviewOpen(true)
  }

  const handleDelete = (docId: string) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== docId))
    toast({
      title: "Document Deleted",
      description: "The document has been removed from the library.",
      variant: "destructive",
    })
  }

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className="h-4 w-4 text-red-500" />
      case "excel":
        return <FileSpreadsheet className="h-4 w-4 text-green-500" />
      case "word":
        return <FileText className="h-4 w-4 text-blue-500" />
      case "image":
        return <Image className="h-4 w-4 text-purple-500" />
      default:
        return <FileText className="h-4 w-4 text-gray-500" />
    }
  }

  const getAccessBadgeVariant = (access: string) => {
    switch (access) {
      case "All Members":
        return "default"
      case "Committee Only":
        return "secondary"
      case "Admin Only":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Document Library</CardTitle>
          <CardDescription>Browse and manage society documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Legal">Legal</SelectItem>
                  <SelectItem value="Financial">Financial</SelectItem>
                  <SelectItem value="Meeting Minutes">Meeting Minutes</SelectItem>
                  <SelectItem value="Maintenance">Maintenance</SelectItem>
                  <SelectItem value="Emergency">Emergency</SelectItem>
                </SelectContent>
              </Select>
              <Select value={accessFilter} onValueChange={setAccessFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Access" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Access</SelectItem>
                  <SelectItem value="All Members">All Members</SelectItem>
                  <SelectItem value="Committee Only">Committee Only</SelectItem>
                  <SelectItem value="Admin Only">Admin Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Access</TableHead>
                <TableHead>Uploaded By</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getFileIcon(doc.type)}
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        {doc.description && <p className="text-sm text-muted-foreground">{doc.description}</p>}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{doc.category}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{new Date(doc.uploadDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant={getAccessBadgeVariant(doc.access)}>{doc.access}</Badge>
                  </TableCell>
                  <TableCell>{doc.uploadedBy}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handlePreview(doc)}>
                          <Eye className="mr-2 h-4 w-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDownload(doc)}>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(doc.id)} className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filteredDocuments.length === 0 && (
            <div className="flex h-32 items-center justify-center text-muted-foreground">
              No documents found matching your criteria.
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedDocument?.name}</DialogTitle>
            <DialogDescription>{selectedDocument?.description}</DialogDescription>
          </DialogHeader>
          <div className="flex h-96 items-center justify-center border rounded-md bg-muted/50">
            <div className="text-center space-y-2">
              {selectedDocument && getFileIcon(selectedDocument.type)}
              <p className="text-sm text-muted-foreground">
                Document preview not available. Click download to view the file.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsPreviewOpen(false)}>
              Close
            </Button>
            {selectedDocument && (
              <Button onClick={() => handleDownload(selectedDocument)}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
