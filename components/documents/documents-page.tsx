import { MobileNav } from "@/components/mobile-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DocumentLibrary } from "@/components/documents/document-library"
import { UploadDocument } from "@/components/documents/upload-document"
import { ReportGenerator } from "@/components/documents/report-generator"

export function DocumentsPage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Documents & Reports</h1>
        <p className="text-muted-foreground">Access and manage society documents and generate reports</p>
      </div>

      <Tabs defaultValue="library" className="space-y-4">
        <TabsList>
          <TabsTrigger value="library">Document Library</TabsTrigger>
          <TabsTrigger value="upload">Upload Document</TabsTrigger>
          <TabsTrigger value="reports">Generate Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="library" className="space-y-4">
          <DocumentLibrary />
        </TabsContent>
        <TabsContent value="upload" className="space-y-4">
          <UploadDocument />
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <ReportGenerator />
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
