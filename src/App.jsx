import { useEffect, useMemo, useState } from 'react'

const WORDPRESS_API =
  import.meta.env.VITE_WORDPRESS_API_URL ||
  'https://mbnp.co.id/wp-json/wp/v2/posts?_embed=1&per_page=6'

const ARTICLE_REFRESH_INTERVAL = 15 * 60 * 1000

const services = [
  {
    number: '01',
    title: 'Commercial Litigation',
    description:
      'Clear representation and measured strategies for complex commercial disputes, from early assessment through resolution.',
  },
  {
    number: '02',
    title: 'Arbitration & ADR',
    description:
      'Practical paths through arbitration, mediation, and alternative dispute resolution with your commercial priorities in view.',
  },
  {
    number: '03',
    title: 'Corporate & Commercial',
    description:
      'Day-to-day and transactional counsel that helps businesses make informed decisions and manage legal risk.',
  },
  {
    number: '04',
    title: 'Business Licensing',
    description:
      'Guidance for company incorporation, licensing, and regulatory requirements across the business lifecycle.',
  },
  {
    number: '05',
    title: 'Employment',
    description:
      'Responsive advice on workplace matters, employment relationships, policy, and dispute prevention.',
  },
  {
    number: '06',
    title: 'Immigration',
    description:
      'Coordinated legal support for business immigration and the mobility needs of international organisations.',
  },
]

const team = [
  { name: 'Didi Saeful Bahri, S.H.', role: 'Managing Partner', image: '/assets/didi-saeful-bahri.webp' },
  { name: 'Sandi Masdiyono, S.H., M.H.', role: 'Partner', image: '/assets/sandi-masdiyono.webp' },
  { name: 'Yunka Novriama, S.H., M.H.', role: 'Partner', image: '/assets/yunka-novriama.webp' },
  { name: 'Andi Nur Charisma Putri Iskandar, S.H., M.H.', role: 'Senior Associate', image: '/assets/andi-nur-charisma-putri.webp' },
  { name: 'M. Haikal Uli Nuha, S.H.', role: 'Senior Associate', image: '/assets/m-haikal-uli-nuha.webp' },
  { name: 'Muhammad Dhio Saputra, S.H.', role: 'Senior Associate', image: '/assets/muhammad-dhio-saputra.webp' },
  { name: 'Rizky Nauveri Fauzi H, S.H.', role: 'Senior Associate', image: '/assets/rizky-nauveri-fauzi-h.webp' },
]

const marqueeItems = [
  'Commercial Litigation',
  'Arbitration & ADR',
  'Corporate Advisory',
  'Business Licensing',
  'Employment',
  'Immigration',
]

const clientGroups = [
  {
    number: '01',
    title: 'Domestic companies',
    description: 'Commercially grounded legal support for organisations operating and growing in Indonesia.',
  },
  {
    number: '02',
    title: 'International organisations',
    description: 'Local insight for cross-border stakeholders navigating the Indonesian legal landscape.',
  },
  {
    number: '03',
    title: 'Business leadership',
    description: 'Clear counsel for founders, executives, and decision-makers facing consequential matters.',
  },
  {
    number: '04',
    title: 'In-house legal teams',
    description: 'Responsive collaboration that complements internal capability when additional support is needed.',
  },
]

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true">
      <span />
      <span />
    </span>
  )
}

