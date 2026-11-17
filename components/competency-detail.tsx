'use client'

import Image from 'next/image'
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
        <Link className="is-active" href="/competencies">Competencies</Link>
        <Link href="/#field-notes">Field notes</Link>
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
  const completed = competency.slug === 'collaborator-innovator-and-leader'

  return (
    <main className="cf-page">
      <div className="cf-shell">
        <SiteHeader />

        <div className="cf-detail-back cf-enter">
          <Link href="/competencies"><ArrowLeft size={16} /> All nine competencies</Link>
          <span>DEX ENTRY {competency.number} / 09</span>
        </div>

        <article className="cf-detail cf-enter" aria-labelledby="cf-detail-title">
          <div className="cf-detail-heading">
            <div className="cf-detail-emblem" aria-hidden="true">
              <span>{roleMarks[currentIndex]}</span>
              <small>{competency.number}</small>
            </div>
            <div className="cf-detail-title-wrap">
              <p className="cf-eyebrow">EMIRATESMEDs FRAMEWORK / {competency.number}</p>
              <h1 id="cf-detail-title">{competency.title}<span>.</span></h1>
              <p className="cf-detail-teaser">{competency.teaser}</p>
            </div>
          </div>

          {completed && (
            <div className="cf-completion-panel is-completed" role="status">
              <div className="cf-completion-copy">
                <span className="cf-completion-icon"><Check size={15} strokeWidth={3} /></span>
                <span>
                  <strong>COMPLETED · 2026</strong>
                  <small>This role is supported by the World Anatomy Day organising experience below.</small>
                </span>
              </div>
              <span className="cf-completion-stamp">TRAINER RECORD / 05</span>
            </div>
          )}

          <section className="cf-core-panel" aria-labelledby="cf-core-title">
            <div className="cf-panel-label"><span className="cf-panel-mark" /> CORE COMPETENCY</div>
            <h2 id="cf-core-title">What this role means</h2>
            <p>{competency.coreCompetency}</p>
          </section>

          {completed && (
            <section className="cf-activity-section" aria-labelledby="cf-activity-title">
              <div className="cf-activity-copy">
                <p className="cf-eyebrow"><span className="cf-live-dot" /> TRAINER LOG · EXPERIENCE 001</p>
                <h2 id="cf-activity-title">World Anatomy Day</h2>
                <p className="cf-activity-intro">
                  I was recognised with a Certificate of Appreciation for helping organise World Anatomy Day at Gulf Medical University on <time className="cf-event-date" dateTime="2026-10-15">15 October 2026</time>.
                </p>
                <div className="cf-activity-tags" aria-label="Experience details">
                  <span>COLLABORATION</span>
                  <span>EVENT ORGANISATION</span>
                  <span>TEAMWORK</span>
                </div>

                <div className="cf-activity-reflection">
                  <p className="cf-eyebrow">MY REFLECTION</p>
                  <h3 id="cf-reflection-title">What I learned</h3>
                  <p className="cf-reflection-scroll-hint">Scroll to read all six sections</p>
                  <div className="cf-activity-reflection-scroll" role="region" aria-labelledby="cf-reflection-title" tabIndex={0}>
                    <section className="cf-reflection-entry" aria-labelledby="cf-reflection-description">
                      <h4 id="cf-reflection-description">Description</h4>
                      <p>On 15 October 2026, I participated in World Anatomy Day at GMU. It was my first experience taking an organising role at an event. Our topic was the abdominal region, so I helped create a poster and also competed in the plank competition. Being involved in both the preparation and the event itself allowed me to experience different aspects of organising and participating in a university activity.</p>
                    </section>
                    <section className="cf-reflection-entry" aria-labelledby="cf-reflection-feelings">
                      <h4 id="cf-reflection-feelings">Feelings</h4>
                      <p>Before the event, I was slightly nervous about taking on unfamiliar responsibilities. I was also excited to be part of an event that brought students together through interactive activities and anatomy. Managing participants and ensuring activities ran smoothly was more challenging than I had anticipated. Taking part in the plank competition was especially enjoyable because I could challenge fellow participants and experience the competitive atmosphere first-hand.</p>
                    </section>
                    <section className="cf-reflection-entry" aria-labelledby="cf-reflection-evaluation">
                      <h4 id="cf-reflection-evaluation">Evaluation</h4>
                      <p>One enjoyable aspect was designing the poster, which gave me an opportunity to express my creativity. Teaching abdominal anatomy also allowed me to share my knowledge with others. I enjoyed participating in the plank competition rather than remaining behind the scenes. However, coordinating activities and interacting with participants presented challenges, reminding me that event organisation involves more than I had expected.</p>
                    </section>
                    <section className="cf-reflection-entry" aria-labelledby="cf-reflection-analysis">
                      <h4 id="cf-reflection-analysis">Analysis</h4>
                      <p>I learned that successful event organisation depends on several responsibilities working together. Preparing materials and activities is important, but effective communication, coordination and adaptability are equally essential. My contributions involved different skills: creativity, explaining anatomical concepts and participating in a physical challenge. This experience helped me see how individual efforts combine to create a shared outcome.</p>
                    </section>
                    <section className="cf-reflection-entry" aria-labelledby="cf-reflection-conclusion">
                      <h4 id="cf-reflection-conclusion">Conclusion</h4>
                      <p>Overall, World Anatomy Day was valuable because it allowed me to step beyond my usual responsibilities and explore different ways of contributing to a team. It helped me recognise that I can contribute creatively, academically and through participation. It also showed me where I can improve, particularly in managing groups and coordinating activities effectively.</p>
                    </section>
                    <section className="cf-reflection-entry" aria-labelledby="cf-reflection-action-plan">
                      <h4 id="cf-reflection-action-plan">Action Plan</h4>
                      <p>For future events, I will prepare clear instructions, communicate responsibilities with fellow organisers in advance, and consider how participants will move between activities. I would also like to take on more coordination responsibilities to build my confidence in managing groups. I hope to use these lessons to strengthen my organisation, communication and teamwork skills.</p>
                    </section>
                  </div>
                </div>
                <p className="cf-activity-credit">Evidence: Certificate of Appreciation, event preparation, team photograph and plank competition participation.</p>
              </div>

              <div className="cf-activity-gallery" aria-label="World Anatomy Day evidence gallery">
                <a className="cf-activity-image cf-activity-certificate" href="/world%20anatomy%20day%20certificate.jpg" target="_blank" rel="noreferrer">
                  <div className="cf-activity-image-frame">
                    <Image
                      src="/world%20anatomy%20day%20certificate.jpg"
                      alt="Certificate of Appreciation awarded to Athul George for organising World Anatomy Day"
                      width={1972}
                      height={1390}
                      sizes="(max-width: 760px) 100vw, 42vw"
                    />
                  </div>
                  <span><small>OFFICIAL RECOGNITION</small><strong>Certificate of Appreciation</strong></span>
                </a>
                <a className="cf-activity-image" href="/world%20anatomy%20day%20evidence.jpg" target="_blank" rel="noreferrer">
                  <div className="cf-activity-image-frame">
                    <Image
                      src="/world%20anatomy%20day%20evidence.jpg"
                      alt="Preparing the World Anatomy Day event banner"
                      width={960}
                      height={1280}
                      sizes="(max-width: 760px) 100vw, 24vw"
                    />
                  </div>
                  <span><small>EVENT PREPARATION</small><strong>Preparing event materials</strong></span>
                </a>
                <a className="cf-activity-image" href="/world%20anatomy%20day%20evidence_.jpeg" target="_blank" rel="noreferrer">
                  <div className="cf-activity-image-frame">
                    <Image
                      src="/world%20anatomy%20day%20evidence_.jpeg"
                      alt="World Anatomy Day organising team at Gulf Medical University"
                      width={1280}
                      height={960}
                      sizes="(max-width: 760px) 100vw, 24vw"
                    />
                  </div>
                  <span><small>TEAM EVIDENCE</small><strong>World Anatomy Day team</strong></span>
                </a>
                <a className="cf-activity-image cf-activity-participation" href="/world-anatomy-day-plank-challenge.jpg" target="_blank" rel="noreferrer">
                  <div className="cf-activity-image-frame">
                    <Image
                      src="/world-anatomy-day-plank-challenge.jpg"
                      alt="Two participants holding forearm planks on a red mat during World Anatomy Day"
                      width={1049}
                      height={1049}
                      sizes="(max-width: 650px) 90vw, 320px"
                    />
                  </div>
                  <span><small>EVENT PARTICIPATION</small><strong>Plank competition</strong></span>
                </a>
              </div>
            </section>
          )}

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
          <span>MED—DEX <i>/</i> TRAINER FIELD GUIDE</span>
          <span>UAE · NINE MEDICAL ROLES</span>
          <Link href="/">BACK TO PORTFOLIO <ArrowUpRight size={13} /></Link>
        </footer>
      </div>
    </main>
  )
}
