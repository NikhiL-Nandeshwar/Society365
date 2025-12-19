'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export function BookHallModal({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean
  onClose: () => void
  onSubmit: (data: any) => void
}) {
  const [flat, setFlat] = useState('')
  const [date, setDate] = useState('')
  const [purpose, setPurpose] = useState('')

  const handleSubmit = () => {
    onSubmit({
      id: Date.now(),
      flat,
      date,
      purpose,
      status: 'Pending',
    })
    onClose()
    setFlat('')
    setDate('')
    setPurpose('')
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Society Hall</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input placeholder="Flat number" value={flat} onChange={e => setFlat(e.target.value)} />
          <Input type="date" value={date} onChange={e => setDate(e.target.value)} />
          <Input placeholder="Purpose" value={purpose} onChange={e => setPurpose(e.target.value)} />

          <Button onClick={handleSubmit} className="w-full bg-teal-700 hover:bg-teal-600 text-white hover:text-white">
            Submit Booking
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
