import Link from 'next/link'
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
} from 'lucide-react'
import { competencies, type Competency } from '@/data/competencies'

const roleMarks = ['ME', 'EB', 'PC', 'CO', 'CL', 'PR', 'HS', 'SP', 'SA']

function SiteHeader() {
  return (
    <header className="cf-header">
      <Link className="cf-wordmark" href="/" aria-label="Med-Dex home">
        <span className="cf-wordmark-icon"><Activity size={17} strokeWidth={2.2} /></span>
        <span>MED<span className="cf-wordmark-dash">—</span>DEX</span>
      </Link>
      <nav className="cf-nav" aria-label="Portfolio navigation">
        <Link href="/#profile">Profile</Link>
        <Link href="/#field-notes">Field notes</Link>
        <Link className="is-active" href="/competencies">Competencies</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <span className="cf-header-index">FIELD GUIDE / 002</span>
    </header>
  )
}

export function CompetencyDetail({ competency }: { competency: Competency }) {
  const currentIndex = competencies.findIndex((item) => item.slug === competency.slug)
  const previous = competencies[(currentIndex + competencies.length - 1) % competencies.length]
  const next = competencies[(currentIndex + 1) % competencies.length]

  return (
    <main className="cf-page">
      <div className="cf-shell">
        <SiteHeader />

        <div className="cf-detail-back cf-enter">
          <Link href="/competencies"><ArrowLeft size={16} /> All nine competencies</Link>
          <span>THEMATIC ROLE {competency.number} / 09</span>
        </div>

        <article className="cf-detail cf-enter" aria-labelledby="cf-detail-title">
          <div className="cf-detail-heading">
            <div className="cf-detail-emblem" aria-hidden="true">
              <span>{roleMarks[currentIndex]}</span>
              <small>{competency.number}</small>
            </div>
            <div className="cf-detail-title-wrap">
              <p className="cf-eyebrow">EMIRATESMEDs · THEME {competency.number}</p>
              <h1 id="cf-detail-title">{competency.title}<span>.</span></h1>
              <p className="cf-detail-teaser">{competency.teaser}</p>
            </div>
          </div>

          <section className="cf-core-panel" aria-labelledby="cf-core-title">
            <div className="cf-panel-label"><span className="cf-panel-mark" /> CORE COMPETENCY</div>
            <h2 id="cf-core-title">What this role means</h2>
            <p>{competency.coreCompetency}</p>
          </section>

          <section className="cf-focus-section" aria-labelledby="cf-focus-title">
            <div className="cf-section-heading">
              <div>
                <p className="cf-eyebrow">FROM PRINCIPLE TO PRACTICE</p>
                <h2 id="cf-focus-title">What it asks of a future doctor.</h2>
              </div>
              <p>These focus points summarise the kinds of knowledge, skills and professional behaviours connected to this role.</p>
            </div>

            <div className="cf-focus-grid">
              {competency.focusAreas.map((item, index) => (
                <div className="cf-focus-item" key={item} style={{ animationDelay: `${index * 85}ms` }}>
                  <span className="cf-focus-check"><Check size={15} strokeWidth={2.2} /></span>
                  <span className="cf-focus-number">0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="cf-reflection-panel">
            <span className="cf-reflection-index">A NOTE TO CARRY FORWARD</span>
            <p>{competency.practiceNote}</p>
          </aside>
        </article>

        <nav className="cf-detail-pagination" aria-label="Browse competencies">
          <Link className="cf-pagination-side" href={`/competencies/${previous.slug}`}>
            <span><ArrowLeft size={15} /> PREVIOUS ROLE</span>
            <strong>{previous.number} · {previous.shortTitle}</strong>
          </Link>
          <Link className="cf-pagination-all" href="/competencies">ALL 09 <span>↑</span></Link>
          <Link className="cf-pagination-side cf-pagination-next" href={`/competencies/${next.slug}`}>
            <span>NEXT ROLE <ArrowRight size={15} /></span>
            <strong>{next.number} · {next.shortTitle}</strong>
          </Link>
        </nav>

        <footer className="cf-footer">
          <span>MED—DEX <i>/</i> COMPETENCY FIELD GUIDE</span>
          <span>UAE · EMIRATESMEDs FRAMEWORK</span>
          <Link href="/">BACK TO PORTFOLIO <ArrowUpRight size={13} /></Link>
        </footer>
      </div>
    </main>
  )
}
