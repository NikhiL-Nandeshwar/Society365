'use client'

import {
    Dialog,
    DialogContent,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Phone, Home } from 'lucide-react'

type Result = {
    flat: string
    name: string
    phone: string
    maintenance: 'Paid' | 'Pending'
}

export function SearchPreviewModal({
    query,
}: {
    query: string
}) {
    if (!query || query.length < 2) return null

    const dummyResidents: Result[] = [
        {
            flat: 'A-101',
            name: 'Rajendra Bhingarde',
            phone: '9876543210',
            maintenance: 'Paid',
        },
        {
            flat: 'B-204',
            name: 'Sulekha Kulkarni',
            phone: '9123456789',
            maintenance: 'Pending',
        },
        {
            flat: 'C-202',
            name: 'Naveen Jain',
            phone: '9120056780',
            maintenance: 'Paid',
        },
        {
            flat: 'D-204',
            name: 'Anagha Shelake',
            phone: '7623456776',
            maintenance: 'Pending',
        },
        {
            flat: 'A-402',
            name: 'Namrata Joshi',
            phone: '7623456556',
            maintenance: 'Paid',
        },
        {
            flat: 'D-404',
            name: 'Mangesh Mane',
            phone: '9991223344',
            maintenance: 'Paid',
        },
        {
            flat: 'B-311',
            name: 'Harshal Patil',
            phone: '9997777344',
            maintenance: 'Paid',
        },
    ]

    const results = dummyResidents.filter(r =>
        r.flat.toLowerCase().includes(query.toLowerCase()) ||
        r.name.toLowerCase().includes(query.toLowerCase())
    )

    if (results.length === 0) return null

    return (
        <div className="absolute  left-1/2 top-full z-50 mt-2 w-[320px] -translate-x-1/2 rounded-lg border bg-background shadow-lg">
            {results.map(r => (
                <div
                    key={r.flat}
                    className="flex items-center justify-between px-3 py-2 hover:bg-muted transition"
                >
                    <div>
                        <p className="text-sm font-medium flex items-center gap-2">
                            <Home className="h-4 w-4 text-teal-700" />
                            {r.flat}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {r.name}
                        </p>
                    </div>

                    <div className="text-right space-y-1">
                        <Badge
                            className={
                                r.maintenance === 'Paid'
                                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                    : 'bg-red-100 text-red-700 hover:bg-red-200'
                            }
                        >
                            {r.maintenance}
                        </Badge>

                        <div className="flex items-center gap-1 text-xs text-teal-700">
                            <Phone className="h-3 w-3" />
                            {r.phone}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

