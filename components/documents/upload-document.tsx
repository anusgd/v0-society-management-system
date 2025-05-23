"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Upload, Link, FileText, X, CheckCircle } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  progress: number
  status: "uploading" | "completed" | "error"
}

export function UploadDocument() {
  const [uploadType, setUploadType] = useState<"file" | "link">("file")
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    access: "",
    url: "",
    tags: "",
  })
  const [isDragging, setIsDragging] = useState(false)

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return

    Array.from(files).forEach((file) => {
      const fileId = Math.random().toString(36).substr(2, 9)
      const newFile: UploadedFile = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        status: "uploading",
      }

      setUploadedFiles((prev) => [...prev, newFile])

      // Simulate file upload progress
      const interval = setInterval(() => {
        setUploadedFiles((prev) =>
          prev.map((f) => {
            if (f.id === fileId) {
              const newProgress = Math.min(f.progress + Math.random() * 30, 100)
              return {
                ...f,
                progress: newProgress,
                status: newProgress === 100 ? "completed" : "uploading",
              }
            }
            return f
          }),
        )
      }, 500)

      setTimeout(() => {
        clearInterval(interval)
        setUploadedFiles((prev) =>
          prev.map((f) => (f.id === fileId ? { ...f, progress: 100, status: "completed" } : f)),
        )
      }, 3000)
    })
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleFileSelect(e.dataTransfer.files)
  }

  const removeFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (uploadType === "file" && uploadedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one file to upload.",
        variant: "destructive",
      })
      return
    }

    if (uploadType === "link" && !formData.url) {
      toast({
        title: "No URL provided",
        description: "Please enter a valid URL.",
        variant: "destructive",
      })
      return
    }

    if (!formData.title || !formData.category || !formData.access) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Simulate successful upload
    toast({
      title: "Upload Successful",
      description: `${uploadType === "file" ? "Files" : "Link"} uploaded successfully to the document library.`,
    })

    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "",
      access: "",
      url: "",
      tags: "",
    })
    setUploadedFiles([])
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Document</CardTitle>
          <CardDescription>Add new documents or links to the society library</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Upload Type</Label>
            <RadioGroup value={uploadType} onValueChange={(value: "file" | "link") => setUploadType(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="file" id="file" />
                <Label htmlFor="file">Upload File</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="link" id="link" />
                <Label htmlFor="link">Add Link</Label>
              </div>
            </RadioGroup>
          </div>

          {uploadType === "file" && (
            <div className="space-y-4">
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <div className="space-y-2">
                  <p className="text-lg font-medium">Drop files here or click to browse</p>
                  <p className="text-sm text-muted-foreground">
                    Supports PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (Max 10MB per file)
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-4"
                  onClick={() => document.getElementById("file-input")?.click()}
                >
                  Browse Files
                </Button>
                <input
                  id="file-input"
                  type="file"
                  multiple
                  className="hidden"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileSelect(e.target.files)}
                />
              </div>

              {uploadedFiles.length > 0 && (
                <div className="space-y-2">
                  <Label>Uploaded Files</Label>
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{file.name}</p>
                          <Button variant="ghost" size="sm" onClick={() => removeFile(file.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                        {file.status === "uploading" && <Progress value={file.progress} className="h-2" />}
                        {file.status === "completed" && (
                          <div className="flex items-center space-x-1 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-xs">Upload complete</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {uploadType === "link" && (
            <div className="space-y-2">
              <Label htmlFor="url">Document URL *</Label>
              <div className="flex">
                <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                  <Link className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="url"
                  placeholder="https://example.com/document.pdf"
                  value={formData.url}
                  onChange={(e) => setFormData((prev) => ({ ...prev, url: e.target.value }))}
                  className="rounded-l-none"
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Document Title *</Label>
              <Input
                id="title"
                placeholder="Enter document title"
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="legal">Legal Documents</SelectItem>
                  <SelectItem value="financial">Financial Reports</SelectItem>
                  <SelectItem value="minutes">Meeting Minutes</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="emergency">Emergency Procedures</SelectItem>
                  <SelectItem value="forms">Forms & Applications</SelectItem>
                  <SelectItem value="policies">Policies & Guidelines</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Brief description of the document"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="access">Access Level *</Label>
              <Select
                value={formData.access}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, access: value }))}
              >
                <SelectTrigger id="access">
                  <SelectValue placeholder="Select access level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Members</SelectItem>
                  <SelectItem value="committee">Committee Only</SelectItem>
                  <SelectItem value="admin">Admin Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="Enter tags separated by commas"
                value={formData.tags}
                onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Upload Document</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