function cleanHtml(value = '') {
  const doc = new DOMParser().parseFromString(value, 'text/html')
  return doc.body.textContent?.trim() || ''
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

function mapPost(post) {
  return {
    id: post.id,
    title: cleanHtml(post.title?.rendered),
    excerpt: cleanHtml(post.excerpt?.rendered).replace(/\s+/g, ' '),
    date: post.date,
    link: post.link,
    slug: post.slug,
    category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Insight',
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
  }
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="MBNP at Law home" onClick={closeMenu}>
        <img src="/assets/mbnp-brandmark-white.svg" alt="Masdiyono, Bahri, Narayana & Partners" />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
        <MenuIcon open={menuOpen} />
      </button>
      <nav className={menuOpen ? 'is-open' : ''} aria-label="Primary navigation">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Expertise</a>
        <a href="#clients" onClick={closeMenu}>Clients</a>
        <a href="#insights" onClick={closeMenu}>Insights</a>
        <a href="#people" onClick={closeMenu}>People</a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow light hero-reveal" style={{ '--hero-delay': '.15s' }}>Independent counsel · Jakarta</p>
        <h1 className="hero-title" aria-label="Clarity for the decisions that move business forward.">
          <span style={{ '--hero-delay': '.3s' }}>Clarity for the</span>
          <span style={{ '--hero-delay': '.46s' }}>decisions that move</span>
          <span style={{ '--hero-delay': '.62s' }}>business forward.</span>
        </h1>
        <p className="hero-intro hero-reveal" style={{ '--hero-delay': '.78s' }}>
          Strategic, practical, and responsive legal counsel for organisations navigating Indonesia's evolving business landscape.
        </p>
        <a className="text-link light hero-reveal" style={{ '--hero-delay': '.9s' }} href="#about">
          Discover MBNP <ArrowIcon />
        </a>
      </div>
      <div className="hero-image" role="img" aria-label="Legal professionals reviewing documents">
        <div className="hero-motion-layer" aria-hidden="true" />
        <div className="hero-scan" aria-hidden="true" />
        <div className="hero-index" aria-hidden="true"><span>01</span><span>06</span></div>
        <div className="hero-badge">
          <span className="hero-orbit" aria-hidden="true" />
          <img src="/assets/mbnp-logomark.svg" alt="" />
          <span>Advising strategically.<br />Resolving effectively.</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span>Scroll</span>
        <span className="scroll-line" />
      </a>
    </section>
  )
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-kicker" data-reveal>About MBNP</div>
      <div className="about-main">
        <h2 data-reveal>Indonesian insight.<br />Commercial perspective.</h2>
        <div className="about-copy" data-reveal style={{ '--reveal-delay': '.12s' }}>
          <p>
            Masdiyono Bahri Novriama and Partners at Law is an independent law firm headquartered in Jakarta, Indonesia.
          </p>
          <p>
            We provide strategic, practical, expeditious, targeted, and valuable legal solutions to domestic and international clients—combining legal rigour with an understanding of the decisions businesses face.
          </p>
          <a className="text-link" href="#services">Explore our expertise <ArrowIcon /></a>
        </div>
      </div>
      <div className="principles" aria-label="Our principles">
        <div data-reveal><span>01</span><strong>Professional excellence</strong></div>
        <div data-reveal style={{ '--reveal-delay': '.1s' }}><span>02</span><strong>Integrity & transparency</strong></div>
        <div data-reveal style={{ '--reveal-delay': '.2s' }}><span>03</span><strong>Client-centred strategy</strong></div>
      </div>
    </section>
  )
}

