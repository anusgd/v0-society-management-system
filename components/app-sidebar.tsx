"use client"

import {
  Calendar,
  Car,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  PieChart,
  Settings,
  ShieldAlert,
  Users,
  Video,
  Vote,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Car Park Allotment",
    icon: Car,
    href: "/car-park",
  },
  {
    title: "Maintenance Payment",
    icon: CreditCard,
    href: "/maintenance",
  },
  {
    title: "Issue Reporting",
    icon: ShieldAlert,
    href: "/issues",
  },
  {
    title: "Announcements",
    icon: FileText,
    href: "/announcements",
  },
  {
    title: "Voting & Elections",
    icon: Vote,
    href: "/voting",
  },
  {
    title: "Camera Surveillance",
    icon: Video,
    href: "/surveillance",
  },
  {
    title: "Visitor Management",
    icon: Users,
    href: "/visitors",
  },
  {
    title: "Event Calendar",
    icon: Calendar,
    href: "/events",
  },
  {
    title: "Chat Forum",
    icon: MessageSquare,
    href: "/chat",
  },
  {
    title: "Documents & Reports",
    icon: FileText,
    href: "/documents",
  },
  {
    title: "Committee Analytics",
    icon: PieChart,
    href: "/analytics",
  },
  {
    title: "Service Directory",
    icon: Users,
    href: "/services",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
