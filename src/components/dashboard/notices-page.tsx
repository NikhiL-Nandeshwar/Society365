'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs'
import { Plus, Bell } from 'lucide-react'
import { AddNoticeModal } from '../helper/add-notice-modal'

export default function NoticesPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Notices</h1>
          <p className="text-sm text-muted-foreground">
            Society-wide announcements and updates
          </p>
        </div>

        <Button onClick={() => setOpen(true)} className="gap-2 bg-teal-700 hover:bg-teal-600 text-white hover:text-white">
          <Plus className="h-4 w-4" />
          Add Notice
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="active">
        <TabsList className="mb-4">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        {/* Active Notices */}
        <TabsContent value="active">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NoticeCard
              title="Water Supply Interruption"
              desc="Water supply will be unavailable on Sunday from 9 AM to 2 PM."
              priority="High"
              postedBy="Society Admin"
              date="2 days ago"
            />

            <NoticeCard
              title="Maintenance Due Reminder"
              desc="Monthly maintenance payment is due by 10th of this month."
              priority="Normal"
              postedBy="Treasurer"
              date="5 days ago"
            />
          </div>
        </TabsContent>

        {/* Archived */}
        <TabsContent value="archived">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NoticeCard
              title="Holi Celebration"
              desc="Holi celebration event held successfully."
              priority="Low"
              postedBy="Cultural Committee"
              date="1 month ago"
            />
          </div>
        </TabsContent>
      </Tabs>

      <AddNoticeModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

/* ---------------- Components ---------------- */

function NoticeCard({
  title,
  desc,
  priority,
  postedBy,
  date,
}: {
  title: string
  desc: string
  priority: 'High' | 'Normal' | 'Low'
  postedBy: string
  date: string
}) {
  const priorityColor =
    priority === 'High'
      ? 'bg-red-100 text-red-700 hover:bg-red-200'
      : priority === 'Low'
      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      : 'bg-amber-100 text-amber-700 hover:bg-amber-200'

  return (
    <Card className="hover:shadow-sm transition">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base flex items-center gap-2">
              <Bell className="h-4 w-4 text-teal-700" />
              {title}
            </CardTitle>
            <CardDescription className="mt-1">
              {desc}
            </CardDescription>
          </div>

          <Badge className={priorityColor}>
            {priority}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex justify-between text-xs text-muted-foreground">
        <span>Posted by {postedBy}</span>
        <span>{date}</span>
      </CardContent>
    </Card>
  )
}