function PracticeMarquee() {
  const sequence = [...marqueeItems, ...marqueeItems]
  return (
    <div className="practice-marquee" aria-label="Areas of legal expertise">
      <div className="marquee-track">
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`} aria-hidden={index >= marqueeItems.length}>
            {item}<i>◆</i>
          </span>
        ))}
      </div>
    </div>
  )
}

function Services() {
  return (
    <section className="services section" id="services">
      <div className="services-heading">
        <div data-reveal>
          <p className="eyebrow">Our expertise</p>
          <h2>Legal capability aligned with your business vision.</h2>
        </div>
        <p data-reveal style={{ '--reveal-delay': '.12s' }}>
          Advice shaped around the matter at hand, the commercial context, and the outcome that matters to you.
        </p>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <article className="service-item" key={service.number} data-reveal>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ArrowIcon />
          </article>
        ))}
      </div>
    </section>
  )
}

function Clients() {
  return (
    <section className="clients section" id="clients">
      <div className="clients-intro">
        <div data-reveal>
          <p className="eyebrow">Clients & collaborations</p>
          <h2>Built around the people making the decisions.</h2>
        </div>
        <div className="clients-note" data-reveal style={{ '--reveal-delay': '.12s' }}>
          <p>
            We work alongside domestic and international organisations with discretion, commercial awareness, and a shared focus on practical outcomes.
          </p>
          <span>Client identities are presented only with permission.</span>
        </div>
      </div>
      <div className="client-groups">
        {clientGroups.map((group) => (
          <article className="client-group" key={group.number} data-reveal>
            <span>{group.number}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Insights() {
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('loading')
  const [lastUpdated, setLastUpdated] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadPosts(showLoading = false) {
      if (showLoading) setStatus('loading')
      try {
        const response = await fetch(WORDPRESS_API, {
          signal: controller.signal,
          cache: 'no-store',
        })
        if (!response.ok) throw new Error(`WordPress returned ${response.status}`)
        const result = await response.json()
        const published = result.map(mapPost).filter((post) => post.slug !== 'hello-world')
        setPosts(published)
        setStatus(published.length ? 'ready' : 'empty')
        setLastUpdated(new Date())
      } catch (error) {
        if (error.name !== 'AbortError') setStatus('error')
      }
    }

    loadPosts(true)
    const refreshTimer = window.setInterval(() => loadPosts(), ARTICLE_REFRESH_INTERVAL)
    const refreshWhenVisible = () => {
      if (document.visibilityState === 'visible') loadPosts()
    }
    document.addEventListener('visibilitychange', refreshWhenVisible)

    return () => {
      controller.abort()
      window.clearInterval(refreshTimer)
      document.removeEventListener('visibilitychange', refreshWhenVisible)
    }
  }, [])

  const featured = posts[0]
  const remaining = useMemo(() => posts.slice(1, 4), [posts])

  return (
    <section className="insights section" id="insights">
      <div className="insights-header">
        <div data-reveal>
          <p className="eyebrow">Latest thinking</p>
          <h2>Perspectives on the issues that matter most.</h2>
        </div>
        <a className="text-link" data-reveal href="https://mbnp.co.id" target="_blank" rel="noreferrer">
          View all insights <ArrowIcon />
        </a>
      </div>

      {lastUpdated && (
        <p className="feed-status" role="status">
          <span /> Live from MBNP WordPress · refreshed {lastUpdated.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
        </p>
      )}

      {status === 'loading' && (
        <div className="insight-loading" role="status" aria-live="polite">
          <span /> <span /> <span />
          <p>Loading the latest MBNP insights…</p>
        </div>
      )}

      {status === 'ready' && featured && (
        <div className="insight-layout">
          <a className="featured-insight" href={featured.link} target="_blank" rel="noreferrer">
            <div className={`featured-media ${featured.image ? '' : 'no-image'}`}>
              {featured.image ? <img src={featured.image} alt="" /> : <img src="/assets/hero-legal.webp" alt="" />}
              <span>Featured insight</span>
            </div>
            <div className="featured-content">
              <p>{featured.category} · {formatDate(featured.date)}</p>
              <h3>{featured.title}</h3>
              {featured.excerpt && <span className="excerpt">{featured.excerpt}</span>}
              <span className="read-more">Read insight <ArrowIcon /></span>
            </div>
          </a>
          <div className="insight-list">
            {remaining.map((post) => (
              <a href={post.link} target="_blank" rel="noreferrer" key={post.id}>
                <p>{post.category} · {formatDate(post.date)}</p>
                <h3>{post.title}</h3>
                <span>Read insight <ArrowIcon /></span>
              </a>
            ))}
          </div>
        </div>
      )}

      {(status === 'empty' || status === 'error') && (
        <div className="insight-empty" data-reveal>
          <div>
            <span className="api-status">Live editorial feed</span>
            <h3>Your next published WordPress article will appear here automatically.</h3>
          </div>
          <p>
            The landing page is connected to MBNP's WordPress REST API. Publish an article with a title, excerpt, category, and featured image—no React code changes are required.
          </p>
          <a className="text-link light" href="https://mbnp.co.id/wp-admin/edit.php" target="_blank" rel="noreferrer">
            Open article manager <ArrowIcon />
          </a>
        </div>
      )}
    </section>
  )
}

function People() {
  return (
    <section className="people section" id="people">
      <div className="people-heading">
        <div data-reveal>
          <p className="eyebrow light">Our people</p>
          <h2>Experience you can rely on.</h2>
        </div>
        <p data-reveal style={{ '--reveal-delay': '.12s' }}>
          A multidisciplinary team committed to thoughtful counsel, responsive service, and lasting client relationships.
        </p>
      </div>
      <div className="people-grid">
        {team.map((person) => (
          <article className="person-card" key={person.name} data-reveal>
            <div className="person-image"><img src={person.image} alt={person.name} loading="lazy" /></div>
            <div className="person-meta">
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-title" data-reveal>
        <p className="eyebrow">Start a conversation</p>
        <h2>How can we help you move forward?</h2>
      </div>
      <a className="contact-circle" data-reveal href="mailto:info@mbnp.co.id">
        <span>Talk to our team</span>
        <ArrowIcon />
      </a>
      <div className="contact-details">
        <div>
          <span>Visit</span>
          <a href="https://www.google.com/maps/search/?api=1&query=Menara+Cakrawala+Jl.+M.H.+Thamrin+No.+Kav.+9+Jakarta" target="_blank" rel="noreferrer">
            Menara Cakrawala, 12th Floor, Unit 5A<br />Jl. M.H. Thamrin No. Kav. 9<br />Menteng, Central Jakarta 10340
          </a>
        </div>
        <div>
          <span>Contact</span>
          <a href="mailto:info@mbnp.co.id">info@mbnp.co.id</a>
          <a href="https://wa.me/6287777102030" target="_blank" rel="noreferrer">+62 877 7710 2030</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <img src="/assets/mbnp-brandmark-white.svg" alt="Masdiyono, Bahri, Narayana & Partners" />
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#services">Expertise</a>
        <a href="#clients">Clients</a>
        <a href="#insights">Insights</a>
        <a href="#people">People</a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MBNP at Law. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeMarquee />
        <Services />
        <Clients />
        <Insights />
        <People />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
