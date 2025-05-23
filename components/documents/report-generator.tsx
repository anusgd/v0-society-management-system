"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import {
  CalendarIcon,
  FileBarChart,
  PieChart,
  BarChart3,
  LineChart,
  Download,
  CheckCircle,
  Loader2,
} from "lucide-react"
import { format } from "date-fns"
import { toast } from "@/hooks/use-toast"

interface ReportConfig {
  type: string
  format: string
  startDate: Date
  endDate: Date
  title: string
  notes: string
  sections: {
    summary: boolean
    charts: boolean
    tables: boolean
    analysis: boolean
    recommendations: boolean
    appendix: boolean
  }
}

interface GeneratedReport {
  id: string
  name: string
  type: string
  date: string
  status: "generating" | "completed" | "failed"
  progress: number
  downloadUrl?: string
}

const recentReports = [
  {
    id: "1",
    name: "Monthly Financial Report - April 2024.pdf",
    date: "April 30, 2024",
    type: "Financial",
    status: "completed" as const,
    progress: 100,
    downloadUrl: "/reports/financial-april-2024.pdf",
  },
  {
    id: "2",
    name: "Maintenance Summary - Q1 2024.xlsx",
    date: "March 31, 2024",
    type: "Maintenance",
    status: "completed" as const,
    progress: 100,
    downloadUrl: "/reports/maintenance-q1-2024.xlsx",
  },
  {
    id: "3",
    name: "Visitor Statistics - March 2024.pdf",
    date: "March 30, 2024",
    type: "Visitors",
    status: "completed" as const,
    progress: 100,
    downloadUrl: "/reports/visitors-march-2024.pdf",
  },
  {
    id: "4",
    name: "Event Participation Report - February 2024.pdf",
    date: "February 29, 2024",
    type: "Events",
    status: "completed" as const,
    progress: 100,
    downloadUrl: "/reports/events-feb-2024.pdf",
  },
]

