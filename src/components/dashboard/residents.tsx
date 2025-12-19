'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Home, Plus } from 'lucide-react'
import { AddResidentModal } from '../helper/add-resident-modal'

export default function Residents() {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Residents</h1>
          <p className="text-sm text-muted-foreground">
            Flat-wise ownership and occupancy details
          </p>
        </div>

        <Button onClick={() => setOpen(true)} className="gap-2 bg-teal-700 hover:bg-teal-600 text-white hover:text-white">
          <Plus className="h-4 w-4" />
          Add Flat / Resident
        </Button>
      </div>

      {/* Summary Strip */}
      <Card className="px-4 py-3 flex flex-wrap gap-4 text-sm">
        <Stat label="Total Flats" value="96" />
        <Stat label="Occupied" value="88" />
        <Stat label="Vacant" value="8" />
        <Stat label="Rented" value="24" />
      </Card>

      {/* Flat Directory */}
      <div className="space-y-6">
        <WingSection
          wing="A"
          flats={[
            { flat: 'A-101', status: 'Owner Occupied' },
            { flat: 'A-102', status: 'Rented' },
            { flat: 'A-103', status: 'Vacant' },
          ]}
        />

        <WingSection
          wing="B"
          flats={[
            { flat: 'B-201', status: 'Owner Occupied' },
            { flat: 'B-202', status: 'Owner Occupied' },
            { flat: 'B-203', status: 'Vacant' },
          ]}
        />

         <WingSection
          wing="C"
          flats={[
            { flat: 'C-304', status: 'Rented' },
            { flat: 'C-305', status: 'Vacant' },
            { flat: 'C-306', status: 'Rented' },
          ]}
        />

          <WingSection
          wing="D"
          flats={[
            { flat: 'D-303', status: 'Owner Occupied' },
            { flat: 'D-304', status: 'Vacant' },
            { flat: 'D-305', status: 'Owner Occupied' },
          ]}
        />
      </div>

      <AddResidentModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

/* ------------------ Components ------------------ */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

function WingSection({
  wing,
  flats,
}: {
  wing: string
  flats: { flat: string; status: string }[]
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-muted-foreground">
        Wing {wing}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {flats.map(f => (
          <Card key={f.flat} className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4 text-teal-700" />
              <span className="font-medium">{f.flat}</span>
            </div>

            <Badge
              variant="secondary"
              className={
                f.status === 'Vacant'
                  ? 'bg-gray-100'
                  : f.status === 'Rented'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-green-100 text-green-700'
              }
            >
              {f.status}
            </Badge>
          </Card>
        ))}
      </div>
    </div>
  )
}
