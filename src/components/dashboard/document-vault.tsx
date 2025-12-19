'use client'

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
    Lock,
    ShieldCheck,
    FileText,
    Users,
    Wrench,
    Plus,
} from 'lucide-react'
import { useState } from 'react'
import { AddDocumentModal } from '../helper/add-doc-modal'
import { LockerCard } from '../helper/locker-card'

export default function DocumentVaultPage() {
    const [open, setOpen] = useState(false)

    return (
        <div className="p-6 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold flex items-center gap-2">
                        <Lock className="h-5 w-5 text-teal-700" />
                        Document Vault
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Secure and access-controlled society records
                    </p>
                </div>

                <Button variant="outline" onClick={() => setOpen(true)} className="gap-2 bg-teal-700 hover:bg-teal-600 text-white hover:text-white">
                    <Plus className="h-4 w-4" />
                    Add Document
                </Button>
            </div>

            {/* ================= ADMIN LOCKERS ================= */}
            <div className="space-y-3">
                <h2 className="text-sm font-semibold text-muted-foreground">
                    Administrative Vault
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <LockerCard
                        title="Society Documents"
                        desc="Registration, AGM, bank records"
                        icon={ShieldCheck}
                        count={3}
                    />

                    <LockerCard
                        title="Staff Documents"
                        desc="Watchman, cleaners, helpers"
                        icon={Users}
                        count={2}
                    />

                    <LockerCard
                        title="Service Providers"
                        desc="Plumber, electrician, AMC"
                        icon={Wrench}
                        count={2}
                    />
                </div>
            </div>

            {/* ================= RESIDENTS VAULT ================= */}
            <div className="space-y-3">
                <h2 className="text-sm font-semibold text-muted-foreground">
                    Residents Documents
                </h2>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Residents Vault</CardTitle>
                        <CardDescription>
                            Flat-wise confidential resident documents
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Tabs defaultValue="A">
                            <TabsList className="mb-4">
                                <TabsTrigger value="A">Wing A</TabsTrigger>
                                <TabsTrigger value="B">Wing B</TabsTrigger>
                                <TabsTrigger value="C">Wing C</TabsTrigger>
                                <TabsTrigger value="D">Wing D</TabsTrigger>
                            </TabsList>

                            {['A', 'B', 'C', 'D'].map(wing => (
                                <TabsContent key={wing} value={wing}>
                                    <div className="flex items-center justify-between rounded-md border px-4 py-3">
                                        <div className="flex items-center gap-2 text-sm">
                                            <FileText className="h-4 w-4 text-muted-foreground" />
                                            Documents stored for Wing {wing}
                                        </div>

                                        <Badge variant="secondary" className="flex items-center gap-1">
                                            <Lock className="h-3 w-3" />
                                            Secured
                                        </Badge>
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </CardContent>
                </Card>
                <AddDocumentModal open={open} onClose={() => setOpen(false)} />
            </div>
        </div>
    )
}