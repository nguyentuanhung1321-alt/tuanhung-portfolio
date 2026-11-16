import Image from 'next/image'
import { projects, type Project } from '@/lib/portfolio-data'
import { BentoCard, SectionHeading, Tag } from '@/components/bento-card'
import { cn } from '@/lib/utils'

const caseFields = [
  { key: 'problem', label: 'Problem' },
  { key: 'scope', label: 'Scope' },
  { key: 'keyFinding', label: 'Key Finding' },
] as const

function CaseStudy({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1
  return (
    <BentoCard as="article" className="grid gap-6 p-4 md:grid-cols-5 md:p-5">
      <figure
        className={cn(
          'relative aspect-[16/10] overflow-hidden rounded-xl border bg-muted md:col-span-2 md:aspect-auto md:min-h-80',
          reversed && 'md:order-2',
        )}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? ''}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-contain p-3 pt-12"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-end gap-3 p-5 pt-14">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Tech stack</p>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-lg border bg-background px-3 py-1.5 font-mono text-sm text-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
        <figcaption className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 font-mono text-xs backdrop-blur">
          Case {String(index + 1).padStart(2, '0')}
        </figcaption>
      </figure>

      <div className="flex flex-col gap-5 p-2 md:col-span-3">
        <header>
          <p className="font-mono text-xs text-muted-foreground">
            {project.context} · {project.period}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-balance md:text-2xl">{project.title}</h3>
        </header>

        <dl className="grid gap-3">
          {caseFields.map((field) => (
            <div
              key={field.key}
              className={cn(
                'rounded-xl p-4',
                field.key === 'keyFinding' ? 'border border-brand/30 bg-brand/10' : 'bg-muted/60',
              )}
            >
              <dt className="font-mono text-xs uppercase tracking-widest text-brand">{field.label}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed">{project[field.key]}</dd>
            </div>
          ))}
        </dl>

        <ul className="flex flex-wrap gap-2" aria-label="Công nghệ sử dụng">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </BentoCard>
  )
}

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects-title" id="projects" className="scroll-mt-24">
      <SectionHeading id="projects-title" eyebrow="02 / Case Studies" title="Dự án tiêu biểu" />
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <CaseStudy key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
