import Image from 'next/image'
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseMedical,
  FlaskConical,
  HeartHandshake,
  MapPin,
  Stethoscope,
} from 'lucide-react'

const fieldSkills = [
  { label: '[Clinical skill]', note: 'Add a skill you can evidence' },
  { label: '[Research interest]', note: 'A topic you are exploring' },
  { label: '[Community work]', note: 'Where you show up' },
]

const highlights = [
  {
    icon: BriefcaseMedical,
    category: 'CLINICAL',
    title: '[Rotation or placement]',
    detail: '[Department] · [Month year – Month year]',
  },
  {
    icon: FlaskConical,
    category: 'RESEARCH',
    title: '[Project, poster, or publication]',
    detail: '[Your contribution] · [Year]',
  },
  {
    icon: HeartHandshake,
    category: 'SERVICE',
    title: '[Community or volunteer role]',
    detail: '[Who you served] · [Year]',
  },
]

function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export function MedicinePortfolio() {
  return (
    <main className="portfolio-page">
      <div className="page-shell">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Med-dex home">
            <span className="wordmark-icon" aria-hidden="true">
              <Activity size={17} strokeWidth={2.2} />
            </span>
            <span>MED<span className="wordmark-dash">—</span>DEX</span>
          </a>
          <nav className="site-nav" aria-label="Portfolio navigation">
            <a href="#profile">Profile</a>
            <a href="#field-notes">Field notes</a>
            <a href="#contact">Contact</a>
          </nav>
          <span className="header-index">PORTFOLIO / 001</span>
        </header>

        <section className="intro" id="top" aria-labelledby="intro-title">
          <div>
            <p className="eyebrow intro-eyebrow"><span className="live-dot" /> A LIVING RECORD · UPDATED [MONTH YEAR]</p>
            <h1 id="intro-title">A portfolio<br /><em>with a pulse.</em></h1>
          </div>
          <a className="intro-link" href="#profile">
            Explore this entry <ArrowDownRight size={17} aria-hidden="true" />
          </a>
        </section>

        <section className="entry-card" id="profile" aria-labelledby="entry-name">
          <div className="entry-topline">
            <span><span className="tiny-square" /> POKÉDEX / HUMAN FILE</span>
            <span>NO. <strong>001</strong></span>
            <span className="entry-status"><span className="live-dot" /> ENTRY LOADED</span>
          </div>

          <div className="entry-main">
            <div className="specimen-frame">
              <div className="specimen-label"><span>FIG. 01</span><span>FIELD SPECIMEN</span></div>
              <Image
                className="specimen-image"
                src="/clinical-dex-sprite.png"
                alt="Pixel-art Pokédex specimen: a stethoscope curled around ginkgo leaves and a capsule"
                width={800}
                height={600}
                priority
              />
              <div className="specimen-caption"><Stethoscope size={14} aria-hidden="true" /> CARE, CURIOSITY &amp; CLINICAL PRACTICE</div>
            </div>

            <div className="entry-copy">
              <div className="entry-tags"><span>TYPE: MEDICINE</span><span>TRAINER FILE</span></div>
              <h2 id="entry-name">[Your Name]</h2>
              <p className="entry-role">[Medical student / clinician] <span>·</span> [Year or specialty]</p>
              <p className="entry-summary">
                A curious clinician-in-training, drawn to thoughtful care, clear communication, and the questions that move medicine forward.
                <span className="placeholder-hint"> Replace this with a short introduction in your own voice.</span>
              </p>
              <div className="entry-facts">
                <div><span className="fact-label">ABILITY</span><span><Activity size={14} aria-hidden="true" /> [Your signature strength]</span></div>
                <div><span className="fact-label">HABITAT</span><span><MapPin size={14} aria-hidden="true" /> [Hospital / community / research]</span></div>
                <div><span className="fact-label">TRAINER</span><span><BookOpen size={14} aria-hidden="true" /> [Medical school / institution]</span></div>
              </div>
              <a className="entry-cta" href="#field-notes">View field notes <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>

          <div className="entry-footline">
            <span>SPECIES <strong>HUMAN · CLINICIAN-IN-TRAINING</strong></span>
            <span>STATUS <strong>ALWAYS LEARNING</strong></span>
          </div>
          <div className="device-controls" aria-hidden="true">
            <span className="control-pad" />
            <span className="speaker-grille" />
            <span className="device-control-button device-control-blue" />
            <span className="device-control-button device-control-yellow" />
            <span className="device-control-label">MED-DEX · FIELD UNIT</span>
          </div>
        </section>

        <section className="field-notes" id="field-notes" aria-labelledby="field-notes-title">
          <div className="section-intro">
            <SectionHeading index="01" eyebrow="THE FIELD NOTES" title="Evidence, not just titles." />
            <p className="section-aside">A small collection of moments, projects, and people that have shaped my practice.</p>
          </div>

          <div className="notes-grid">
            <div className="highlights-panel">
              <div className="panel-topline"><span>RECENT DISCOVERIES</span><span>03 ITEMS</span></div>
              <div className="highlight-list">
                {highlights.map(({ icon: Icon, category, title, detail }, index) => (
                  <article className="highlight-row" key={category}>
                    <span className="highlight-number">0{index + 1}</span>
                    <span className="highlight-icon"><Icon size={18} strokeWidth={1.7} aria-hidden="true" /></span>
                    <div className="highlight-content">
                      <p className="eyebrow">{category}</p>
                      <h3>{title}</h3>
                      <p>{detail}</p>
                    </div>
                    <ArrowUpRight className="highlight-arrow" size={17} aria-hidden="true" />
                  </article>
                ))}
              </div>
              <p className="panel-footnote">Tip: link each entry to a case reflection, abstract, or project page.</p>
            </div>

            <aside className="skills-panel" aria-labelledby="skills-title">
              <div className="panel-topline"><span>FIELD KIT</span><span>LOADOUT / 03</span></div>
              <div className="skills-heading"><span className="skills-icon"><Stethoscope size={18} aria-hidden="true" /></span><div><p className="eyebrow">SIGNATURE STRENGTHS</p><h3 id="skills-title">What I bring</h3></div></div>
              <div className="skill-list">
                {fieldSkills.map((skill, index) => (
                  <div className="skill-item" key={skill.label}>
                    <span className="skill-index">0{index + 1}</span>
                    <div><h4>{skill.label}</h4><p>{skill.note}</p></div>
                    <span className="skill-mark" aria-hidden="true">↗</span>
                  </div>
                ))}
              </div>
              <p className="skills-note">Keep it specific. Add the skills your experiences can back up.</p>
            </aside>
          </div>
        </section>

        <section className="closing-grid" aria-label="Education and contact">
          <article className="education-card">
            <SectionHeading index="02" eyebrow="TRAINING LOG" title="The learning never stops." />
            <div className="education-entry">
              <span className="education-marker" aria-hidden="true" />
              <div><p className="eyebrow">[START YEAR] — [EXPECTED YEAR]</p><h3>[Degree or qualification]</h3><p>[Institution] · [City]</p></div>
              <span className="education-code">EDU / 01</span>
            </div>
            <p className="education-footnote">Add your education, certifications, and relevant training here.</p>
          </article>

          <aside className="contact-card" id="contact">
            <div className="contact-orbit" aria-hidden="true"><Activity size={21} /></div>
            <p className="eyebrow">OPEN CHANNEL</p>
            <h2>Good care starts<br />with a conversation.</h2>
            <p>For collaborations, mentorship, or a thoughtful hello.</p>
            <a className="contact-link" href="mailto:your.email@example.com">your.email@example.com <ArrowUpRight size={16} aria-hidden="true" /></a>
          </aside>
        </section>

        <footer className="page-footer">
          <span>MED-DEX <span className="footer-divider">/</span> A PERSONAL FIELD GUIDE</span>
          <span>MADE WITH CARE, BY [YOUR NAME]</span>
          <a href="#top">BACK TO TOP ↑</a>
        </footer>
      </div>
    </main>
  )
}
