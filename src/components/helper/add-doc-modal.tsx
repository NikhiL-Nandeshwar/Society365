'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
import { Upload, Plus } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function AddDocumentModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [category, setCategory] = useState('')
  const [customCategory, setCustomCategory] = useState('')

  const handleSave = () => {
    toast.success('Document added to vault')
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Document</DialogTitle>
          <DialogDescription>
            Upload and securely store society documents
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Category */}
          <div className="space-y-1">
            <Label>Document Category</Label>
            <Select onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="society">Society Documents</SelectItem>
                <SelectItem value="staff">Staff Documents</SelectItem>
                <SelectItem value="service">Service Providers</SelectItem>
                <SelectItem value="residents">Residents Documents</SelectItem>
                <SelectItem value="custom">Add new category</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Custom Category */}
          {category === 'custom' && (
            <div className="space-y-1">
              <Label>New Category Name</Label>
              <Input placeholder="Eg. Legal Documents" />
            </div>
          )}

          {/* Wing selector for residents */}
          {category === 'residents' && (
            <div className="space-y-1">
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
          )}

          {/* Document Name */}
          <div className="space-y-1">
            <Label>Document Name</Label>
            <Input placeholder="Eg. Watchman Aadhaar Card" />
          </div>

          {/* Upload */}
          <div className="space-y-1">
            <Label>Upload File</Label>
            <div className="flex items-center justify-center border border-dashed rounded-md h-24 text-sm text-muted-foreground">
              <div className="flex flex-col items-center gap-1">
                <Upload className="h-5 w-5" />
                Click to upload or drag file here
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="gap-2 bg-teal-700 hover:bg-teal-600 text-white hover:text-white">
            <Plus className="h-4 w-4" />
            Save Document
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
