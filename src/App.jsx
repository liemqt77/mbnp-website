import { useEffect, useState } from 'react'

const services = [
  ['Commercial Litigation', 'Strategic support for complex business disputes, from early review to resolution.'],
  ['Arbitration and Dispute Resolution', 'Practical options through arbitration, mediation, and other ways to resolve disputes.'],
  ['Corporate and Commercial', 'Legal support for companies, business deals, and day-to-day operations.'],
  ['Business Licensing', 'Help with company setup, permits, and regulatory requirements.'],
  ['Employment', 'Advice on workplace matters, company policies, and dispute prevention.'],
  ['Immigration', 'Support with business immigration and cross-border employee matters.'],
]

const team = [
  ['Didi Saeful Bahri, S.H.', 'Managing Partner', 'didi-saeful-bahri.webp', 'didi-saeful-bahri'],
  ['Sandi Masdiyono, S.H., M.H.', 'Partner', 'sandi-masdiyono.webp', 'sandi-masdiyono'],
  ['Muhammad Dhio Saputra, S.H.', 'Senior Associate', 'muhammad-dhio-saputra.webp', 'muhammad-dhio-saputra'],
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
const WHATSAPP_URL = 'https://wa.me/6287777102030?text=Hello%20MBNP%20at%20Law%2C%20I%20would%20like%20to%20ask%20about%20your%20legal%20services.'
const publicAsset = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`

const newsTopics = {
  all: ['All topics', '(hukum OR regulasi OR perusahaan OR bisnis) sourcecountry:Indonesia'],
  corporate: ['Corporate', '("hukum perusahaan" OR korporasi OR merger OR akuisisi) sourcecountry:Indonesia'],
  disputes: ['Disputes', '(litigasi OR arbitrase OR sengketa) sourcecountry:Indonesia'],
  employment: ['Employment', '("hukum ketenagakerjaan" OR ketenagakerjaan OR "hubungan industrial") sourcecountry:Indonesia'],
  investment: ['Investment', '(investasi OR perizinan OR BKPM) sourcecountry:Indonesia'],
}

const fallbackNews = [
  {
    title: 'Indonesian Laws and Regulations Database',
    url: 'https://peraturan.bpk.go.id/',
    domain: 'peraturan.bpk.go.id',
    sourcecountry: 'Indonesia',
    fallback: true,
  },
  {
    title: 'Financial Services Regulatory Updates',
    url: 'https://www.ojk.go.id/id/berita-dan-kegiatan/Pages/default.aspx',
    domain: 'ojk.go.id',
    sourcecountry: 'Indonesia',
    fallback: true,
  },
  {
    title: 'Investment and Licensing Press Releases',
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
  ['expertise', 'Services', './expertise.html'],
  ['collaborations', 'Collaborations', './collaborations.html'],
  ['people', 'Our People', './people.html'],
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
        <img src={publicAsset('mbnp-brandmark-white.svg')} alt="Masdiyono, Bahri, Narayana & Partners" onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.parentElement.classList.add('logo-missing') }} />
        <span className="logo-fallback" aria-hidden="true">MBNP <small>at Law</small></span>
      </a>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>
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
      <div className="footer-brand"><img src={publicAsset('mbnp-brandmark-white.svg')} alt="MBNP at Law" onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.parentElement.classList.add('logo-missing') }} /><span className="logo-fallback" aria-hidden="true">MBNP <small>at Law</small></span></div>
      <div className="footer-contact">
        <a href="mailto:info@mbnp.co.id">info@mbnp.co.id</a>
        <a href="https://wa.me/6287777102030" target="_blank" rel="noreferrer">+62 877 7710 2030</a>
        <a className="footer-social" href="https://www.instagram.com/mbnplaw/" target="_blank" rel="noreferrer" aria-label="Visit MBNP at Law on Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="instagram-dot" cx="17.5" cy="6.5" r="1" /></svg>
          <span>Instagram</span>
        </a>
      </div>
      <p>© {new Date().getFullYear()} MBNP at Law. All rights reserved.</p>
    </footer>
  )
}

function WhatsAppBubble() {
  return (
    <a className="whatsapp-bubble" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Contact MBNP on WhatsApp">
      <span className="whatsapp-label">Contact us</span>
      <span className="whatsapp-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32">
          <path d="M26.7 5.3A15 15 0 0 0 3.1 23.4L1 31l7.8-2a15 15 0 0 0 7.2 1.8h.1A15 15 0 0 0 26.7 5.3Zm-10.6 23a12.5 12.5 0 0 1-6.4-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.5 12.5 0 1 1 16.1 28.3Zm6.9-9.4c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.2.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-2.2-1.1-3.7-2-5.2-4.5-.4-.7.4-.7 1.1-2.2.1-.3.1-.6 0-.8-.1-.2-.8-2-1.2-2.7-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.8.1-1.1.5-.4.4-1.5 1.5-1.5 3.7s1.6 4.3 1.8 4.6c.2.3 3.1 4.8 7.6 6.7 2.8 1.2 3.9 1.3 5.3 1.1.9-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z" />
        </svg>
      </span>
    </a>
  )
}

const guideMenus = [
  { id: 'services', label: 'Legal services', title: 'Choose a service', choices: services.map(([label, answer]) => ({ id: label, label, answer })), footerLink: ['./expertise.html', 'View all services'] },
  { id: 'team', label: 'Our people', title: 'Choose a team member', choices: team.map(([name, role, , slug]) => ({ id: slug, label: name, answer: `${role} at MBNP at Law.`, href: `./profile.html?person=${slug}`, link: 'View profile' })), footerLink: ['./people.html', 'View the full team'] },
  { id: 'collaborations', label: 'Collaborations', title: 'Choose a name to learn more', choices: collaborations.map(([name]) => ({ id: name, label: name, answer: `${name} is listed among MBNP at Law's business connections.` })), footerLink: ['./collaborations.html', 'View collaborations'] },
  { id: 'consultation', label: 'Contact MBNP', title: 'Choose how to reach us', choices: [
    { id: 'whatsapp', label: 'WhatsApp', answer: 'Start a conversation with the MBNP team on WhatsApp.', href: 'https://wa.me/6287777102030?text=Hello%20MBNP%20at%20Law%2C%20I%20would%20like%20to%20ask%20about%20your%20legal%20services.', link: 'Open WhatsApp', external: true },
    { id: 'contact-form', label: 'Contact form', answer: 'Send a general inquiry through our contact page.', href: './contact.html', link: 'Open contact page' },
    { id: 'email', label: 'Email', answer: 'Email us at info@mbnp.co.id.', href: 'mailto:info@mbnp.co.id', link: 'Write an email' },
  ] },
]

