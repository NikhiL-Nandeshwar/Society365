'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

export function AddResidentModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const handleSave = () => {
    toast.success('Resident added successfully')
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Flat / Resident</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Wing</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select wing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">Wing A</SelectItem>
                <SelectItem value="B">Wing B</SelectItem>
                <SelectItem value="C">Wing C</SelectItem>
                <SelectItem value="D">Wing D</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Flat Number</Label>
            <Input placeholder="Eg. A-101" />
          </div>

          <div>
            <Label>Occupancy Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="owner">Owner Occupied</SelectItem>
                <SelectItem value="rented">Rented</SelectItem>
                <SelectItem value="vacant">Vacant</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Owner Name</Label>
            <Input placeholder="Owner full name" />
          </div>

          <div>
            <Label>Tenant Name (if rented)</Label>
            <Input placeholder="Tenant name" />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className='bg-teal-700 hover:bg-teal-600 text-white hover:text-white' onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
