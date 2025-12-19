'use client'

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion'
import { Phone, Wrench, Zap, Droplets, Shield } from 'lucide-react'
import Link from 'next/link'

const contacts = [
    {
        role: 'Plumber',
        name: 'Vinod Bhosale',
        phone: '9812345678',
        icon: Wrench,
    },
    {
        role: 'Electrician',
        name: 'Mithilesh Koli',
        phone: '9722332245',
        icon: Zap,
    },
    {
        role: 'Water Tanker',
        name: 'B.K.Patil',
        phone: '9911223389',
        icon: Droplets,
    },
    {
        role: 'Security',
        name: 'Savio Thomas',
        phone: '7612121234',
        icon: Shield,
    },
]

export default function ImportantContactsCard() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Important Contacts</CardTitle>
                <CardDescription>Trusted service providers</CardDescription>
            </CardHeader>

            <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                    {contacts.map((c) => {
                        const Icon = c.icon

                        return (
                            <AccordionItem
                                key={c.role}
                                value={c.role}
                                className="border rounded-md px-2"
                            >
                                <AccordionTrigger className="hover:no-underline">
                                    <div className="flex items-center gap-3 text-left">
                                        <Icon className="h-5 w-5 text-teal-700 shrink-0" />
                                        <div>
                                            <p className="text-sm text-teal-700 font-medium leading-none">
                                                {c.role}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {c.name}
                                            </p>
                                        </div>
                                    </div>
                                </AccordionTrigger>

                                <AccordionContent>
                                    <div className="flex items-center justify-between px-1 pt-2">
                                        <div className="text-sm text-muted-foreground">
                                            Phone: <span className="font-medium text-foreground">{c.phone}</span>
                                        </div>

                                        <a
                                            href={`tel:${c.phone}`}
                                            className="flex items-center gap-1 text-teal-700 hover:underline"
                                        >
                                            <Phone className="h-3.5 w-3.5" />
                                            Call
                                        </a>

                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>

                <Link
                    href="/dashboard/contacts"
                    className="text-sm text-teal-700 hover:underline mt-3 inline-block"
                >
                    View all contacts
                </Link>

            </CardContent>
        </Card>
    )
}
