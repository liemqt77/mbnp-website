import { useEffect, useState } from 'react'

const services = [
  ['Commercial Litigation', 'Strategic representation for complex commercial disputes, from early assessment through resolution.'],
  ['Arbitration & ADR', 'Practical paths through arbitration, mediation, and alternative dispute resolution.'],
  ['Corporate & Commercial', 'Day-to-day and transactional counsel aligned with commercial priorities.'],
  ['Business Licensing', 'Guidance for company incorporation, licensing, and regulatory requirements.'],
  ['Employment', 'Responsive advice on workplace matters, policy, and dispute prevention.'],
  ['Immigration', 'Coordinated legal support for business immigration and international mobility.'],
]

const team = [
  ['Didi Saeful Bahri, S.H.', 'Managing Partner', 'didi-saeful-bahri.webp'],
  ['Sandi Masdiyono, S.H., M.H.', 'Partner', 'sandi-masdiyono.webp'],
  ['Yunka Novriama, S.H., M.H.', 'Partner', 'yunka-novriama.webp'],
  ['Andi Nur Charisma Putri Iskandar, S.H., M.H.', 'Senior Associate', 'andi-nur-charisma-putri.webp'],
  ['M. Haikal Uli Nuha, S.H.', 'Senior Associate', 'm-haikal-uli-nuha.webp'],
  ['Muhammad Dhio Saputra, S.H.', 'Senior Associate', 'muhammad-dhio-saputra.webp'],
  ['Rizky Nauveri Fauzi H, S.H.', 'Senior Associate', 'rizky-nauveri-fauzi-h.webp'],
]

const navigation = [
  ['home', 'Home', './index.html'],
  ['about', 'About', './about.html'],
  ['expertise', 'Expertise', './expertise.html'],
  ['people', 'People', './people.html'],
  ['contact', 'Contact', './contact.html'],
]

function Arrow() { return <span aria-hidden="true">↗</span> }

function Header({ page }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className="header">
      <a className="logo" href="./index.html" aria-label="MBNP at Law home">
        <img src="./assets/mbnp-brandmark.svg" alt="Masdiyono, Bahri, Narayana & Partners" />
      </a>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        {open ? 'Close' : 'Menu'}
      </button>
      <nav className={open ? 'open' : ''} aria-label="Main navigation">
        {navigation.map(([id, label, href]) => (
          <a key={id} href={href} className={page === id ? 'active' : ''}>{label}</a>
        ))}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <img src="./assets/mbnp-brandmark-white.svg" alt="MBNP at Law" />
      <div className="footer-contact">
        <a href="mailto:info@mbnp.co.id">info@mbnp.co.id</a>
        <a href="https://wa.me/6287777102030" target="_blank" rel="noreferrer">+62 877 7710 2030</a>
      </div>
      <p>© {new Date().getFullYear()} MBNP at Law</p>
    </footer>
  )
}

function PageIntro({ eyebrow, title, text }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <div><h1>{title}</h1>{text && <p className="lead">{text}</p>}</div>
    </section>
  )
}

