'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { IndianRupee, CheckCircle, Clock } from 'lucide-react'

export default function Finance() {
  const [month, setMonth] = useState('March 2025')

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Finance</h1>
          <p className="text-sm text-muted-foreground">
            Monthly maintenance collection overview
          </p>
        </div>

        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm bg-background"
        >
          <option>March 2025</option>
          <option>February 2025</option>
          <option>January 2025</option>
        </select>
      </div>

      {/* Summary Strip */}
      <Card className="px-4 py-3 flex flex-wrap gap-6 text-sm">
        <Stat label="Monthly Charge" value="₹2,500 / flat" color="text-blue-600" />
        <Stat label="Collected" value="₹1,48,450" color="text-green-600" />
        <Stat label="Pending" value="₹51,550" color="text-red-600" />
        <Stat label="Defaulters" value="18 Flats" color="text-amber-600" />
      </Card>

      {/* Payments */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground">
          Flat-wise Payments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PaymentRow flat="A-101" name="R. Patil" status="Paid" />
          <PaymentRow flat="A-102" name="S. Kulkarni" status="Pending" />
          <PaymentRow flat="B-204" name="M. Deshmukh" status="Pending" />
        </div>
      </div>
    </div>
  )
}

/* ---------------- Components ---------------- */

function Stat({
  label,
  value,
  color,
}: {
  label: string
  value: string
  color: string
}) {
  return (
    <div className="flex items-center gap-2">
      <IndianRupee className={`h-4 w-4 ${color}`} />
      <span className="text-muted-foreground">{label}:</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  )
}

function PaymentRow({
  flat,
  name,
  status,
}: {
  flat: string
  name: string
  status: 'Paid' | 'Pending'
}) {
  const isPaid = status === 'Paid'

  return (
    <Card className="px-4 py-3 flex items-center justify-between">
      <div>
        <p className="font-medium">{flat}</p>
        <p className="text-sm text-muted-foreground">{name}</p>
      </div>

      <div className="flex items-center gap-3">
        <Badge
          className={
            isPaid
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }
        >
          {status}
        </Badge>

        {isPaid ? (
          <CheckCircle className="h-4 w-4 text-green-600" />
        ) : (
          <Clock className="h-4 w-4 text-red-600" />
        )}
      </div>
    </Card>
  )
}
