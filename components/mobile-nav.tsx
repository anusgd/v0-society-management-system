"use client"

import { cn } from "@/lib/utils"
import { Calendar, Car, CreditCard, LayoutDashboard, ShieldAlert } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Car Park",
    icon: Car,
    href: "/car-park",
  },
  {
    title: "Payments",
    icon: CreditCard,
    href: "/maintenance",
  },
  {
    title: "Issues",
    icon: ShieldAlert,
    href: "/issues",
  },
  {
    title: "Events",
    icon: Calendar,
    href: "/events",
  },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-background md:hidden">
      <div className="flex h-16 items-center justify-around">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-2 text-xs",
              pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <item.icon className="mb-1 h-5 w-5" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