function InformationGuide() {
  const [open, setOpen] = useState(false)
  const [topic, setTopic] = useState(null)
  const selectedMenu = guideMenus.find((item) => item.id === topic)
  const [choice, setChoice] = useState(null)
  const selectedChoice = selectedMenu?.choices.find((item) => item.id === choice)

  const chooseTopic = (id) => {
    setTopic(id)
    setChoice(null)
  }

  return (
    <div className="information-guide">
      {open && (
        <section className="guide-panel" aria-label="MBNP information guide">
          <div className="guide-heading">
            <div><p className="eyebrow">Information guide</p><h2>{selectedMenu?.title || 'How can we help?'}</h2></div>
            <button className="guide-close" type="button" onClick={() => setOpen(false)} aria-label="Close guide">{'×'}</button>
          </div>
          <p className="guide-note">{topic ? 'Choose an option to see more information.' : 'Choose a topic to see the available options.'}</p>
          {!selectedMenu ? (
            <div className="guide-options">
              {guideMenus.map((item) => <button key={item.id} type="button" onClick={() => chooseTopic(item.id)}>{item.label}<span aria-hidden="true">{'›'}</span></button>)}
            </div>
          ) : (
            <div className="guide-answer">
              <div className="guide-options">
                {selectedMenu.choices.map((item) => <button key={item.id} type="button" className={choice === item.id ? 'selected' : ''} onClick={() => setChoice(item.id)}>{item.label}<span aria-hidden="true">{'›'}</span></button>)}
              </div>
              {selectedChoice && <div className="guide-choice-answer"><p>{selectedChoice.answer}</p>{selectedChoice.href && <a className="guide-page-link" href={selectedChoice.href} target={selectedChoice.external ? '_blank' : undefined} rel={selectedChoice.external ? 'noreferrer' : undefined}>{selectedChoice.link} <Arrow /></a>}</div>}
              {selectedMenu.footerLink && <a className="guide-page-link" href={selectedMenu.footerLink[0]}>{selectedMenu.footerLink[1]} <Arrow /></a>}
              <button className="guide-back" type="button" onClick={() => chooseTopic(null)}>‹ Kembali ke topik</button>
            </div>
          )}
          <div className="guide-whatsapp">
            <p>Need more help?</p>
            <a href="https://wa.me/6287777102030?text=Hello%20MBNP%20at%20Law%2C%20I%20would%20like%20to%20speak%20with%20your%20team." target="_blank" rel="noreferrer">Continue on WhatsApp <Arrow /></a>
          </div>
          <small className="guide-disclaimer">This guide shares general information, not legal advice.</small>
        </section>
      )}
      <button className="guide-trigger" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span className="guide-trigger-icon" aria-hidden="true">{open ? '×' : '?'}</span>
        <span>{open ? 'Close guide' : 'MBNP guide'}</span>
      </button>
    </div>
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
      {team.slice(0, limit || team.length).map(([name, role, image, slug]) => (
        <a className="team-card" href={`./profile.html?person=${slug}`} key={name} aria-label={`View ${name}'s profile`}>
        <img src={`./assets/${image}`} alt={`Portrait of ${name}`} loading="lazy" />
          <div className="team-card-heading"><div><h3>{name}</h3><p>{role}</p></div><Arrow /></div>
        </a>
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
  if (!date || Number.isNaN(date.getTime())) return 'Official source'
  return new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' }).format(date)
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
      {status === 'fallback' && <p className="news-notice" role="status">Live news is not available right now. Visit these official sources for Indonesian legal and regulatory updates.</p>}
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
          <span className="news-read">Read the full story <Arrow /></span>
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
      <section className="home-hero" style={{ backgroundImage: `url(${publicAsset('hero-legal.webp')})` }}>
        <video
          className="hero-video"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="./assets/hero-legal.webp"
          aria-label="MBNP at Law introduction"
          onCanPlay={(event) => event.currentTarget.play().catch(() => {})}
          onTimeUpdate={(event) => {
            if (event.currentTarget.currentTime >= 10) {
              event.currentTarget.currentTime = 0
              event.currentTarget.play().catch(() => {})
            }
          }}
        >
          <source src="./assets/mbnp-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Independent law firm · Jakarta</p>
          <h1>Clear legal support for important decisions.</h1>
          <p>Practical legal advice for companies facing business challenges in Indonesia.</p>
          <div className="hero-actions">
            <a className="button light-button" href="./about.html">Meet MBNP <Arrow /></a>
            <a className="hero-text-link" href="./expertise.html">Explore services <Arrow /></a>
          </div>
        </div>
        <div className="hero-caption"><span>Jakarta</span><span>Indonesia · Business-focused</span></div>
      </section>

      <section className="section intro-grid">
        <p className="eyebrow">About the firm</p>
        <div>
          <h2>We understand Indonesia and your business.</h2>
          <p className="lead">Masdiyono Bahri Novriama and Partners at Law is an independent law firm based in Jakarta.</p>
          <a className="text-link" href="./about.html">Our approach <Arrow /></a>
        </div>
      </section>

      <section className="section home-pathways" aria-label="Explore MBNP">
        <a className="pathway-card" href="./expertise.html">
          <img src="./assets/editorial-corporate.jpg" alt="Corporate legal planning" />
          <div><p className="eyebrow">Our services</p><h2>Legal advice that supports your business.</h2><span>Explore our services <Arrow /></span></div>
        </a>
        <a className="pathway-card" href="./people.html">
          <img src="./assets/editorial-about-firm.jpg" alt="Legal professionals in discussion" />
          <div><p className="eyebrow">Our people</p><h2>Meet the people behind our work.</h2><span>Meet the MBNP team <Arrow /></span></div>
        </a>
      </section>

      <section className="section insights-preview">
        <div className="section-heading">
          <div><p className="eyebrow">Latest insights</p><h2>Legal and business updates that matter.</h2></div>
          <a className="text-link" href="./insights.html">View all insights <Arrow /></a>
        </div>
        <NewsCards limit={2} />
      </section>
      <ContactCallout />
    </>
  )
}

function About() {
  return (
    <>
      <PageIntro eyebrow="About MBNP" title="Practical advice with a clear purpose." text="We combine knowledge of Indonesian law with an understanding of our clients' business needs." />
      <section className="section image-copy">
        <img src="./assets/editorial-about-firm.jpg" alt="Legal professionals working together in a Jakarta office" />
        <div>
          <p className="eyebrow">Our approach</p><h2>We make the law clear.</h2>
          <p>We give practical and focused advice. We listen, communicate clearly, and work toward the results our clients need.</p>
          <p>From our Jakarta office, we advise Indonesian and international companies on disputes, transactions, licensing, employment, and immigration matters.</p>
        </div>
      </section>
      <section className="section soft-section">
        <p className="eyebrow">Our values</p>
        <div className="principle-grid">
          {['Professional excellence', 'Integrity and transparency', 'Client-focused solutions'].map((item, index) => (
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
      <PageIntro eyebrow="Our services" title="Legal support for your business needs." text="We consider the legal issue, your business, and the result you want to achieve." />
      <section className="expertise-visual">
        <img src="./assets/editorial-corporate.jpg" alt="Corporate and commercial legal planning documents" />
        <div><p className="eyebrow">Business perspective</p><p>We start by understanding the business needs behind each legal issue.</p></div>
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
      <PageIntro eyebrow="Collaborations" title="Working together to move forward." text="We value long-term professional relationships built on clear communication, responsiveness, and shared goals." />
      <section className="section collaboration-page">
        <div className="collaboration-copy">
          <p className="eyebrow">Our network</p>
          <h2>Professional relationships built on trust.</h2>
          <p>We value confidentiality and take time to understand the business context behind each matter.</p>
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
      <PageIntro eyebrow="Our people" title="Experienced professionals by your side." text="Meet the MBNP team. Select a profile to learn more about each person." />
      <section className="section people-section"><TeamCards /></section>
      <ContactCallout />
    </>
  )
}

function Profile() {
  const slug = new URLSearchParams(window.location.search).get('person')
  const person = team.find(([, , , personSlug]) => personSlug === slug) || team[0]
  const [name, role, image] = person

  return (
    <>
      <section className="profile-hero">
        <div className="profile-photo"><img src={`./assets/${image}`} alt={name} /></div>
        <div className="profile-heading">
          <p className="eyebrow">Our people</p>
          <h1>{name}</h1>
          <p className="profile-role">{role}</p>
          <p className="profile-summary">A professional biography for {name} will be added after it is approved.</p>
          <a className="text-link light-link" href={`mailto:${CONTACT_EMAIL}`}>Contact MBNP <Arrow /></a>
        </div>
      </section>

      <section className="section profile-content">
        <div className="profile-main">
          <p className="eyebrow">Biography</p>
          <h2>Profile details are being prepared.</h2>
          <p>This page will include an approved biography, areas of practice, selected experience, education, professional memberships, and contact details.</p>
          <div className="profile-detail-grid">
            {['Areas of practice', 'Selected experience', 'Education and memberships'].map((label) => (
              <div key={label}><span>{label}</span><p>Details will be added after they are confirmed.</p></div>
            ))}
          </div>
        </div>
        <aside className="business-card-panel">
          <p className="eyebrow">Digital business card</p>
          <h2>Save contact details.</h2>
          <p>Business cards will be available after the phone number, email, title, and final design are approved.</p>
          <button className="button disabled-button" type="button" disabled>Download business card <span>Coming soon</span></button>
          <small>Planned formats: PDF and vCard.</small>
        </aside>
      </section>
      <ContactCallout />
    </>
  )
}

function Insights() {
  const [topic, setTopic] = useState('all')

  return (
    <>
      <PageIntro eyebrow="Insights" title="Follow the latest legal developments." text="Recent news about law, regulation, and business in Indonesia from a range of sources." />
      <section className="section insights-section">
        <div className="insights-toolbar">
          <div>
            <p className="eyebrow">Latest news</p>
            <h2>Stay up to date.</h2>
          </div>
          <div className="topic-filters" aria-label="Filter news by topic">
            {Object.entries(newsTopics).map(([id, [label]]) => (
              <button type="button" className={topic === id ? 'active' : ''} aria-pressed={topic === id} onClick={() => setTopic(id)} key={id}>{label}</button>
            ))}
          </div>
        </div>
        <NewsCards topic={topic} limit={9} />
        <div className="news-disclosure">
          <p><strong>About this news</strong></p>
          <p>Headlines come from the GDELT news index and link to the original publisher. MBNP is not responsible for third-party content. This information is not legal advice. News updates every 30 minutes.</p>
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
    const subject = `Website inquiry — ${form.get('service') || 'General inquiry'}`
    const body = [
      `Name: ${form.get('name')}`,
      `Email: ${form.get('email')}`,
      `Phone: ${form.get('phone') || '-'}`,
      `Service: ${form.get('service') || 'General inquiry'}`,
      '',
      'How can we help?',
      form.get('message'),
    ].join('\n')
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    setFormStatus(`A Gmail draft to ${CONTACT_EMAIL} is ready.`)
  }

  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's talk." text="Tell us what you need. Our team will help you plan the next step." />
      <section className="section contact-grid">
        <div className="contact-information">
          <div>
            <p className="eyebrow">Visit us</p><h2>Jakarta</h2>
            <p>Menara Cakrawala, 12th Floor, Unit 5A<br />Jl. M.H. Thamrin No. Kav. 9<br />Menteng, Central Jakarta 10340</p>
            <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Menara+Cakrawala+Jl.+M.H.+Thamrin+No.+Kav.+9+Jakarta" target="_blank" rel="noreferrer">Open map <Arrow /></a>
          </div>
          <div className="direct-contact">
            <p className="eyebrow">Contact details</p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">+62 877 7710 2030</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={openEmailDraft}>
          <div className="form-heading"><p className="eyebrow">Send an inquiry</p><h2>How can we help?</h2></div>
          <div className="form-row">
            <label>Full name<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="name@company.com" /></label>
          </div>
          <div className="form-row">
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+62" /></label>
            <label>Service you need
              <select name="service" defaultValue="">
                <option value="">General inquiry</option>
                {services.map(([service]) => <option key={service} value={service}>{service}</option>)}
              </select>
            </label>
          </div>
          <label>How can we help?<textarea name="message" rows="5" required placeholder="Briefly tell us what you need." /></label>
          <div className="form-submit">
            <button className="button" type="submit">Send with Gmail <Arrow /></button>
            <p>This will open a Gmail draft addressed to {CONTACT_EMAIL}.</p>
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
      <p className="eyebrow">Let's talk</p><h2>How can we help?</h2>
      <a className="button light-button" href="./contact.html">Contact our team <Arrow /></a>
    </section>
  )
}

const pages = { home: Home, about: About, expertise: Expertise, collaborations: Collaborations, people: People, profile: Profile, insights: Insights, contact: Contact }

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

  return <><Header page={page === 'profile' ? 'people' : page} /><main><CurrentPage /></main><Footer /><InformationGuide /><WhatsAppBubble /></>
}