function TeamCards({ limit }) {
  return (
    <div className="team-grid">
      {team.slice(0, limit || team.length).map(([name, role, image]) => (
        <article className="team-card" key={name}>
          <img src={`./assets/${image}`} alt={name} loading="lazy" />
          <h3>{name}</h3><p>{role}</p>
        </article>
      ))}
    </div>
  )
}

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Independent counsel · Jakarta</p>
          <h1>Clear counsel for important decisions.</h1>
          <p>Strategic and practical legal support for businesses navigating Indonesia's evolving landscape.</p>
          <a className="button" href="./about.html">Discover MBNP <Arrow /></a>
        </div>
        <div className="hero-photo"><img src="./assets/hero-legal.webp" alt="Legal professionals reviewing business documents" /></div>
      </section>

      <section className="section intro-grid">
        <p className="eyebrow">About the firm</p>
        <div>
          <h2>Indonesian insight. Commercial perspective.</h2>
          <p className="lead">Masdiyono Bahri Novriama and Partners at Law is an independent law firm headquartered in Jakarta.</p>
          <a className="text-link" href="./about.html">Our approach <Arrow /></a>
        </div>
      </section>

      <section className="section soft-section">
        <div className="section-heading">
          <div><p className="eyebrow">Selected expertise</p><h2>Focused legal capability.</h2></div>
          <a className="text-link" href="./expertise.html">View all expertise <Arrow /></a>
        </div>
        <div className="service-preview">
          {services.slice(0, 3).map(([title, description], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="client-band">
        <p className="eyebrow">Clients & collaborations</p>
        <h2>Supporting domestic and international organisations with discretion.</h2>
        <p>Official client identities will only be displayed with approval.</p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><p className="eyebrow">Our people</p><h2>Meet the team.</h2></div>
          <a className="text-link" href="./people.html">View everyone <Arrow /></a>
        </div>
        <TeamCards limit={3} />
      </section>
      <ContactCallout />
    </>
  )
}

function About() {
  return (
    <>
      <PageIntro eyebrow="About MBNP" title="Practical advice, delivered with purpose." text="We combine Indonesian legal knowledge with a clear understanding of the commercial decisions our clients face." />
      <section className="section image-copy">
        <img src="./assets/hero-legal.webp" alt="MBNP legal professionals at work" />
        <div>
          <p className="eyebrow">Our approach</p><h2>Clarity before complexity.</h2>
          <p>Our work is strategic, practical, expeditious, targeted, and valuable. We listen closely, communicate directly, and shape our advice around the outcome that matters.</p>
          <p>From our Jakarta office, we support domestic and international organisations across disputes, transactions, licensing, employment, and mobility matters.</p>
        </div>
      </section>
      <section className="section soft-section">
        <p className="eyebrow">Our principles</p>
        <div className="principle-grid">
          {['Professional excellence', 'Integrity & transparency', 'Client-centred strategy'].map((item, index) => (
            <article key={item}><span>0{index + 1}</span><h3>{item}</h3></article>
          ))}
        </div>
      </section>
      <ContactCallout />
    </>
  )
}

function Expertise() {
  return (
    <>
      <PageIntro eyebrow="Our expertise" title="Legal capability aligned with your business." text="Advice shaped around the matter at hand, the commercial context, and the outcome that matters to you." />
      <section className="section service-grid">
        {services.map(([title, description], index) => (
          <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{description}</p></article>
        ))}
      </section>
      <ContactCallout />
    </>
  )
}

function People() {
  return (
    <>
      <PageIntro eyebrow="Our people" title="Experience you can rely on." text="A multidisciplinary team committed to thoughtful counsel, responsive service, and lasting client relationships." />
      <section className="section people-section"><TeamCards /></section>
      <ContactCallout />
    </>
  )
}

function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Start a conversation." text="Tell us about the matter at hand and our team will help identify the right next step." />
      <section className="section contact-grid">
        <div>
          <p className="eyebrow">Visit</p><h2>Jakarta</h2>
          <p>Menara Cakrawala, 12th Floor, Unit 5A<br />Jl. M.H. Thamrin No. Kav. 9<br />Menteng, Central Jakarta 10340</p>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Menara+Cakrawala+Jl.+M.H.+Thamrin+No.+Kav.+9+Jakarta" target="_blank" rel="noreferrer">Open map <Arrow /></a>
        </div>
        <div>
          <p className="eyebrow">Get in touch</p>
          <a className="contact-link" href="mailto:info@mbnp.co.id">info@mbnp.co.id</a>
          <a className="contact-link" href="https://wa.me/6287777102030" target="_blank" rel="noreferrer">+62 877 7710 2030</a>
        </div>
      </section>
    </>
  )
}

function ContactCallout() {
  return (
    <section className="contact-callout">
      <p className="eyebrow">Start a conversation</p><h2>How can we help you move forward?</h2>
      <a className="button light-button" href="./contact.html">Contact our team <Arrow /></a>
    </section>
  )
}

const pages = { home: Home, about: About, expertise: Expertise, people: People, contact: Contact }

export default function App({ page = 'home' }) {
  const CurrentPage = pages[page] || Home
  return <><Header page={page} /><main><CurrentPage /></main><Footer /></>
}
