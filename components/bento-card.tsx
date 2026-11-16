import { cn } from '@/lib/utils'

export function BentoCard({
  className,
  children,
  as: Tag = 'div',
}: {
  className?: string
  children: React.ReactNode
  as?: 'div' | 'article' | 'li'
}) {
  return <Tag className={cn('rounded-2xl border bg-card p-6 text-card-foreground', className)}>{children}</Tag>
}

export function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-brand">{eyebrow}</p>
        <h2 id={id} className="mt-1 text-2xl font-semibold tracking-tight text-balance md:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  )
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  )
}
