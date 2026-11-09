import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
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

const anatomyEvidence = [
  {
    title: 'Certificate',
    label: 'WORLD ANATOMY DAY',
    src: '/world%20anatomy%20day%20certificate.jpg',
    alt: 'World Anatomy Day participation certificate',
    kind: 'certificate',
  },
  {
    title: 'Event evidence 01',
    label: 'WORLD ANATOMY DAY',
    src: '/world%20anatomy%20day%20evidence.jpg',
    alt: 'World Anatomy Day event evidence photograph',
    kind: 'photo',
  },
  {
    title: 'Event evidence 02',
    label: 'WORLD ANATOMY DAY',
    src: '/world%20anatomy%20day%20evidence_.jpeg',
    alt: 'World Anatomy Day event evidence photograph',
    kind: 'photo',
  },
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
            <p className="cf-eyebrow"><span className="cf-live-dot" /> UAE MEDICAL EDUCATION · EMIRATESMEDs</p>
            <p className="cf-kicker">A framework for the doctor I am learning to become.</p>
            <h1 id="cf-title">The nine roles<br />behind <em>good medicine.</em></h1>
            <p className="cf-hero-description">
              The UAE Competency Framework for Medical Education brings together nine connected roles that shape the knowledge, judgement and values expected of medical graduates.
            </p>
            <a className="cf-hero-link" href="#nine-roles">
              Explore the framework <ArrowDownRight size={17} aria-hidden="true" />
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
              <small>THEMATIC ROLES</small>
            </div>
            <span className="cf-orbit-caption">EMIRATESMEDs · 2023</span>
          </div>
        </section>

        <section className="cf-framework-strip" aria-label="Framework overview">
          <div><strong>09</strong><span>THEMATIC ROLES</span></div>
          <div><strong>85</strong><span>ENABLING COMPETENCIES</span></div>
          <div><strong>14</strong><span>ENTRUSTABLE ACTIVITIES</span></div>
          <p>One connected framework. Many ways to make a difference.</p>
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
                    <span className="cf-card-category">THEMATIC ROLE</span>
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

        <section className="cf-evidence-section" aria-labelledby="cf-evidence-title">
          <div className="cf-evidence-copy">
            <p className="cf-eyebrow">PORTFOLIO RECORD / EVIDENCE 001</p>
            <h2 id="cf-evidence-title">Learning beyond the lecture hall.</h2>
            <p>
              A small selection from World Anatomy Day, kept here as part of my medical learning record. Each item opens in a new tab for a closer look.
            </p>
            <span className="cf-evidence-note"><BookOpen size={15} /> DOCUMENTED EXPERIENCE</span>
          </div>
          <div className="cf-evidence-grid">
            {anatomyEvidence.map((item) => (
              <a className={`cf-evidence-card cf-evidence-${item.kind}`} href={item.src} target="_blank" rel="noreferrer" key={item.src}>
                <div className="cf-evidence-image-wrap">
                  <Image src={item.src} alt={item.alt} width={900} height={650} sizes="(max-width: 760px) 100vw, 30vw" />
                </div>
                <div className="cf-evidence-caption">
                  <span><small>{item.label}</small><strong>{item.title}</strong></span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="cf-footer">
          <span>MED—DEX <i>/</i> COMPETENCY FIELD GUIDE</span>
          <span>UAE · EMIRATESMEDs FRAMEWORK</span>
          <Link href="/">BACK TO PORTFOLIO ↑</Link>
        </footer>
      </div>
    </main>
  )
}
