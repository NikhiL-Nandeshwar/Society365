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
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

export function RaiseComplaintModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const handleSubmit = () => {
    toast.success('Complaint raised successfully')
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Raise Maintenance Complaint</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Flat</Label>
            <Input placeholder="Eg. A-302" />
          </div>

          <div>
            <Label>Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plumbing">Plumbing</SelectItem>
                <SelectItem value="electrical">Electrical</SelectItem>
                <SelectItem value="lift">Lift</SelectItem>
                <SelectItem value="security">Security</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Description</Label>
            <Input placeholder="Describe the issue" />
          </div>

          <div>
            <Label>Priority</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
