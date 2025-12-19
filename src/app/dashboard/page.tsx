'use client'

import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Building2, ShieldCheck, CalendarCheck, IndianRupee } from 'lucide-react'
import { ActivityRow, NoticeRow, OverviewCard, SummaryTile } from '@/components/helper/dashboard-cards'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 w-full p-4 md:p-5">
      {/* Top Overview Cards */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-muted-foreground mb-1">
          Society Overview
        </h3>
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
            title="Hall Bookings"
            value="4"
            sub="Society hall"
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
      </div>
      {/* Summary + Follow-ups */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* SUMMARY */}
        <div className="lg:col-span-6">
          <h3 className="text-lg font-semibold text-muted-foreground mb-3">
            Summary
          </h3>

          <div className="grid grid-cols-2 gap-3">
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
              border="border-rose-900"
              text="text-rose-800"
            />
          </div>
        </div>

        {/* FOLLOW-UPS */}
        <div className="lg:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Maintenance Follow-ups</CardTitle>
              <CardDescription>Latest reported issues</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <ActivityRow
                flat="A-302"
                text="Water leakage in bathroom"
                status="Open"
              />
              <ActivityRow
                flat="B-104"
                text="Lift not working"
                status="In Progress"
              />
              <ActivityRow
                flat="C-210"
                text="Parking light issue"
                status="Resolved"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Notices */}
      <Card className='w-1/2'>
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
      <Card className='border-none'></Card>

    </div>
  )
}