import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export function MaintenancePayments() {
    return (
        <div className="space-y-6">
            {/* Summary */}
            <Card className="px-4 py-3 flex flex-wrap gap-4 text-sm">
                <Stat
                    label="Monthly Charge"
                    value="₹2,500 / flat"
                    variant="info"
                />

                <Stat
                    label="Collected"
                    value="₹1,48,450"
                    variant="success"
                />

                <Stat
                    label="Pending"
                    value="₹51,550"
                    variant="danger"
                />
            </Card>


            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PaymentRow flat="A-402" name="Soham Rao" status="Paid" />
                <PaymentRow flat="A-102" name="Sulekha Kulkarni" status="Pending" />
                <PaymentRow flat="D-404" name="Manaswi Deshmukh" status="Pending" />
                <PaymentRow flat="B-101" name="Rajendra Bhingarde" status="Paid" />
                <PaymentRow flat="C-307" name="Kalyani Ghosh" status="Pending" />
            </div>

        </div>
    )
}

/* ---------- Components ---------- */

function Stat({
    label,
    value,
    variant = 'default',
}: {
    label: string
    value: string
    variant?: 'default' | 'success' | 'danger' | 'info'
}) {
    const color =
        variant === 'success'
            ? 'text-green-700'
            : variant === 'danger'
                ? 'text-red-700'
                : variant === 'info'
                    ? 'text-blue-700'
                    : 'text-foreground'

    return (
        <div className="flex items-center gap-1.5">
            <span className="text-gray-600">{label} :</span>
            <span className={`font-medium ${color}`}>{value}</span>
        </div>
    )
}

function PaymentRow({
    flat,
    name,
    status,
}: {
    flat: string
    name: string
    status: 'Paid' | 'Pending'
}) {
    return (
        <Card className="px-4 py-3 flex items-center justify-between">
            <div>
                <p className="font-medium">{flat}</p>
                <p className="text-sm text-muted-foreground">{name}</p>
            </div>

            <div className="flex items-center gap-3">
                <Badge
                    variant="secondary"
                    className={
                        status === 'Paid'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }
                >
                    {status}
                </Badge>

                {status === 'Pending' && (
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toast.info('Payment flow is under development')}
                    >
                        Pay Now
                    </Button>
                )}
            </div>
        </Card>
    )
}
