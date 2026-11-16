import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { BentoCard, SectionHeading } from '@/components/bento-card'

const contacts = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Điện thoại', value: profile.phoneDisplay, href: `tel:${profile.phone}` },
  { icon: MapPin, label: 'Địa điểm', value: profile.location },
]

export function ContactSection() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="scroll-mt-24">
      <SectionHeading id="contact-title" eyebrow="05 / Contact" title="Liên hệ" />
      <div className="grid gap-4 md:grid-cols-3">
        <BentoCard className="flex flex-col justify-between gap-8 bg-primary p-8 text-primary-foreground md:row-span-3 md:col-span-2">
          <p className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Cùng xây dựng hệ thống an toàn hơn.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
            >
              Gửi email
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
            >
              <Download className="size-4" aria-hidden="true" />
              Tải CV
            </a>
          </div>
        </BentoCard>
        {contacts.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <>
              <Icon className="size-5 shrink-0 text-brand" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">{label}</span>
                <span className="block truncate text-sm font-medium">{value}</span>
              </span>
            </>
          )
          return (
            <BentoCard key={label} className="p-0">
              {href ? (
                <a href={href} className="flex items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-muted">
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-4 p-5">{content}</div>
              )}
            </BentoCard>
          )
        })}
      </div>
    </section>
  )
}
