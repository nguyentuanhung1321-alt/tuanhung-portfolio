import { Award, GraduationCap } from 'lucide-react'
import { certifications, education } from '@/lib/portfolio-data'
import { BentoCard, SectionHeading } from '@/components/bento-card'

export function EducationSection() {
  return (
    <section aria-labelledby="education-title" id="education" className="scroll-mt-24">
      <SectionHeading id="education-title" eyebrow="04 / Education" title="Học vấn & Chứng chỉ" />
      <div className="grid gap-4 md:grid-cols-3">
        <BentoCard className="flex flex-col justify-between gap-8 md:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div className="flex size-11 items-center justify-center rounded-xl bg-muted">
              <GraduationCap className="size-5 text-brand" aria-hidden="true" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">{education.period}</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p className="mt-1 text-brand">{education.major}</p>
            <p className="mt-2 text-sm text-muted-foreground">{education.school}</p>
          </div>
        </BentoCard>
        <BentoCard className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-muted">
              <Award className="size-5 text-brand" aria-hidden="true" />
            </div>
            <h3 className="font-semibold">Chứng chỉ</h3>
          </div>
          <ul className="grid gap-3">
            {certifications.map((cert) => (
              <li key={cert.name} className="rounded-xl bg-muted/60 p-4">
                <p className="text-sm font-medium">{cert.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </BentoCard>
      </div>
    </section>
  )
}
