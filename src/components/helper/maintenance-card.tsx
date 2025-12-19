import { AlertTriangle, Droplets, Wrench, Zap } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export function Stat({
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

export function ComplaintCard({
  flat,
  category,
  desc,
  status,
  priority,
}: {
  flat: string
  category: string
  desc: string
  status: string
  priority: string
}) {
  const icon =
    category === 'Plumbing'
      ? Droplets
      : category === 'Electrical'
      ? Zap
      : Wrench

  const Icon = icon

  return (
    <Card className="px-4 py-3 flex items-center justify-between">
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 text-teal-700 mt-1" />
        <div>
          <p className="font-medium">{flat}</p>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <Badge
          variant="secondary"
          className={
            status === 'Open'
              ? 'bg-red-100 text-red-700'
              : status === 'In Progress'
              ? 'bg-amber-100 text-amber-700'
              : 'bg-green-100 text-green-700'
          }
        >
          {status}
        </Badge>

        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <AlertTriangle className="h-3 w-3" />
          {priority}
        </span>
      </div>
    </Card>
  )
}