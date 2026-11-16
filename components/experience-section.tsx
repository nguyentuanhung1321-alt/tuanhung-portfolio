import { Briefcase } from 'lucide-react'
import { experience } from '@/lib/portfolio-data'
import { BentoCard, SectionHeading, Tag } from '@/components/bento-card'

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="scroll-mt-24">
      <SectionHeading id="experience-title" eyebrow="01 / Experience" title="Kinh nghiệm làm việc" />
      {experience.map((job) => (
        <div key={job.role} className="grid gap-4 md:grid-cols-3">
          <BentoCard className="flex flex-col justify-between gap-6">
            <div className="flex size-11 items-center justify-center rounded-xl bg-muted">
              <Briefcase className="size-5 text-brand" aria-hidden="true" />
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </BentoCard>
          <BentoCard className="md:col-span-2">
            <ul className="grid gap-4 sm:grid-cols-2">
              {job.points.map((point, index) => (
                <li key={point} className="flex gap-3 rounded-xl bg-muted/60 p-4">
                  <span className="font-mono text-xs text-brand">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      ))}
    </section>
  )
}
