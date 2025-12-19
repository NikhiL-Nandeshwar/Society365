import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '../ui/progress'
import { Badge } from '../ui/badge'
import { Bell } from 'lucide-react'

export function OverviewCard({
  title,
  value,
  sub,
  progress,
  icon,
  accent = false,
}: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>

      <CardContent>
        <div className="text-xl font-semibold">{value}</div>

        <Progress
          value={progress}
          className={`mt-2 h-1.5 ${
            accent ? 'bg-teal-200 [&>div]:bg-teal-600' : 'bg-muted'
          }`}
        />

        <p className="text-sm text-muted-foreground mt-1">{sub}</p>
      </CardContent>
    </Card>
  )
}

export function SummaryTile({
  title,
  value,
  footer,
  border,
  text,
}: {
  title: string
  value: string
  footer: string
  border: string
  text: string
}) {
  return (
    <Card className={`border-2 ${border}`}>
      <CardContent className="h-[120px] flex flex-col items-center justify-center text-center p-3 gap-1.5">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className={`text-2xl font-bold ${text}`}>{value}</p>
        <p className="text-sm text-muted-foreground">{footer}</p>
      </CardContent>
    </Card>
  )
}

export function ActivityRow({ flat, text, status }: any) {
  const color =
    status === 'Resolved'
      ? 'bg-green-100 text-green-700'
      : status === 'In Progress'
      ? 'bg-amber-100 text-amber-700'
      : 'bg-red-100 text-red-700'

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">{flat}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
      <Badge className={color}>{status}</Badge>
    </div>
  )
}

export function NoticeRow({ text }: any) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Bell className="h-4 w-4 text-muted-foreground" />
      <span>{text}</span>
    </div>
  )
}
