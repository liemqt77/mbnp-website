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

const collaborations = [
  ['Cowell — PT Cowell Development Tbk.', 'cowell.webp'],
  ['Blue Pay and Blue Mart', 'blue-pay.webp'],
  ['Askara Technology', 'askara-technology.webp'],
  ['Lexington Residence', 'lexington-residence.webp'],
  ['PT Hasurat Abadi', 'hasurat-abadi.webp'],
  ['Lippo Malls', 'lippo-malls.webp'],
  ['PT Bumi Suyarna Resources', 'bumi-suyarna-resources.png'],
]

const CONTACT_EMAIL = 'info@mbnp.co.id'
const WHATSAPP_URL = 'https://wa.me/6287777102030?text=Halo%20MBNP%20at%20Law%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20hukum.'

const newsTopics = {
  all: ['All updates', '(hukum OR regulasi OR perusahaan OR bisnis) sourcecountry:Indonesia'],
  corporate: ['Corporate', '("hukum perusahaan" OR korporasi OR merger OR akuisisi) sourcecountry:Indonesia'],
  disputes: ['Disputes', '(litigasi OR arbitrase OR sengketa) sourcecountry:Indonesia'],
  employment: ['Employment', '("hukum ketenagakerjaan" OR ketenagakerjaan OR "hubungan industrial") sourcecountry:Indonesia'],
  investment: ['Investment', '(investasi OR perizinan OR BKPM) sourcecountry:Indonesia'],
}

const fallbackNews = [
  {
    title: 'Indonesian laws and regulations database',
    url: 'https://peraturan.bpk.go.id/',
    domain: 'peraturan.bpk.go.id',
    sourcecountry: 'Indonesia',
    fallback: true,
  },
  {
    title: 'Financial services regulatory updates',
    url: 'https://www.ojk.go.id/id/berita-dan-kegiatan/Pages/default.aspx',
    domain: 'ojk.go.id',
    sourcecountry: 'Indonesia',
    fallback: true,
  },
  {
    title: 'Investment and licensing press releases',
    url: 'https://www.bkpm.go.id/id/info/siaran-pers',
    domain: 'bkpm.go.id',
    sourcecountry: 'Indonesia',
    fallback: true,
  },
]

const newsImages = {
  all: ['./assets/editorial-corporate.jpg', './assets/editorial-disputes.jpg', './assets/editorial-investment.jpg', './assets/editorial-employment.jpg', './assets/editorial-compliance.jpg'],
  corporate: ['./assets/editorial-corporate.jpg', './assets/editorial-compliance.jpg'],
  disputes: ['./assets/editorial-disputes.jpg', './assets/editorial-corporate.jpg'],
  employment: ['./assets/editorial-employment.jpg', './assets/editorial-about-firm.jpg'],
  investment: ['./assets/editorial-investment.jpg', './assets/editorial-corporate.jpg'],
}

const navigation = [
  ['home', 'Home', './index.html'],
  ['about', 'About', './about.html'],
  ['expertise', 'Expertise', './expertise.html'],
  ['collaborations', 'Collaborations', './collaborations.html'],
  ['people', 'People', './people.html'],
  ['insights', 'Insights', './insights.html'],
  ['contact', 'Contact', './contact.html'],
]

function Arrow() { return <span aria-hidden="true">↗</span> }

function Header({ page }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 16)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <a className="logo" href="./index.html" aria-label="MBNP at Law home">
        <img src="./assets/mbnp-brandmark-white.svg" alt="Masdiyono, Bahri, Narayana & Partners" />
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

