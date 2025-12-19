import { Badge } from "../ui/badge"
import { Card, CardContent } from "../ui/card"

export function LockerCard({
    title,
    desc,
    icon: Icon,
    count,
}: {
    title: string
    desc: string
    icon: any
    count: number
}) {
    return (
        <Card className="hover:shadow-sm transition">
            <CardContent className="flex flex-col items-center text-center gap-3 py-6">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-teal-700" />
                </div>

                <div>
                    <p className="font-medium">{title}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                </div>

                <Badge variant="secondary">{count} files</Badge>
            </CardContent>
        </Card>

    )
}