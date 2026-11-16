import { Download } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { ThemeToggle } from '@/components/theme-toggle'

const navItems = [
  { href: '#experience', label: 'Kinh nghiệm' },
  { href: '#projects', label: 'Dự án' },
  { href: '#skills', label: 'Kỹ năng' },
  { href: '#education', label: 'Học vấn' },
  { href: '#contact', label: 'Liên hệ' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium">
          <span className="inline-block size-2 rounded-full bg-brand" aria-hidden="true" />
          tuanhung.sec
        </a>
        <nav aria-label="Điều hướng chính" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={profile.cvUrl}
            download
            className="hidden items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-muted sm:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            CV
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
