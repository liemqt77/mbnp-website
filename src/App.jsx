import { useEffect, useState } from 'react'

const services = [
  ['Litigasi Komersial', 'Pendampingan strategis untuk sengketa komersial yang kompleks, sejak penilaian awal hingga penyelesaian.'],
  ['Arbitrase dan Penyelesaian Sengketa Alternatif', 'Pilihan penyelesaian yang praktis melalui arbitrase, mediasi, dan mekanisme alternatif lainnya.'],
  ['Korporasi dan Komersial', 'Pendampingan hukum korporasi dan transaksi yang selaras dengan kebutuhan usaha.'],
  ['Perizinan Usaha', 'Pendampingan pendirian perusahaan, perizinan, dan pemenuhan ketentuan regulator.'],
  ['Ketenagakerjaan', 'Nasihat terkait hubungan kerja, kebijakan perusahaan, dan pencegahan sengketa.'],
  ['Keimigrasian', 'Dukungan hukum untuk kebutuhan keimigrasian perusahaan dan mobilitas tenaga kerja lintas negara.'],
]

const team = [
  ['Didi Saeful Bahri, S.H.', 'Rekan Pengelola', 'didi-saeful-bahri.webp', 'didi-saeful-bahri'],
  ['Sandi Masdiyono, S.H., M.H.', 'Rekan', 'sandi-masdiyono.webp', 'sandi-masdiyono'],
  ['Muhammad Dhio Saputra, S.H.', 'Associate Senior', 'muhammad-dhio-saputra.webp', 'muhammad-dhio-saputra'],
]

const collaborations = [
  ['Cowell — PT Cowell Development Tbk.', 'cowell.webp'],
  ['Blue Pay dan Blue Mart', 'blue-pay.webp'],
  ['Askara Technology', 'askara-technology.webp'],
  ['Lexington Residence', 'lexington-residence.webp'],
  ['PT Hasurat Abadi', 'hasurat-abadi.webp'],
  ['Lippo Malls', 'lippo-malls.webp'],
  ['PT Bumi Suyarna Resources', 'bumi-suyarna-resources.png'],
]

