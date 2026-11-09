import Link from 'next/link'
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Brain,
  Globe2,
  HeartPulse,
  MessageCircle,
  Microscope,
  Network,
  ShieldCheck,
  Sprout,
  UsersRound,
} from 'lucide-react'
import { competencies } from '@/data/competencies'

const roleIcons = [
  Brain,
  Microscope,
  HeartPulse,
  MessageCircle,
  UsersRound,
  ShieldCheck,
  Network,
  Sprout,
  Globe2,
]


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

export function CompetenciesOverview() {
  return (
    <main className="cf-page">
      <div className="cf-shell">
        <SiteHeader />

        <section className="cf-hero cf-enter" aria-labelledby="cf-title">
          <div className="cf-hero-copy">
            <p className="cf-eyebrow"><span className="cf-live-dot" /> TRAINER FIELD GUIDE · UAE MEDICAL EDUCATION</p>
            <p className="cf-kicker">POKÉDEX FILE / EMIRATESMEDs FRAMEWORK</p>
            <h1 id="cf-title">The nine roles<br />behind <em>good medicine.</em></h1>
            <p className="cf-hero-description">
              The UAE Competency Framework for Medical Education brings together nine connected roles that shape the knowledge, judgement and values expected of medical graduates.
            </p>
            <a className="cf-hero-link" href="#nine-roles">
              <span className="pokeball-mark" aria-hidden="true"><span /></span>
              Choose your competency <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="cf-hero-art" aria-label="Nine connected roles surrounding EmiratesMEDs">
            <div className="cf-orbit cf-orbit-outer" />
            <div className="cf-orbit cf-orbit-middle" />
            <div className="cf-orbit cf-orbit-inner" />
            <span className="cf-orbit-dot cf-dot-one" />
            <span className="cf-orbit-dot cf-dot-two" />
            <span className="cf-orbit-dot cf-dot-three" />
            <div className="cf-orbit-core">
              <span>UAE</span>
              <strong>9</strong>
              <small>DEX ENTRIES</small>
            </div>
            <span className="cf-orbit-caption">EMIRATESMEDs · 2023</span>
          </div>
        </section>


        <section className="cf-roles-section" id="nine-roles" aria-labelledby="cf-roles-title">
          <div className="cf-section-heading">
            <div>
              <p className="cf-eyebrow">THE FRAMEWORK / 01—09</p>
              <h2 id="cf-roles-title">Choose a competency.</h2>
            </div>
            <p>Each role opens into its own page with the core competency and the practical abilities it represents.</p>
          </div>

          <div className="cf-role-grid">
            {competencies.map((role, index) => {
              const Icon = roleIcons[index]
              return (
                <Link
                  className="cf-role-card"
                  href={`/competencies/${role.slug}`}
                  key={role.slug}
                  style={{ animationDelay: `${index * 65}ms` }}
                >
                  <div className="cf-card-topline">
                    <span className="cf-card-number">{role.number}</span>
                    <span className="cf-card-category">POKÉDEX ENTRY</span>
                    <span className="cf-card-icon"><Icon size={19} strokeWidth={1.65} aria-hidden="true" /></span>
                  </div>
                  <h3>{role.title}</h3>
                  <p>{role.teaser}</p>
                  <span className="cf-card-action">Explore role <ArrowUpRight size={16} aria-hidden="true" /></span>
                </Link>
              )
            })}
          </div>
        </section>


        <footer className="cf-footer">
          <span>MED—DEX <i>/</i> TRAINER FIELD GUIDE</span>
          <span>UAE · NINE MEDICAL ROLES</span>
          <Link href="/">BACK TO PORTFOLIO ↑</Link>
        </footer>
      </div>
    </main>
  )
}
