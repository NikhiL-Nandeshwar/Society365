'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  IndianRupee,
  Wrench,
  CalendarCheck,
  Bell,
  Settings,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const sidebarItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Residents',
    href: '/residents',
    icon: Users,
  },
  {
    label: 'Finance',
    href: '/finance',
    icon: IndianRupee,
  },
  {
    label: 'Maintenance',
    href: '/maintenance',
    icon: Wrench,
  },
  {
    label: 'Amenities',
    href: '/amenities',
    icon: CalendarCheck,
  },
  {
    label: 'Contacts',
    href: '/contacts',
    icon: CalendarCheck,
  },
  {
    label: 'Notices',
    href: '/notices',
    icon: Bell,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-card flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b">
        <span className="text-lg font-semibold tracking-wide text-teal-700">
          SOCIETY-365
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {sidebarItems.map(item => {
          const active = pathname.startsWith(item.href)
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                active
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-muted-foreground hover:bg-muted'
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Settings */}
      <div className="border-t p-3">
        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </div>
    </aside>
  )
}
