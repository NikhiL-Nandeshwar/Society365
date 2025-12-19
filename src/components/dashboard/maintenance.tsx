'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from '@/components/ui/tabs'

import { RaiseComplaintModal } from '../helper/raise-complaint-modal'
import { ComplaintCard, Stat } from '../helper/maintenance-card'
import { MaintenancePayments } from '../helper/maintenance-payments'

export default function Maintenance() {
    const [open, setOpen] = useState(false)

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Maintenance</h1>
                    <p className="text-sm text-muted-foreground">
                        Complaints and monthly maintenance tracking
                    </p>
                </div>

                <Button onClick={() => setOpen(true)} className="gap-2 bg-teal-700 hover:bg-teal-600 text-white hover:text-white">
                    <Plus className="h-4 w-4" />
                    Raise Maintenance Complaint
                </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="complaints">
                <TabsList className="bg-transparent p-0 gap-2">
                    <TabsTrigger
                        value="complaints"
                        className="
      data-[state=active]:bg-teal-50
      data-[state=active]:text-teal-800
      data-[state=active]:shadow-none
      rounded-md
      px-4
      py-2
      text-muted-foreground
    "
                    >
                        Complaints
                    </TabsTrigger>

                    <TabsTrigger
                        value="payments"
                        className="
      data-[state=active]:bg-teal-50
      data-[state=active]:text-teal-800
      data-[state=active]:shadow-none
      rounded-md
      px-4
      py-2
      text-muted-foreground
    "
                    >
                        Payments
                    </TabsTrigger>
                </TabsList>


                {/*  Complaints TAB  */}
                <TabsContent value="complaints" className="space-y-6 mt-4">
                    {/* Summary */}
                    <Card className="px-4 py-3 flex flex-wrap gap-4 text-sm">
                        <Stat label="Total" value="12" />
                        <Stat label="Open" variant='danger' value="6" />
                        <Stat label="In Progress" variant='info' value="4" />
                        <Stat label="Resolved" variant='success' value="2" />
                    </Card>

                    {/* Active */}
                    <div className="space-y-3">
                        <h2 className="text-sm font-semibold text-muted-foreground">
                            Active Complaints
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ComplaintCard
                                flat="A-302"
                                category="Plumbing"
                                desc="Water leakage in ceiling"
                                status="Open"
                                priority="High"
                            />

                            <ComplaintCard
                                flat="A-302"
                                category="Plumbing"
                                desc="Water leakage in bathroom"
                                status="Open"
                                priority="High"
                            />

                            <ComplaintCard
                                flat="B-104"
                                category="Electrical"
                                desc="Lift not working for B wing"
                                status="In Progress"
                                priority="Medium"
                            />
                        </div>
                    </div>


                    {/* Resolved */}
                    <div className="space-y-3">
                        <h2 className="text-sm font-semibold text-muted-foreground">
                            Recently Resolved
                        </h2>

                        <ComplaintCard
                            flat="C-210"
                            category="Electrical"
                            desc="Parking light issue"
                            status="Resolved"
                            priority="Low"
                        />
                    </div>
                </TabsContent>

                {/* Payments TAB */}
                <TabsContent value="payments" className="space-y-6 mt-4">
                    <MaintenancePayments />
                </TabsContent>
            </Tabs>

            <RaiseComplaintModal open={open} onClose={() => setOpen(false)} />
        </div>
    )
}
