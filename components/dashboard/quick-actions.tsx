import { Button } from "@/components/ui/button"
import { CreditCard, FileText, ShieldAlert, Users } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Pay Maintenance",
    icon: CreditCard,
    href: "/maintenance",
    variant: "default" as const,
  },
  {
    title: "Report Issue",
    icon: ShieldAlert,
    href: "/issues",
    variant: "outline" as const,
  },
  {
    title: "Add Visitor",
    icon: Users,
    href: "/visitors",
    variant: "outline" as const,
  },
  {
    title: "View Announcements",
    icon: FileText,
    href: "/announcements",
    variant: "outline" as const,
  },
]

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {actions.map((action) => (
        <Button key={action.title} variant={action.variant} className="h-auto flex-col gap-2 p-3" asChild>
          <Link href={action.href}>
            <action.icon className="h-4 w-4" />
            <span className="text-xs">{action.title}</span>
          </Link>
        </Button>
      ))}
    </div>
  )
}
