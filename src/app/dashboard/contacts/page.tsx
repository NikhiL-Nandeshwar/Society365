'use client'

import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Phone, Wrench, Zap, Droplets, Shield, Plus } from 'lucide-react'

const iconMap: Record<string, any> = {
  Plumber: Wrench,
  Electrician: Zap,
  'Water Tanker': Droplets,
  Security: Shield,
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState([
    {
      role: 'Plumber',
      name: 'Vinod Bhosale',
      phone: '9812345678',
      availability: '24x7',
    },
    {
      role: 'Electrician',
      name: 'Mithilesh Koli',
      phone: '9722332245',
      availability: 'Daytime',
    },
    {
      role: 'Water Tanker',
      name: 'B.K.Patil',
      phone: '9911223389',
      availability: 'On call',
    },
    {
      role: 'Security',
      name: 'Savio Thomas',
      phone: '7612121234',
      availability: 'Night duty',
    },
  ])

  const [form, setForm] = useState({
    role: '',
    name: '',
    phone: '',
    availability: '',
  })

  const handleAdd = () => {
    if (!form.role || !form.name || !form.phone) return

    setContacts(prev => [...prev, form])
    setForm({ role: '', name: '', phone: '', availability: '' })
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Important Contacts</h1>
          <p className="text-sm text-muted-foreground">
            Trusted service providers for the society
          </p>
        </div>

        {/* Add Contact */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-teal-700 hover:bg-teal-600 text-white hover:text-white" variant='outline'>
              <Plus className="h-4 w-4" />
              Add Contact
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Contact</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label>Role</Label>
                <Input
                  placeholder="Plumber / Electrician"
                  value={form.role}
                  onChange={e => setForm({ ...form, role: e.target.value })}
                />
              </div>

              <div>
                <Label>Name</Label>
                <Input
                  placeholder="Person name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <Label>Phone</Label>
                <Input
                  placeholder="Mobile number"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div>
                <Label>Availability</Label>
                <Input
                  placeholder="24x7 / Daytime"
                  value={form.availability}
                  onChange={e =>
                    setForm({ ...form, availability: e.target.value })
                  }
                />
              </div>

              <Button onClick={handleAdd} className="w-full bg-teal-700 hover:bg-teal-600 text-white hover:text-white">
                Save Contact
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact, idx) => {
          const Icon = iconMap[contact.role] || Phone

          return (
            <Card key={idx} className="hover:shadow-sm transition">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-teal-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-teal-700" />
                  </div>

                  <div>
                    <CardTitle className="text-base leading-none">
                      {contact.role}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {contact.name}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex items-center justify-between">
                <div className="space-y-1 space-x-1.5">
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-sm font-medium text-teal-700 hover:underline"
                  >
                    {contact.phone}
                  </a>
                  {contact.availability && (
                    <Badge variant="secondary" className="text-xs">
                      {contact.availability}
                    </Badge>
                  )}
                </div>

                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-1 text-sm text-teal-700 hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
