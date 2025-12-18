'use client'

import * as React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Building2,
  Users,
  ClipboardList,
  IndianRupee,
  Wrench,
  Bell,
  Home,
  ShieldCheck,
  Calendar,
  CalendarCheck,
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 w-full p-4 md:p-6">

      {/* ================= TOP OVERVIEW ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <OverviewCard
          title="Total Flats"
          value="96"
          sub="88 occupied"
          progress={92}
          icon={<Building2 />}
          accent
        />

        <OverviewCard
          title="Society Status"
          value="Stable"
          sub="No critical issues"
          progress={100}
          icon={<ShieldCheck />}
          accent
        />

        <OverviewCard
          title="Hall Total Bookings"
          value="4"
          sub="Society Hall"
          progress={75}
          icon={<CalendarCheck />}
          accent
        />

        <OverviewCard
          title="Monthly Collection"
          value="₹1,48,450"
          sub="65% collected"
          progress={65}
          icon={<IndianRupee />}
          accent
        />
      </div>

      {/* ================= SUMMARY SECTION ================= */}
      <div>
        <h3 className="font-semibold text-muted-foreground mb-4">
          Summary
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <SummaryTile
            title="Maintenance Issues"
            value="7"
            footer="Open"
            border="border-amber-500"
            text="text-amber-600"
          />

          <SummaryTile
            title="Payments"
            value="₹48k"
            footer="This week"
            border="border-teal-600"
            text="text-teal-600"
          />

          <SummaryTile
            title="New Residents"
            value="2"
            footer="This month"
            border="border-blue-500"
            text="text-blue-600"
          />

          <SummaryTile
            title="Vacant Flats"
            value="8"
            footer="Available"
            border="border-gray-400"
            text="text-gray-600"
          />
        </div>
      </div>


      {/* ================= RECENT ACTIVITY ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Maintenance */}
        <Card>
          <CardHeader>
            <CardTitle>Follow-ups</CardTitle>
            <CardDescription>Latest reported issues</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <ActivityRow flat="A-302" text="Water leakage in bathroom" status="Open" />
            <ActivityRow flat="B-104" text="Lift not working" status="In Progress" />
            <ActivityRow flat="C-210" text="Parking light issue" status="Resolved" />
          </CardContent>
        </Card>

        {/* Notices */}
        <Card>
          <CardHeader>
            <CardTitle>Latest Notices</CardTitle>
            <CardDescription>Active announcements</CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <NoticeRow text="Water supply will be unavailable on Sunday" />
            <NoticeRow text="Monthly maintenance due by 10th" />
            <NoticeRow text="Diwali decoration meeting on Friday" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

/* ================= COMPONENTS ================= */

function OverviewCard({
  title,
  value,
  sub,
  progress,
  icon,
  accent = false,
}: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-muted-foreground">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>

      <CardContent>
        <div className="text-3xl font-semibold">{value}</div>

        <Progress
          value={progress}
          className={`mt-2 h-1.5 ${accent ? 'bg-teal-300 [&>div]:bg-teal-600' : ''
            }`}
        />

        <p className="text-muted-foreground mt-1">{sub}</p>
      </CardContent>
    </Card>
  )
}

function SummaryCard({ title, value, footer, color, icon }: any) {
  return (
    <Card className={`border-l-4 ${color}`}>
      <CardContent className="flex items-center justify-between py-4">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
          <p className="text-sm text-muted-foreground">{footer}</p>
        </div>
        {icon}
      </CardContent>
    </Card>
  )
}

function SummaryTile({
  title,
  value,
  footer,
  border,
  text,
}: {
  title: string
  value: string
  footer: string
  border: string
  text: string
}) {
  return (
    <Card
      className={`border-2 ${border} hover:shadow-sm transition`}
    >
      <CardContent
        className="h-[120px] flex flex-col items-center justify-center text-center p-3 gap-1.5"
      >
        <p className="text-muted-foreground leading-tight">
          {title}
        </p>

        <p className={`text-3xl font-bold leading-tight ${text}`}>
          {value}
        </p>

        <p className="text-muted-foreground leading-tight">
          {footer}
        </p>
      </CardContent>
    </Card>
  )
}


function ActivityRow({ flat, text, status }: any) {
  const color =
    status === 'Resolved'
      ? 'bg-green-100 text-green-700'
      : status === 'In Progress'
        ? 'bg-amber-100 text-amber-700'
        : 'bg-red-100 text-red-700'

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">{flat}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
      <Badge className={color}>{status}</Badge>
    </div>
  )
}

function NoticeRow({ text }: any) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Bell className="h-4 w-4 text-muted-foreground" />
      <span>{text}</span>
    </div>
  )
}