const CONTACT_EMAIL = 'info@mbnp.co.id'
const WHATSAPP_URL = 'https://wa.me/6287777102030?text=Halo%20MBNP%20at%20Law%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20hukum.'
const publicAsset = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`

const newsTopics = {
  all: ['Semua topik', '(hukum OR regulasi OR perusahaan OR bisnis) sourcecountry:Indonesia'],
  corporate: ['Korporasi', '("hukum perusahaan" OR korporasi OR merger OR akuisisi) sourcecountry:Indonesia'],
  disputes: ['Sengketa', '(litigasi OR arbitrase OR sengketa) sourcecountry:Indonesia'],
  employment: ['Ketenagakerjaan', '("hukum ketenagakerjaan" OR ketenagakerjaan OR "hubungan industrial") sourcecountry:Indonesia'],
  investment: ['Investasi', '(investasi OR perizinan OR BKPM) sourcecountry:Indonesia'],
}

const fallbackNews = [
  {
    title: 'Basis Data Peraturan Perundang-undangan Indonesia',
    url: 'https://peraturan.bpk.go.id/',
    domain: 'peraturan.bpk.go.id',
    sourcecountry: 'Indonesia',
    fallback: true,
  },
  {
    title: 'Informasi regulasi sektor jasa keuangan',
    url: 'https://www.ojk.go.id/id/berita-dan-kegiatan/Pages/default.aspx',
    domain: 'ojk.go.id',
    sourcecountry: 'Indonesia',
    fallback: true,
  },
  {
    title: 'Siaran pers investasi dan perizinan',
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
  ['home', 'Beranda', './index.html'],
  ['about', 'Tentang Kami', './about.html'],
  ['expertise', 'Layanan', './expertise.html'],
  ['collaborations', 'Kolaborasi', './collaborations.html'],
  ['people', 'Tim Kami', './people.html'],
  ['insights', 'Wawasan', './insights.html'],
  ['contact', 'Kontak', './contact.html'],
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
      <a className="logo" href="./index.html" aria-label="Beranda MBNP at Law">
        <img src={publicAsset('mbnp-brandmark-white.svg')} alt="Masdiyono, Bahri, Narayana & Partners" onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.parentElement.classList.add('logo-missing') }} />
        <span className="logo-fallback" aria-hidden="true">MBNP <small>at Law</small></span>
      </a>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'}>
        {open ? 'Tutup' : 'Menu'}
      </button>
      <nav className={open ? 'open' : ''} aria-label="Navigasi utama">
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
        <a className="footer-social" href="https://www.instagram.com/mbnplaw/" target="_blank" rel="noreferrer" aria-label="Kunjungi Instagram MBNP at Law">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="instagram-dot" cx="17.5" cy="6.5" r="1" /></svg>
          <span>Instagram</span>
        </a>
      </div>
      <p>© {new Date().getFullYear()} MBNP at Law. Hak cipta dilindungi.</p>
    </footer>
  )
}

function WhatsAppBubble() {
  return (
    <a className="whatsapp-bubble" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Hubungi MBNP melalui WhatsApp">
      <span className="whatsapp-label">Hubungi kami</span>
      <span className="whatsapp-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32">
          <path d="M26.7 5.3A15 15 0 0 0 3.1 23.4L1 31l7.8-2a15 15 0 0 0 7.2 1.8h.1A15 15 0 0 0 26.7 5.3Zm-10.6 23a12.5 12.5 0 0 1-6.4-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.5 12.5 0 1 1 16.1 28.3Zm6.9-9.4c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.2.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-2.2-1.1-3.7-2-5.2-4.5-.4-.7.4-.7 1.1-2.2.1-.3.1-.6 0-.8-.1-.2-.8-2-1.2-2.7-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.8.1-1.1.5-.4.4-1.5 1.5-1.5 3.7s1.6 4.3 1.8 4.6c.2.3 3.1 4.8 7.6 6.7 2.8 1.2 3.9 1.3 5.3 1.1.9-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z" />
        </svg>
      </span>
    </a>
  )
}

const guideMenus = [
  { id: 'services', label: 'Layanan hukum', title: 'Pilih bidang layanan', choices: services.map(([label, answer]) => ({ id: label, label, answer })), footerLink: ['./expertise.html', 'Lihat seluruh layanan'] },
  { id: 'team', label: 'Tim MBNP', title: 'Pilih profil profesional', choices: team.map(([name, role, , slug]) => ({ id: slug, label: name, answer: `${role} MBNP at Law.`, href: `./profile.html?person=${slug}`, link: 'Buka profil' })), footerLink: ['./people.html', 'Lihat seluruh tim'] },
  { id: 'collaborations', label: 'Kolaborasi', title: 'Pilih nama untuk melihat informasi kolaborasi', choices: collaborations.map(([name]) => ({ id: name, label: name, answer: `${name} tercantum dalam jaringan kolaborasi MBNP at Law.` })), footerLink: ['./collaborations.html', 'Lihat halaman kolaborasi'] },
  { id: 'consultation', label: 'Cara berkonsultasi', title: 'Pilih cara menghubungi MBNP', choices: [
    { id: 'whatsapp', label: 'WhatsApp', answer: 'Mulai percakapan dengan tim MBNP melalui WhatsApp.', href: 'https://wa.me/6287777102030?text=Halo%20MBNP%20at%20Law%2C%20saya%20ingin%20berkonsultasi.', link: 'Buka WhatsApp', external: true },
    { id: 'contact-form', label: 'Formulir kontak', answer: 'Sampaikan kebutuhan umum melalui formulir pada halaman kontak.', href: './contact.html', link: 'Buka halaman kontak' },
    { id: 'email', label: 'Surel', answer: 'Kirim surel ke info@mbnp.co.id.', href: 'mailto:info@mbnp.co.id', link: 'Tulis surel' },
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
        <section className="guide-panel" aria-label="Panduan informasi MBNP">
          <div className="guide-heading">
            <div><p className="eyebrow">Panduan informasi</p><h2>{selectedMenu?.title || 'Bagaimana kami dapat membantu?'}</h2></div>
            <button className="guide-close" type="button" onClick={() => setOpen(false)} aria-label="Tutup panduan">{'×'}</button>
          </div>
          <p className="guide-note">{topic ? 'Pilih salah satu opsi untuk melihat informasi terkait.' : 'Pilih topik untuk membuka pilihan yang sesuai.'}</p>
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
            <p>Perlu bantuan lebih lanjut?</p>
            <a href="https://wa.me/6287777102030?text=Halo%20MBNP%20at%20Law%2C%20saya%20ingin%20berbicara%20dengan%20tim." target="_blank" rel="noreferrer">Lanjutkan ke WhatsApp <Arrow /></a>
          </div>
          <small className="guide-disclaimer">Panduan ini memuat informasi umum dan bukan nasihat hukum.</small>
        </section>
      )}
      <button className="guide-trigger" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span className="guide-trigger-icon" aria-hidden="true">{open ? '×' : '?'}</span>
        <span>{open ? 'Tutup panduan' : 'Panduan MBNP'}</span>
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
        <a className="team-card" href={`./profile.html?person=${slug}`} key={name} aria-label={`Lihat profil ${name}`}>
        <img src={`./assets/${image}`} alt={`Foto ${name}`} loading="lazy" />
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
  if (!date || Number.isNaN(date.getTime())) return 'Sumber resmi'
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(date)
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
      {status === 'fallback' && <p className="news-notice" role="status">Berita langsung sedang tidak tersedia. Silakan kunjungi sumber resmi berikut untuk memperoleh informasi hukum dan regulasi Indonesia.</p>}
      <div className="news-grid">
        {articles.map((article, index) => (
          <a className="news-card" href={article.url} target="_blank" rel="noreferrer" key={`${article.url}-${index}`}>
            <div className="news-image">
              <img src={topicImages[index % topicImages.length]} alt="" loading="lazy" />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="news-card-copy">
              <p className="news-meta"><span>{article.domain || article.sourcecountry || 'Sumber berita'}</span><span>{displayNewsDate(article.seendate)}</span></p>
              <h3>{article.title}</h3>
              <span className="news-read">Baca berita selengkapnya <Arrow /></span>
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
          <p className="eyebrow">Konsultan hukum independen · Jakarta</p>
          <h1>Pendampingan hukum yang jelas untuk keputusan penting.</h1>
          <p>Dukungan hukum yang strategis dan praktis bagi perusahaan dalam menghadapi dinamika usaha di Indonesia.</p>
          <div className="hero-actions">
            <a className="button light-button" href="./about.html">Kenali MBNP <Arrow /></a>
            <a className="hero-text-link" href="./expertise.html">Lihat layanan <Arrow /></a>
          </div>
        </div>
        <div className="hero-caption"><span>Jakarta</span><span>Indonesia · Mengutamakan tujuan</span></div>
      </section>

      <section className="section intro-grid">
        <p className="eyebrow">Tentang firma</p>
        <div>
          <h2>Memahami Indonesia. Mengerti kebutuhan usaha.</h2>
          <p className="lead">Masdiyono Bahri Novriama and Partners at Law adalah firma hukum independen yang berkedudukan di Jakarta.</p>
          <a className="text-link" href="./about.html">Pendekatan kami <Arrow /></a>
        </div>
      </section>

      <section className="section home-pathways" aria-label="Jelajahi MBNP">
        <a className="pathway-card" href="./expertise.html">
          <img src="./assets/editorial-corporate.jpg" alt="Perencanaan hukum korporasi" />
          <div><p className="eyebrow">Layanan kami</p><h2>Nasihat hukum yang memahami kebutuhan komersial.</h2><span>Lihat bidang layanan <Arrow /></span></div>
        </a>
        <a className="pathway-card" href="./people.html">
          <img src="./assets/editorial-about-firm.jpg" alt="Para profesional hukum berdiskusi" />
          <div><p className="eyebrow">Tim kami</p><h2>Kenali para profesional di balik layanan kami.</h2><span>Kenali tim MBNP <Arrow /></span></div>
        </a>
      </section>

      <section className="section insights-preview">
        <div className="section-heading">
          <div><p className="eyebrow">Wawasan terkini</p><h2>Perkembangan hukum dan bisnis yang perlu diketahui.</h2></div>
          <a className="text-link" href="./insights.html">Lihat semua wawasan <Arrow /></a>
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
      <PageIntro eyebrow="Tentang MBNP" title="Nasihat praktis dengan tujuan yang jelas." text="Kami memadukan pemahaman hukum Indonesia dengan wawasan atas keputusan komersial yang dihadapi klien." />
      <section className="section image-copy">
        <img src="./assets/editorial-about-firm.jpg" alt="Para profesional hukum berkolaborasi di kantor Jakarta" />
        <div>
          <p className="eyebrow">Pendekatan kami</p><h2>Mengutamakan kejelasan.</h2>
          <p>Layanan kami disusun secara strategis, praktis, efisien, terarah, dan bernilai. Kami mendengarkan kebutuhan klien, berkomunikasi secara terbuka, serta menyusun nasihat hukum dengan berorientasi pada hasil yang dibutuhkan.</p>
          <p>Dari kantor kami di Jakarta, kami mendampingi perusahaan nasional dan internasional dalam perkara sengketa, transaksi, perizinan, ketenagakerjaan, dan keimigrasian.</p>
        </div>
      </section>
      <section className="section soft-section">
        <p className="eyebrow">Prinsip kami</p>
        <div className="principle-grid">
          {['Keunggulan profesional', 'Integritas dan transparansi', 'Strategi yang berorientasi pada klien'].map((item, index) => (
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
      <PageIntro eyebrow="Layanan kami" title="Keahlian hukum yang selaras dengan kebutuhan usaha." text="Nasihat hukum yang mempertimbangkan pokok persoalan, konteks komersial, dan hasil yang ingin dicapai." />
      <section className="expertise-visual">
        <img src="./assets/editorial-corporate.jpg" alt="Dokumen perencanaan hukum korporasi dan komersial" />
        <div><p className="eyebrow">Perspektif komersial</p><p>Setiap pendampingan dimulai dengan memahami kebutuhan di balik persoalan hukum.</p></div>
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
      <PageIntro eyebrow="Kolaborasi" title="Bersama membangun langkah ke depan." text="Kami menghargai hubungan profesional jangka panjang dan kolaborasi yang dilandasi kejelasan, ketanggapan, serta tujuan bersama." />
      <section className="section collaboration-page">
        <div className="collaboration-copy">
          <p className="eyebrow">Jaringan kolaborasi</p>
          <h2>Hubungan profesional yang dibangun dengan kepercayaan.</h2>
          <p>Setiap hubungan profesional dijalankan dengan menjaga kerahasiaan dan memahami konteks komersial yang melatarbelakangi setiap perkara.</p>
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
      <PageIntro eyebrow="Tim kami" title="Pengalaman untuk mendampingi Anda." text="Kenali para profesional MBNP. Pilih profil untuk melihat informasi dan bidang keahlian masing-masing." />
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
          <p className="eyebrow">Tim kami</p>
          <h1>{name}</h1>
          <p className="profile-role">{role}</p>
          <p className="profile-summary">Biografi profesional {name} sedang disiapkan dan akan ditampilkan setelah mendapat persetujuan.</p>
          <a className="text-link light-link" href={`mailto:${CONTACT_EMAIL}`}>Hubungi MBNP <Arrow /></a>
        </div>
      </section>

      <section className="section profile-content">
        <div className="profile-main">
          <p className="eyebrow">Biografi</p>
          <h2>Informasi profil sedang disiapkan.</h2>
          <p>Halaman ini disiapkan untuk memuat biografi yang telah disetujui, bidang keahlian, pengalaman terpilih, pendidikan, keanggotaan profesi, dan kontak masing-masing.</p>
          <div className="profile-detail-grid">
            {['Bidang keahlian', 'Pengalaman terpilih', 'Pendidikan dan keanggotaan profesi'].map((label) => (
              <div key={label}><span>{label}</span><p>Informasi akan ditambahkan setelah dikonfirmasi.</p></div>
            ))}
          </div>
        </div>
        <aside className="business-card-panel">
          <p className="eyebrow">Kartu nama digital</p>
          <h2>Simpan informasi kontak.</h2>
          <p>Kartu nama digital dapat diunduh setelah nomor telepon, alamat surel, jabatan, dan desain final disetujui.</p>
          <button className="button disabled-button" type="button" disabled>Unduh kartu nama <span>Segera hadir</span></button>
          <small>Disiapkan dalam format PDF dan vCard.</small>
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
      <PageIntro eyebrow="Wawasan" title="Memahami perkembangan hukum terkini." text="Pilihan berita terbaru mengenai hukum, regulasi, dan bisnis di Indonesia dari berbagai sumber berita." />
      <section className="section insights-section">
        <div className="insights-toolbar">
          <div>
            <p className="eyebrow">Berita terkini</p>
            <h2>Ikuti perkembangan terbaru.</h2>
          </div>
          <div className="topic-filters" aria-label="Saring berita berdasarkan topik">
            {Object.entries(newsTopics).map(([id, [label]]) => (
              <button type="button" className={topic === id ? 'active' : ''} aria-pressed={topic === id} onClick={() => setTopic(id)} key={id}>{label}</button>
            ))}
          </div>
        </div>
        <NewsCards topic={topic} limit={9} />
        <div className="news-disclosure">
          <p><strong>Tentang berita ini</strong></p>
          <p>Judul berita diperoleh dari indeks berita GDELT dan tautannya mengarah ke situs penerbit asli. MBNP tidak bertanggung jawab atas isi situs pihak ketiga. Informasi ini bukan merupakan nasihat hukum. Berita diperbarui secara otomatis setiap 30 menit.</p>
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
    const subject = `Pertanyaan melalui situs web — ${form.get('service') || 'Konsultasi umum'}`
    const body = [
      `Nama: ${form.get('name')}`,
      `Alamat surel: ${form.get('email')}`,
      `Nomor telepon: ${form.get('phone') || '-'}`,
      `Bidang konsultasi: ${form.get('service') || 'Konsultasi umum'}`,
      '',
      'Uraian kebutuhan:',
      form.get('message'),
    ].join('\n')
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    setFormStatus(`Draf Gmail untuk ${CONTACT_EMAIL} telah dibuka.`)
  }

  return (
    <>
      <PageIntro eyebrow="Kontak" title="Mari berdiskusi." text="Sampaikan kebutuhan Anda. Tim kami akan membantu menentukan langkah selanjutnya." />
      <section className="section contact-grid">
        <div className="contact-information">
          <div>
            <p className="eyebrow">Kunjungi kami</p><h2>Jakarta</h2>
            <p>Menara Cakrawala, 12th Floor, Unit 5A<br />Jl. M.H. Thamrin No. Kav. 9<br />Menteng, Central Jakarta 10340</p>
            <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Menara+Cakrawala+Jl.+M.H.+Thamrin+No.+Kav.+9+Jakarta" target="_blank" rel="noreferrer">Buka peta <Arrow /></a>
          </div>
          <div className="direct-contact">
            <p className="eyebrow">Informasi kontak</p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">+62 877 7710 2030</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={openEmailDraft}>
          <div className="form-heading"><p className="eyebrow">Kirim pertanyaan</p><h2>Apa yang dapat kami bantu?</h2></div>
          <div className="form-row">
            <label>Nama lengkap<input name="name" type="text" autoComplete="name" required placeholder="Nama Anda" /></label>
            <label>Alamat surel<input name="email" type="email" autoComplete="email" required placeholder="nama@perusahaan.com" /></label>
          </div>
          <div className="form-row">
            <label>Nomor telepon<input name="phone" type="tel" autoComplete="tel" placeholder="+62" /></label>
            <label>Bidang yang ingin dikonsultasikan
              <select name="service" defaultValue="">
                <option value="">Konsultasi umum</option>
                {services.map(([service]) => <option key={service} value={service}>{service}</option>)}
              </select>
            </label>
          </div>
          <label>Uraian kebutuhan<textarea name="message" rows="5" required placeholder="Jelaskan secara singkat kebutuhan Anda." /></label>
          <div className="form-submit">
            <button className="button" type="submit">Kirim melalui Gmail <Arrow /></button>
            <p>Pesan akan dibuka sebagai draf Gmail yang ditujukan ke {CONTACT_EMAIL}.</p>
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
      <p className="eyebrow">Mari berdiskusi</p><h2>Bagaimana kami dapat membantu Anda?</h2>
      <a className="button light-button" href="./contact.html">Hubungi tim kami <Arrow /></a>
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
