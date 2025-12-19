'use client'

import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  CalendarCheck,
  Trees,
  Dumbbell,
  CheckCircle,
} from 'lucide-react'
import { BookHallModal } from '../helper/book-hall-modal'

type Booking = {
  id: number
  flat: string
  date: string
  purpose: string
  status: 'Approved' | 'Pending'
}

export default function AmenitiesPage() {
  const [open, setOpen] = useState(false)
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      flat: 'A-101',
      date: '25 Mar',
      purpose: 'Birthday Party',
      status: 'Approved',
    },
    {
      id: 2,
      flat: 'B-204',
      date: '28 Mar',
      purpose: 'Committee Meeting',
      status: 'Pending',
    },
  ])

  const approveBooking = (id: number) => {
    setBookings(prev =>
      prev.map(b =>
        b.id === id ? { ...b, status: 'Approved' } : b
      )
    )
  }

  const addBooking = (booking: Booking) => {
    setBookings(prev => [...prev, booking])
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold">Amenities</h1>
        <p className="text-sm text-muted-foreground">
          Manage society amenities and bookings
        </p>
      </div>

      {/* Amenities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AmenityCard title="Society Hall" desc="Events and meetings" icon={<CalendarCheck />} />
        <AmenityCard title="Garden / Lawn" desc="Open gathering space" icon={<Trees />} />
        <AmenityCard title="Gym" desc="Residents only" icon={<Dumbbell />} />
      </div>

      {/* Bookings */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Society Hall Bookings</CardTitle>
            <CardDescription>Upcoming reservations</CardDescription>
          </div>

          <Button className='bg-teal-700 hover:bg-teal-600 text-white hover:text-white' onClick={() => setOpen(true)}>
            Book Hall
          </Button>
        </CardHeader>

        <CardContent className="space-y-3">
          {bookings.map(b => (
            <BookingRow
              key={b.id}
              booking={b}
              onApprove={() => approveBooking(b.id)}
            />
          ))}
        </CardContent>
      </Card>

      <BookHallModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={addBooking}
      />
    </div>
  )
}

function AmenityCard({
  title,
  desc,
  icon,
}: {
  title: string
  desc: string
  icon: React.ReactNode
}) {
  return (
    <Card className="hover:shadow-sm transition">
      <CardHeader className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-teal-50 flex items-center justify-center text-teal-700">
          {icon}
        </div>
        <div>
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}

function BookingRow({
  booking,
  onApprove,
}: {
  booking: Booking
  onApprove: () => void
}) {
  return (
    <div className="flex items-center justify-between border rounded-md px-3 py-2">
      <div>
        <p className="font-medium">{booking.flat}</p>
        <p className="text-sm text-muted-foreground">
          {booking.date} • {booking.purpose}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Badge
          className={
            booking.status === 'Approved'
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
          }
        >
          {booking.status}
        </Badge>

        {booking.status === 'Pending' && (
          <button
            onClick={onApprove}
            className="text-teal-700 hover:text-teal-800"
            title="Approve booking"
          >
            <CheckCircle className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}
