'use client'

import { Bell, ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="h-14 border-b bg-card flex items-center justify-between px-6">
      {/* Page Title */}
      <h1 className="text-base font-semibold text-foreground">
        Dashboard
      </h1>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User */}
        <button className="flex items-center gap-2 text-sm font-medium">
          Admin
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  )
}
