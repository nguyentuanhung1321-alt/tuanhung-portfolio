import Image from 'next/image'
import { ArrowDownRight, Download, MapPin, ShieldCheck } from 'lucide-react'
import { profile, stats } from '@/lib/portfolio-data'
import { BentoCard } from '@/components/bento-card'

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="grid gap-4 md:grid-cols-4 md:grid-rows-[auto_auto]">
      <BentoCard className="flex flex-col justify-between gap-10 p-8 md:col-span-3 md:row-span-2 md:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            Sẵn sàng cho vị trí Fresher / SOC Analyst
          </span>
        </div>
        <div>
          <p className="font-mono text-sm text-brand">{profile.role}</p>
          <h1 id="hero-title" className="mt-3 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground text-pretty">{profile.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="size-4" aria-hidden="true" />
            Tải CV (PDF)
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Xem dự án
            <ArrowDownRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </BentoCard>

      <BentoCard className="relative aspect-[4/5] overflow-hidden p-0 sm:aspect-[3/2] md:aspect-auto md:min-h-80">
        <Image
          src="/images/avatar.jpg"
          alt={`Ảnh chân dung ${profile.name}`}
          fill
          priority
          sizes="(min-width: 768px) 25vw, 100vw"
          className="object-cover object-[center_20%] brightness-110 contrast-[1.03] saturate-[0.95]"
        />
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border bg-background/85 px-2.5 py-1 text-xs font-medium backdrop-blur-md">
          <ShieldCheck className="size-3.5 text-brand" aria-hidden="true" />
          Blue Team
        </span>
      </BentoCard>

      <BentoCard className="flex flex-col justify-between gap-6">
        <MapPin className="size-6 text-brand" aria-hidden="true" />
        <div>
          <p className="text-sm text-muted-foreground">Vị trí</p>
          <p className="mt-1 text-lg font-semibold">{profile.location}</p>
        </div>
      </BentoCard>

      <div className="grid gap-4 sm:grid-cols-3 md:col-span-4">
        {stats.map((stat) => (
          <BentoCard key={stat.label} className="flex items-center gap-4">
            <p className="font-mono text-3xl font-semibold tracking-tight text-brand">{stat.value}</p>
            <p className="text-sm leading-snug text-muted-foreground">{stat.label}</p>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}
