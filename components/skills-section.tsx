import { Bug, Code2, Network, Wrench } from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { BentoCard, SectionHeading } from '@/components/bento-card'
import { cn } from '@/lib/utils'

const icons = [Network, Wrench, Code2, Bug]
const spans = ['md:col-span-2', 'md:col-span-1', 'md:col-span-1', 'md:col-span-2']

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="scroll-mt-24">
      <SectionHeading id="skills-title" eyebrow="03 / Skills" title="Kỹ năng" />
      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[index]
          return (
            <BentoCard key={group.title} className={cn('flex flex-col gap-5', spans[index])}>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-muted">
                  <Icon className="size-5 text-brand" aria-hidden="true" />
                </div>
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-lg border bg-background px-3 py-1.5 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </BentoCard>
          )
        })}
      </div>
    </section>
  )
}
