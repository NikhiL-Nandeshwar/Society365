import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs'
import { Bell, Dot } from 'lucide-react'

export function NoticesCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Notices</CardTitle>
        <CardDescription>Recent announcements</CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="latest">
          <TabsList className="mb-3">
            <TabsTrigger value="latest">Latest</TabsTrigger>
          </TabsList>

          <TabsContent value="latest" className="space-y-3">
            <NoticeItem
              title="Water supply interruption"
              desc="Water supply will be unavailable on Sunday"
              date="2 days ago"
            />

            <NoticeItem
              title="Maintenance due"
              desc="Monthly maintenance payment due by 10th"
              date="5 days ago"
            />

            <NoticeItem
              title="Festival meeting"
              desc="Diwali decoration meeting on Friday evening"
              date="1 week ago"
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function NoticeItem({
  title,
  desc,
  date,
}: {
  title: string
  desc: string
  date: string
}) {
  return (
    <div className="flex gap-3 rounded-md border p-3 hover:bg-muted transition">
      <div className="mt-1">
        <Bell className="h-4 w-4 text-teal-700" />
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{desc}</p>
        <p className="text-xs text-muted-foreground mt-1">{date}</p>
      </div>
    </div>
  )
}