function WhatsAppBubble() {
  return (
    <a className="whatsapp-bubble" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat with MBNP via WhatsApp">
      <span className="whatsapp-label">Chat with us</span>
      <span className="whatsapp-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32">
          <path d="M26.7 5.3A15 15 0 0 0 3.1 23.4L1 31l7.8-2a15 15 0 0 0 7.2 1.8h.1A15 15 0 0 0 26.7 5.3Zm-10.6 23a12.5 12.5 0 0 1-6.4-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.5 12.5 0 1 1 16.1 28.3Zm6.9-9.4c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.2.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-2.2-1.1-3.7-2-5.2-4.5-.4-.7.4-.7 1.1-2.2.1-.3.1-.6 0-.8-.1-.2-.8-2-1.2-2.7-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.8.1-1.1.5-.4.4-1.5 1.5-1.5 3.7s1.6 4.3 1.8 4.6c.2.3 3.1 4.8 7.6 6.7 2.8 1.2 3.9 1.3 5.3 1.1.9-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z" />
        </svg>
      </span>
    </a>
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

function CollaborationLogos({ compact = false }) {
  return (
    <div className={`collaboration-logos ${compact ? 'compact' : ''}`}>
      {collaborations.map(([name, image]) => (
        <div className="collaboration-logo" key={name}>
          <img src={`./assets/collaborations/${image}`} alt={name} loading="lazy" />
        </div>
      ))}
    </div>
  )
}

function parseGdeltDate(value) {
  if (!value || !/^\d{8}T\d{6}Z$/.test(value)) return null
  return new Date(`${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}T${value.slice(9, 11)}:${value.slice(11, 13)}:${value.slice(13, 15)}Z`)
}

function displayNewsDate(value) {
  const date = parseGdeltDate(value)
  if (!date || Number.isNaN(date.getTime())) return 'Official resource'
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(date)
}

function useNewsFeed(topic, limit) {
  const [articles, setArticles] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()
    const cacheKey = `mbnp-news-${topic}-${limit}`
    const cached = localStorage.getItem(cacheKey)

    if (cached) {
      try {
        const saved = JSON.parse(cached)
        if (Date.now() - saved.timestamp < 30 * 60 * 1000 && saved.articles?.length) {
          setArticles(saved.articles)
          setStatus('ready')
          return () => controller.abort()
        }
      } catch {
        localStorage.removeItem(cacheKey)
      }
    }

    setStatus('loading')
    const query = newsTopics[topic]?.[1] || newsTopics.all[1]
    const parameters = new URLSearchParams({
      query,
      mode: 'artlist',
      maxrecords: String(limit),
      format: 'json',
      sort: 'datedesc',
      timespan: '1month',
    })

    fetch(`https://api.gdeltproject.org/api/v2/doc/doc?${parameters}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`News service returned ${response.status}`)
        return response.json()
      })
      .then((data) => {
        const freshArticles = (data.articles || [])
          .filter((article) => article.title && article.url)
          .slice(0, limit)
        if (!freshArticles.length) throw new Error('No matching news was returned')
        setArticles(freshArticles)
        setStatus('ready')
        localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), articles: freshArticles }))
      })
      .catch((error) => {
        if (error.name === 'AbortError') return
        setArticles(fallbackNews.slice(0, limit))
        setStatus('fallback')
      })

    return () => controller.abort()
  }, [topic, limit])

  return { articles, status }
}

function NewsCards({ topic = 'all', limit = 6 }) {
  const { articles, status } = useNewsFeed(topic, limit)
  const topicImages = newsImages[topic] || newsImages.all

  if (status === 'loading') {
    return <div className="news-grid news-loading" aria-live="polite" aria-busy="true">{Array.from({ length: Math.min(limit, 6) }, (_, index) => <div className="news-skeleton" key={index} />)}</div>
  }

  return (
    <>
      {status === 'fallback' && <p className="news-notice" role="status">Live news is temporarily unavailable. These official Indonesian legal resources remain available.</p>}
      <div className="news-grid">
        {articles.map((article, index) => (
          <a className="news-card" href={article.url} target="_blank" rel="noreferrer" key={`${article.url}-${index}`}>
            <div className="news-image">
              <img src={topicImages[index % topicImages.length]} alt="" loading="lazy" />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="news-card-copy">
              <p className="news-meta"><span>{article.domain || article.sourcecountry || 'News source'}</span><span>{displayNewsDate(article.seendate)}</span></p>
              <h3>{article.title}</h3>
              <span className="news-read">Read original article <Arrow /></span>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}

function Home() {
  return (
    <>
      <section className="home-hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="./assets/hero-legal.webp"
          aria-label="MBNP at Law introduction"
          onTimeUpdate={(event) => {
            if (event.currentTarget.currentTime >= 10) {
              event.currentTarget.currentTime = 0
              event.currentTarget.play().catch(() => {})
            }
          }}
        >
          <source src="./assets/mbnp-hero.mp4#t=0,10" type="video/mp4" />
        </video>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <span className="hero-number">01 / MBNP</span>
          <p className="eyebrow">Independent counsel · Jakarta</p>
          <h1>Clear counsel for important decisions.</h1>
          <p>Strategic and practical legal support for businesses navigating Indonesia's evolving landscape.</p>
          <div className="hero-actions">
            <a className="button light-button" href="./about.html">Discover MBNP <Arrow /></a>
            <a className="hero-text-link" href="./expertise.html">Explore expertise <Arrow /></a>
          </div>
        </div>
        <div className="hero-caption"><span>Jakarta</span><span>Indonesia · Est. with purpose</span></div>
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

      <section className="section collaboration-home">
        <div className="section-heading">
          <div><p className="eyebrow">Collaborations</p><h2>Relationships built on trust.</h2></div>
          <a className="text-link" href="./collaborations.html">Explore network <Arrow /></a>
        </div>
        <CollaborationLogos compact />
      </section>

      <section className="section">
        <div className="section-heading">
          <div><p className="eyebrow">Our people</p><h2>Meet the team.</h2></div>
          <a className="text-link" href="./people.html">View everyone <Arrow /></a>
        </div>
        <TeamCards limit={3} />
      </section>

      <section className="section insights-preview">
        <div className="section-heading">
          <div><p className="eyebrow">Latest thinking</p><h2>Developments that matter.</h2></div>
          <a className="text-link" href="./insights.html">View all insights <Arrow /></a>
        </div>
        <NewsCards limit={3} />
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
        <img src="./assets/editorial-about-firm.jpg" alt="Legal professionals collaborating in a Jakarta office" />
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
      <section className="expertise-visual">
        <img src="./assets/editorial-corporate.jpg" alt="Corporate legal and commercial planning materials" />
        <div><p className="eyebrow">Commercial perspective</p><p>Every matter begins with understanding the decision behind the legal question.</p></div>
      </section>
      <section className="section service-grid">
        {services.map(([title, description], index) => (
          <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{description}</p></article>
        ))}
      </section>
      <ContactCallout />
    </>
  )
}

function Collaborations() {
  return (
    <>
      <PageIntro eyebrow="Collaborations" title="Working together, moving forward." text="We value long-term professional relationships and collaboration shaped by clarity, responsiveness, and shared purpose." />
      <section className="section collaboration-page">
        <div className="collaboration-copy">
          <p className="eyebrow">Selected network</p>
          <h2>Organisations represented in MBNP's partner assets.</h2>
          <p>Each relationship is approached with discretion and an understanding of the commercial context surrounding the matter.</p>
        </div>
        <CollaborationLogos />
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

function Insights() {
  const [topic, setTopic] = useState('all')

  return (
    <>
      <PageIntro eyebrow="Insights" title="Legal developments, clearly considered." text="A live selection of recent Indonesian legal, regulatory, and business developments from independent news sources." />
      <section className="section insights-section">
        <div className="insights-toolbar">
          <div>
            <p className="eyebrow">Live news feed</p>
            <h2>Explore recent developments.</h2>
          </div>
          <div className="topic-filters" aria-label="Filter news by topic">
            {Object.entries(newsTopics).map(([id, [label]]) => (
              <button type="button" className={topic === id ? 'active' : ''} aria-pressed={topic === id} onClick={() => setTopic(id)} key={id}>{label}</button>
            ))}
          </div>
        </div>
        <NewsCards topic={topic} limit={9} />
        <div className="news-disclosure">
          <p><strong>About this feed</strong></p>
          <p>Headlines are supplied by the free GDELT news index and open on the original publisher's website. MBNP does not endorse third-party content, and this feed does not constitute legal advice. Results refresh automatically every 30 minutes.</p>
        </div>
      </section>
      <ContactCallout />
    </>
  )
}

function Contact() {
  const [formStatus, setFormStatus] = useState('')

  const openEmailDraft = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = `Website enquiry — ${form.get('service') || 'General consultation'}`
    const body = [
      `Name: ${form.get('name')}`,
      `Email: ${form.get('email')}`,
      `Phone: ${form.get('phone') || '-'}`,
      `Service: ${form.get('service') || 'General consultation'}`,
      '',
      'Message:',
      form.get('message'),
    ].join('\n')
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    setFormStatus(`A Gmail draft addressed to ${CONTACT_EMAIL} has been opened.`)
  }

  return (
    <>
      <PageIntro eyebrow="Contact" title="Start a conversation." text="Tell us about the matter at hand and our team will help identify the right next step." />
      <section className="section contact-grid">
        <div className="contact-information">
          <div>
            <p className="eyebrow">Visit</p><h2>Jakarta</h2>
            <p>Menara Cakrawala, 12th Floor, Unit 5A<br />Jl. M.H. Thamrin No. Kav. 9<br />Menteng, Central Jakarta 10340</p>
            <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Menara+Cakrawala+Jl.+M.H.+Thamrin+No.+Kav.+9+Jakarta" target="_blank" rel="noreferrer">Open map <Arrow /></a>
          </div>
          <div className="direct-contact">
            <p className="eyebrow">Direct contact</p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">+62 877 7710 2030</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={openEmailDraft}>
          <div className="form-heading"><p className="eyebrow">Send an enquiry</p><h2>How can we help?</h2></div>
          <div className="form-row">
            <label>Full name<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="name@company.com" /></label>
          </div>
          <div className="form-row">
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+62" /></label>
            <label>Area of interest
              <select name="service" defaultValue="">
                <option value="">General consultation</option>
                {services.map(([service]) => <option key={service} value={service}>{service}</option>)}
              </select>
            </label>
          </div>
          <label>Tell us about your matter<textarea name="message" rows="5" required placeholder="Briefly describe how we can assist you." /></label>
          <div className="form-submit">
            <button className="button" type="submit">Compose email <Arrow /></button>
            <p>Your message will open as a Gmail draft addressed to {CONTACT_EMAIL}.</p>
          </div>
          {formStatus && <p className="form-status" role="status">{formStatus}</p>}
        </form>
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

const pages = { home: Home, about: About, expertise: Expertise, collaborations: Collaborations, people: People, insights: Insights, contact: Contact }

export default function App({ page = 'home' }) {
  const CurrentPage = pages[page] || Home
  useEffect(() => {
    const elements = document.querySelectorAll('main section > *, .team-card, .service-preview article, .service-grid article, .collaboration-logo')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'))
      return undefined
    }

    elements.forEach((element, index) => {
      element.classList.add('reveal')
      element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`)
    })
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [page])

  return <><Header page={page} /><main><CurrentPage /></main><Footer /><WhatsAppBubble /></>
}
