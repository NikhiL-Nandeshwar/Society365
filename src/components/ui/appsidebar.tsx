'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar'

import {
  LayoutDashboard,
  Users,
  Wrench,
  IndianRupee,
  CalendarCheck,
  Bell,
  Settings,
  LogOut,
  ContactRound,
  Vault,
} from 'lucide-react'

const menuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Residents', href: '/dashboard/residents', icon: Users },
  { label: 'Maintenance', href: '/dashboard/maintenance', icon: Wrench },
  // { label: 'Finance', href: '/dashboard/finance', icon: IndianRupee },
  { label: 'Document Vault', href: '/dashboard/document-vault', icon: Vault },
  { label: 'Amenities', href: '/dashboard/amenities', icon: CalendarCheck },
  { label: 'Service Contacts', href: '/dashboard/contacts', icon: ContactRound },
  { label: 'Notices', href: '/dashboard/notices', icon: Bell },
]

export default function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar();
  const router = useRouter();

  return (
    <Sidebar collapsible="icon">
      {/* HEADER */}
      <SidebarHeader className="border-b px-3 py-3 bg-gray-50">
        <div
          className={`flex items-center gap-2 h-10 ${state === 'expanded' ? 'justify-start' : 'justify-center'
            }`}
        >
          <div className="w-8 h-8 rounded-md bg-teal-800 flex items-center justify-center text-white font-bold text-sm">
            S
          </div>

          {state === 'expanded' && (
            <span className="text-base font-semibold">
              Society-365
            </span>
          )}
        </div>


      </SidebarHeader>

      {/* MENU */}
      <SidebarContent className='py-1 px-2 bg-gray-100'>
        <SidebarMenu className="space-y-1">
          {menuItems.map(item => {
            const Icon = item.icon

            const active =
              item.href === '/dashboard'
                ? pathname === '/dashboard'
                : pathname.startsWith(item.href)

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  className={
                    active
                      ? ' text-teal-800 font-bold'
                      : 'text-muted-foreground hover:bg-muted'
                  }
                >
                  <Link href={item.href} className="flex items-center gap-3 py-2.5">
                    <Icon size={18} />
                    {state === 'expanded' && <span>{item.label}</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}

        </SidebarMenu>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="border-t px-3 py-3 bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-teal-800 hover:bg-teal-600 text-white flex items-center justify-center text-sm font-semibold">
            SA
          </div>

          {state === 'expanded' && (
            <div className="flex flex-col text-sm">
              <span className="font-medium">Society Admin</span>
              <button
                onClick={() => {
                  localStorage.clear()
                  router.push('/')
                }}
                className="text-muted-foreground hover:text-teal-700 flex items-center gap-1"
              >
                <LogOut size={14} />
                Logout
              </button>

            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