export function ReportGenerator() {
  const [reports, setReports] = useState<GeneratedReport[]>(recentReports)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)
  const [config, setConfig] = useState<ReportConfig>({
    type: "",
    format: "pdf",
    startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    endDate: new Date(),
    title: "Monthly Financial Report - May 2024",
    notes: "",
    sections: {
      summary: true,
      charts: true,
      tables: true,
      analysis: true,
      recommendations: false,
      appendix: false,
    },
  })

  const handleSectionChange = (section: keyof typeof config.sections, checked: boolean) => {
    setConfig((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: checked,
      },
    }))
  }

  const generateReport = async () => {
    if (!config.type || !config.title) {
      toast({
        title: "Missing Information",
        description: "Please select a report type and enter a title.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    setGenerationProgress(0)

    const reportId = Math.random().toString(36).substr(2, 9)
    const newReport: GeneratedReport = {
      id: reportId,
      name: `${config.title}.${config.format}`,
      type: config.type,
      date: new Date().toLocaleDateString(),
      status: "generating",
      progress: 0,
    }

    setReports((prev) => [newReport, ...prev])

    // Simulate report generation progress
    const steps = [
      { progress: 20, message: "Collecting data..." },
      { progress: 40, message: "Processing information..." },
      { progress: 60, message: "Generating charts..." },
      { progress: 80, message: "Compiling report..." },
      { progress: 100, message: "Finalizing document..." },
    ]

    for (const step of steps) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setGenerationProgress(step.progress)
      setReports((prev) => prev.map((r) => (r.id === reportId ? { ...r, progress: step.progress } : r)))
    }

    // Complete the report
    setReports((prev) =>
      prev.map((r) =>
        r.id === reportId
          ? {
              ...r,
              status: "completed",
              progress: 100,
              downloadUrl: `/reports/${reportId}.${config.format}`,
            }
          : r,
      ),
    )

    setIsGenerating(false)
    setGenerationProgress(0)

    toast({
      title: "Report Generated",
      description: "Your report has been generated successfully and is ready for download.",
    })
  }

  const downloadReport = (report: GeneratedReport) => {
    if (report.downloadUrl) {
      toast({
        title: "Download Started",
        description: `Downloading ${report.name}...`,
      })
      // Simulate download
      setTimeout(() => {
        toast({
          title: "Download Complete",
          description: `${report.name} has been downloaded successfully.`,
        })
      }, 1500)
    }
  }

  const quickGenerate = (type: string) => {
    setConfig((prev) => ({
      ...prev,
      type,
      title: `${type} Report - ${format(new Date(), "MMMM yyyy")}`,
    }))

    // Auto-generate after setting type
    setTimeout(() => {
      generateReport()
    }, 100)
  }

  const resetForm = () => {
    setConfig({
      type: "",
      format: "pdf",
      startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
      endDate: new Date(),
      title: "Monthly Financial Report - May 2024",
      notes: "",
      sections: {
        summary: true,
        charts: true,
        tables: true,
        analysis: true,
        recommendations: false,
        appendix: false,
      },
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Reports</CardTitle>
          <CardDescription>Create custom reports for society management</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="reportType">Report Type *</Label>
              <Select value={config.type} onValueChange={(value) => setConfig((prev) => ({ ...prev, type: value }))}>
                <SelectTrigger id="reportType">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Financial">Financial Report</SelectItem>
                  <SelectItem value="Maintenance">Maintenance Report</SelectItem>
                  <SelectItem value="Meeting Attendance">Meeting Attendance</SelectItem>
                  <SelectItem value="Visitors">Visitor Statistics</SelectItem>
                  <SelectItem value="Events">Event Participation</SelectItem>
                  <SelectItem value="Complaints">Complaint Resolution</SelectItem>
                  <SelectItem value="Custom">Custom Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reportFormat">Report Format</Label>
              <Select
                value={config.format}
                onValueChange={(value) => setConfig((prev) => ({ ...prev, format: value }))}
              >
                <SelectTrigger id="reportFormat">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF Document</SelectItem>
                  <SelectItem value="xlsx">Excel Spreadsheet</SelectItem>
                  <SelectItem value="csv">CSV File</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Date Range</Label>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label className="text-xs text-muted-foreground">Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {format(config.startDate, "PPP")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={config.startDate}
                      onSelect={(date) => date && setConfig((prev) => ({ ...prev, startDate: date }))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {format(config.endDate, "PPP")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={config.endDate}
                      onSelect={(date) => date && setConfig((prev) => ({ ...prev, endDate: date }))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Report Sections</Label>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="summary"
                  checked={config.sections.summary}
                  onCheckedChange={(checked) => handleSectionChange("summary", checked as boolean)}
                />
                <Label htmlFor="summary">Executive Summary</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="charts"
                  checked={config.sections.charts}
                  onCheckedChange={(checked) => handleSectionChange("charts", checked as boolean)}
                />
                <Label htmlFor="charts">Charts & Graphs</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="tables"
                  checked={config.sections.tables}
                  onCheckedChange={(checked) => handleSectionChange("tables", checked as boolean)}
                />
                <Label htmlFor="tables">Data Tables</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="analysis"
                  checked={config.sections.analysis}
                  onCheckedChange={(checked) => handleSectionChange("analysis", checked as boolean)}
                />
                <Label htmlFor="analysis">Analysis & Insights</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="recommendations"
                  checked={config.sections.recommendations}
                  onCheckedChange={(checked) => handleSectionChange("recommendations", checked as boolean)}
                />
                <Label htmlFor="recommendations">Recommendations</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="appendix"
                  checked={config.sections.appendix}
                  onCheckedChange={(checked) => handleSectionChange("appendix", checked as boolean)}
                />
                <Label htmlFor="appendix">Appendix</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reportTitle">Report Title *</Label>
            <Input
              id="reportTitle"
              placeholder="Enter report title"
              value={config.title}
              onChange={(e) => setConfig((prev) => ({ ...prev, title: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Input
              id="additionalNotes"
              placeholder="Any additional notes or instructions"
              value={config.notes}
              onChange={(e) => setConfig((prev) => ({ ...prev, notes: e.target.value }))}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={resetForm}>
            Reset
          </Button>
          <Button onClick={generateReport} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Report"
            )}
          </Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="cursor-pointer hover:shadow-md" onClick={() => quickGenerate("Financial")}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Financial Reports</CardTitle>
            <CardDescription>Income, expenses, and budget analysis</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex h-20 items-center justify-center">
              <PieChart className="h-16 w-16 text-primary/70" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              <FileBarChart className="mr-2 h-4 w-4" />
              Quick Generate
            </Button>
          </CardFooter>
        </Card>

        <Card className="cursor-pointer hover:shadow-md" onClick={() => quickGenerate("Maintenance")}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Maintenance Reports</CardTitle>
            <CardDescription>Issue resolution and maintenance tracking</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex h-20 items-center justify-center">
              <BarChart3 className="h-16 w-16 text-primary/70" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              <FileBarChart className="mr-2 h-4 w-4" />
              Quick Generate
            </Button>
          </CardFooter>
        </Card>

        <Card className="cursor-pointer hover:shadow-md" onClick={() => quickGenerate("Visitors")}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Visitor Statistics</CardTitle>
            <CardDescription>Visitor trends and analytics</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex h-20 items-center justify-center">
              <LineChart className="h-16 w-16 text-primary/70" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              <FileBarChart className="mr-2 h-4 w-4" />
              Quick Generate
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Previously generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between rounded-md border p-3">
                <div className="space-y-1 flex-1">
                  <p className="font-medium">{report.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{report.date}</span>
                  </div>
                  {report.status === "generating" && (
                    <div className="space-y-1">
                      <Progress value={report.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">Generating... {report.progress}%</p>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {report.status === "completed" && (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <Button variant="ghost" size="sm" onClick={() => downloadReport(report)}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                  {report.status === "generating" && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isGenerating} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Generating Report</DialogTitle>
            <DialogDescription>
              Please wait while we generate your report. This may take a few moments.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Progress value={generationProgress} className="h-3" />
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm text-muted-foreground">{generationProgress}% complete</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
