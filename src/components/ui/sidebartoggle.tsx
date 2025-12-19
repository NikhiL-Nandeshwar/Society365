'use client'

import { useState } from 'react'
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { useTheme } from 'next-themes'
import {
  Bell,
  Moon,
  Sun,
  Search,
  User,
} from 'lucide-react'
import { SearchPreviewModal } from '../helper/search-preview'

export default function Header() {
  const { state } = useSidebar()
  const { theme, setTheme } = useTheme()

  const [query, setQuery] = useState('')
  const [openSearch, setOpenSearch] = useState(false)

  const userName = 'Society Admin'
  const initials = userName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <header className="h-14 border-b bg-background flex items-center justify-between px-6">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <SidebarTrigger />

        {state === 'collapsed' && (
          <span className="font-semibold tracking-wide text-sm">
            Society-365
          </span>
        )}
      </div>

      {/* SEARCH */}
      <div className="hidden md:block w-[360px]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            placeholder="Search flat or resident..."
            className="pl-9"
            onChange={(e) => {
              setQuery(e.target.value)
              setOpenSearch(e.target.value.length > 1)
            }}
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
        </Button>

        {/* Theme toggle */}
        {/* <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button> */}

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 rounded-full bg-teal-700 hover:bg-teal-400 hover:text-white text-white font-semibold"
            >
              {initials}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>{userName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Preview Modal */}
     <SearchPreviewModal query={query} />

    </header>
  )
}
