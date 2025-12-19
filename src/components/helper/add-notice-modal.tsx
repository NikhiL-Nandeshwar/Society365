'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { useState } from 'react'

export function AddNoticeModal({
    open,
    onClose,
}: {
    open: boolean
    onClose: () => void
}) {
    const [priority, setPriority] = useState('Normal')

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Notice</DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    <Input placeholder="Notice title" />
                    <Textarea placeholder="Notice description" />

                    <Select value={priority} onValueChange={setPriority}>
                        <SelectTrigger>
                            <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="High">High</SelectItem>
                            <SelectItem value="Normal">Normal</SelectItem>
                            <SelectItem value="Low">Low</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button className="w-full bg-teal-700 hover:bg-teal-600 text-white hover:text-white">
                        Publish Notice
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
